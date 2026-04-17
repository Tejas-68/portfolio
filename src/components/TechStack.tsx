import * as THREE from "three";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, RoundedBox } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";

const textureLoader = new THREE.TextureLoader();

// Tech stack data
const stackData = [
  { url: "/images/html.png", dull: false },
  { url: "/images/css.png", dull: false },
  { url: "/images/javascript.png", dull: false },
  { url: "/images/tailwind.png", dull: false },
  { url: "/images/react.png", dull: false },
  { url: "/images/java.png", dull: false },
  { url: "/images/spring.png", dull: false },
  { url: "/images/spring-boot.png", dull: false },
  { url: "/images/mysql.png", dull: false },
  { url: "/images/mongoDB.png", dull: false },
  { url: "/images/docker.png", dull: true },
  { url: "/images/typescript.png", dull: true },
];

// Load textures
const parsedStack = stackData.map((item) => {
  const tex = textureLoader.load(item.url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return { texture: tex, dull: item.dull };
});

// Better grid (centered + compact)
const gridPositions: THREE.Vector3[] = [];
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 4; c++) {
    gridPositions.push(new THREE.Vector3(-3.3 + c * 2.2, 2 - r * 2.4, 0));
  }
}

type CardProps = {
  texture: THREE.Texture;
  dull: boolean;
  position: THREE.Vector3;
};

function CardGeo({ texture, dull, position }: CardProps) {
  const opacity = dull ? 0.25 : 1;
  const cardColor = dull ? "#444444" : "#ffffff";
  const clearcoat = dull ? 0.1 : 0.8;

  return (
    <Float floatIntensity={1} rotationIntensity={0.2} speed={1.5}>
      <group position={position}>
        <RoundedBox
          args={[2, 2, 0.35]}
          radius={0.25}
          smoothness={4}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color={cardColor}
            metalness={0.1}
            roughness={0.2}
            clearcoat={clearcoat}
            envMapIntensity={1}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.22]}>
          <planeGeometry args={[1.5, 1.5]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={opacity}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

const TechStack = () => {
  const [, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY || document.documentElement.scrollTop;
      const threshold =
        document.getElementById("work")?.getBoundingClientRect().top || 0;

      setIsActive(scrollY > threshold - window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="techstack" style={{ height: "100vh" }}>
      <h2>My Techstack</h2>

      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={(state) => {
          state.gl.toneMappingExposure = 1.5;
          state.camera.lookAt(0, 0, 0);
        }}
        className="tech-canvas"
      >
        <ambientLight intensity={1.2} />

        <spotLight
          position={[10, 20, 25]}
          penumbra={1}
          angle={0.5}
          castShadow
          intensity={2}
        />

        <directionalLight position={[-5, 5, 5]} intensity={1.5} />

        {parsedStack.map((item, i) => (
          <CardGeo
            key={i}
            texture={item.texture}
            dull={item.dull}
            position={gridPositions[i]}
          />
        ))}

        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
        />

        <EffectComposer>
          <N8AO aoRadius={2} intensity={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;