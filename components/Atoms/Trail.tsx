import { animated, useTrail } from "@react-spring/web";
import type { ReactNode } from "react";


type Props = {
    children:ReactNode[]
}

const Trail = ({ children }:Props) => {
    // const items = toArray(children);
    const trail = useTrail(children?.length, {
      config: { mass: 5, tension: 3000, friction: 500 },
      opacity: 1 ,
      x: 0,
      from: { opacity: 0, y: 20, height: 0 },
    });
    return (
      <div className="flex whitespace-nowrap  text-secondary tracking-widest text-4xl lg:text-5xl font-semibold">
        {trail.map(({  ...style }, index) => (
            <animated.div key={index} style={ style }>{children[index]}</animated.div>
        ))}
      </div>
    );
  };


export default Trail