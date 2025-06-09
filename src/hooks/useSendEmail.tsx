import { useState } from "react";
import { z } from "zod";
import DOMPurify from "dompurify";

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

interface UseSendEmailResult {
  loading: boolean;
  error: string | null;
  success: boolean;
  sendEmail: (params: SendEmailParams) => Promise<void>;
}

export function useSendEmail(isDevMode = false): UseSendEmailResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function sendEmail({ name, email, message }: SendEmailParams) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Empty check
      if (!name || !email || !message) {
        throw new Error("Missing fields.");
      }

      // zod schema validation
      const contactSchema = z.object({
        name: z.string().min(1, "Name is required").max(50, "Name is too long"),
        email: z
          .string()
          .email("Invalid email address")
          .max(100, "Email is too long"),
        message: z
          .string()
          .min(1, "Message is required")
          .max(500, "Message is too long"),
      });
      const result = contactSchema.safeParse({ name, email, message });
      if (!result.success) {
        throw new Error(
          result.error.errors[0]?.message || "Validation failed."
        );
      }

      // dompurify sanitization
      const cleanName = DOMPurify.sanitize(name);
      const cleanEmail = DOMPurify.sanitize(email);
      const cleanMessage = DOMPurify.sanitize(message);

      if (isDevMode) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

        console.log("Sending email in development mode:");
        console.log("Name:", cleanName);
        console.log("Email:", cleanEmail);
        console.log("Message:", cleanMessage);

        setSuccess(true);
        setLoading(false);
        return;
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.error || "Failed to send email.");
      }
    } catch (e: any) {
      setError(e.message || "Validation error.");
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, success, sendEmail };
}
