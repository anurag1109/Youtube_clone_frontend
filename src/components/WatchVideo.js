import React, { useEffect, useState } from "react";
import { google_api_key } from "../utils/constant";

const WatchVideo = ({ id }) => {
  const [videoDetails, setVideoDetails] = useState([]);

  const fetchVideoDetails = async () => {
    const detail = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` +
        google_api_key
    );
    const json = await detail.json();
    setVideoDetails(json.items[0]);
  };

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  return (
    <div className="">
    <div className="ml-[4vw] mr-[1vw] my-[1%] sticky top-[4.7rem] ">
      <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/` + id + "?autoplay=1"}
        title="Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,Amitabh"
        frameBorder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="mt-2 font-bold w-[50vw] text-xl">
        {videoDetails?.snippet?.title}
      </div>
      </div>
      </div>
  );
};

export default WatchVideo;
