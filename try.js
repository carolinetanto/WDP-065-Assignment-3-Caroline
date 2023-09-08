function getCountryData() {
    const countryInput = document.getElementById('countryInput').value;
  
    fetch(`https://covid-193.p.rapidapi.com/history?country=${countryInput}`, {
        method: 'GET',
        headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '64e5eec2ddmsh93ce568d77b4254p12f91bjsn3647df4b42ad'
        }
    })
    .then(response => response.json())
    .then(data => {
        const countryData = data.response[0];

        const activeCases = countryData.cases.active;
        const newCases = countryData.cases.new;
        const recoveredCases = countryData.cases.recovered;
        const totalCases = countryData.cases.total;
        const totalDeaths = countryData.deaths.total;
        const totalTests = countryData.tests.total;

        document.getElementById('activeCases').textContent = activeCases;
        document.getElementById('newCases').textContent = newCases;
        document.getElementById('recoveredCases').textContent = recoveredCases;
        document.getElementById('totalCases').textContent = totalCases;
        document.getElementById('totalDeaths').textContent = totalDeaths;
        document.getElementById('totalTests').textContent = totalTests;
    })
    .catch(error => {
        console.log(error);
        alert('An error occurred while fetching data.');
    });
}