import React, {useState} from 'react';

export class ClassComponent01 extends React.Component {
    render() {
        return (
            <>
            <div>테스트</div>
            <div><a href='#'>테스트2</a></div>
            </>
        );
    }
};
//////////////////////////////////////////////////////////////////

export class ClassComponent02 extends React.Component {
    render() {
        const name = '리액트'
        return <div>{name}</div>
    };
};
//////////////////////////////////////////////////////////////////

export class ClassCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0
      };
    }
    render() {
      const { number } = this.state; // state 를 조회할 때에는 this.state 로 조회합니다.
      return (
        <div>
          <h1>{number}</h1>
          <button
            // onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
            onClick={() => {
              // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
              this.setState({ number: number + 1 });
            }}
          >
            +1
          </button>
        </div>
      );
    };
  };
//////////////////////////////////////////////////////////////////

export function FunctionCounter () {
    
    const [count, setCount] = useState(0);
    const plusOne = () => {
        setCount(count+1)
    };
    return (
        <>
        <h1>{count}</h1>
        <button onClick={plusOne}>+1</button>
        </>
    );
};