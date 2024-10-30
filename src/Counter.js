import React from 'react';

export function Counter(){
    const [count, setCount] = React.useState(0);

    return <a href="#">Count: {count}</a>
}