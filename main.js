const getResidents = document.querySelector('#residents')
const createHeader = document.createElement('h2')

function click() {
    console.log('button clicked')

    axios
        .get('https://swapi.dev/api/planets/?search=alderaan')
        .then(function (res) {
            console.log(res.data.results[0].residents)
            for (let i = 0; i < res.data.results[0].residents.length; i++) {
                axios
                    .get('https://swapi.dev/api/people/:id/')
                    .then(function (res) {
                        // createHeader.appendChild(`${residents[i]}`)
                        console.log(res.data.results[i].name)
                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
}

getResidents.addEventListener("click", click)