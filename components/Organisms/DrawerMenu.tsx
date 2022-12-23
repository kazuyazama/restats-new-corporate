
type Props = {
    setShow:React.Dispatch<React.SetStateAction<boolean>>;
    show:boolean;
}

const DrawerMenu = ({show,setShow}:Props) =>  {
    if(show) {
        return (
          <div id="overlay" className=" w-screen   fixed  ">
            <div id="content" className="w-full min-h-[500vh] bg-white absolute -left-full translate-x-[70px] -top-20 -z-10 opacity-40 ">
              <p>これがモーダルウィンドウです。</p>
              <p><button onClick={() => setShow(false)}>close</button></p>
            </div>
          </div>
        )

    } else {
        return null;
    }
}
  

export default DrawerMenu;