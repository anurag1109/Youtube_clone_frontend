import React from "react";
import Button from "./Button";

const buttonNameList = [
  "All",
  "Live",
  "Programming",
  "Gaming",
  "Songs",
  "Comedy",
  "Politics",
  "Thriller",
  "Mixes",
  "Cricket",
  "Cooking",
  "Football",
  "Upcomming",
];
const ButtonList = () => {
  return (
    <div className="flex gap-2.5 m-5 sticky top-[4.2rem] bg-white">
      {buttonNameList.map((eachButton, index) => {
        if (index > 11) return null;
        return <Button key={index} buttonName={`${eachButton}`} />;
      })}
    </div>
  );
};

export default ButtonList;
