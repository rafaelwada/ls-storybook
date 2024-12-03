import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Box } from "@mui/material";
import {  useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { AppGrid, BackButton } from "./styles";

const AppLayout: FC<PropsWithChildren & { headerName: string, displaybackButton: boolean }> = ({ children, headerName, displaybackButton }) => {
  const router = useRouter();

  return (
    <AppGrid>
      <Header headerName={headerName} />
      <Box p={2} minHeight={'calc(100vh - 64px - 37px - 37px)'}>
        {displaybackButton ? <BackButton onClick={async () => await router.push('/')} variant="contained">&lt; Back to home</BackButton> : null}
        {children}
      </Box>
      <Footer />
    </AppGrid>
  )
}

export default AppLayout
