// import { result } from "lodash";

const apiUrl = 'https://api.tvmaze.com/';


const main = async () => fetch(`${apiUrl}shows`).then((result) => result.json()).then((data) => data.slice(0, 30));


//const GetScores = async (gameIndex) => fetch(`${ApiUrl1}/games/${gameIndex}/scores`).then((response) => response.json());

export default main;