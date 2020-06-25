
import axios from 'axios';

export async function apiCall(parameters) 
{
    // si bloquea, probar con los sgtes clientID cmWXMCeHRe LGM3nC4ZNT 3Xe9zqKAxF
    let api = 'https://www.boardgameatlas.com/api/search?client_id=LGM3nC4ZNT&';
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