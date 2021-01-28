import { useState } from 'react';

export default function ChangeEvent (){

    const [state, setState] = useState("");

    return(
        <>
        <input onChange={(e) => setState(e.target.value)} />
        <div>{state}</div>
        </>
    );
};
