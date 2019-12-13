import React from 'react';
import {connect} from 'react-redux';

const Smurfs = props => {
    return (
        <div>
            {props.data.length === 0 ? <p>No smurfs fetched yet</p> : props.data.map(item => (
                <>
                    <h4>Smurf {item.id + 1}</h4>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.height}</p>
                </>
            ))}
        </div>
    );
};

// need jsx fragment?

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps)(Smurfs);