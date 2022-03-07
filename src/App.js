import "./App.css";
import Phone from "./components/Phone";

function App() {
  return (
    <div>
      {/* left decoration */}
      <div className="z-1 fixed right-[50%] translate-x-[-315px] w-[500px] h-[80%] bg-gradient-to-b from-lightMagenta to-lightViolet rounded-b-full tablet:translate-x-0 tablet:h-[57%]"></div>
      {/* right decoration */}
      <div className="z-1 fixed bottom-0 left-[50%] translate-x-[380px] w-[500px] h-[80%] bg-lightGrayishViolet2 rounded-t-full tablet:translate-x-0 tablet:h-[50%]"></div>
      {/* content */}
      <div className="w-full max-w-[945px] min-h-screen mx-auto px-4 flex items-center  justify-around tablet:flex-col tablet:items-center tablet:justify-start tablet:px-10 tablet:min-h-0">
        <div className="flex-[0_0_50%] flex justify-end tablet:flex-1">
          <div className="mr-[125px] tablet:mr-0 tablet:mt-14">
            <Phone></Phone>
          </div>
        </div>
        <div className="flex-[0_0_50%] z-10 tablet:flex-1 tablet:text-center tablet:my-14">
          <h3 className="text-4xl font-medium text-veryDarkDesaturatedViolet">
            Simple Booking
          </h3>
          <p className="pt-7 text-darkGrayishViolet leading-7">
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
