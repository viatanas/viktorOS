export const InlineStyleButton = ({ style, toggleInlineStyle, currentInlineStyle }) => {
  return (
    <button
      key={style.label}
      className={`${
        currentInlineStyle.has(style.label)
          ? "bg-blue-600 hover:bg-blue-500"
          : "hover:bg-neutral-600"
      } p-2 rounded-full`}
      onClick={() => toggleInlineStyle(style.label)}
    >
      <style.icon className="w-4 h-4 text-white" />
    </button>
  );
};

export const BlockStyleButton = ({ style, toggleBlockStyle, currentBlockType }) => {
  return (
    <button
      key={style.label}
      className={`${
        currentBlockType === style.label ? "bg-blue-600 hover:bg-blue-500" : "hover:bg-neutral-600"
      } p-2 rounded-full`}
      onClick={() => toggleBlockStyle(style.label)}
    >
      <style.icon className="w-4 h-4 text-white" />
    </button>
  );
};
