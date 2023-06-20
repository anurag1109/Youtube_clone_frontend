import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function MiniSidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  //   if (isMenuOpen) return null;
  return (
    <div className=" bg-white">
      <div className=" pl-4 sticky top-[4.2rem]">
        <ul className=" p-4 ">
          <li key={1} className=" my-6">
            <Link to={"/"}>
              {" "}
              <img
                className="h-5 my-2 mx-3 mt-1"
                src="https://img.icons8.com/?size=512&id=1iF9PyJ2Thzo&format=png"
              />
              Home
            </Link>
          </li>
          <li key={2} className=" text-center my-6">
            {" "}
            <img
              className="h-5 my-2 mx-3 mt-1"
              src="https://img.icons8.com/?size=512&id=19927&format=png"
            />
            Shorts
          </li>
          <li key={3} className="my-6">
            <Link to={"/live"}>
              {" "}
              <img
                className="h-5 my-2 mx-3 mt-1"
                src="https://img.icons8.com/?size=512&id=fJXFbcW0WrW9&format=png"
              />
              <div className="ml-2">Live</div>
            </Link>
          </li>
          <li key={4} className=" my-6">
            {" "}
            <img
              className="h-5 my-2 mx-3 mt-1"
              src="https://img.icons8.com/?size=512&id=106332&format=png"
            />
            Library
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MiniSidebar;
