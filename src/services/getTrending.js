import { API_KEY, API_URL } from "./settings";

export default function getTrending() {
    const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(response => response.data);
}
