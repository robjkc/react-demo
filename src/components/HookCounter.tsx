import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

type MyProps = { increment: number };

function HookCounter(props: MyProps) {
    const [count, setCount] = useState<number>(0);

    function handleClick() {
        setCount(count + props.increment);
    }

    return (
        <div>
            <h2>Hook Counter</h2>
            <Button variant="primary" onClick={handleClick}>{count}</Button>
        </div>
    );
}

export default HookCounter;