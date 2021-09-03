document.getElementById('showingResults').style.display = 'none';
document.getElementById('errorResults').style.display = 'none';
const searchBooks = () => {
	const searchField = document.getElementById('search-field');
	const searchFieldTxt = searchField.value;
	document.getElementById('showingResults').style.display = 'none';
	document.getElementById('errorResults').style.display = 'none';

	//clear value
	searchField.value = '';

	fetch(`https://openlibrary.org/search.json?q=${searchFieldTxt}`)
		.then((res) => res.json())
		.then((data) => {
			diplayBooks(data.docs, data.numFound);
		});
};
const diplayBooks = (books, num) => {
	// console.log();
	if (books.length > 0) {
		const bookResults = document.getElementById('books-results');
		bookResults.innerHTML = '';
		document.getElementById('showingResults').style.display = 'block';

		const totalResults = document.getElementById('total-results');

		totalResults.innerText = `${num}`;

		const myBooks = books.slice(0, 20);
		// console.log(myBooks);
		// console.log(books);
		// console.log(books);
		myBooks.forEach((book) => {
			// console.log(book.docs.length);

			const div = document.createElement('div');
			div.classList.add('col');
			div.innerHTML = `<div  class="card">
						<img
							src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
							class="img-fluid"
						/>
					<div class="card-body">
						<h5 class="card-title">Book title: ${book.title}</h5>
						<p class="card-text">
							Author name: ${book.author_name[0]}
						</p>
						<p class="card-text">
						 First published: ${book.first_publish_year}
						</p>
					</div>
				</div>`;
			bookResults.appendChild(div);
		});
	} else {
		document.getElementById('errorResults').style.display = 'block';
		document.getElementById('showingResults').style.display = 'none';
		bookResults.innerHTML = '';
	}
};
