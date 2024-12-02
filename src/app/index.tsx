import React, { ReactElement } from "react";
import { FC } from "react";
import Grid from "@mui/material/Grid2"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";
import { Card, Typography } from "@mui/material";

interface ISectionData {
  name: string;
  href: string;
  imgSrc:string;
}

const Section = ({ name, href, imgSrc }: ISectionData): ReactElement => {
  return <Grid size={{ xs: 6, sm: 4, md: 3 }}>
    <Link href={href} onClick={() => {console.log('clicked: ', name)}} style={{textDecoration: 'none'}}>
      <Card sx={{textAlign: 'center' }}>
        <Typography sx={{textTransform: 'none'}}>
          {name}
        </Typography>
      </Card>
    </Link>
</Grid>
}

const sectionData: Array<ISectionData> = [{
  name: 'Books',
  href: '/books',
  imgSrc: '',
},{
  name: 'Movies',
  href: '/movies',
  imgSrc: '',
},{
  name: 'Characters',
  href: '/characters',
  imgSrc: '',
},{
  name: 'Chapter',
  href: '/chapter',
  imgSrc: '',
},{
  name: 'Quote',
  href: '/quote',
  imgSrc: '',
}]

const Home: FC = () => {
  return <Grid sx={{ backgroundColor: '#3b3333', display: 'flex', flexDirection:'column', height: '100vh', justifyContent: 'space-between' }}>
      <Header />
      <Grid container sx={{ padding: 2 }} spacing={2}>
        {sectionData.map((s) => {return Section(s)})}
      </Grid>
      <Footer />
    </Grid>

}

export default Home