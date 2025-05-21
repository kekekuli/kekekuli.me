'use client'

import IntroButton from "@/components/basicButton";

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
          <p className="text-[24px] leading-[1.5] text-foreground/60">
            This web contains the Implementions of UI design form{" "}
            <strong>Figma</strong>. This web is also implemented from{" "}
            <a
              href="https://www.figma.com/community/file/946944225031473055/personal-portfolio-website-template"
              className="text-blue-400"
            >
              here
            </a>
            .<div className="h-[2px] bg-secondary/35"></div>
            <div className="text-sm font-thin">
              Not much to see yet, but I’m building fast. Give it a day — this
              place changes quickly.
            </div>
          </p>
          <div className="flex gap-3 justify-start text-foreground">
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
            <IntroButton
              variant="outlined"
              sx={{
                backgroundColor: "white",
              }}
            >
              Contact
            </IntroButton>
          </div>
        </div>
      </span>
      <span
        className="flex-1 bg-secondary bg-[url(/placeholder.png)] bg-contain max-w-[720px] max-h-[630px] overflow-hidden"
        style={{
          maskImage: "url(/mask-block.svg)",
          maskRepeat: "no-repeat",
        }}
      ></span>
    </div>
  );
}
