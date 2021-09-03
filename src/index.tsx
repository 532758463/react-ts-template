import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import reportWebVitals from './report-web-vitals';
// 初始化语言
// import './locales/i18n';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app"),
);

// TODO: 性能监控
// reportWebVitals(console.log);
