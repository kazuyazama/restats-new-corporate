import Navigation from "../Navigation";

const Header = () => {
  return (
    <>
      <header aria-label="Page Header">
        <div className="w-full fixed mx-auto p-5 lg:p-8">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            <h1 className="text-xl font-bold text-gray-900 lg:text-3xl order-last lg:order-first">
              座間和也
            </h1>
            <div className="">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
