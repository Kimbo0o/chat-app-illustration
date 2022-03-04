import logo from "./logo.svg";
import "./App.css";
import Phone from "./components/Phone";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-indigo-800">
      <div className="container min-h-screen mx-auto px-4  grid grid-rows-1 grid-cols-2 items-center ">
        <Phone></Phone>
        <div>
          <h3>Simple Booking</h3>
          <p>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
