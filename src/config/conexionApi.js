import axios from 'axios';

export async function apiCall(parameters) 
{
    let api = 'https://www.boardgameatlas.com/api/search?client_id=3Xe9zqKAxF&';
    try 
    {
        const res = await axios.get(
            `${api}${parameters}`);
        return res
    } 
    catch (error) 
    {
        console.log(error);
    }
}



// import store from '../store/store';

// export function conexionApi() {
//     axios.get('https://www.boardgameatlas.com/api/search?client_id=3Xe9zqKAxF&name=labyrinth') // &string
//     .then(response=>{
//         store.dispatch('recibidoInfojuego',response.data.data);
//     }).catch(error => {
//         console.error(error);
//     })
// }