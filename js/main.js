var minName;
var pokemonContainer = $("#pokemons");
var zeros = "00";
var zero = "0";

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=806`,
    type: 'GET',
    datatype: 'json',
    crossDomain: true
}).done(pokemon).fail(mistake);


function pokemon(data) {
    for (var i = 1; i < 807; i++) {
        if (i < 10) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png">`);
            var paragraph = $('<p>').text(data.results[i - 1].name);

            pokemonContainer.append(picture, paragraph);
        } else if (i <= 99) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png">`);
            //console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        } else {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
            // console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        }
    }
};

function mistake() {
    console.log("Error");
};


$('#search-poke').click(function (e) {
    e.preventDefault();
    var pokemonName = $('#poke-text').val();
    minName = pokemonName.toLowerCase();
    getPokemon();

    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
});

function getPokemon() {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(response).fail(error);
};

function response(data) {
    var name = data.name;
    var url = data.sprites.front_default;
    var image = `<img src="${url}/>`;
    var type = data.types[0].type.name;
    var abilities = data.abilities[0].ability.name;
    var abilitiesTwo = data.abilities[1].ability.name;
    var speed = data.stats[0].base_stat;
    var specialDefense = data.stats[1].base_stat;
    var specialAttack = data.stats[2].base_stat;
    var defense = data.stats[3].base_stat;
    var attack = data.stats[4].base_stat;
    var hp = data.stats[5].base_stat;
    var weight = data.weight;
    var totalWeight = weight / 10 + "kg";
    var height = data.height;
    var totalHeight = height / 10 + "m";
    var identificador = data.id;

    var $pidentificador = `# ${identificador}`;
    var $pname = `${name}`;
    var $ptype = `${type}`;
    var $pabilities = `ABILITIES: ${abilities}, ${abilitiesTwo}`;
    var $pspeed = `SPEED: ${speed}`;
    var $pspecialDefense = `SP DEF: ${specialDefense}`;
    var $pspecialAttack = `SP ATK: ${specialAttack}`;
    var $pdefense = `DEFENSE: ${defense}`;
    var $pattack = `ATTACK: ${attack}`;
    var $php = `HP: ${hp}`;
    var $pweight = `WEIGHT: ${totalWeight}`;
    var $pheight = `HEIGHT: ${totalHeight}`;
    $('#exampleModalLabel').html($pname);
    $('#profile-photo').html(image);
    $('#poke-id').html($pidentificador);
    $('#hp').html($php);
    $('#attack').html($pattack);
    $('#defense').html($pdefense);
    $('#speed').html($pspeed);
    $('#sp-atk').html($pspecialAttack);
    $('#sp-def').html($pspecialDefense);
    $('#type').html("TYPE: " + "" + $ptype);
    $('#abilities').html($pabilities);
    $('#weight').html($pweight);
    $('#height').html($pheight);

};

function error() {
    alert("Error al cargar la página");
};