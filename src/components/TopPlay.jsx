import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";


import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Component } from "react";

// !Might result to issues, please be sure to confirm...
// import 'swiper/';
// import 'swiper/css/freemode';

const TopPlay = () => {
  const { data } = useGetTopChartsQuery();
  const TopPlays = data?.slice(0, 5);


  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  
  // *Scroll to top on loading
  const divRef = useRef(null);
  // useEffect(()=> {
  //   scrollIntoView(divRef.current, {
  //     behavior: 'smooth',
  //   });
  // })

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // })


  const handlePauseClick = () => {
    dispatch(playPause(false));
  }; // handlePauseClick
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }; // handlePlayClick

  return (
    <div ref={divRef} className="xl:ml-6 ml-0">
      topPlay
    </div>
  )
};

export default TopPlay;
