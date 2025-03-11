import { useState } from 'react'
import './App.css'

function App() {
	const answers = ["Sim", "Não", "Talvez", "Depende"]
	let answer = ""
	let [question, setQuestion] = useState("")

	function chooseAnswer() {
		answer = answers[Math.floor(Math.random() * answers.length)]
	}

	function displayAnswer() {
		if (question === "") {
			alert("ERRO: Insira uma pergunta")
			return
		}

		chooseAnswer()
		alert(`${question}\n${answer}`)
	}

	return (
		<div className="container">
			<input
				placeholder="Insira sua pergunta"
				value={question}
				onChange={(e) => setQuestion(e.target.value)}
			>
			</input>
			<button onClick={displayAnswer}>Perguntar à bola 8</button>
		</div>
	)
}

export default App
