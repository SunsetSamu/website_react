import React from "react";
import { TabPanel } from "@mui/lab";
import { Card, CardActionArea, CardMedia } from "@mui/material";

interface OC {
    name: string;
    birthdate_age: string;
    ethnicity: string;
    gender: string;
    mbti: string;
    colors: string;
    lore: string;

    image_src: string;
    page_link: string;
}

interface OCPanelProps {
    OCs: OC[];
}

const OCPanel: React.FC<OCPanelProps> = ({ OCs }) => {
    return (
        <TabPanel value="2" className="tab-panel">
            <div>
                {OCs.map((OC, i) => (
                    <Card elevation={0} key={i} className="character-card">
                        <CardActionArea  href={OC.page_link}>
                        <div className="character-container">
                            {/* Character image */}
                            <CardMedia
                            component="img"
                            image={OC.image_src}
                            className="character-thumbnail"
                            />
                            {/* Character information */}
                            <div className="character-info">
                            <h2>{OC.name}</h2>
                            <p><strong>Birthday/Age:</strong> {OC.birthdate_age}</p>
                            <p><strong>Ethnicity:</strong> {OC.ethnicity}</p>
                            <p><strong>Gender:</strong> {OC.gender}</p>
                            <p><strong>MBTI:</strong> {OC.mbti}</p>
                            <p><strong>Colors:</strong> {OC.colors}</p>
                            <p><strong>Lore:</strong> {OC.lore}</p>
                            </div>
                        </div>
                        
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </TabPanel>
    );
}

export default OCPanel;