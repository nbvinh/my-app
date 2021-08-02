// import React, { Component } from "react";
// export class App extends Component {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = { counter: 0, show: false };
//     // this.handleChangeCounter = this.handleChangeCounter.bind(this)
//     console.log("constructor");
//   }
//   handleChangeCounter() {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//     // this.setState({
//     //   counter: this.state.counter + 1,
//     // });
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate");
//     return true;
//   }
//   componentDidUpdate(prevProps, nextState) {
//     console.log("componentDidUpdate");
//     if (this.state.counter !== nextState.counter) {
//       this.setState({ counter: 20 });
//     }
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     alert("thong bao", "unmount");
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         {this.state.show ? <h3>{this.state.counter}</h3> : null}
//         <button onClick={() => this.handleChangeCounter()}>
//           ONCHANGE{this.state.counter}
//         </button>
//         <button onClick={() => this.setState({ show: !this.state.show })}>
//           ONCHANGEUN
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useRef } from "react";
import Clock from "../src/components/Clock";
import Form from "./components/Form";

function App() {
  const [show, setShow] = useState(true);
  // const countRef = useRef(0);
  // const handleClick = () => {
  //   // setCount(count + 1);
  //   countRef.current = countRef.current + 1;
  //   console.log(countRef.current);
  // };
  console.log("render");
  return (
    <div>
      {/* {show ? <Clock /> : null}
      <button onClick={() => setShow(!show)}>Onchange</button> */}
      <Form />
    </div>
  );
}

export default App;

/* Sử dụng useContext() */

// import React from "react";
// import Button from "./components/Button";
// import Footer from "./components/Footer";
// import ThemeContextProvider from "./context/ThemeContextProvider";
// function App() {
//   return (
//     <ThemeContextProvider>
//       <Button />
//       <Footer />
//     </ThemeContextProvider>
//   );
// }

// export default App;
