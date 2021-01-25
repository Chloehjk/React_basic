import './04JSX+JavaScript.css'

export default function JSXJS() {
    return(
        <>
        <Book />
        </>
    )
}

const Book = () => {
    return (
        <>
        <div id="book">
            <img className='cover' src="http://image.kyobobook.co.kr/images/book/large/176/l9791160023176.jpg" />
            <div className='title'>제목 : 주린이가 가장 알고 싶은 최다질문 TOP 77</div>
            <div className='author'>작가 : 염승환</div>
        </div>
        </>
    );
};
