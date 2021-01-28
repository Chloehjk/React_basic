export function ClickEvent1 () {
    return(
        <>
        <button onClick={()=> alert('hi!')}>Click ME!</button>
        </>
    );
};
///////////////////////////////////////////////////
export function ClickEvent2() {
    const msg = () => {
        alert('hi')
    }
    return(
        <>
        <button onClick={msg}>Click ME!</button>
        </>
    );
};