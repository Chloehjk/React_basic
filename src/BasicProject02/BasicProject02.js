import './BasicProject02.css';
import React, { useState } from 'react';
import cart from './image/shopping-cart.png';


export default function BasicProject02() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    const price1 = parseInt(16200);
    const price2 = parseInt(16200);
    const price3 = parseInt(13500);


    const plusOne1 = () => {
        setNum1(num1 + 1)
    };
    
    const minusOne1 = () => {
        setNum1(num1 - 1)
    };
    
    const plusOne2 = () => {
        setNum2(num2 + 1)
    };
    const minusOne2 = () => {
        setNum2(num2 - 1)
    };

    const plusOne3 = () => {
        setNum3(num3 + 1)
    };
    const minusOne3 = () => {
        setNum3(num3 - 1)
    };

    // 상품 개수 음수로 안떨어지게
    if (num1 <0) {setNum1(0)};
    if (num2 <0) {setNum2(0)};
    if (num3 <0) {setNum3(0)};

    return (
        <>
        <div id='topcontainer'>
            <div id='shoppinglist'>Shopping List</div>
            <div id='cartcontainer'>
                <img src={cart} id='cart' />
                <div id='circle'>{ num1 + num2 + num3 }</div>
            </div>
        </div>
        <div id='maincontainer'>
            <p>Your Bag</p>
            <div id='bookcontainer'>
                <div className='list'>
                    <div className='image'>
                        <img src='https://simage.kyobobook.co.kr/images/book/large/687/l9791195121687.jpg' />
                    </div>
                    <div className='info'>
                        <div className='book'>매출을 높이는 실전 구글 광고 마케팅</div>
                        <div className='description'>검색, 디스플레이, 유튜브를 활용한 리마케팅 광고</div>
                        <div id='price'><span>\</span>{price1}</div>
                    </div>
                    <div className='count'>
                        <div className='up' onClick={plusOne1}>
                            <img src='https://www.flaticon.com/svg/vstatic/svg/130/130906.svg?token=exp=1613444285~hmac=d5c9a3e8fd90b5cbc4faff8f706090a7' />
                        </div>
                        <div id='num1'>{ num1 }</div>
                        <div className='down' onClick={minusOne1}>
                            <img src='https://www.flaticon.com/svg/vstatic/svg/152/152415.svg?token=exp=1613444756~hmac=46aebd7ec09b00125c6333325ddd8a24' />
                        </div>
                    </div>
                </div>
                <div className='list'>
                    <div className='image'>
                        <img src='https://simage.kyobobook.co.kr/images/book/large/507/l9791196752507.jpg' />
                    </div>
                    <div className='info'>
                        <div className='book'>마켓4.0 그로스해킹</div>
                        <div className='description'>애자일/데이터 기반으로 진화한 디지털 마케팅 가이드</div>
                        <div id='price'><span>\</span>{price2}</div>
                    </div>
                    <div className='count'>
                        <div className='up' onClick={plusOne2}>
                            <img src='https://www.flaticon.com/svg/vstatic/svg/130/130906.svg?token=exp=1613444285~hmac=d5c9a3e8fd90b5cbc4faff8f706090a7' />
                        </div>
                        <div id='num1'>{ num2 }</div>
                        <div className='down' onClick={minusOne2}>
                            <img src='https://www.flaticon.com/svg/vstatic/svg/152/152415.svg?token=exp=1613444756~hmac=46aebd7ec09b00125c6333325ddd8a24' />
                        </div>
                    </div>
                </div>
                <div className='list'>
                    <div className='image'>
                        <img src='http://image.kyobobook.co.kr/images/book/xlarge/663/x9791195121663.jpg' />
                    </div>
                    <div className='info'>
                        <div className='book'>디지털마케팅 개론 4차 산업혁명 시대의 마케팅 가이드</div>
                        <div className='description'>애자일/데이터 기반으로 진화한 디지털 마케팅 가이드</div>
                        <div id='price'><span>\</span>{price3}</div>
                    </div>
                    <div className='count'>
                        <div className='up' onClick={plusOne3}>
                            <img src='https://www.flaticon.com/svg/vstatic/svg/130/130906.svg?token=exp=1613444285~hmac=d5c9a3e8fd90b5cbc4faff8f706090a7' />
                        </div>
                        <div id='num1'>{ num3 }</div>
                        <div className='down' onClick={minusOne3}>
                            <img src='https://www.flaticon.com/svg/vstatic/svg/152/152415.svg?token=exp=1613444756~hmac=46aebd7ec09b00125c6333325ddd8a24' />
                        </div>
                    </div>
                </div>
            </div>
            <div id='line'></div>
            <div id='total'> 
                <span>Total</span>
                <span>\{ num1*price1 + num2*price2 + num3*price3 }</span>
            </div>
        </div>
        </>
    )
};