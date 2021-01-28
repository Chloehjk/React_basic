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
      const { number } = this.state;
      return (
        <div>
          <h1>{number}</h1>
          <button
            onClick={() => {
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