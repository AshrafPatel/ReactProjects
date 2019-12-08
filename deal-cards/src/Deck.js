import React,{Component} from "react"
import axios from "axios"
import Card from "./Card"
import "./Deck.css"

const BASE_URL = "https://deckofcardsapi.com/api/deck/"
class Deck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deck: null,
            drawn: []
        }
        this.getCard = this.getCard.bind(this)
    }

    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            let cardRes = await axios(`${BASE_URL}${id}/draw/`)
            if (!cardRes.data.success) {
                throw new Error("No cards remaining")
            }
            let card = cardRes.data.cards[0]
            this.setState(prevState => ({
                drawn: [
                    ...prevState.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch(err) {
            alert(err)
        }
    }

    async componentDidMount() {
        let deck = await axios.get(`${BASE_URL}new/shuffle/`)
        console.log(deck.data)
        this.setState({
            deck: deck.data
        })
    }

    render() {
        const cards = this.state.drawn.map(card => {
            return <Card key={card.id} image={card.image} name={card.name}/>
        })
        return (
            <div>
                <h1>♠ Card Dealer ♥</h1>
                <button className="deck_btn" onClick={this.getCard}>Get Card</button>
                <div className="card_area">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck