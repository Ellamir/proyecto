
import axios from 'axios';
import store from '../store/store';

export function conexionApi() {
    axios.get('https://www.boardgameatlas.com/api/search?client_id=3Xe9zqKAxF&name=labyrinth') // &string
    .then(response=>{
        store.dispatch('recibidoInfojuego',response.data.data);
    }).catch(error => {
        console.error(error);
    })
}