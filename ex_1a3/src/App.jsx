import { useState } from 'react'
import './App.css';
import Button from './components/Button';

function App() {
	const [counter, setCounter] = useState(0);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isContentToShow, setIsContentToShow] = useState(false);

	function decreaseCounter() {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	}

	function increaseCounter() {
		setCounter(counter + 1);
	}

	function resetCounter() {
		setCounter(0);
	}

	function toggleIsDarkMode() {
		setIsDarkMode(!isDarkMode);
	}

	function toggleIsContentToShow() {
		setIsContentToShow(!isContentToShow);
	}

	return (
		<div className={`${isDarkMode ? "dark-mode" : "light-mode"} container`}>
			<div class="counter-container">
				<p>Contador super tecnológico: {counter}</p>
				<Button onClick={increaseCounter} displayText="Incrementar" />
				<Button onClick={decreaseCounter} displayText="Decrementar" />
				<Button onClick={resetCounter} displayText="Resetar" />
			</div>
			<div>
				<Button
					onClick={toggleIsContentToShow}
					displayText={`${isContentToShow ? "Ocultar" : "Mostrar"} conteúdo`}
				/>
				<p> {
					isContentToShow ?
						"Conteúdo legal muito maneiro 👍" :
						"🙈"
				}
				</p>
			</div>
			<div>
				<Button
					onClick={toggleIsDarkMode}
					displayText={`Mudar para tema ${isDarkMode ? 'claro' : 'escuro'}`}
				/>
				<p>{isDarkMode ? "Modo Escuro" : "Modo Claro"}</p>
			</div>
		</div>
	)
}

export default App
