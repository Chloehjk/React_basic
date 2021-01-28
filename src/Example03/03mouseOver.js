import { useState } from 'react';

export default function MouseEvent () {
    const [state, setState] = useState('');
    const onBox = () =>{
        setState('Tada!')
    };
    const outBox = () =>{
        setState('')
    };
    return (
        <>
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor :'yellow',
            textAlign : 'center',
            lineHeight : '80px',
            color : 'red'
        }}
        onMouseOver={onBox}
        onMouseOut={outBox}>
            {state}
        </div>
        </>
    );
};