import Router from "./router/Router";
// import socketClient from "socket.io-client";

// const SERVER = "http://localhost:9001";

function App() {
  // let socket = socketClient(SERVER);
  // socket.emit("connection", () => {
  //   console.log(`I'm connected with the back-end`);
  // });
  return <Router />;
}

export default App;
