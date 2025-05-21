import { Button } from "@mui/material"
import { styled } from '@mui/material/styles'

const BasicButton = styled(Button)(() => ({
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

export default BasicButton