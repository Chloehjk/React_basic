import React, { useState } from 'react';
import data from './data';
import List from './List';
import './BasicProject01.css'

export default function BasicProject01() {
    const [friend, setFriend] = useState(data)
    return(
        <main>
            <section className='container'>
                <h3>{friend.length} birthdays today</h3>
                <List people={friend}/>
                <button onClick={()=>console.log('you clicked me')}>
                    clear all
                </button>
            </section>
        </main>
    );
};