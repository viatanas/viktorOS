import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Bold,
  Italic,
  Underline,
  List,
  Globe,
  Calendar,
} from "feather-icons-react/build/IconComponents";
import { Editor, RichUtils, EditorState, KeyBindingUtil, getDefaultKeyBinding } from "draft-js";
import TextareaAutosize from "react-textarea-autosize";
import moment from "moment";

import NoSSR from "@/components/NoSSR";
import { InlineStyleButton, BlockStyleButton } from "@/components/Buttons/EditorButtons";
import useInput from "@/lib/hooks/useInput";

const inlineStyles = [
  {
    label: "BOLD",
    icon: Bold,
  },
  {
    label: "ITALIC",
    icon: Italic,
  },
  {
    label: "UNDERLINE",
    icon: Underline,
  },
];

const blockStyles = [
  {
    label: "unordered-list-item",
    icon: List,
  },
];

export default function Post() {
  const [title, setTitle, handleTitleChange] = useInput();
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  // Current inline style
  const currentInlineStyle = editorState.getCurrentInlineStyle();

  // Current block style
  const selection = editorState.getSelection();
  const currentBlockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  // Toggle inline style
  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Toggle block type
  const toggleBlockStyle = (style) => {
    setEditorState(RichUtils.toggleBlockType(editorState, style));
  };

  // Key bindings
  const keyBindingFn = (event) => {
    if (KeyBindingUtil.hasCommandModifier(event) && event.keyCode === 66) {
      return "bold";
    }

    if (KeyBindingUtil.hasCommandModifier(event) && event.keyCode === 73) {
      return "italic";
    }

    if (KeyBindingUtil.hasCommandModifier(event) && event.keyCode === 85) {
      return "underline";
    }

    return getDefaultKeyBinding(event);
  };

  const handleKeyCommand = (command) => {
    let newState;
    if (command === "bold") {
      newState = RichUtils.toggleInlineStyle(editorState, "BOLD");
    }

    if (command === "italic") {
      newState = RichUtils.toggleInlineStyle(editorState, "ITALIC");
    }

    if (command === "underline") {
      newState = RichUtils.toggleInlineStyle(editorState, "UNDERLINE");
    }

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="w-full h-auto min-h-screen">
        <div className="fixed flex items-center p-1 space-x-1 transform -translate-x-1/2 rounded-full left-1/2 bottom-4 bg-neutral-900">
          {inlineStyles.map((style) => (
            <InlineStyleButton
              style={style}
              toggleInlineStyle={toggleInlineStyle}
              currentInlineStyle={currentInlineStyle}
            />
          ))}
          {blockStyles.map((style) => (
            <BlockStyleButton
              style={style}
              toggleBlockStyle={toggleBlockStyle}
              currentBlockType={currentBlockType}
            />
          ))}
        </div>

        <header className="fixed top-0 flex items-center justify-between w-full px-4 py-3 border-b border-neutral-200 bg-white/80 filter backdrop-blur">
          <div className="flex items-center justify-start flex-1 space-x-2 font-sans text-sm font-medium text-neutral-900">
            <Globe className="w-4 h-4 text-neutral-700" />
            <span>{moment().format("D MMMM YYYY")}</span>
          </div>
          <div className="flex justify-end flex-1">
            <button className="flex items-center h-8 px-6 font-sans text-[13px] font-medium text-white rounded-full bg-neutral-900">
              Publish
            </button>
          </div>
        </header>
        <div className="flex flex-col w-full max-w-xl py-32 mx-auto">
          <div className="w-full h-auto">
            <TextareaAutosize
              onChange={(e) => handleTitleChange(e)}
              required
              placeholder="Untitled"
              type="text"
              className="w-full text-3xl font-semibold leading-normal resize-none font-inter text-neutral-900 focus:outline-none placeholder-neutral-400"
            />
          </div>
          <div className="mt-6 editor">
            <NoSSR>
              <Editor
                placeholder="Type something..."
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={keyBindingFn}
              />
            </NoSSR>
          </div>
        </div>
      </main>
    </>
  );
}
