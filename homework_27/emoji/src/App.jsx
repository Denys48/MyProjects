import { useState } from 'react';
import EmojiList from './components/EmojiList/EmojiList';
import Results from './components/Results/Results';


const emojisData = [
  { id: 1, symbol: "😀", votes: 0 },
  { id: 2, symbol: "😎", votes: 0 },
  { id: 3, symbol: "🙃", votes: 0 },
  { id: 4, symbol: "😡", votes: 0 },
  { id: 5, symbol: "😍", votes: 0 }
];

function App() {
  const [emojis, setEmojis] = useState(emojisData);
  const [showResults, setShowResults] = useState(false);
  const [winners, setWinners] = useState(null);

  const handleEmojiClick = (id) => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
      )
    );
  };

  const handleButtonClick = () => {
    setShowResults(true);
    const maxVotes = Math.max(...emojis.map(emoji => emoji.votes));
    const winners = emojis.filter(emoji => emoji.votes === maxVotes);
    setWinners(winners);
  };

  return (
    <div className="app">
      <h1>Голосування за найкращий самйлик</h1>
      <EmojiList emojis={emojis} handleClick={handleEmojiClick} />
      <button className="results-button" onClick={handleButtonClick}>
        Показати результати
      </button>
      {showResults && <Results winners={winners} />}
    </div>
  )
}

export default App;
