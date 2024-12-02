import { FC } from "react";
import { FooterGrid, FooterTypography } from "./styles";

const Footer: FC = () => {
    return <FooterGrid>
        <FooterTypography variant="caption">
            Learning Session - Storybook/Chromatic visual regression testing
        </FooterTypography>
    </FooterGrid>
}

export default Footer