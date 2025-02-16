// Imports //
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@mui/material'
import { Box } from '@mui/material'

import { Twitter, Youtube, Instagram } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { SiBluesky } from 'react-icons/si'

import '../../styles/profile.css'
import ProfileCard from '../profile_components/profile_card'
import FriendsList from '../profile_components/friends_list'


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


// Social media links
const BLUESKY_URL = "https://bsky.app/profile/sunsetsamu.bsky.social";
const TWITTER_URL = "https://x.com/SunsetSamu";
const INSTAGRAM_URL = "https://instagram.com/sunsetsamu";
const DISCORD_URL = "https://discord.gg/yWkaKKbVmn";
const YOUTUBE_URL = "https://youtube.com/@SunsetSamu";

// ----------------------------------------------
// ================= TEST  PAGE =================
// ----------------------------------------------

// Background image
const BANNER_SRC = "src/assets/Regalo_navidad2023.jpg";

// Wave SVG path
const wavesvg = "m 0,286.819 12,4.14763 c 12,4.14762 36,12.44288 60,12.44288 24,0 48,-8.29526 72,-13.81678 24,-5.62522 48,-8.21748 72,-9.69508 24,-1.3739 48,-1.3739 72,-2.7478 24,-1.47759 48,-4.06985 72,-6.92134 24,-2.8515 48,-5.44376 72,0 24,5.44375 48,19.44198 72,16.59049 24,-2.85149 48,-22.03425 72,-23.51184 24,-1.3739 48,15.21659 72,22.13794 24,6.81766 48,4.22539 72,8.29525 24,4.22539 48,15.11291 72,12.44288 24,-2.77372 48,-19.36423 72,-31.8071 24,-12.44287 48,-20.73812 72,-20.73812 24,0 48,8.29525 72,6.92135 24,-1.47759 48,-12.36511 72,-11.06898 24,1.29614 48,15.29437 72,22.11203 24,6.92134 48,6.92134 72,4.14762 24,-2.67003 48,-8.37302 72,-5.52152 24,2.85149 48,13.739 72,15.21659 24,1.3739 48,-6.92135 60,-11.06897 l 12,-4.14762 V 320 h -12 c -12,0 -36,0 -60,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -72,0 -24,0 -48,0 -60,0 H 0 Z"

// Alert for small screens
if (window.innerWidth < 520) {
  alert("Please note that the current design may not be optimized for screens with a width smaller than 520px. Some visual issues may occur.");
  alert("Sorry, I got lazy to fix this. You can try to zoom out the page.");
}


export default function LabTabs() {

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

              {/* Content */}
              <Box sx={{ width: '100%', typography: 'body1' }} className="content-tabs">

                <div style={{ padding: '20px' }}>
                  <h1 style={{ color: '#0047ab', fontSize: '2rem', marginBottom: '10px' }}>Sonic the Hedgehog: The Quest for the Golden Rings</h1>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                    Sonic was running through the Green Hill Zone, his blue quills blowing in the wind. He had received a message from his trusty sidekick, Tails, that Dr. Eggman had stolen the Golden Rings, ancient artifacts that kept the balance of nature in the world.
                  </p>
                  <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid #ccc', margin: '10px 0', paddingLeft: '10px' }}>
                    "I've got to get them back!" Sonic exclaimed, determination in his voice.
                  </blockquote>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                    Sonic ran through the loop-de-loops, his speed increasing with every step. He jumped and spun, his spin attack destroying any obstacles in his way.
                  </p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                    <li>He fought against Moto Bugs, Buzz Bombers, and other robotic creatures created by Dr. Eggman.</li>
                    <li>He outsmarted the traps set by the evil doctor, using his quick reflexes to avoid danger.</li>
                    <li>He rescued the animals that had been captured by Dr. Eggman's robots, freeing them from their cages.</li>
                  </ul>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                    Finally, Sonic reached the fortress of Dr. Eggman, the Golden Rings shining brightly in the center of the room.
                  </p>
                  <img src="https://cataas.com/cat?18" alt="Sonic vs Dr. Eggman" style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '8px' }} />
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                    Sonic and Dr. Eggman engaged in an epic battle, their moves lightning-fast and their determination unyielding.
                  </p>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                    In the end, Sonic emerged victorious, the Golden Rings returning to their rightful place in the world.
                  </p>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                    The animals cheered, and the world was once again at peace.
                  </p>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

