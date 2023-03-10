import React, { useState } from 'react';
import Card from "./components/Card"
import "./styles/App.css"

function App() {
  const [notifications, setNotifications] = useState(
    [
    {
      id: "1",
      autor: {
        name: "Mark Webber",
        img: "../public/avatar-mark-webber.webp",
        href: "#",
        alt: "avatar1" 
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      hasBeenRead: true,
    },
    {
      id: "2",
      autor: {
        name: "Angela Gray ",
        img: "../public/avatar-angela-gray.webp",
        href: "#",
        alt: "avatar2" 
      },
      text: "followed you",
      link: {
        text: "",
        href: "",
      },
      time: "5m ago",
      hasBeenRead: true,
    },
    {
      id: "3",
      autor: {
        name: "Jacob Thompson",
        img: "../public/avatar-jacob-thompson.webp",
        href: "#",
        alt: "avatar3" 
      },
      text: "has joined your group ",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: " 1 day ago",
      hasBeenRead: true,
    },
    {
      id: "4",
      autor: {
        name: "Rizky Hasanuddin ",
        img: "../public/avatar-rizky-hasanuddin.webp",
        href: "#",
        alt: "avatar4" 
      },
      text: "sent you a private message ",
      link: {
        text: "",
        href: "",
      },
      time: "5 days ago",
      hasBeenRead: false,
      message : "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      id: "5",
      autor: {
        name: "Kimberly Smith  ",
        img: "../public/avatar-kimberly-smith.webp",
        href: "#",
        notificationImg: "../public/image-chess.webp",
        alt: "avatar5" 
      },
      text: "commented on your picture ",
      link: {
        text: "",
        href: "",
      },
      time: "1 week ago",
      hasBeenRead: false,
    },
    {
      id: "6",
      autor: {
        name: "Nathan Peterson  ",
        img: "../public/avatar-nathan-peterson.webp",
        href: "#",
        alt: "avatar6" 
      },
      text: "reacted to your recent post",
      link: {
        text: "5 end-game strategies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      hasBeenRead: false,
    },
    {
      id: "7",
      autor: {
        name: "Anna Kim",
        img: "../public/avatar-anna-kim.webp",
        href: "#",
        alt: "avatar7" 
      },
      text: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      hasBeenRead: false,
    }

  ]  );

 
  return (
    <>
      <Card notifications={notifications} setNotifications={setNotifications}/>
    </>
  )
}

export default App
