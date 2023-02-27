import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Earth = () => {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    //    meshRef.current.rotation.x += delta / 15
    meshRef.current.rotation.y += delta / 5;
  });

  const texture = useLoader(THREE.TextureLoader, "../../地球テクスチャ.webp");

  //jpg,pngなどの場合はこっちでもOK
  //   const texture = useTexture(
  //     "../../public/地球テクスチャ.jpeg"
  //   );
  return (
    <mesh ref={meshRef}  >
      <sphereGeometry  />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Earth;
