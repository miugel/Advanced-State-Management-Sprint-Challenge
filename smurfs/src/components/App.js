import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/Actions';
import Smurfs from './Smurfs';

const App = props => {
	return (
		<div className="App">
			<button onClick={() => props.getData()}>Fetch Smurfs</button>
			<Smurfs/>
		</div>
	);
};

export default connect(null, {getData})(App);
