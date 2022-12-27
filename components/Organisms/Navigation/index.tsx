import MobileNav from "./MobileDrawer";
import PcNav from "./PcNav";

const index = () => {
    
    return (
        <>
        <div className="relative lg:hidden   ">
            
        {/* <MobileNav  /> */}

        </div>
        <div className="hidden lg:block">
        <PcNav />
        </div>
        </>
    );
}

export default index;