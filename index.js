// data requests
// http://www.omdbapi.com/?apikey=[513156eb]&
// poster requests
// http://img.omdbapi.com/?apikey=[513156eb]&
// api key
// 513156eb

const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '513156eb',
            s: 'avengers'
        }
    });

    console.log(response.data);
};

fetchData();