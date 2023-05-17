import { useState, useEffect, Fragment } from "react";
import React from "react";
import moment from "moment";
import { Transition } from "@headlessui/react";
import { Editor, EditorState, convertFromRaw } from "draft-js";

export default function FeedCard({ post, mutate, index, numOfPosts }) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    const contentState = convertFromRaw(JSON.parse(post.content));
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  }, []);

  const likePost = async (id, numOfLikes) => {
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: numOfLikes + 1 }),
    });

    mutate("/api/posts", {
      populateCache: false,
    });
  };

  return (
    <Transition
      key={post._id}
      appear={true}
      show={true}
      as={Fragment}
      enter={`transition duration-200 ease-linear ${index !== 0 && "delay-200"}`}
      enterFrom={`transform  opacity-0 ${index !== 0 ? "translate-y-2" : "translate-y-6"}`}
      enterTo="transform translate-y-0 opacity-100"
    >
      <div className="flex items-stretch w-full h-auto space-x-6 ">
        <div className="relative flex self-stretch justify-center w-3/12 space-x-6">
          <span className="mt-px font-mono text-xs font-medium tracking-tight text-neutral-900">
            {moment(post.createdAt).format("D MMMM, YYYY")}
          </span>

          {numOfPosts !== index + 1 && (
            <div className="absolute inset-y-0 w-[2px] right-[21px] bg-neutral-200 top-7"></div>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-neutral-400"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-auto pb-16">
          <div className="flex flex-col w-full h-auto p-6 bg-white border rounded-md shadow border-neutral-200 filter">
            <h1 className="font-sans text-lg font-semibold text-neutral-900">{post.title}</h1>
            <div className="w-full h-auto mt-4 editor-feed">
              <Editor readOnly editorState={editorState} />
            </div>
            <div className="flex justify-start w-full">
              <button
                onClick={() => {
                  likePost(post._id, post.likes);
                }}
                className="flex items-center group justify-center p-2 mt-10 space-x-1.5 border rounded-md border-neutral-200 hover:border-blue-300 hover:bg-blue-50 transform transition duration-150 active:scale-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-neutral-900"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <span className="font-mono text-xs font-medium text-neutral-900">{post.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
