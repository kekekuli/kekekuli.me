"use client";

import React, { useState } from "react";
import { TextField, FormControl, styled } from "@mui/material";
import SendButton from "@/components/basicButton";
import { useSendEmail } from "@/hooks/useSendEmail";
import CircularProgress from "@mui/material/CircularProgress";

const borderConfig = {
  border: "1px solid var(--primary-border)",
  borderRadius: "8px",
  transition: "border-color 0.2s, box-shadow 0.2s ease",
};

const hoverConfig = {
  borderColor: "var(--hover-border)",
  boxShadow:
    "0 0 0 1px color-mix(in oklab, var(--shadow-border) 25%, transparent)",
};

const ContactTextField = styled(TextField)(() => ({
  height: "40px",
  backgroundColor: "white",
  "& .MuiInputBase-root": {
    height: "100%",
    padding: "0 12px",
  },
  "& .MuiInputBase-input": {
    height: "100%",
    padding: 0,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  "& .MuiOutlinedInput-notchedOutline": borderConfig,
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    hoverConfig,
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
}));

export default function Contact() {
  const { sendEmail, loading, error, success } = useSendEmail();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail({ name, email, message });
  };

  return (
    <div className="py-[50px] flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold leading-[1.5]">Contact</h1>
        <div className="w-[100px] h-[4px] bg-secondary mt-2 rounded-full" />
      </div>
      <form onSubmit={handleSubmit}>
        <FormControl className="gap-6 w-[520px]">
          <div className="flex flex-col gap-2">
            <label className="h-[22px]">Name</label>
            <ContactTextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="h-[22px]">Email</label>
            <ContactTextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="h-[22px]">Message</label>
            <TextField
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                height: "120px",
                backgroundColor: "white",
                "& .MuiInputBase-root": {
                  height: "100%",
                  overflow: "auto",
                  padding: "0.25em",
                  ...borderConfig,
                },
                "& .MuiInputBase-input": {
                  boxSizing: "border-box",
                  padding: "0",
                  lineHeight: "1.5",
                  alignSelf: "flex-start",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "0",
                },
                "&:hover .MuiInputBase-root": hoverConfig,
                "& .MuiInputBase-root.Mui-focused": {
                  borderColor: "black",
                },
              }}
              required
            />
          </div>
          <SendButton
            sx={{
              backgroundColor: "var(--color-secondary)",
              border: "0",
              "&:hover": {
                border: "0",
              },
              width: "89px",
              height: "43px",
              paddingBlock: "4px",
              fontWeight: "600",
            }}
            className="self-end"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "Send"}
          </SendButton>
          {success && (
            <div className="text-green-600 text-sm mt-2 text-center">
              Message sent!
            </div>
          )}
          {error && (
            <div className="text-red-600 text-sm mt-2 text-center">{error}</div>
          )}
        </FormControl>
      </form>
    </div>
  );
}