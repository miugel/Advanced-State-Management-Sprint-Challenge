import React from 'react';
import {connect} from 'react-redux';

const Smurfs = props => {
    return (
        <div>
            {props.fetching && <p>Loading</p>}
            {props.data.length === 0 ? <p>No smurfs fetched yet</p> : props.data.map(item => (
                <div key={item.id}>
                    <h3>Smurf {item.id + 1}</h3>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Height: {item.height}</p>
                </div>
            ))}
            {props.error && <p>There was an error</p>}
        </div>
    );
};

// need jsx fragment?

const mapStateToProps = state => {
    return {
        data: state.data,
        fetching: state.fetching,
        error: state.error
    }
};

export default connect(mapStateToProps)(Smurfs);