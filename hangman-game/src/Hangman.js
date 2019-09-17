import React, { Component } from "react";
import "./Hangman.css";
import {randomWord} from "./words";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    images: [
      {
        src: img0,
        alt: "Geting ready to hang a man"
      }, 
      {
        src: img1,
        alt: "The head is attached"
      }, 
      {
        src: img2,
        alt: "The body is hanging"
      }, 
      {
        src: img3,
        alt: "One arm is roped"
      }, 
      {
        src: img4,
        alt: "The arms are hanging"
      }, 
      {
        src: img5,
        alt: "One leg is hanging"
      }, 
      {
        src: img6,
        alt: "The man is hung"
      }
    ],
    maxWrong: 6
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    console.log(this.state.answer)
    this.handleGuess = this.handleGuess.bind(this);
    this.handleUpdateGameState = this.handleUpdateGameState.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    const ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  handleUpdateGameState(evt) {
    const word = this.guessedWord().join("");
    if (word === this.state.answer) {
      this.props.gameState("Won," + this.state.answer);
    } else if (this.state.nWrong >= 6) {
      this.props.gameState('Lost,' + this.state.answer);
    }
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }

  componentDidUpdate() {
    this.handleUpdateGameState();
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img 
          src={this.props.images[this.state.nWrong].src} 
          alt={this.props.images[this.state.nWrong].alt}/>
        {(this.state.nWrong > 0) 
        ? <p>You have guessed incorrectly {this.state.nWrong} / {this.props.maxWrong}</p> 
        : ""}
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>
    );
  }
}

export default Hangman;
