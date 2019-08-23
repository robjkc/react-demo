import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BasicCounter from './BasicCounter';
import HookCounter from './HookCounter';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <Button variant="primary" onClick={handleClick}>Click Me!</Button>
            <p>You clicked {count} times</p>
            <BasicCounter increment={2}></BasicCounter>
            <HookCounter increment={2}></HookCounter>
        </div>
    );
}

export default Counter;