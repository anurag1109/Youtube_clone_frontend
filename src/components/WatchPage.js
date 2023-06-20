import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import WatchVideo from "./WatchVideo";
import VideoList from "./VideoList";
import CommentContainer from "./CommentContainer";

function WatchPage() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex">
      <div>
        <WatchVideo id={id} />
        <CommentContainer />
      </div>
      <VideoList id={id} />
    </div>
  );
}

export default WatchPage;
