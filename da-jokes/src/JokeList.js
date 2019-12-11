import React,{Component} from "react";
import axios from "axios"
import "./JokeList.css"
import Joke from "./Joke"
import { Scrollbars } from 'react-custom-scrollbars';
import uuid from "uuid/v4"
import FlipMove from 'react-flip-move';

const JOKE_BASE_URL = "https://icanhazdadjoke.com/"
class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false,
            setJokes: new Set()
        }
        this.handleClick = this.handleClick.bind(this)
    }

    async getJokes() {
        let jokes = []
        let setJokes = new Set()
        while (jokes.length < this.props.numJokesToGet) {
            let jokesRes = await axios.get(JOKE_BASE_URL, { headers: { Accept: "application/json" } });
            if (!this.state.setJokes.has(jokesRes.data.joke)) {
                setJokes.add(jokesRes.data.joke,
                jokes.push({
                    joke: jokesRes.data.joke,
                    votes: 0,
                    id: uuid()
                }))
            } else {
                console.log("Found duplicate", jokesRes.data.joke)
            }
        }
        this.setState(prevState => ({
            jokes: [...prevState.jokes, ...jokes],
            loading: false,
            setJokes: new Set([...prevState.setJokes, ...setJokes])
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes()
    }

    handleVotes(id, delta) {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(j => {
                return j.id === id ? {...j, votes: j.votes + delta} : j
            })
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    handleClick() {
        this.setState({ loading: true })
        this.getJokes()
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="spinner">
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                    <h1>...Loading</h1>
                </div>
            )
        }
        let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes)
        return (
            <div className="jokes">
                <div className="jokes_sidebar">
                    <h1 className="jokes_title">Joke Site</h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="Laugh-emoji"></img>
                    <button className="jokes_button" onClick={this.handleClick}>New Jokes</button>
                </div>
                <div className="jokes_list">
                    <Scrollbars 
                        renderThumbVertical={props => < div {...props} className="thumb_vertical" />}
                        renderTrackVertical={props => < div {...props} className="track_vertical" />}
                        autoHideTimeout={1000}
                        autoHide
                    >
                        <FlipMove>
                            {jokes.map(j => {
                                return <Joke joke={j.joke} 
                                            votes={j.votes} 
                                            key={j.id} 
                                            upVote={() => this.handleVotes(j.id, 1)}
                                            downVote={() => this.handleVotes(j.id, -1)}
                                            id={j.id}/>
                            })}
                        </FlipMove>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default JokeList