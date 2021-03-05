import React from "react";
import "../styles/Card.css";
import Button from "./Button";
import Confetti from "react-confetti";
import { useState } from "react";
import { hinge } from "react-animations";
import Radium, { StyleRoot } from "radium";

export const Card = (props) => {
  const [celebrate, doCelebrate] = useState(false);
  const [likedPics, setLiked] = useState(0);
  const [dislike, doDislike] = useState(false);

  const toggleCelebrate = () => {
    doCelebrate(true);
    setLiked(likedPics + 1);
    setTimeout(function () {
      doCelebrate(false);
    props.fetchAnimal()

    }, 3000);

  };

  const toggleDislike = () => {
    doDislike(true);
    setTimeout(function () {
        doDislike(false)
    props.fetchAnimal()

      }, 2000);
  };

  const dislikeStyle = {
    hinge: {
      animation: "x 2s",
      animationName: Radium.keyframes(hinge, "hinge"),
    },
  };

  const likeConfetti = (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={80}
    />
  );

  return (
    <div className="card-main">
      <h2 className="card-title">{props.cardTitle}</h2>
      {celebrate ? likeConfetti : null}
      <StyleRoot>
        <img
          className="camt-pic"
          src={props.img}
          alt={props.alt}
          style={dislike ? dislikeStyle.hinge : null}
        />
      </StyleRoot>
      <div className="interaction-bar">
        <Button text="Like" clicked={toggleCelebrate} />
        <Button text="Dislike" danger clicked={toggleDislike} />
        <Button text="Another!" link clicked={props.fetchAnimal} />
      </div>
      <p>
        Number of liked {props.animalType} {likedPics}
      </p>
    </div>
  );
};
