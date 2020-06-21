
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