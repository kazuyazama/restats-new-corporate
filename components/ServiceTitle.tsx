import Breadcrumbs from "./Atoms/Breadcrumbs";


const ServiceTitle = () => {
  return (
    <div className="h-[40vh] pt-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-3">
      <Breadcrumbs />
        <h1 className="text-5xl">Service</h1>
        <p>弊社で行なっているサービスを紹介します</p>
      </div>
    </div>
  );
};

export default ServiceTitle;
