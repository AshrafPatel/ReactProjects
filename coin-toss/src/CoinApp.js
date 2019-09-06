import React, {Component} from "react";
import Coin from "./Coin"
import Summary from "./Summary"

class CoinApp extends Component {
    constructor() {
        super();
        this.state = {
            headsCounter: 0,
            tailsCounter: 0,
            headsOrTails: 0
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin() {
        const isItHeads = Math.floor(Math.random() * 2);
        this.setState(prevState => {
            return {
                headsOrTails:isItHeads,
                headsCounter: isItHeads === 0 ? prevState.headsCounter + 1 : prevState.headsCounter,
                tailsCounter: isItHeads === 1 ? prevState.tailsCounter + 1 : prevState.tailsCounter
            }

        })
    }

    render() {
        const {headsCounter, tailsCounter, headsOrTails} = this.state;
        const totalTosses = headsCounter + tailsCounter;
        return (
            <div>
                <h1>Let's flip a Coin</h1>
                <Coin headsOrTails={headsOrTails}/>
                <button onClick={this.flipCoin}>Flip Coin</button>
                <Summary headsCounter={headsCounter} tailsCounter={tailsCounter}/>
            </div>
        )
    }
}

export default CoinApp;