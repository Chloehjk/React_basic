import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllExample01 from './AllExample01'
import AllExample02 from './AllExample02'
import AllExample03 from './AllExample03'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <AllExample01 /> */}
    {/* <AllExample02 /> */}
    <AllExample03 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
