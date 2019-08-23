import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <Button variant="primary" onClick={handleClick}>Click Me!</Button>
            <p>You clicked {count} times</p>
        </div>
    );
}

export default Counter;