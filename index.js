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
            i: searchTerm
        }
    });

    console.log(response.data);
};

const input = document.querySelector('input');
let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1000)
};
input.addEventListener('input', onInput);