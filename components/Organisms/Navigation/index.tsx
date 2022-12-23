import BurgerMenu from "./BurgerMenu";
import MobileNav from "./DrawerNav";
import PcNav from "./PcNav";

const index = () => {
    
    return (
        <>
        <div className="block lg:hidden">
            
        <MobileNav />

        {/* <BurgerMenu    /> */}
        </div>
        <div className="hidden lg:block">
        <PcNav />
        </div>
        </>
    );
}

export default index;