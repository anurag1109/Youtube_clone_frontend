import React from "react";

const VideoCard = ({ videoData }) => {
  //   console.log(videoData);
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="py-1 px-2 m-2 w-[27vw] shadow-lg rounded-lg">
      <img className="rounded-lg w-[100%] h-[31%]" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul className=" flex gap-3 px-2 py-1">
        <img
          className="rounded-[50%] my-2 h-8 w-8"
          alt="thumbnail"
          src={thumbnails?.high?.url}
        />
        <div className="">
          <li className="font-bold leading-5 my-1">
            {title.length > 50 ? title.substr(0, 50) + " ..." : title}
          </li>

          <li className="text-gray-500 text-sm">{channelTitle}</li>
          <div className="flex">
            <li className="text-gray-500 text-sm">
              {statistics?.viewCount} Views
            </li>
            <span className="text-gray-400 mx-1 text-sm">•</span>
            <li className="text-gray-500 text-sm">
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

export default VideoCard;
