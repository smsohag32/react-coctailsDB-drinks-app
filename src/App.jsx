import { useState } from "react";
import Card from "./components/Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
