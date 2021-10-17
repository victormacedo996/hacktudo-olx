var fs = require('fs');
var contains = require("string-contains");
var _ = require("lodash");

function remover_acentos_espaco(str) {
    return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
}

function renderGruposAsync() {
    const data = fs.readFileSync('./grupos.json',
        { encoding: 'utf8', flag: 'r' });

    return JSON.parse(data);
}

function renderBairrosAsync() {
    const data = fs.readFileSync('./bairros.json',
        { encoding: 'utf8', flag: 'r' });

    return JSON.parse(data);
}

function writeJsonTreat(data) {
    fs.writeFile('./treat.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) { console.error(err); return; };
        console.log("File has been created");
    });
}

function treatNumber(valor) {
    if (contains(valor, ',')) {
        return parseInt(`${valor.replace(',', '').replace('mil membros', '').trim()}00`);
    } else if (contains(valor, 'mil membros')) {
        return parseInt(`${valor.replace('mil membros', '').trim()}000`);
    } else if (contains(valor, 'membros')) {
        return parseInt(`${valor.replace('membros', '').trim()}`);
    } else if (contains(valor, 'membro')) {
        return parseInt(`${valor.replace('membro', '').trim()}`);
    }
}

function init() {
    var bairros = renderBairrosAsync();
    var grupos = renderGruposAsync();
    var write = { bairros: [] };
    var gruposSelecionados = [];

    bairros.forEach(bairro => {
        var nomeBairro = remover_acentos_espaco(bairro.nome);

        var item = { nomeBairro: "", abrangencia: 0 };

        grupos.map((grupo, idx) => {
            var title = remover_acentos_espaco(grupo.title);

            if (contains(_.toUpper(title), _.toUpper(nomeBairro))) {
                if (item.nomeBairro == "") {
                    item.nomeBairro = bairro.nome;
                }

                item.abrangencia += treatNumber(grupo.qtd);

                gruposSelecionados.push(idx);
            }
        });

        if (item.nomeBairro != "" && item.abrangencia != 0) {
            write.bairros.push(item);
        }
    });

    // OUTROS
    var abrangenciaOutros = 0;

    grupos.map((item, idx) => {
        if (!gruposSelecionados.filter((value) => value == idx).length) {
            abrangenciaOutros += treatNumber(item.qtd);
        }
    });

    write.bairros.push({ nomeBairro: "OUTROS", abrangencia: abrangenciaOutros });

    writeJsonTreat(write.bairros);
}

init();
