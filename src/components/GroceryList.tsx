import React from 'react';
import { getGroceryList } from '../model/GroceryModel';

const list = [
    { name: 'Milk', price: 1.00 },
    { name: 'OJ', price: 2.00 },
    { name: 'Cereal', price: 3.00 },

];

type MyProps = {
    list: any;
}

function GroceryList(props: MyProps) {
    const list: any = props.list();

    console.log('list=' + list);
    return (
        <ul>
            {list.map(function (item: any) {
                return <li key={item.name}>{item.name} - ${item.price}</li>;
            })}
        </ul>
    );
}

export default GroceryList;