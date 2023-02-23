import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Component } from "react";

import "swiper";
import "swiper/css/free-mode";

const TopPlay = () => {
  const { data } = useGetTopChartsQuery();
  const TopPlays = data?.slice(0, 5);

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // *Scroll to top on loading
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [data]);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }; // handlePauseClick
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }; // handlePlayClick

  // ?Start of component
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div
          className="flex flex-row justify-between
        items-center"
        >
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
