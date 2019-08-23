import React from 'react';

const list = ['Milk', 'Cereal', 'OJ'];

const GroceryList = () => (
    <ul>
        {list.map(function (item) {
            return <li key={item}>{item}</li>;
        })}
    </ul>
);

export default GroceryList;