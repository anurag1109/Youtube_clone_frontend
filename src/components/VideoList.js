import React, { useEffect, useState } from "react";
import { google_api_key, youtube_videos_API } from "../utils/constant";
import { Link } from "react-router-dom";
import VideoListCard from "./VideoListCard";
import { useSelector } from "react-redux";

function VideoList({ id }) {
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
  };
  return (
    <div className=" px-6 gap-2">
      {videos.map((video) =>
        // passing search Params (not normal params)
        id !== video?.id ? (
          <Link
            key={
              typeof video.id === "string" ? video.id : video.id.videoId + "abc"
            }
            to={`/watch?v=${
              typeof video.id === "string" ? video.id : video.id.videoId
            }`}
          >
            {" "}
            {/* higher order component */}
            <VideoListCard videoData={video} />
          </Link>
        ) : null
      )}
    </div>
  );
}

export default VideoList;
