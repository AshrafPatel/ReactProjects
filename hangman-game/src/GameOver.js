import React, {Component} from "react";

class GameOver extends Component {
    constructor(props) {
        super(props);
        this.handleUpdateGameState = this.handleUpdateGameState.bind(this);
    }

    handleUpdateGameState(evt) {
        this.props.gameState("playing");
    }

    render() {
        let message = (this.props.message.includes("Lost")) ? "Game Over, You Lose" : "Congratulations, You Win";
        const answer = this.props.message.split(",")[1];
        let messageArray = message.split(",");
        return (
            <div className="gameOver">
                <h1>{messageArray[0]}</h1>
                <h2>{messageArray[1]}</h2>
                <h3>The Word was <span>{answer}</span></h3>
                <button className="myButton" onClick={this.handleUpdateGameState}>Play Again</button>
            </div>
        )
    }
}

export default GameOver;