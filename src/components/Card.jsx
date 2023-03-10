import React from "react";
import { IoRadioButtonOnSharp } from "react-icons/io5";

const Card = ({ notifications, setNotifications }) => {
  

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

