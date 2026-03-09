import './EmojiItem.css';

const EmojiItem = ({ emoji, handleClick }) => {
  return (
    <li className="emoji-item">
      <span className="emoji-symbol" onClick={()=>handleClick(emoji.id)}>
        {emoji.symbol}
      </span>
      <p>{emoji.votes}</p>
    </li>
  );
}

export default EmojiItem;