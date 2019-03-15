import React from "react"

import "./Card.css"

const HIDDEN_SYMBOL = "❓"

const Card = ({ card, feedback, onClick }) => (
	<div
		className={`card ${feedback}`}
		style={{ width: "30px" }}
		onClick={() => onClick(card)}
	>
		<span className="symbol">
			{feedback === "hidden" ? HIDDEN_SYMBOL : card}
		</span>
	</div>
)

export default Card
