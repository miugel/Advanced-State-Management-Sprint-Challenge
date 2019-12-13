import axios from 'axios';

export const getData = () => dispatch => {
    dispatch({type: 'FETCH'});
    axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            dispatch({type: 'SUCCESS', payload: response.data});
        })
        .catch(error => {
            dispatch({type: 'ERROR', payload: error});
        });
};

export const postData = () => {
    
}