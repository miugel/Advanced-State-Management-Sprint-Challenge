import React, {useState} from 'react';

const Form = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameOnChange = event => {
        setName(event.target.value);
    };

    const ageOnChange = event => {
        setAge(event.target.value);
    };

    const heightOnChange = event => {
        setHeight(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();

        setName('');
        setAge('');
        setHeight('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label for='name'>Name</label>
            <input type='text' name='name' value={name} onChange={nameOnChange}/>
            <label for='age'>Age</label>
            <input type='text' name='age' value={age} onChange={ageOnChange}/>
            <label for='height'>Height</label>
            <input type='text' name='height' value={height} onChange={heightOnChange}/>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;