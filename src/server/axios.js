import axios from "axios";



const options = {
    method: 'GET',
    url: 'https://url-link-shortener.p.rapidapi.com/v1/domains',
    params: { orderDir: 'desc', limit: '100', orderBy: 'createdAt' },
    headers: {
        'x-rapidapi-key': '87e88f6021mshb347600e21d5a21p1d60afjsn83f9ab198fc1',
        'x-rapidapi-host': 'url-link-shortener.p.rapidapi.com'
    }
};


axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});