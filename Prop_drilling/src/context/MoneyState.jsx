import React from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money = 1000;

    return (
        <MoneyContext.Provider value={{ money }}>
            {props.children}
        </MoneyContext.Provider>
    );
}

export default MoneyState;
