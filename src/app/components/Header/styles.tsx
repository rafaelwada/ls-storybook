import { Grid2, Typography } from "@mui/material";
import styled from "styled-components";

export const HeaderGrid = styled(Grid2)(() => ({
  alignItems: 'center',
  backgroundColor: '#1d1717',
  bottom: 0,
  display: 'flex',
  height: '64px',
  textAlign: 'center',
}))

export const HeaderTitleGrid = styled(Grid2)(() => ({
  justifyContent: 'center',
  width: '100%'
}))

export const TitleTypography = styled(Typography)(() => ({
  color: 'white',
}))