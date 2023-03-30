const button = document.getElementById("convert-button")
const select = document.getElementById("select-courrency")

const dolar = 5.14
const euro = 5.57
const bitcoin = 0.00063

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const courrencyValueText = document.getElementById('courrency-value-text');


    if (select.value === "US$ Dólar Americano") {
        courrencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }

    if (select.value === "€ Euro") {
        courrencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }

    if (select.value === "Bitcoin") {
        courrencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin);
    }


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);
};

changeCourrency = () => {
    const courrencyName = document.getElementById("courrency-name")
    const courrencyImg = document.getElementById("courrency-image")

    if (select.value === "€ Euro") {
        courrencyName.innerHTML = "Euro"
        courrencyImg.src = "./assets/Euro.png"
    }

    if (select.value === "US$ Dólar Americano") {
        courrencyName.innerHTML = "Dólar Americano"
        courrencyImg.src = "./assets/eua.png"
    }

    if (select.value === "Bitcoin") {
        courrencyName.innerHTML = "Bitcoin"
        courrencyImg.src = "./assets/Bitcoin.png"
    }
    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener('change', changeCourrency)
