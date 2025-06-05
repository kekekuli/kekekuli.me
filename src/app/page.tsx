"use client";

import IntroButton from "@/components/basicButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex pl-[120px] h-[650px] gap-10 justify-between">
      <span className="lex-1 py-[100px] max-w-[486px]">
        <h4 className="text-secondary/60 text-[20px] font-bold">
          Web Developer
        </h4>
        <div className="flex flex-col gap-8 pt-4">
          <h1 className="text-[64px] leading-[1.2] font-bold">
            Hello, My name is kekekuli!
          </h1>
          <div>
            <p className="text-[24px] leading-[1.5] text-foreground/60">
              This web contains the Implementions of UI design form{" "}
              <strong>Figma</strong>.
            </p>
            <span className="text-sm font-thin leading-tight">
              Not much to see yet, but I’m building fast. Give it a day — this
              place changes quickly.
            </span>
          </div>
          <div className="flex gap-3 justify-start text-foreground">
            <Link href="/projects">
              <IntroButton
                variant="outlined"
                sx={{
                  backgroundColor: "var(--color-secondary)",
                  border: "0",
                  "&:hover": {
                    border: "0",
                  },
                }}
              >
                Projects
              </IntroButton>
            </Link>
            <Link href="/contact">
              <IntroButton
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                }}
              >
                Contact
              </IntroButton>
            </Link>
          </div>
        </div>
      </span>
      <span
        className="
          flex-1
          bg-secondary
          bg-[url(/placeholder.png)]
          bg-contain
          max-w-[720px]
          max-h-[630px]
          overflow-hidden
          [mask-image:url(/mask-block.svg)]
          [mask-repeat:no-repeat]"
      ></span>
    </div>
  );
}
