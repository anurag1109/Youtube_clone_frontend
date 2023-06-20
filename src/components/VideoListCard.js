import React from "react";

const VideoListCard = ({ videoData }) => {
  //   console.log(videoData);
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="py-1 px-2 m-2 w-[32vw] h-[10vw] flex shadow-lg rounded-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul className=" flex gap-3 px-2 py-1">
        <div className="">
          <li className="font-bold leading-5 mb-3">
            {title.length > 30 ? title.substr(0, 30) + " ..." : title}
          </li>

          <li className="text-gray-500 text-sm my-1">
            {channelTitle.length > 20
              ? channelTitle.substr(0, 20) + " ..."
              : channelTitle}
          </li>
          <div className="flex">
            <li className="text-gray-500 text-xs">
              {(statistics?.viewCount/1000).toFixed(0)}K Views{" "}
            </li>
            <span className="text-gray-400 mx-1 text-xs">•</span>
            <li className="text-gray-500 text-xs">
              {" " +
                (
                  (new Date() - new Date(snippet?.publishedAt)) /
                  3600000
                ).toFixed(0)}{" "}
              hours ago
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default VideoListCard;
