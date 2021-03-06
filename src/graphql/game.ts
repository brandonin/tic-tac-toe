import gql from 'graphql-tag';

const query = gql`
    query GetGame($gameId: String!) {
        game(where: { id: $gameId }) {
            id
            whosTurn {
                id
                name
                symbol
            }
            users {
                id
                name
                symbol
                score {
                    id
                    value
                }
            }
            board {
                id
                squares {
                    id
                    value
                    position
                    createdAt
                }
            }
        }
    }
`;

export default query;
