import AppLayout from "@/app/layout/AppLayout"
import { FC } from "react"
import Page from "./Page"

const Books: FC = () => {
  return (
    <AppLayout headerName="Books" displaybackButton={true}>
      <Page />
    </AppLayout>
  )
}

export default Books