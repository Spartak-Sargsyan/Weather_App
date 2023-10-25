import React from 'react';

const Form = ({weatherMethod}) => {
    return (
        <form onSubmit={weatherMethod}>
            <input type="text" name="city" placeholder='city name' />
            <button>Получить погоду</button>
        </form>
    );
};

export default Form;