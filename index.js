// data requests
// http://www.omdbapi.com/?apikey=[513156eb]&
// poster requests
// http://img.omdbapi.com/?apikey=[513156eb]&
// api key
// 513156eb

const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '513156eb',
            s: searchTerm
        }
    });

    if (response.data.Error) {
        return [];
    }

    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async event => {
    const movies = await fetchData(event.target.value);
    
    for (let movie of movies) {
        const div = document.createElement('div');

        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
};
input.addEventListener('input', debounce(onInput, 500));