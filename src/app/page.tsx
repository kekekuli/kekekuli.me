'use client'

import { Button } from "@mui/material"
import { styled } from '@mui/material/styles'

const IntroButton = styled(Button)(({ theme }) => ({
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
  border: '1px solid rgba(0, 0, 0, 0.4)',
  transition: 'border 0.2s ease-in-out',
  '&:hover': {
    border: '1px solid black',
  },
}))

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between px-[120px] fixed w-full z-10 text-[18px] leading-[1.8] py-3">
          <div>kekekuli</div>
          <ul className="flex gap-12">
            <li className="inline-block hover:bg-gray-200">Home</li>
            <li className="inline-block hover:bg-gray-200">About</li>
            <li className="inline-block hover:bg-gray-200">Contact</li>
          </ul>
        </div> 
      </header>
      <main className="max-w-[1440px]">
        <div className="flex pl-[120px] h-[650px] gap-10 justify-between">
          <span className="flex-1 py-[100px] max-w-[486px]">
            <h4 className="text-secondary/60 text-[20px] font-bold">Web Developer</h4>
            <div className="flex flex-col gap-8 pt-4">
              <h1 className="text-[64px] leading-[1.2] font-bold">Hello, My name is kekekuli!</h1>
              <p className="text-[24px] leading-[1.5] text-foreground/60">
                Short text with details about you, what you do or your professional career. You can add more information on the about page.
              </p>
              <div className="flex gap-3 justify-start text-foreground">
                <IntroButton variant="outlined" sx={{
                  backgroundColor: "var(--color-secondary)",
                }}>Projects</IntroButton>
                <IntroButton variant="outlined" sx={{
                  backgroundColor: "white",
                }}>Contact</IntroButton>
             </div>
            </div>
          </span>
          <span className="flex-1 bg-secondary bg-[url(/placeholder.png)] bg-contain max-w-[720px] max-h-[630px]" style={{
            maskImage: "url(/mask-block.svg)",
            maskRepeat: "no-repeat",
          }}>
            hhhh  
          </span>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}
