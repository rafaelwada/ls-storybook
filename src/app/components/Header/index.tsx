import { FC } from "react";
import { HeaderGrid, HeaderTitleGrid, TitleTypography } from "./styles";
import LotrLogo from "@/public/lotr-logo.svg";

const Logo = () => {
  // eslint-disable-next-line @next/next/no-img-element
  return (<img src={LotrLogo.src} style={{ position: 'absolute', width: '250px' }} alt="lord of the rings logo" />)
}

interface Props {
  headerName: string
}

const Header: FC<Props> = ({ headerName }) => {
  return (
    <HeaderGrid>
      <Logo />
      <HeaderTitleGrid>
        <TitleTypography variant="h6">
          {headerName}
        </TitleTypography>
      </HeaderTitleGrid>
    </HeaderGrid>
  )
}

export default Header