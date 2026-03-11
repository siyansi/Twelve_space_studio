// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog } from "three";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/assets/data/globe.json";

// const RING_PROPAGATION_SPEED = 3;
// const cameraZ = 300;

// type ThreeGlobeType = any;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }

// export function Globe({ globeConfig, data }: WorldProps) {
//   const globeRef = useRef<ThreeGlobeType | null>(null);
//   const groupRef = useRef<any>(null);
//   const [isInitialized, setIsInitialized] = useState(false);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   // ✅ Load ThreeGlobe only on client
//   useEffect(() => {
//     if (!groupRef.current) return;

//     const loadGlobe = async () => {
//       const ThreeGlobe = (await import("three-globe")).default;

//       const globe = new ThreeGlobe();
//       globeRef.current = globe;

//       groupRef.current.add(globe);

//       setIsInitialized(true);
//     };

//     loadGlobe();
//   }, []);

//   // Globe Material
//   useEffect(() => {
//     if (!globeRef.current || !isInitialized) return;

//     const globeMaterial = globeRef.current.globeMaterial();

//     globeMaterial.color = new Color(defaultProps.globeColor);
//     globeMaterial.emissive = new Color(defaultProps.emissive);
//     globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
//     globeMaterial.shininess = defaultProps.shininess;
//   }, [isInitialized]);

//   // Globe Data
//   useEffect(() => {
//     if (!globeRef.current || !isInitialized) return;

//     globeRef.current
//       .hexPolygonsData(countries.features)
//       .hexPolygonResolution(3)
//       .hexPolygonMargin(0.7)
//       .showAtmosphere(defaultProps.showAtmosphere)
//       .atmosphereColor(defaultProps.atmosphereColor)
//       .atmosphereAltitude(defaultProps.atmosphereAltitude)
//       .hexPolygonColor(() => defaultProps.polygonColor);

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d: any) => d.startLat)
//       .arcStartLng((d: any) => d.startLng)
//       .arcEndLat((d: any) => d.endLat)
//       .arcEndLng((d: any) => d.endLng)
//       .arcColor((d: any) => d.color)
//       .arcAltitude((d: any) => d.arcAlt)
//       .arcStroke(() => 0.5)
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashGap(15)
//       .arcDashAnimateTime(defaultProps.arcTime);
//   }, [isInitialized, data]);

//   // Ring Animation
//   useEffect(() => {
//     if (!globeRef.current || !isInitialized) return;

//     const interval = setInterval(() => {
//       const ringsData = data.slice(0, data.length / 2).map((d) => ({
//         lat: d.startLat,
//         lng: d.startLng,
//         color: d.color,
//       }));

//       globeRef.current.ringsData(ringsData);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isInitialized, data]);

//   return <group ref={groupRef} />;
// }

// export function WebGLRendererConfig() {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0x000000, 0);
//   }, [gl, size]);

//   return null;
// }

// export function World(props: WorldProps) {
//   const { globeConfig } = props;

//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);

//   return (
//     <Canvas camera={{ position: [0, 0, cameraZ], fov: 50 }} scene={scene}>
//       <WebGLRendererConfig />

//       <ambientLight
//         color={globeConfig.ambientLight || "#ffffff"}
//         intensity={0.6}
//       />

//       <directionalLight
//         color={globeConfig.directionalLeftLight || "#ffffff"}
//         position={[-400, 100, 400]}
//       />

//       <directionalLight
//         color={globeConfig.directionalTopLight || "#ffffff"}
//         position={[-200, 500, 200]}
//       />

//       <pointLight
//         color={globeConfig.pointLight || "#ffffff"}
//         position={[-200, 500, 200]}
//         intensity={0.8}
//       />

//       <Globe {...props} />

//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         autoRotate
//         autoRotateSpeed={1}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//       />
//     </Canvas>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/assets/data/globe.json";

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // Initialize globe
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      const globe = new ThreeGlobe();
      globeRef.current = globe;
      groupRef.current.add(globe);
      setIsInitialized(true);
    }
  }, []);

  // Material setup
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial() as any;

    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  }, [isInitialized]);

  // Build data
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globeRef.current
      .arcsData(data)
      .arcStartLat((d: any) => d.startLat)
      .arcStartLng((d: any) => d.startLng)
      .arcEndLat((d: any) => d.endLat)
      .arcEndLng((d: any) => d.endLng)
      .arcColor((e: any) => e.color)
      .arcAltitude((e: any) => e.arcAlt)
      .arcStroke(() => 0.5)
      .arcDashLength(defaultProps.arcLength)
      .arcDashGap(15)
      .arcDashAnimateTime(defaultProps.arcTime);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) /
          defaultProps.rings
      );
  }, [isInitialized, data]);

  // Rings animation
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const ringsData = data.slice(0, Math.floor(data.length / 2)).map((d) => ({
        lat: d.startLat,
        lng: d.startLng,
        color: d.color,
      }));

      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;

  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <Canvas
      scene={scene}
      camera={{ position: [0, 0, cameraZ], fov: 50 }}
    >
      <ambientLight
        color={globeConfig.ambientLight || "#ffffff"}
        intensity={0.6}
      />

      <directionalLight
        color={globeConfig.directionalLeftLight || "#ffffff"}
        position={[-400, 100, 400]}
      />

      <directionalLight
        color={globeConfig.directionalTopLight || "#ffffff"}
        position={[-200, 500, 200]}
      />

      <pointLight
        color={globeConfig.pointLight || "#ffffff"}
        position={[-200, 500, 200]}
        intensity={0.8}
      />

      <Globe {...props} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}