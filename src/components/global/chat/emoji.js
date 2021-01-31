import React from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

export default class Emoji extends React.Component {
  onEmojiClick = (event, emojiObject) => {
    this.props.addEmoji(emojiObject);
  };
  render() {
    return (
      <div
        className="emoji-list__wrapper"
        style={{ backgroundColor: "white", width: "100%" }}
      >
        <Picker
          onEmojiClick={this.onEmojiClick}
          disableSearchBar={true}
          pickerStyle={{
            width: "100%",
            height: "400px",
            position: "absolute",
            bottom: "50px",
            padding: 0,
            backgroundColor: "white",
            zIndex: 3,
          }}
          skinTone={SKIN_TONE_MEDIUM_DARK}
        />
      </div>
    );
  }
}
