// Imports //
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardActionArea, CardMedia } from '@mui/material'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Twitter, Youtube, Instagram } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { SiBluesky } from 'react-icons/si'

import '../styles/profile.css'
import ProfileCard from './profile_components/profile_card'
import FriendsList from './profile_components/friends_list'
import OCPanel from './profile_components/oc_tab_panel'
import IllustPanel from './profile_components/illust_tab_panel'
import MiscPanel from './profile_components/misc_tab_panel'

// ----------------------------------------------
// ===== PROFILE TEXTUAL CONTENT / VARIABLES =====
// ----------------------------------------------

// Profile Card
const PROFILE_AVATAR_SRC = "src/assets/pfp.png";
const PROFILE_GIF_SRC = "https://web.archive.org/web/20091025150644im_/http://www.geocities.com/sillybug_lhudlok/icon_2/0801b.gif";
const PROFILE_NAME = "Sunset✨";
const PROFILE_USERNAME = "@SunsetSamu";
const PROFILE_JOIN_DATE = "Joined on April 2020";

// Friends list
const FRIENDS_LIST_DATA = [
  { Name: "Dubu 💜", 
    Avatar_src: "https://cataas.com/cat?2",
    username: "@dubu_jan6627", 
    link: "https://instagram.com/dubu_jan6627"
  },
  { Name: "Kiru 🌙", 
    Avatar_src: "https://cataas.com/cat?10",
    username: "@carlos.h.png", 
    link: "https://instagram.com/carlos.h.png"
  },
  { Name: "Fafi 💀", 
    Avatar_src: "https://cataas.com/cat?4",
    username: "@fanfanna_g", 
    link: "https://instagram.com/fanfanna_g"
  },
  { Name: "Maty 🌸", 
    Avatar_src: "https://cataas.com/cat?8",
    username: "@matth_the_carto...", 
    link: "https://instagram.com/matth_the_cartoonist_124"
  },
  { Name: "Rafa 🗿", 
    Avatar_src: "https://cataas.com/cat?9",
    username: "@raphael_unknown", 
    link: "https://instagram.com/"
  },
  { Name: "Mely ✨", 
    Avatar_src: "https://cataas.com/cat?7",
    username: "@melydoesart", 
    link: "https://instagram.com/melydoesart"
  },
];


// OCs info
const OC_DATA = [
  { name: "Samael (manguito)",
    birthdate_age: "undefined, 3200 BC",
    ethnicity: "angel",
    gender: "boy, He/Him",
    mbti: "INFP",
    colors: "Cyan, purple, gold",
    lore: "Samael is a fallen angel who traded his freedom with God in exchange for nothing more than finding his place in the world. He is a kind-hearted and gentle soul who is always willing to lend a hand to those in need.",
    image_src: "https://cataas.com/cat?5",
    page_link: "#",
  },

];

// Illustrations 

const ILLUST_DATA = [
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?11",
    link: "#",
  },
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?12",
    link: "#",
  },
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?13",
    link: "#",
  },
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?14",
    link: "#",
  },
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?15",
    link: "#",
  },
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?16",
    link: "#",
  },
  {
    title: "placeholder",
    date: "february 31, 2074",
    image: "https://cataas.com/cat?17",
    link: "#",
  },
];
// Misc content
const MISC_DATA = [
  {
    title: "Hello! This is a very large tittle that will take up a lot of space and will probably break the layout of the card",
    date: "May 23, 2087",
    text: "Hello world!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.",
    image_src: "https://cataas.com/cat?20",
    page_link: "#",
  },
  {
    title: "Hello!",
    date: "May 23, 2087",
    text: "Hello world!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.",
    image_src: "https://cataas.com/cat?21",
    page_link: "#",
  },
];

// Social media links
const BLUESKY_URL = "https://bsky.app/profile/sunsetsamu.bsky.social";
const TWITTER_URL = "https://x.com/SunsetSamu";
const INSTAGRAM_URL = "https://instagram.com/sunsetsamu";
const DISCORD_URL = "https://discord.gg/yWkaKKbVmn";
const YOUTUBE_URL = "https://youtube.com/@SunsetSamu";

// ----------------------------------------------
// ================ PROFILE PAGE ================
// ----------------------------------------------

