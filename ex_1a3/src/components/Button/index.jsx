import React from 'react';

export default function Button({ displayText, onClick, className }) {
	return (
		<>
			<button className={className} onClick={onClick}>{displayText}</button>
		</>
	);
}
