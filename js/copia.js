$('#buscar-gif').click(function () {
    const pokemonName = $('#gif-text').val();
    const minName = pokemonName.toLowerCase()

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokedex/1`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(all).fail(error);


    function all(data) {
        console.log(data);

        const getPokemon = data.pokemon_entries;

        for (let i = 0; i < getPokemon.length; i++) {
            console.log(getPokemon[i].pokemon_species.name);;

        }


    }

    function error() {
        console.log('error');
    }


    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(response).fail(error);


    function response(data) {
        console.log(data);
        const name = data.name;
        console.log(name);

        const url = data.sprites.front_default;
        console.log(url);
        const image = "<img src='" + url + "'/>";

        const type = data.types[0].type.name;
        console.log(type);

        const abilities = data.abilities[0].ability.name;
        console.log(abilities);

        const abilitiesTwo = data.abilities[1].ability.name;
        console.log(abilitiesTwo);

        const speed = data.stats[0].stat.name + ': ' + data.stats[0].base_stat;
        console.log(speed);

        const specialDefense = data.stats[1].stat.name + ': ' + data.stats[1].base_stat;
        console.log(specialDefense);

        const specialAttack = data.stats[2].stat.name + ': ' + data.stats[2].base_stat;
        console.log(specialAttack);

        const defense = data.stats[3].stat.name + ': ' + data.stats[3].base_stat;
        console.log(defense);

        const attack = data.stats[4].stat.name + ': ' + data.stats[4].base_stat;
        console.log(attack);

        const hp = data.stats[5].stat.name + ': ' + data.stats[5].base_stat;
        console.log(hp);

        const pokemonContainer = $("#all-pokemon");
        pokemonContainer.append(name, image + "<br>" + type + "<br>" + abilities + "<br>" + abilitiesTwo +
            "<br>" + speed + "<br>" + attack + "<br>" + specialAttack + "<br>" + specialDefense +
            "<br>" + defense + "<br>" + hp);
    }

    function error() {
        console.log('error');
    }
});

var minName;

var pokemonContainer = $("#pokemons");
var zeros = "00";

var zero = "0";


for (var i = 1; i < 101; i++) {

    if (i < 10) {
        var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png">`);

        var namePokemon = $('<p>').text();

        pokemonContainer.append(picture, namePokemon);

    } else if (i <= 99) {
        var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png">`);


        pokemonContainer.append(picture);
    } else {
        var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);


        pokemonContainer.append(picture);
    }


}

$('#search-poke').click(function (e) {
    e.preventDefault();
    var pokemonName = $('#poke-text').val();
    minName = pokemonName.toLowerCase();
    getPokemon();
})

function getPokemon() {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(response).fail(error);
}



function response(data) {
    console.log(data);
    var name = data.name;
    console.log(name);

    var url = data.sprites.front_default;
    console.log(url);
    var image = "<img src='" + url + "'/>";

    var type = data.types[0].type.name;
    console.log(type);

    var abilities = data.abilities[0].ability.name;
    console.log(abilities);

    var abilitiesTwo = data.abilities[1].ability.name;
    console.log(abilitiesTwo);

    var speed = data.stats[0].stat.name + ': ' + data.stats[0].base_stat;
    console.log(speed);

    var specialDefense = data.stats[1].stat.name + ': ' + data.stats[1].base_stat;
    console.log(specialDefense);

    var specialAttack = data.stats[2].stat.name + ': ' + data.stats[2].base_stat;
    console.log(specialAttack);

    var defense = data.stats[3].stat.name + ': ' + data.stats[3].base_stat;
    console.log(defense);

    var attack = data.stats[4].stat.name + ': ' + data.stats[4].base_stat;
    console.log(attack);

    var hp = data.stats[5].stat.name + ': ' + data.stats[5].base_stat;
    console.log(hp);

    var weight = data.weight;
    console.log(weight / 10 + "kg");

    var height = data.height;
    console.log(height / 10 + "m");

    var identificador = data.id;
    console.log(identificador);


    var $pname = $('<p/>').addClass('infoPoke').text(name);

    var $ptype = $('<p/>').addClass('infoPoke').text(type);

    var $pabilities = $('<p/>').addClass('infoPoke').text(abilities);

    var $pabilities2 = $('<p/>').addClass('infoPoke').text(abilitiesTwo);

    var $pspeed = $('<p/>').addClass('infoPoke').text(speed);

    var $pspecialDefense = $('<p/>').addClass('infoPoke').text(specialDefense);

    var $pspecialAttack = $('<p/>').addClass('infoPoke').text(specialAttack);

    var $pdefense = $('<p/>').addClass('infoPoke').text(defense);

    var $pattack = $('<p/>').addClass('infoPoke').text(attack);

    var $php = $('<p/>').addClass('infoPoke').text(hp);

    var $pweight = $('<p/>').addClass('infoPoke').text(weight);

    var $pheight = $('<p/>').addClass('infoPoke').text(height);

    var $pidentificador = $('<p/>').addClass('infoPoke').text(identificador);



    pokemonContainer.append(image, $pname, $ptype, $pabilities, $pabilities2, $pspeed, $pspecialDefense,
        $pspecialAttack, $pdefense, $pattack, $php, $pweight, $pheight, $pidentificador);
}

function error() {
    console.log('error');
}