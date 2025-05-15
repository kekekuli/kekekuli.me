'use client'

import { Button } from "@mui/material"
import { styled } from '@mui/material/styles'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const IntroButton = styled(Button)(() => ({
  boxShadow: 'none',
  width: "117px",
  fontSize: '18px',
  lineHeight: '1.5',
  paddingInline: '12px',
  paddingBlock: '8px',
  textTransform: 'none',
  borderRadius: '8px',
  color: 'black',
  fontWeight: 500,
  border: '1px solid color-mix(in oklab, var(--foreground) 40%, transparent)',
  '&:hover': {
    border: '1px solid var(--foreground)',
    boxShadow: '0 2px 8px color-mix(in oklab, var(--foreground) 20%, transparent)',
  }
}))

export default function Home() {
  return (
    <div className="bg-secondary-background flex justify-center items-center py-4 h-full">
      <div className="bg-background w-[1440px] relative pb-6 rounded-4xl overflow-hidden border-0 shadow-[0_2px_8px_color-mix(in_oklab,_var(--foreground)_20%,_transparent)]">
        <header>
          <div className="flex justify-between px-[120px] w-full z-10 text-[18px] leading-[1.8] py-3 absolute top-0">
            <div>kekekuli</div>
            <ul className="flex gap-12">
              {["Home", "About", "Contact"].map((item, index) => (
                <li key={index} className="px-4 py-2 inline-block hover:bg-secondary/30 rounded-xl hover:shadow-[0_2px_8px_color-mix(in_oklab,_var(--foreground)_20%,_transparent)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </header>
        <main className="max-w-[1440px]">
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
        </main>
        <footer>
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

      </div>
    </div>
  )
}
