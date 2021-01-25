export default function JSXCSS() {    
    const moviename = 'Soul';
    const director = 'Pete Docter';
    return(
        <>
        <div style={{width:'350px', height:'450px', backgroundColor:'white', border:'grey 1px solid', textAlign:'center'}}>
            <img 
            src="https://movie-phinf.pstatic.net/20210107_160/1609984702837oNdmw_JPEG/movie_image.jpg"
            style={{width:'300px', height:'400px'}}
            />
            <div>movie : {moviename}</div>
            <div>director : {director}</div>
        </div>
        </>
    )
};