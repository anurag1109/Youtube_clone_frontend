import React, { useEffect, useState } from "react";
import { google_api_key, youtube_videos_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  let searchstr = useSelector((store) => store.search.searchstr);

  useEffect(() => {
    searchstr ? getSearchRelatedVideo() : getVideos();
  }, [searchstr]);

  const getVideos = async () => {
    const data = await fetch(youtube_videos_API);
    const json = await data.json();
    setVideos(json.items);
  };
  const getSearchRelatedVideo = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchstr}&type=video&key=` +
        google_api_key
    );
    const json = await data.json();
    setVideos(json.items);
    window.scrollTo(0, 0);
  };

  return (
    <div className=" px-6 gap-2 flex flex-wrap">
      {videos.map((video) => (
        // {console.log(typeof (video.id))}
        // passing search Params (not normal params)
        <Link
          key={typeof video.id === "string" ? video.id : video.id.videoId}
          to={`/watch?v=${
            typeof video.id === "string" ? video.id : video.id.videoId
          }`}
        >
          {" "}
          <VideoCard videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
