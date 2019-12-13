import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/Actions';

const Button = props => {
    return (
        <>
            <button onClick={() => props.getData()}>Fetch Smurfs</button>
        </>
    );
};

export default connect(null, {getData})(Button);