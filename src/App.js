import Flights from "./screens/flights/Flights";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="font-nunito-sans">
      <Navbar/>
      <Flights/>
      <Footer/>
    </div>
  );
}

export default App;
