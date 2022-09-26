let myContent = document.getElementById('app');

async function getBreweryData () {
    let response = await fetch('https://api.openbrewerydb.org/breweries?by_city=dublin&per_page=25', {mode: 'cors'})
    return await response.json();
}

getBreweryData().then(function (breweries)  {
    let htmlLinks = ''
    for (let brewery of breweries) {
        htmlLinks = htmlLinks + `<a href="${brewery.website_url}" target="_blank">${brewery.name}</a><br/>`;
    }

    myContent.innerHTML = htmlLinks;
});

