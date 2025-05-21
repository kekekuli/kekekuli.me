"use client";

import { TextField, FormControl, styled } from "@mui/material";
import SendButton from "@/components/basicButton"

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
  return (
    <div className="py-[50px] flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold leading-[1.5]">Contact</h1>
        <div className="w-[100px] h-[4px] bg-secondary mt-2 rounded-full" />
      </div>
      <FormControl className="gap-6 w-[520px]">
        <div className="flex flex-col gap-2">
          <label className="h-[22px]">Name</label>
          <ContactTextField></ContactTextField>
        </div>
        <div className="flex flex-col gap-2">
          <label className="h-[22px]">Email</label>
          <ContactTextField></ContactTextField>
        </div>
        <div className="flex flex-col gap-2">
          <label className="h-[22px]">Message</label>
          <TextField
            multiline
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
          ></TextField>
        </div>
        <SendButton sx={{
          backgroundColor: "var(--color-secondary)",
          border: "0",
          "&:hover": {
            border: "0",
          },
          width: "89px",
          height: "43px",
          paddingBlock: "4px",
          fontWeight: "600"
        }} className="self-end">Send</SendButton>
      </FormControl>
   </div>
  );
}
