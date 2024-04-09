document.getElementById('check').onclick = function () {
	const input = document.getElementById('textarea').value
	let array = input.split(' ')
	let sort_array = array.sort((a, b) => a.length - b.length)
	let select_longest_word = sort_array.slice(-1)
	console.log(select_longest_word.toString().length)

	return (document.getElementById(
		'ans'
	).innerHTML = `Longest word = ${select_longest_word}, length = ${
		select_longest_word.toString().length
	}`)
}
