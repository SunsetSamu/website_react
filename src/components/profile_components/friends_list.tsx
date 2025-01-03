import React from "react";
import { Card, CardContent, Avatar } from "@mui/material";

interface Friend {
    Avatar_src: string;
    Name: string;
    username: string;
    link: string;
}

interface FriendsListProps {
    friends: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
    return (
        <Card elevation={4} className="friends-card">
            <h2 style={{ textAlign: "center", marginBottom: "-1rem", marginTop: "0.3rem" }}>Very silly ppl 🎨</h2>
            <CardContent className="friends-list">
                {friends.map((friend, i) => (
                    <div key={i} className="friend-item">
                        <a href={friend.link} >
                            <Avatar 
                                className="friend-avatar" 
                                sx={{ width: 64, height: 64 }} 
                                src={friend.Avatar_src} 
                            />
                            <div>
                                <p className="friend-name">{friend.Name}</p>
                                <p className="friend-username">{friend.username}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default FriendsList;
