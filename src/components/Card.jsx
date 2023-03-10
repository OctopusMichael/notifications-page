import React, {useState} from "react";
import { IoRadioButtonOnSharp } from "react-icons/io5";


const Card = () => {
  const [notifications, setNotifications] = useState(
    [
    {
      id: "1",
      autor: {
        name: "Mark Webber",
        img: "/notifications-page/public/images/avatar-mark-webber.webp",
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
        img: "/notifications-page/public/images/avatar-angela-gray.webp",
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
        img: "/notifications-page/public/images/avatar-jacob-thompson.webp",
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
        img: "/notifications-page/public/images/avatar-rizky-hasanuddin.webp",
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
        img: "/notifications-page/public/images/avatar-kimberly-smith.webp",
        href: "#",
        notificationImg: "/notifications-page/public/images/image-chess.webp",
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
        img: "/notifications-page/public/images/avatar-nathan-peterson.webp",
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
        img: "/notifications-page/public/images/avatar-anna-kim.webp",
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

  
  

  const handleAllClick = () =>{
    const updateNotifications = notifications.map( element => {
      return {...element,  hasBeenRead : false}
    }) 
    setNotifications(updateNotifications)
  }

  const handleClick = (id) =>{
    const updateNotifications = notifications.map (element => {
      if (element.id === id){
        return { ...element, hasBeenRead : false }
      } 
      return element;
    })
    setNotifications(updateNotifications)
  }


 
  
  return (
    <>
      <section>
        <div className="container-fluid section-container-main">
          <div className="card-notification">
            <div className="row ">
              <div className="col-12 section-notification">
                <h3>
                  Notifications <span className="counter">{notifications.filter(element  => element.hasBeenRead).length} </span>{" "}
                </h3>

                <a href="#"  onClick={handleAllClick} className="ms-auto">
                  {" "}
                  Mark all as read
                </a>
              </div>
              {notifications.map((element) => (
                <div
                  key={element.id}
                  onClick={() => handleClick(element.id)}
                  className={
                    element. hasBeenRead ? "user-notification active " : "user-notification "
                  }
                >
                  <img src={element.autor.img} alt={element.autor.alt}/>

                  <p>
                    {" "}
                    <span className="user-name">
                      <b>{element.autor.name}</b>
                    </span>{" "}
                    {element.text}{" "}
                    <span className="post">
                      {" "}
                      <span>
                        <a href={element.link.href}>{element.link.text}</a>
                      </span>
                      {" "}
                      <span className="point-notification">
                        {element.hasBeenRead && <IoRadioButtonOnSharp />}
                      </span>{" "}
                    </span>{" "}
                    <br /> <span className="text-muted">{element.time}</span>{" "}
                    <br/> 
                    {element.message && <p className="message p-3 mt-2">
                    {element.message} 
                    </p> }
                   
                  </p>
                  <img
                    className="ms-auto"
                    src={element.autor.notificationImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Michael Diaz</a>.
        </div>
      </section>
    </>
  );
};

export default Card;

