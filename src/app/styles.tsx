import { Card, CardActionArea } from "@mui/material";
import styled from "styled-components";

export const NavCard = styled(Card)(() => ({
  textAlign: 'center',
  backgroundColor: 'beige',
  justifyItems: 'center'
}))

export const NavCardActions = styled(CardActionArea)(() => ({
  backgroundColor: 'white',
  padding: '8px'
}))
