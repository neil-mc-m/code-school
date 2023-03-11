let myContent = document.getElementById('app');

async function getBreweryData () {
    let response = await fetch('https://api.openbrewerydb.org/breweries?by_city=dublin&per_page=25', {mode: 'cors'})
    return await response.json();
}

getBreweryData().then(function (breweries)  {
    let htmlLinks = ''
    for (let brewery of breweries) {
        htmlLinks = htmlLinks + `<a class="brewery-link" href="${brewery.website_url}" target="_blank" data-type="${brewery.brewery_type}">${brewery.name}</a><br/>`;
    }

    myContent.innerHTML = htmlLinks;

    let links = document.getElementsByClassName('brewery-link');
    for (let link of links) {
        if (link.dataset.type !== 'micro') {
            link.style.visibility = 'hidden';
        }
    }
});



