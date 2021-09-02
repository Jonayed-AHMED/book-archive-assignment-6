const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    // clear data
    
    searchField.value = '';

    // load data

    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));

}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (docs.length === 0) {
        alert("No result found");
    }
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('cols');
        div.innerHTML = `
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fs-4 text-dark">${doc.title}</h5>
                    <h2 class="card-text fs-6">Auther : ${doc.author_name}</h2>
                    <h2 class="card-text fs-6">Publisher : ${doc.publisher}</h2>
                    <h2 class="card-text fs-6">First Publish Year : ${doc.first_publish_year}</h2>
                    <p class="card-text"></p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);

    })
}

