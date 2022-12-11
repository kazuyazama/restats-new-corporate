import MobileNav from "./DrawerNav";
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