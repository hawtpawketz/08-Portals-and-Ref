import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  //  const [enteredPlayername, setEnteredPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome{" "}
        {playerName.current ? playerName.current.value : "Unknown Entity"}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayername}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
