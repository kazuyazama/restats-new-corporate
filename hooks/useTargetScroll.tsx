import { createRef, RefObject, useCallback, useRef } from "react";

const useTargetScroll = () => {

    // const ref = createRef<any>()
    const ref = createRef<any>()

    const scrollTarget = useCallback(()  => {
        ref?.current?.scrollIntoView({
          behavior:"smooth",
          block:"end",
        })
      },[ref])


      //offset付きのscrollTarget
     const scrollTargetOffset = useCallback((offset: number) => {
       
        window.scrollTo({
          behavior:"smooth",
          top:ref.current && ref?.current?.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset
        })
      },[ref])


    return {
        scrollTarget,ref,scrollTargetOffset
    }
}

export default useTargetScroll;