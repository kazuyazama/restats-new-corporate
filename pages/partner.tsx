import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import ServiceTitle from "../components/Organisms/ServiceTitle";

const partner = () => {
  return (
    <div className="overflow-hidden ">
      <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle title="PARTNER" discription="パートナー募集について" />
      </section>
      <TriangleLeft bgColor="bg-gray-200" />

      <section id="about" className="py-40 bg-gray-200 px-5">
        <div className="text-4xl font-semibold grid place-items-center">
          現在改修中です。
        </div>
      </section>

      <TriangleRight bgColor="bg-gray-200" />
      {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

      <section id="profile" className=""></section>

      <TriangleLeft />

      <section id="works" className=""></section>

      <TriangleRight />

      <section id="contact" className=""></section>

      <TriangleLeft />

      <section id="contact" className=""></section>

      <TriangleRight />
    </div>
  );
};

export default partner;
