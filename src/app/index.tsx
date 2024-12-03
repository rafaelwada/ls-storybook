import React, { ReactElement } from "react";
import { FC } from "react";
import Grid from "@mui/material/Grid2"
import Link from "next/link";
import { Typography } from "@mui/material";
import AppLayout from "./layout/AppLayout";
import { NavCard, NavCardActions } from "./styles";

interface ISectionData {
  name: string;
  href: string;
  imgSrc: string;
}

const Section = ({ name, href, imgSrc }: ISectionData): ReactElement => {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <Link href={href} style={{ textDecoration: 'none' }}>
        <NavCard>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt={`${name}-image`} style={{ height: '300px' }} />
          <NavCardActions>
            <Typography>
              {name}
            </Typography>
          </NavCardActions>
        </NavCard>
      </Link>
    </Grid>
  )
}

const sectionData: Array<ISectionData> = [{
  name: 'Books',
  href: '/books',
  imgSrc: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Melkor-Morgoth-and-Ungoliant-in-Lord-of-the-Rings.jpg',
}, {
  name: 'Movies',
  href: '/movies',
  imgSrc: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/44154a70-ac47-4ac7-a2d4-01a57609dec2/f74e6342e0df88f36d9ba29ab43bce6dbf346ee6.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
}, {
  name: 'Characters',
  href: '/characters',
  imgSrc: 'https://api.triviacreator.com/v1/imgs/quiz/cover-f5f90681-c48f-48a0-a431-8096eecf26bc.png',
}, {
  name: 'Chapters',
  href: '/chapters',
  imgSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07064f06-a11c-4d2b-af70-31d4abb11a48/d84gqh8-74b3388c-a039-4928-a7c7-6d73fbd6e002.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MDY0ZjA2LWExMWMtNGQyYi1hZjcwLTMxZDRhYmIxMWE0OFwvZDg0Z3FoOC03NGIzMzg4Yy1hMDM5LTQ5MjgtYTdjNy02ZDczZmJkNmUwMDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-BuzflJKSHuURFOW5JLZfSOfkbKuyLPUJ8v6lOAQzx8',
}, {
  name: 'Quotes',
  href: '/quotes',
  imgSrc: 'https://i.kym-cdn.com/entries/icons/facebook/000/002/144/You_Shall_Not_Pass!_0-1_screenshot.jpg',
}, {
  name: 'LOTR Project',
  href: 'http://lotrproject.com/',
  imgSrc: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/460426111_3443747732436711_6422645452678540502_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGfcJspx2xxxY_-1m4HZxKz1MkPk-jiP4vUyQ-T6OI_i6xbdfPdvC7uBpHRReKL6spRkJDnZ_HmG0bdy9FFB_AX&_nc_ohc=6MeQK5sNdhoQ7kNvgH5B0wy&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=AyggbA-mC6Gy4ngb_RkuuTm&oh=00_AYAeMJXLHHfcoBnaDXdK-Ke_gLw9znuHdqUWVQlBuvA5Gw&oe=67545779',
}]

const Home: FC = () => {
  return (
    <AppLayout headerName="Home" displaybackButton={false}>
      <Grid container p={2} spacing={2}>
        {sectionData.map((s) => { return Section(s) })}
      </Grid>
    </AppLayout>
  )
}

export default Home