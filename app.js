// FUNCTION COMPONENTS EXERCISE

// 1a
const GrinchXmas = () => "Cheer up, dude. It's Christmas.";
// Or
/*
const GrinchXmas = () => {
  return "Cheer up, dude. It's Christmas.";
}
*/

// 1b
ReactDOM.render(<GrinchXmas />, document.getElementById('root'));

// 2a
const GrinchMusic = () => <h1>Blast this Christmas music! It's joyful and triumphant.</h1>;

// 2b
ReactDOM.render(<GrinchMusic />, document.getElementById('root'));

// 3a
const GrinchIdiot = () => {
  return (
    <div>
      <h2>I'm an idiot!</h2>
      <h2>You're an idiot!</h2>
    </div>
  );
}

// 3b
ReactDOM.render(<GrinchIdiot />, document.getElementById('root'));

// 4a
const GrinchSchedule = () => {
  // div>(ul>li*6)+p
  return (
    <div>
      <ul>
        <li>4:00, wallow in self-pity.</li>
        <li>4:30, stare into the abyss.</li>
        <li>5:00, solve world hunger, tell no one.</li>
        <li>5:30, jazzercize.</li>
        <li>6:30, dinner with me. I can't cancel that again.</li>
        <li>7:00, wrestle with my self-loathing.</li>
      </ul>
      <p>I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling and slip slowly into madness.</p>
    </div>
  );
}

// 4b
ReactDOM.render(<GrinchSchedule />, document.getElementById('root'));

// 5a
const GrinchPoster = () => {
  return (
    <img src='https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg' alt='Poster of The Grinch Movie' />
  );
}

// 5b
ReactDOM.render(<GrinchPoster />, document.getElementById('root'));

// 6a
const GrinchVmail = () => {
  // 6b
  const u = "YOU";
  // 6c
  return (
    <div>
      <h1>IF {u} UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT {u} DOWN AND GUT {u} LIKE A FISH!</h1>
      <h3>If you'd like to fax me, press the star key.</h3>
    </div>
  );
}

// 6d
ReactDOM.render(<GrinchVmail />, document.getElementById('root'));

// 7a
const GrinchAll = () => {
  return (
    <div>
      <GrinchXmas />
      <GrinchMusic />
      <GrinchIdiot />
      <GrinchSchedule />
      <GrinchPoster />
      <GrinchVmail />
    </div>
  );
}
// 7b
ReactDOM.render(<GrinchAll />, document.getElementById('root'));

// BONUS
// 8a
const DiceRoll = () => {
  // 8b
  const die1 = Math.floor(Math.random() * 6) + 1
  // 8c
  const die2 = Math.floor(Math.random() * 6) + 1
  // Or
  /*
  roll = () => Math.floor(Math.random() * 6) + 1
  const die1 = roll();
  const die2 = roll();
  */
 console.log(die1, die2);
 // 8d
 return (
 <h1>{die1 === 1 && die2 === 1 ? "SNAKE EYES" : `${die1} & ${die2}`}</h1>
 );
//  Or
//  <h1>{(die1 && die2) === 1 ? "SNAKE EYES" : die1 + " & " + die2}</h1>
}

// 8e
ReactDOM.render(<DiceRoll />, document.getElementById('root'));

// Below is another way to complete the BONUS in case you are interested
/*
const DiceRoll2 = () => {
  roll = () => Math.floor(Math.random() * 6) + 1
  const die1 = roll();
  const die2 = roll();
  const rolledDice = (die1 && die2) === 1 ? "SNAKE EYES" : `${die1} & ${die2}`;
 return <h1>{rolledDice}</h1>
}
*/





