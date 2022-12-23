import { useEffect, useState } from "react";

//divタグを生成して,そのdivタグにわたってきたidをidにセットする?
const createElement = (id:string): HTMLElement => {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  return el;
};

const useModal = (id: string) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  
  useEffect(() => {
    //elのidがmodalじゃなかったら、idを生成。modalだったらそのままかえす。 それをbodyの後に付与。
    const el = document.querySelector<HTMLElement>("#modal") ?? createElement(id);
    document.body.appendChild(el);
    setElement(el);
  }, []);

  return element;
};

export default useModal;
