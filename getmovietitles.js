const https = require('https');

function fetchData(substr) {
    return new Promise((resolve, reject) => {
        let _pageNum = 1;
        let _url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${_pageNum}`;
        fetch(_url)
            .then(function (data) {
                let _movies = data.data;
                let _totalPages = data.total_pages;
                let _sortedArray = [];
                for (let _index = 0; _index < _movies.length; _index++) {
                    _sortedArray.push(data.data[_index].Title);
                }
                if (_totalPages > 1) {
                    for (let _index = 2; _index <= _totalPages; _index++) {
                        let newPage = _index;
                        let _nextUrl = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${newPage}`;

                        fetch(_nextUrl)
                            .then(function (response) {

                                for (let i = 0; i < response.length; i++) {
                                    _sortedArray.push(json.data[i].Title);
                                }

                                if (_index === _totalPages)
                                    resolve(_sortedArray.sort());
                            });
                    }
                }
                else
                    resolve(_sortedArray.sort());
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}



//primary function 
function getMovieTitles(substr) {
    return fetchData(substr);
}

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.on('data', (data) => {
                let d = JSON.parse(data.toString());
                return resolve(d);
            });
        });
    });
}

getMovieTitles("spiderman")
    .then((data) => {
        console.log(data)
    });