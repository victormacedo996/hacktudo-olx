function getData() {
    var items = { list: [], valorTotal: 0 };
    var counter = 1;

    while (getElementByXpath(`//*[@id='mount_0_0_Yj']/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[${counter}]/div/div/div/div/div/div/div[2]/div`) != null) {
        elemento = getElementByXpath(`//*[@id='mount_0_0_Yj']/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[${counter}]/div/div/div/div/div/div/div[2]/div`);

        var qtd = treatNumber(getElementByXpath("div[2]/span/span/span", elemento).textContent.split("·")[1].trim());

        if (isNaN(qtd)) {
            console.log(counter - 1);
        }

        // "Barra da tijuca".toUpperCase().contains("barra da tijuca".toUpperCase());

        items.list.push({
            title: getElementByXpath("div[1]/h2/span/span/span/a/span", elemento).textContent,
            qtd: qtd,
        });

        items.valorTotal += parseInt(qtd);
        counter++;
    }

    return items;
}

function getElementByXpath(path, element = document) {
    return document.evaluate(path, element, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getBairros() {
    var items = [];
    var counter = 1;

    while (getElementByXpath(`//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[${counter}]/td[2]/a`) != null) {
        elemento = getElementByXpath(`//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[${counter}]/td[2]/a`);

        items.push({
            nome: elemento.textContent,
        });

        counter++;
    }

    return items;
}

function treatNumber(valor) {
    if (valor.contains(',')) {
        return `${valor.replace(',', '').replace('mil membros', '').trim()}00`;
    } else if (valor.contains('mil membros')) {
        return `${valor.replace('mil membros', '').trim()}000`;
    } else if (valor.contains('membros')) {
        return `${valor.replace('membros', '').trim()}`;
    } else if (valor.contains('membro')) {
        return `${valor.replace('membro', '').trim()}`;
    }
}