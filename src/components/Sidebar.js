import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className=" fixed top-12 z-30">
      <div className={`px-4 py-6 my-2 w-[16vw] absolute bg-white `}>
        <ul className=" p-4 ">
          <li>
            <Link
              to="/"
              className="flex"
              onClick={() => {
                dispatch(closeMenu());
              }}
            >
              {" "}
              <img
                className="h-5 mr-3 mt-1"
                src="https://img.icons8.com/?size=512&id=1iF9PyJ2Thzo&format=png"
                alt="Home"
              />
              Home
            </Link>
          </li>
          <li className=" flex my-2">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=19927&format=png"
            />
            Shorts
          </li>
          <li className="flex">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=111366&format=png"
            />
            Video
          </li>
          <li className="flex my-2">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=fJXFbcW0WrW9&format=png"
            />
            Live
          </li>
        </ul>
        <ul className=" my-2 p-5 border-y-2">
          <li className="flex ">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=106332&format=png"
            />
            Library
          </li>
          <li className=" flex my-2">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=89394&format=png"
            />
            History
          </li>
          <li className="flex">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=116457&format=png"
            />
            Watch Later
          </li>
          <li className="my-2 flex">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=87581&format=png"
            />
            Playlists
          </li>
        </ul>
        <h1 className="font-bold px-4 pt-4">Explore</h1>

        <ul className=" p-4">
          <li className="flex">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=83189&format=png"
            />
            Music{" "}
          </li>
          <li className="flex my-2">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=85620&format=png"
            />
            Sports
          </li>
          <li className="flex">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=87564&format=png"
            />
            Movie
          </li>
          <li className=" flex my-2">
            {" "}
            <img
              className="h-5 mr-3 mt-1"
              src="https://img.icons8.com/?size=512&id=85490&format=png"
            />
            Gaming
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
