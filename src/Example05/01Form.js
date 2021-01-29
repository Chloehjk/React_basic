import React, { useState } from 'react';
 
export default function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // 1. form에서 submit 할 때마다 리프레시 되는 것
    const onSubmit1 = () => {
        alert('로그인 됐습니다.');
    }

    // 2. form에서 엔터 칠 때, 리프레시 되지 않도록
    const onSubmit2 = (event) => {
        event.preventDefault();
        console.log(username,password);
    };

    return (
        <div className='container'>
            <form onSubmit={onSubmit1}>
                <input 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)}/><br/>
                <input 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type='submit'>로그인</button>
            </form>
        </div>  
        )
};