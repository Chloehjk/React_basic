import './01JSX.css'

export function JSX() {
    return (
      <>
      <div>
        <div style={{width:'500px', backgroundColor:'grey', textAlign:'center'}}>
          {/* HTML과는 다르게 style을 객체처럼 사용, camelcase로 입력한다. */}
          <h1 className='name'>
            {/* HTML에서는 class지만, JSX는 className */}
              Hi there
          </h1>
        </div>
      </div>
      </>
    );
  };
/////////////////////////////////////////////////////////
export function JSX02() {
    return (
    <div>
      <Company />
      <Message />
    </div>
    );
  };

const Company = () => <h2>maso campus</h2>;
const Message = () => {
  return (
    <p>this is react</p>
  );
};
////////////////////////////////////////////////////////