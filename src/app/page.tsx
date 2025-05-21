'use client'

import IntroButton from "@/components/basicButton";

export default function Home() {
  return (
          <div className="flex pl-[120px] h-[650px] gap-10 justify-between">
            <span className="lex-1 py-[100px] max-w-[486px]">
              <h4 className="text-secondary/60 text-[20px] font-bold">Web Developer</h4>
              <div className="flex flex-col gap-8 pt-4">
                <h1 className="text-[64px] leading-[1.2] font-bold">Hello, My name is kekekuli!</h1>
                <p className="text-[24px] leading-[1.5] text-foreground/60">
                  Short text with details about you, what you do or your professional career. You can add more information on the about page.
                </p>
                <div className="flex gap-3 justify-start text-foreground">
                  <IntroButton variant="outlined" sx={{
                    backgroundColor: "var(--color-secondary)",
                    border: '0',
                    '&:hover': {
                      border: '0'
                    }
                  }}>Projects</IntroButton>
                  <IntroButton variant="outlined" sx={{
                    backgroundColor: "white",
                  }}>Contact</IntroButton>
                </div>
              </div>
            </span>
            <span className="flex-1 bg-secondary bg-[url(/placeholder.png)] bg-contain max-w-[720px] max-h-[630px] overflow-hidden" style={{
              maskImage: "url(/mask-block.svg)",
              maskRepeat: "no-repeat",
            }}></span>
          </div>
 
  )
}
