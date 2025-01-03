import React from "react";
import { TabPanel } from "@mui/lab";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

interface illust {
    title: string;
    date: string;
    image: string;
    link: string;
}

interface illustPanelProps {
    illustrations: illust[];
}

const IllustPanel: React.FC<illustPanelProps> = ({ illustrations }) => {
    return (
        <TabPanel value="1" className="tab-panel">
            <div className="illustration-grid">
                {illustrations.map((illust, i) => (
                    <Card elevation={0} key={i} className="illustration-card">
                        <CardActionArea  href={illust.link}>
                            {/* Illustration image */}
                            <CardMedia
                                sx={{ height: 230 }}
                                image={illust.image}
                                className="illustration-image"
                            />
                            {/* Illustration information */}
                            <CardContent>
                                <h3 className="illustration-title">{illust.title}</h3>
                                <p className="illustration-date">{illust.date}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </TabPanel>
    );
}

export default IllustPanel;
