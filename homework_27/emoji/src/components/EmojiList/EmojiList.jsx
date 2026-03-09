import EmojiItem from "../EmojiItem/EmojiItem";
import './EmojiList.css';

const EmojiList = ({ emojis, handleClick }) => {
    return (
        <ul className="emoji-list">
            {emojis.map((emoji) => (
                <EmojiItem key={emoji.id} emoji={emoji} handleClick={handleClick} />
            ))}
        </ul>
    )
}

export default EmojiList;