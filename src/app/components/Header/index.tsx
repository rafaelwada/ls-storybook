import { FC } from "react";
import { HeaderGrid, TitleTypography } from "./styles";
import LotrLogo from "../../../../public/lotr-logo.svg";
import { Grid2 } from "@mui/material";

const Logo = () => {
    return (<img src={LotrLogo.src} style={{ position: 'absolute', width: '250px' }}/>)
}

const Footer: FC = () => {
    return <HeaderGrid>
        <Logo />
        <Grid2 sx={{ justifyContent: 'center', width: '100%'}}>
            <TitleTypography variant="h6">
                Visualization
            </TitleTypography>
        </Grid2>
    </HeaderGrid>
}

export default Footer