import { useEffect, useState } from 'react';

export default function UseEffect() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
//////////////////////////////매번 렌더링////////////////////////////////

    // useEffect(()=>{
    //     console.log('렌더링이 완료되었습니다!');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

/////////////////////////////마운트 될 때만/////////////////////////////////

    // useEffect(()=>{
    //     console.log('마운트 될 때만 실행됩니다')
    // },[]);

////////////////////////////특정 값이 업데이트 될 때만//////////////////////////////////

    useEffect(()=>{
        console.log(name)
    },[name]);

//////////////////////////////////////////////////////////////

    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <>
        <input onChange={onChangeName} />
        <input onChange={onChangeNickname} /> 
        <div>
            <h2>이름 : {name}</h2>
            <h2>닉네임 : {nickname}</h2>
        </div>
        </>
    );
};

