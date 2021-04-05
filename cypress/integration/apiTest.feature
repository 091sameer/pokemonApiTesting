Feature:Verify that the REST APIs of the Pokemon services provide the correct data

    Scenario Outline: Verify that the details of moves of Pikachu are provided by the REST API
        When The details of the Pokemon "Pikachu" are queried
        Then The response of the query is 200
        And The response contains the details of the moves of "Pikachu"
        And One of the moves of Pikachu is "thunder-punch"

        Examples:
            | Pokemon | Move          |
            | Pikachu | thunder-punch |

    Scenario Outline: Verify that we can receive Pikachu as a gift in the yellow game version of the Pokémon game
        When The details of the Pokemon "Pikachu" are queried
        Then The response of the query is 200
        And We can receive Pikachu as a gift in the yellow game version of the Pokémon game

        Examples:
            | Pokemon |
            | Pikachu |
