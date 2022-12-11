import { useCallback, useEffect, useRef, useState } from "react";

export function useScroll() {

    const [isVisible, setIsVisible] = useState(false);


    const scrollRef = useRef<HTMLDivElement>(null);
  
  
    const toggleVisibiliy = useCallback(() => {
      const height: any = JSON.stringify(
        scrollRef?.current?.getBoundingClientRect().height
      );
      const newHeifht = height - 1;
      window.scrollY > newHeifht ? setIsVisible(true) : setIsVisible(false);
    }, []);
  
    useEffect(() => {
      if (!scrollRef.current) return;
      window.addEventListener("scroll", toggleVisibiliy);
      return () => window.removeEventListener("scroll", toggleVisibiliy);
    }, [toggleVisibiliy]);
  

    return { isVisible, scrollRef};

}
