import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Anurag singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Anurag singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anurag singh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Anurag singh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Anurag singh",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Anurag singh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Anurag singh",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anurag singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Anurag singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Anurag singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anurag singh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Anurag singh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Anurag singh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anurag singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anurag singh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Anurag singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
];

function CommentContainer() {
  return (
    <div className=" ml-[4vw] mr-[1vw] my-[4%]">
      <h1 className="text-2xl font-bold mb-6">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentContainer;
