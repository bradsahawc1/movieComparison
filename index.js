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

const debounce = (func, delay = 1000) => {
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};

const onInput = debounce(event => {
    fetchData(event.target.value);
});
input.addEventListener('input', debounce(onInput, 500));