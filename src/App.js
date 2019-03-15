import React, { Component } from "react"
import "./App.css"
import GuessCount from "./GuessCount"
import Card from "./Card"
import emoji from "emoji-name-map"

class App extends Component {
	render() {
		return (
			<div className="memory">
				<GuessCount guesses={0} />
				<Card card={emoji.get("smiley")} feedback="hidden" />
				<Card card={emoji.get("cat")} feedback="justMatched" />
				<Card card={emoji.get("star")} feedback="justMissMatched" />
				<Card card={emoji.get("comet")} feedback="visible" />
				<Card card={emoji.get("chess_pawn")} feedback="hidden" />
				<Card card={emoji.get("shamrock")} feedback="justMatched" />
			</div>
		)
	}
}

export default App
