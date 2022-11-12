import MobileNav from "./MobileNav";
import PcNav from "./PcNav";

const index = () => {
    return (
        <>
        <div className="block lg:hidden">
        <MobileNav />
        </div>
        <div className="hidden lg:block">
        <PcNav />
        </div>
        </>
    );
}

export default index;