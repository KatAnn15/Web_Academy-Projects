import React, { useState } from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

function Emoji() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div
      className="emoji-list__wrapper"
      style={{ backgroundColor: "white", width: "100%" }}
    >
      <Picker
        onEmojiClick={onEmojiClick}
        disableSearchBar={true}
        pickerStyle={{
          width: "100%",
          height: "400px",
          padding: 0,
          backgroundColor: "white",
          zIndex: 3,
        }}
        skinTone={SKIN_TONE_MEDIUM_DARK}
      />
    </div>
  );
}
export default Emoji;
