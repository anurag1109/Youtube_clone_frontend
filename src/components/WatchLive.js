import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import WatchVideo from "./WatchVideo";
import VideoList from "./VideoList";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

function WatchLive() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-full">
      <WatchVideo id={id} />
      <LiveChat />
    </div>
  );
}

export default WatchLive;
