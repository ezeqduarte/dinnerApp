import Header from "./components/Header/Header";
const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="895" height="320">
    <path
      fill="#5C6779"
      fill-rule="evenodd"
      d="M795 0H0v320h895V100C895 44.772 850.228 0 795 0z"
      opacity="1"
    />
  </svg>
);
function App() {
  return (
    <div className="font-spartan">
      <Header />
      <section
        className={`md:bg-[url('/images/patterns/pattern-curve-top-right.svg')] bg-no-repeat xl:bg-left bg-[center_right_23rem]`}
      >
        <div
          className={`container flex flex-col xl:flex-row py-[1rem] xl:h-[70vh] mx-auto px-[4rem] xl:px-[5rem] items-center justify-center xl:items-start xl:justify-start`}
        >
          <img
            className="top-[-5rem] xl:relative hidden xl:flex"
            src="/images/homepage/enjoyable-place-desktop.jpg"
          ></img>
          <img
            className="hidden top-[-3rem] md:block relative xl:hidden"
            src="/images/homepage/enjoyable-place-tablet.jpg"
          ></img>
          <img
            className="relative md:hidden top-[-2rem] object-cover right-0"
            src="/images/homepage/enjoyable-place-mobile.jpg"
          ></img>

          <div className="flex justify-center items-center xl:items-start xl:px-[5rem] text-center xl:text-left h-full gap-[30px]  flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
              <g fill="none" fill-rule="evenodd">
                <path fill="#9E7F66" d="M15 3h56v1H15z" />
                <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
              </g>
            </svg>
            <h2 className="font-bold  text-[35px]">
              Enjoyable place for all the family
            </h2>
            <p className="font-regular lg:w-1/2 xl:w-full text-[20px]">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </section>
      <section
        className={`md:bg-[url('/images/patterns/pattern-curve-top-left.svg')] mt-[10rem] xl:mt-[0rem] pb-[8rem] bg-no-repeat xl:bg-left bg-[bottom_right_-23rem]`}
      >
        <div
          className={`container relative flex flex-col xl:flex-row-reverse py-[1rem] xl:h-[70vh] mx-auto px-[4rem] items-center justify-center xl:items-start xl:justify-start`}
        >
          <img
            className="top-[-15rem] hidden xl:flex"
            src="/images/homepage/locally-sourced-desktop.jpg"
          ></img>
          <img
            className="top-[-5rem] hidden md:flex xl:hidden"
            src="/images/homepage/locally-sourced-tablet.jpg"
          ></img>

          <img
            className="absolute hidden md:block top-[12rem] md:right-[1rem] lg:right-[10rem] xl:right-[1rem] xl:top-[8rem]"
            src="/images/patterns/pattern-lines.svg"
          />

          <img
            className="relative md:hidden top-[-2rem] object-cover right-0"
            src="/images/homepage/locally-sourced-mobile.jpg"
          ></img>

          <div className="flex justify-center items-center xl:items-start xl:px-[5rem] text-center xl:text-left h-full gap-[30px]  flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
              <g fill="none" fill-rule="evenodd">
                <path fill="#9E7F66" d="M15 3h56v1H15z" />
                <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
              </g>
            </svg>
            <h2 className="font-bold  text-[35px]">
              Enjoyable place for all the family
            </h2>
            <p className="font-regular lg:w-1/2 xl:w-full text-[20px]">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </section>
      {/*  <section className="w-full flex justify-center h-[75vh] text-white h-[90vh]  bg-[#111111] ">
        <div className="container flex py-[1rem] h-full mx-auto px-5 items-center justify-center lg:items-start lg:justify-start">
          <div className="flex justify-center h-full w-1/2 px-[5rem] gap-[30px]  flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
              <g fill="none" fill-rule="evenodd">
                <path fill="#9E7F66" d="M15 3h56v1H15z" />
                <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
              </g>
            </svg>
            <h2 className="font-bold text-[60px] pr-[4rem]">
              A few highlights from our menu
            </h2>
            <p className="font-regular text-[25px]">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
          <div className="w-1/2 flex flex-col justify-center h-full gap-5 divide-y divide-zinc-600">
            <article className="border-bottom">
              <img></img>
              <div>
                <h3>Seared Salmon Fillet</h3>
                <p>
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </div>
            </article>
            <article>
              <img></img>
              <div>
                <h3>Rosemary Filet Mignon</h3>
                <p>
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
            </article>
            <article>
              <img></img>
              <div>
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p>
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
