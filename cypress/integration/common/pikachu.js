import { expect } from "chai";
import {
    Given,
    Then,
    When,
} from "cypress-cucumber-preprocessor/steps";
var pikachu_response = null

Given("The details of the Pokemon {string} are queried", function (pokemon) {
    switch (pokemon) {
        case "Pikachu":
            cy.request({
                method: 'GET',
                url: '/pokemon/pikachu', // baseUrl is prepended to url
            }).then((response) => {
                pikachu_response = response
            })
            break;
        default:
            throw "Error: Please check the name of the Pokemon"
    }
});

Given("The response of the query is {int}", function (val) {
    switch (val) {
        case 200: expect(pikachu_response.status).to.eq(200)
            break
        default:
        //currently default code is 200 which can be changed as required
        case 200: expect(pikachu_response.status).to.eq(200)
    }
});

Given("The response contains the details of the moves of {string}", function (pokemon) {
    switch (pokemon) {
        case "Pikachu":
            let response = pikachu_response.body

            //here we first check that the query response is of Pikachu.
            expect(pikachu_response.body.name).to.eq("pikachu")

            //then we check if the "move" node is of length 81 and is not empty
            expect(response.moves.length).to.equal(81);
            break;
        default:
            throw "Error: Please check the name of the Pokemon"
    }
});

Given("One of the moves of Pikachu is {string}", function (move) {
    let response = pikachu_response.body.moves
    let moves_contains_move = false //flag assigned to false and then we check if the required "move" is found
    for (var key in response) {
        if (response.hasOwnProperty(key)) {
            let str = JSON.stringify(response[key]);
            moves_contains_move = moves_contains_move || str.includes(`"move":{"name":"${move}"`)
        }
    }
    expect(moves_contains_move).to.eq(true)
});

Given("We can receive Pikachu as a gift in the yellow game version of the Pokémon game", function () {
    let response = pikachu_response.body.game_indices
    let pikachu_as_gift_yellow_game_version = false
    for (var key in response) {
        if (response.hasOwnProperty(key)) {
            if (response[key].version.name === "yellow") { pikachu_as_gift_yellow_game_version = true }
        }
    }
    expect(pikachu_as_gift_yellow_game_version).to.eq(true)
});
