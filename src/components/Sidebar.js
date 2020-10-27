import React from "react";
import "../styles/App.scss";
import { Button, Card, Typography, CardMedia } from "@material-ui/core";

export default function Sidebar(props) {
  return (
    <Card>
      {props.sidebarImg ? (
        <CardMedia
          component="img"
          alt="Sidebar Image"
          image={props.sidebarImg}
          title="Sidebar Image"
          className="sidebarImg"
        />
      ) : (
        <CardMedia
          component="img"
          alt="Sidebar Image"
          image="https://rc4wireless.com/wp-content/uploads/2020/10/RC4Logo.jpg"
          title="Sidebar Image"
          className="sidebarImg"
        />
      )}
      {props.sidebar.map((line, index) => (
        <Typography
          key={index}
          variant="body2"
          component="p"
          className="sidebarText"
        >
          {line}
        </Typography>
      ))}
      {props.sidebarLink ? (
        <Button href={props.sidebarLink}>Learn More</Button>
      ) : null}
    </Card>
  );
}
