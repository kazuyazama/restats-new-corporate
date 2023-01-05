import { animated, useTrail } from "@react-spring/web";
import type { ReactNode } from "react";


type Props = {
    children:ReactNode[]
}

const Trail = ({ children }:Props) => {
    // const items = toArray(children);
    const trail = useTrail(children?.length, {
      config: { mass: 5, tension: 3000, friction: 200 },
      opacity: 1 ,
      x: 0,
      from: { opacity: 0, y: 20, height: 0 },
    });
    return (
      <div className="flex">
        {trail.map(({  ...style }, index) => (
            <animated.div key={index} style={ style }>{children[index]}</animated.div>
        ))}
      </div>
    );
  };


export default Trail