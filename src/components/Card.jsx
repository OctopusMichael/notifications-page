import React, { useState } from "react";
import avatar1 from "../images/avatar-mark-webber.webp";
import avatar2 from "../images/avatar-angela-gray.webp";
import avatar3 from "../images/avatar-jacob-thompson.webp";
import avatar4 from "../images/avatar-rizky-hasanuddin.webp";
import avatar5 from "../images/avatar-kimberly-smith.webp";
import avatar6 from "../images/avatar-nathan-peterson.webp";
import avatar7 from "../images/avatar-anna-kim.webp";
import notificationImg from "../images/image-chess.webp";
import { IoRadioButtonOnSharp } from "react-icons/io5";

const Card = () => {
  const [counter, setCounter] = useState(3);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);

  const handleClick1 = () => {
    setActive1(false);
    setCounter(counter == 0 ? counter : counter - 1);
  };

  const handleClick2 = () => {
    setActive2(false);
    setCounter(counter == 0 ? counter : counter - 1);
  };

  const handleClick3 = () => {
    setActive3(false);
    setCounter(counter == 0 ? counter : counter - 1);
  };

  const handleAllClick = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setCounter(counter == 0 ? counter : counter - counter);
  };

  return (
    <>
      <section>
        <div className="container-fluid section-container-main">
          <div className="card-notification">
            <div className="row ">
              <div className="col-12 section-notification">
                <h3>
                  Notifications <span className="counter">{counter} </span>{" "}
                </h3>

                <a onClick={handleAllClick} className="ms-auto">
                  {" "}
                  Mark all as read
                </a>
              </div>

              <div
                onClick={handleClick1}
                className={
                  active1 ? "user-notification active " : "user-notification "
                }
              >
                <img src={avatar1}></img>
                <p>
                  {" "}
                  <span className="user-name">
                    <b>Mark Webber</b>
                  </span>{" "}
                  Reacted to your recent post{" "}
                  <span className="post">
                    {" "}
                    My first tournament today!{" "}
                    <span className="point-notification">
                      {active1 && <IoRadioButtonOnSharp />}
                    </span>{" "}
                  </span>{" "}
                  <br /> <span className="text-muted">1m ago</span>{" "}
                </p>
              </div>
              <div
                onClick={handleClick2}
                className={
                  active2 ? "user-notification active " : "user-notification "
                }
              >
                <img src={avatar2}></img>
                <p>
                  {" "}
                  <span className="user-name">
                    <b>Angela Gray</b>
                  </span>{" "}
                  followed you{" "}
                  <span className="point-notification">
                    {active2 && <IoRadioButtonOnSharp />}
                  </span>{" "}
                  <br /> <span className="text-muted"> 5m ago</span>{" "}
                </p>
              </div>
              <div
                onClick={handleClick3}
                className={
                  active3 ? "user-notification active " : "user-notification "
                }
              >
                <img src={avatar3}></img>
                <p>
                  {" "}
                  <span className="user-name">
                    <b>Jacob Thompson</b>{" "}
                  </span>{" "}
                  has joined your group{" "}
                  <span className="post">
                    <a href="https://www.chessclub.com">Chess Club</a>{" "}
                  </span>{" "}
                  <span className="point-notification">
                    {active3 && <IoRadioButtonOnSharp />}
                  </span>{" "}
                  <br /> <span className="text-muted">1 day ago</span>{" "}
                </p>
              </div>
              <div className=" user-notification">
                <img src={avatar4} />
                <p>
                  {" "}
                  <span className="user-name">
                    <b>Rizky Hasanuddin</b>{" "}
                  </span>{" "}
                  sent you a private message <span className="post"></span>{" "}
                  <br /> <span className="text-muted">5 day ago</span> <br />
                  <div className="message p-3 mt-2">
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having lots of
                    fun and improving my game
                  </div>
                </p>
              </div>
              <div className="  user-notification">
                <img src={avatar5}></img>
                <p>
                  {" "}
                  <span className="user-name">
                    <b>Kimberly Smith</b>
                  </span>{" "}
                  commented on your picture <br />{" "}
                  <span className="text-muted">1 week ago</span>{" "}
                </p>
                <img className="ms-auto" src={notificationImg}></img>
              </div>
              <div className=" user-notification">
                <img src={avatar6}></img>
                <p>
                  {" "}
                  <span className="user-name">
                    {" "}
                    <b>Nathan Peterson</b>{" "}
                  </span>{" "}
                  reacted to your recent post{" "}
                  <span className="post">
                    {" "}
                    5 end-game strategies to increase your win rate{" "}
                  </span>{" "}
                  <br /> <span className="text-muted">2 weeks ago</span>{" "}
                </p>
              </div>
              <div className=" user-notification">
                <img src={avatar7}></img>
                <p>
                  {" "}
                  <span className="user-name">
                    {" "}
                    <b>Mark Webber</b>{" "}
                  </span>{" "}
                  left the group{" "}
                  <span className="post">
                    {" "}
                    <a href="https://www.chessclub.com">Chess Club</a>
                  </span>{" "}
                  <br /> <span className="text-muted">2 weeks ago</span>{" "}
                </p>
              </div>
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

/* 





 commented on your picture
1 week ago

Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
2 weeks ago

Anna Kim left the group Chess Club
2 weeks ago
 */
