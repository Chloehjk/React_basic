import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Practice from './Practice';
import AllExample01 from './AllExample01';
import AllExample02 from './AllExample02';
import AllExample03 from './AllExample03';
import AllExample04 from './AllExample04';
import AllExample05 from './AllExample05';

import BasicProject from'./BasicProject/BasicProject';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Practice /> */}
    {/* <AllExample01 /> */}
    {/* <AllExample02 /> */}
    {/* <AllExample03 /> */}
    {/* <AllExample04 /> */}
    {/* <AllExample05 /> */}
    <BasicProject />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
