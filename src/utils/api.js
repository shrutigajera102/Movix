import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWZhYjIzNzRiNjA5MDE2YTdkNzkwZTVmOTMxN2RkOSIsInN1YiI6IjY1YjIyZmRkYTgwMjM2MDE1MGFlN2YyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HBOO0brdNRF8Suwjo49MmrAgqYO4a_7ReQkceiJihFY"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};