import { useState } from "react";
import Card from "./components/Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";

AOS.init();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-green-300 z-30 bg-opacity-70 sticky top-0">
        <Header />
      </div>
      <Card />
    </div>
  );
}

export default App;
