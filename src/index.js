import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from "./App";
import App from './Homework2'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// задача 1
// root.render(<div>текст</div>);

// задача 2
// const text = "текст";
// root.render(<div>{text}</div>);

// задача 3
// const text = <p>текст</p>;
// root.render(<div>{text}</div>);

// задача 4
// const text1 = <p>текст1</p>;
// const text2 = <p>текст2</p>;
// root.render(
//   <div>
//     {text1}
//     <p>!!!</p>
//     {text2}
//   </div>
// );

// задача 5
// const attr = "block";
// root.render(<div id={attr}>текст</div>);

// задача 6
// const str = "block";
// root.render(<div class={str}>текст</div>);

// задача 7
// var divStyle = {
//   color: "green",
//   border: "3px solid black",
//   borderRadius: "30px",
// };
// root.render(<div style={divStyle}>текст</div>);

// задача 8
// const show = true;
// if (show) {
//   var text = "текст 1";
// } else {
//   var text = "текст 2";
// }
// root.render(<div>{text}</div>);

// задача 9
// const arr = ["a", "b", "c", "d", "e"];
// root.render(
//   <ul>
//     {arr.map((item) => (
//       <li>{item}</li>
//     ))}
//   </ul>
// );

// задача 10
// class App extends React.Component {
//   getText() {
//     return <p>текст</p>;
//   }
//   render() {
//     const text = this.getText();
//     return <div>{text}</div>;
//   }
// }
// root.render(<App />);

// задача 11
// class App extends React.Component {
//   getNum1() {
//     return 1
//   }

//   getNum2() {
//     return 2
//   }

//   render() {
//     return <div>текст {this.getNum1() + this.getNum2()}</div>
//   }
// }
// root.render(<App />)

reportWebVitals()
