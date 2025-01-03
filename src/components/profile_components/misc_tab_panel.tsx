import React from "react";
import { TabPanel } from "@mui/lab";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

interface MiscellaneousContent {
    title: string;
    date: string;
    text: string;
    image_src: string;
    page_link: string;
}

interface MiscPanelProps {
    Misc: MiscellaneousContent[];
}

const MiscPanel: React.FC<MiscPanelProps> = ({ Misc }) => {
    return (
        <TabPanel value="3" className="tab-panel">
            <div>
                {Misc.map((MiscellaneousContent, i) => (
                    <Card elevation={0} key={i} className="misc-content" sx={{ display: 'flex' }}>

                        <CardActionArea  href={MiscellaneousContent.page_link} target="_blank" rel="noreferrer">

                            <CardMedia component="img" sx={{ height: 140 }} image={MiscellaneousContent.image_src} />

                            <CardContent>
                                <p className="misc-date">{MiscellaneousContent.date} <h3 className="misc-title">{MiscellaneousContent.title}</h3></p>
                                <p className="misc-text">{MiscellaneousContent.text}</p>
                            </CardContent>
                            
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </TabPanel>
    );
}

export default MiscPanel;

/*
<TabPanel value="3" className="tab-panel">
    <div>
      {Array.from({length: 7}).map((_, i) => (
        <Card elevation={0} key={i} className="misc-content" sx={{ display: 'flex' }}>
          <CardActionArea  href="https://via.placeholder.com/400" target="_blank" rel="noreferrer">
            
            <CardMedia component="img" sx={{ height: 140 }} image="https://via.placeholder.com/400" />
            
            <CardContent>
              <h3 className="misc-title">Miscellaneous Content {i + 1}</h3>
              <p className="misc-text">
                Various content like blog posts, thoughts, or other creative works can go here.
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
</TabPanel>
*/