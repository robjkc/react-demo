import React from 'react';
import GroceryList from './GroceryList';
import { getGroceryList } from '../model/GroceryModel';

function Groceries() {
    return (
        <div>
            <GroceryList list={getGroceryList}></GroceryList>
        </div>
    );
}

export default Groceries;