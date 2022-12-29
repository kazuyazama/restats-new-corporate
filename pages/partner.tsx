import ServiceTitle from "../components/Organisms/ServiceTitle";

const partner = () => {
    return (
        <div className="overflow-hidden ">
         <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle title="PARTNER" discription="パートナー募集について" />

         </section>
        <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="about" className="py-40 bg-gray-200 px-5">
          <div className="text-4xl font-semibold grid place-items-center">現在改修中です。</div>
        </section>

        <span className="absolute w-full h-32 mb-32 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200"></span>
        {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

        <section id="profile" className="">
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="works" className="">
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>

        <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>

      </div>
    );
}

export default partner;