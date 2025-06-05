import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function Footer() {
  const icons = [
    { Icon: GitHubIcon, href: "https://github.com/kekekuli", desc: "GitHub" },
    {
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/qiang-liu-b8061027a/",
      desc: "LinkedIn",
    },
    { Icon: EmailIcon, href: "/contact", desc: "Email" }, // 修改为路由
  ];

  return (
    <footer className="mb-3">
      <div className="flex justify-center mt-4 flex-col items-center">
        <div className="flex items-start justify-center gap-6">
          {icons.map(({ Icon, href, desc }, index) =>
            desc === "Email" ? (
              <Link key={index} href={href} aria-label={desc}>
                <Icon sx={{ fontSize: "3rem", p: "0.25rem" }} />
              </Link>
            ) : (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={desc}
              >
                <Icon sx={{ fontSize: "3rem", p: "0.25rem" }} />
              </a>
            ),
          )}
        </div>
        <div className="text-foreground/60 text-[16px] relative top-2">
          kekekuli 2025
        </div>
      </div>
    </footer>
  );
}
