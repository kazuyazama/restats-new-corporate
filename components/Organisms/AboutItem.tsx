const AboutItem = () => {
  return (
    <section id="about" className="py-40 bg-gray-200 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col text-center  gap-10 pb-5">
          <h1 className=" text-4xl ">
            人々に最大限の貢献をする。それは挑戦し続けること。
          </h1>
          <h3 className="text-xl  leading-relaxed">
            挑戦をしなければ、何も生み出せない。
            <br />
            常に私たちは挑戦し続け、挑戦できる場を提供します。
          </h3>
        </div>
        <span className="inline-block h-3"></span>
        <div className="space-y-10  border py-10 ">
          <h1 className="text-4xl py-5 text-center">
            私たちが大切にしていること
          </h1>
          <div className="grid grid-cols-3 justify-items-center ">
            <div className="text-center bg-gray-300 p-10">
              <h2 className="font-Roboto text-2xl font-semibold">Future Oriented</h2>
              <h2 className="text-lg">行動</h2>
              <p className="pt-3">遊び心を持って、夢中で発明し、<br />顧客に未来を届けます。</p>
            </div>
            <div className="text-center bg-gray-300 p-10">
              <h2 className="font-Roboto text-2xl font-semibold">Greater Challenges</h2>
              <h2 className="text-lg">挑戦</h2>
              <p className="pt-3">本質を問い続け、変化を楽しみ、<br />果敢に挑戦します。</p>
            </div>
            <div className="text-center bg-gray-300 p-10">
              <h2 className="font-Roboto text-2xl font-semibold">Self-Critical</h2>
              <h2 className="text-lg">自責</h2>
              <p className="pt-3">自分と向き合い、成果にこだわり、<br />徹底的にやりきります。</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutItem;
