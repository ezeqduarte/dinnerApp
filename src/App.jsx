import Header from "./components/Header/Header";

function App() {
  return (
    <div className="font-spartan">
      <Header />
      <section >
        <div className="container flex py-[1rem] h-[70vh] mx-auto px-5 items-center justify-center lg:items-start lg:justify-start">
          <img
            className="relative top-[-5rem]"
            src="/images/homepage/enjoyable-place-desktop.jpg"
          ></img>
          <div  className="flex justify-center h-full px-[10rem] gap-[30px]  flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
              <g fill="none" fill-rule="evenodd">
                <path fill="#9E7F66" d="M15 3h56v1H15z" />
                <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
              </g>
            </svg>
            <h2 className="font-bold text-[60px] pr-[4rem]">Enjoyable place for all the family</h2>
            <p className="font-regular text-[25px]">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
