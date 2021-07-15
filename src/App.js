import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/About/About";
import Pieces from "./components/pages/Pieces/Pieces";
// import SignUp from "./components/pages/SignUp/SignUp";
import Footer from "./components/pages/Footer/Footer";

function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pieces" component={Pieces} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
