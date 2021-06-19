const board = document.querySelector('#board');
const colors = ['#50C878', '#006262', '#D20021', '#F7BD00', '#00F701', '#01007C', '#8D4E31']
const SQUARES_NUMBERS = 500;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
	const square = document.createElement('div')
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		return setColor(square)
	})
	// square.addEventListener('mouseover', setColor)
	square.addEventListener('mouseleave', () => {
		return removeColor(square)
	})
	// square.addEventListener('mouseleave', removeColor)

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor(element)
	element.style.backgroundColor = `${color}`
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
// function setColor(event) {
// 	const element = event.target
// 	const color = getRandomColor(element)
// 	element.style.backgroundColor = `${color}`
// 	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}
// function removeColor(event) {
// 	const element = event.target
// 	element.style.backgroundColor = '#1d1d1d'
// 	element.style.boxShadow = `0 0 2px #000`
// }

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)

	return colors[index]
}

// function getRandomColor() {
// 	return colors[Math.floor((Math.random() * colors.length))]
// }
