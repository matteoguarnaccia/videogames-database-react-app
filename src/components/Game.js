import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Game = ({ name, released, image, id }) => {
  //Load Details Handler
  const dispatch = useDispatch();
  const loadDeatailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDeatailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <LazyLoadImage src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 5px 20px rgba(68, 5, 5, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      height: 60vh;
    }
  }
`;

export default Game;
