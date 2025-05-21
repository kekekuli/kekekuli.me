import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <footer className="mb-3">
      <div className="flex justify-center mt-4 flex-col items-center">
        <div className="flex items-start justify-center gap-6">
          {[GitHubIcon, LinkedInIcon, EmailIcon].map((Icon, index) => (
            <Icon key={index} sx={{ fontSize: "3rem", p: "0.25rem" }} />
          ))}
        </div>
        <div className="text-foreground/60 text-[16px] relative top-2">
          kekekuli 2025
        </div>
      </div>
    </footer>
  );
}
