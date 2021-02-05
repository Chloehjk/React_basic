import React from 'react';
import ReactDOM from 'react-dom';
import {JSX, JSX02} from './Example01/01JSX'
import {ClassComponent01, ClassComponent02, ClassCounter, FunctionCounter} from './Example01/02Class_Function'
import JSXCSS from './Example01/03JSX+CSS'
import JSXJS from './Example01/04JSX+JavaScript'

export default function AllExample01() {
    return(
        <>
        {/* <JSX /> */}
        {/* <JSX02 /> */}
        {/* <ClassComponent01 /> */}
        {/* <ClassComponent02 /> */}
        <ClassCounter />
        {/* <FunctionCounter /> */}
        {/* <JSXCSS /> */}
        {/* <JSXJS /> */}
        </>
    );
};