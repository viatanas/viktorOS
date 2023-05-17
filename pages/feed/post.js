import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Bold, Italic, Underline, List, Globe } from "feather-icons-react/build/IconComponents";
import {
  Editor,
  RichUtils,
  EditorState,
  KeyBindingUtil,
  getDefaultKeyBinding,
  convertToRaw,
} from "draft-js";
import TextareaAutosize from "react-textarea-autosize";
import moment from "moment";
import { toast } from "react-hot-toast";

import NoSSR from "@/components/NoSSR";
import { InlineStyleButton, BlockStyleButton } from "@/components/Buttons/EditorButtons";
import useInput from "@/lib/hooks/useInput";
import Spinner from "@/components/Spinner";

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
  const router = useRouter();
  const [title, setTitle, handleTitleChange] = useInput();
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [loading, setLoading] = useState(false);

  const editorHasText = editorState.getCurrentContent().hasText();

  const fieldsAreFilled = title && editorHasText;

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

    if (KeyBindingUtil.hasCommandModifier(event) && event.keyCode === 76) {
      return "unordered-list";
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

    if (command === "unordered-list") {
      newState = RichUtils.toggleBlockType(editorState, "unordered-list-item");
    }

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const publishPost = async () => {
    // Convert the editor state into a JSON
    const rawContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    setLoading(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content: rawContent }),
    });
    const data = await res.json();

    if (res.status === 409) {
      toast.error(data.message);
      setLoading(false);
      return;
    }

    toast.success("Post published");
    setTimeout(() => {
      router.push("/feed");
      setLoading(false);
    }, 1500);
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
              key={style.label}
              style={style}
              toggleInlineStyle={toggleInlineStyle}
              currentInlineStyle={currentInlineStyle}
            />
          ))}
          {blockStyles.map((style) => (
            <BlockStyleButton
              key={style.label}
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
            <button
              onClick={() => publishPost()}
              className={`${
                (!fieldsAreFilled || loading) && "pointer-events-none opacity-60"
              } flex items-center h-8 w-20 justify-center font-sans text-[13px] font-medium text-white rounded-full bg-neutral-900 hover:bg-neutral-800`}
            >
              {loading ? <Spinner /> : "Publish"}
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
