import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";

function App() {
  return (
    <div className="text-center">
      <ClockHeading />
      <ClockSlogan />
      <ClockTime />
    </div>
  );
}

export default App;
