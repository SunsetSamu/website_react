import React from 'react';
import { Card, CardContent, Avatar } from '@mui/material';

interface ProfileCardProps {
    Avatar_src: string;
    GIF_src: string;
    Name: string;
    username: string;
    join_date: string;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    return (
        <Card elevation={8} className="profile-card">
            <CardContent className="profile-content">
                <Avatar className="profile-avatar" src={props.Avatar_src} sx={{ width: 150, height: 150 }} />
                <div className="profile-info">
                    <h1 className="profile-name">{props.Name}</h1>
                    <p className="profile-username">{props.username}</p>
                    <p className="profile-join-date">{props.join_date}</p>
                </div>
            </CardContent>
            <img
                src={props.GIF_src}
                style={{ position: 'absolute', top: '8rem', left: '8rem', width: '2.5rem', height: '2.5rem' }}
            />
        </Card>
    );
};

export default ProfileCard;
