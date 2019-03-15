import React, { Component } from "react"
import "./App.css"
import GuessCount from "./GuessCount"
import Card from "./Card"
import emoji from "emoji-name-map"

class App extends Component {
	handleCardClick(card) {
		console.log(card, "clicked")
	}

	render() {
		const won = new Date().getSeconds() % 2 === 0

		return (
			<div className="memory">
				<GuessCount guesses={0} />
				<Card
					card={emoji.get("smiley")}
					feedback="hidden"
					onClick={this.handleCardClick}
				/>
				<Card
					card={emoji.get("cat")}
					feedback="justMatched"
					onClick={this.handleCardClick}
				/>
				<Card
					card={emoji.get("star")}
					feedback="justMismatched"
					onClick={this.handleCardClick}
				/>
				<Card
					card={emoji.get("comet")}
					feedback="visible"
					onClick={this.handleCardClick}
				/>
				<Card
					card={emoji.get("chess_pawn")}
					feedback="hidden"
					onClick={this.handleCardClick}
				/>
				<Card
					card={emoji.get("shamrock")}
					feedback="justMatched"
					onClick={this.handleCardClick}
				/>
				{won && <p> GAGNE !</p>}
			</div>
		)
	}
}

export default App
