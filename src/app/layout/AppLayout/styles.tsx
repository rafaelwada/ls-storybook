import { Grid2, Button } from "@mui/material";
import styled from "styled-components";

export const AppGrid = styled(Grid2)(() => ({
  backgroundColor: '#3b3333',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between'
}))

export const BackButton = styled(Button)(() => ({
  width: '160px',
  marginLeft: '16px',
  backgroundColor: '#1d1717',
  textTransform: 'none'
}))