// Background image
const BANNER_SRC = "https://cataas.com/cat?3";

// Wave SVG path
const wavesvg = "m 0,286.819 12,4.14763 c 12,4.14762 36,12.44288 60,12.44288 24,0 48,-8.29526 72,-13.81678 24,-5.62522 48,-8.21748 72,-9.69508 24,-1.3739 48,-1.3739 72,-2.7478 24,-1.47759 48,-4.06985 72,-6.92134 24,-2.8515 48,-5.44376 72,0 24,5.44375 48,19.44198 72,16.59049 24,-2.85149 48,-22.03425 72,-23.51184 24,-1.3739 48,15.21659 72,22.13794 24,6.81766 48,4.22539 72,8.29525 24,4.22539 48,15.11291 72,12.44288 24,-2.77372 48,-19.36423 72,-31.8071 24,-12.44287 48,-20.73812 72,-20.73812 24,0 48,8.29525 72,6.92135 24,-1.47759 48,-12.36511 72,-11.06898 24,1.29614 48,15.29437 72,22.11203 24,6.92134 48,6.92134 72,4.14762 24,-2.67003 48,-8.37302 72,-5.52152 24,2.85149 48,13.739 72,15.21659 24,1.3739 48,-6.92135 60,-11.06897 l 12,-4.14762 V 320 h -12 c -12,0 -36,0 -60,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -60,0 H 0 Z"

// Alert for small screens
if (window.innerWidth < 520) {
  alert("Please note that the current design may not be optimized for screens with a width smaller than 520px. Some visual issues may occur.");
  alert("Sorry, I got lazy to fix this. You can try to zoom out the page.");
}


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

const handleChange = (_: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};
  return (
    
    <div className="profile-page">
      <div className="background-blob">

        {/* SVG wave illustration for visual effect */}
        <svg viewBox="0 0 1440 320" className="wave">
          <path fill="rgb(248, 223, 255)" d={wavesvg}></path>
        </svg>

        {/* Profile banner image */}
        <div className="relative">
          <img
            src={BANNER_SRC}
            alt="Profile banner"
            className="banner-image"
          />
        </div>

        {/* All the content of the page */}
        <div className="profile-content">
          
          {/* Profile information with grid layout */}
          <div className="profile-grid">

            {/* Left side of the grid */}
            <div>

              {/* Profile card with user information */}
              <ProfileCard 
                Avatar_src={PROFILE_AVATAR_SRC}
                GIF_src={PROFILE_GIF_SRC}
                Name={PROFILE_NAME}
                username={PROFILE_USERNAME}
                join_date={PROFILE_JOIN_DATE}
              /> 

              {/* Friends card with list of friends */}
              <FriendsList friends={FRIENDS_LIST_DATA}/>

              {/* Social media icons */}
              <Card elevation={4} className='social-card'>
                <CardContent className="social-icons">
                  <Link to={BLUESKY_URL} className="social-icon">
                    <SiBluesky size={30} />
                  </Link>
                  <Link to={TWITTER_URL} className="social-icon">
                    <Twitter size={30} />
                  </Link>
                  <Link to={INSTAGRAM_URL} className="social-icon">
                    <Instagram size={30} />
                  </Link>
                  <Link to={DISCORD_URL} className="social-icon">
                    <FaDiscord size={30} />
                  </Link>
                  <Link to={YOUTUBE_URL} className="social-icon">
                    <Youtube size={30} />
                  </Link>
                </CardContent>
              </Card>
              
            </div>
            
            {/* Right side of the grid */}
            <div>

              {/* Content tabs */}
              <Box sx={{ width: '100%', typography: 'body1' }} className="content-tabs">

                {/* Tab navigation */}
                <TabContext value={value}>

                  {/* Tab list */}
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Illustrations" value="1" />
                      <Tab label="My OCs" value="2" />
                      <Tab label="Other Stuff" value="3" />
                    </TabList>
                  </Box>

                  {/* Tab panels */}

                  {/* Illustrations tab panel */}
                  <IllustPanel illustrations={ILLUST_DATA} />

                  {/* OCs tab panel */}
                  <OCPanel OCs={OC_DATA} />

                  {/* Miscellaneous tab panel */}
                  <MiscPanel Misc={MISC_DATA}/>

                </TabContext>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

