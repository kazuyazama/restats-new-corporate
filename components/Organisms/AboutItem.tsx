import AboutBox from "../Atoms/AboutBox";

const AboutItem = () => {
  return (
    <section id="about" className="pt-10 lg:pb-5  px-5 bg-gray-200 ">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex flex-col text-center  gap-10 pb-5 animate-fade-in-bottom">
          <h1 className="text-2xl lg:text-4xl font-semibold ">
            人々に最大限の貢献をする。それは挑戦し続けること。
          </h1>
          <h3 className="text-xl  leading-relaxed">
            挑戦をしなければ、何も生み出せない。
            <br />
            常に私たちは挑戦し続け、挑戦できる場を提供します。
          </h3>
        </div>
        <span className="inline-block h-3"></span>
        <div className="space-y-10  border py-10 animate-fade-in-bottom [animation-delay:300ms] ">
          <h1 className="text-2xl lg:text-4xl py-5 text-center">
            私たちが大切にしていること
          </h1>
          <div className="grid lg:grid-cols-3 justify-items-center gap-10">
           
            <AboutBox title="Future Oriented" subTitle="行動" >遊び心を持って、夢中で発明し、<br />顧客に未来を届けます。</AboutBox>
            <AboutBox title="Greater Challenges" subTitle="挑戦" >本質を問い続け、変化を楽しみ、<br />果敢に挑戦します。</AboutBox>
            <AboutBox title="Self-Critical" subTitle="自責" >自分と向き合い、成果にこだわり、<br />徹底的にやりきります。</AboutBox>
          
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutItem;
