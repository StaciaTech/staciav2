


// src/components/ThreeScene.jsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function SingleProductImage({ modelUrl = null, imageUrl = null, autoRotate = false, style = {} }) {
    const mountRef = useRef(null);
    const frameIdRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene, camera, renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(0, 1.2, 2.5);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        mount.appendChild(renderer.domElement);

        // Lights
        const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.9);
        hemi.position.set(0, 2, 0);
        scene.add(hemi);

        const dir = new THREE.DirectionalLight(0xffffff, 0.6);
        dir.position.set(5, 10, 7.5);
        scene.add(dir);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
        controls.autoRotate = autoRotate;
        controls.enablePan = false;
        controls.minDistance = 0.8;
        controls.maxDistance = 6;
        controls.maxPolarAngle = Math.PI / 2.2;

        // Root object
        const root = new THREE.Group();
        scene.add(root);

        // Helpers: fit camera to object
        function fitCameraToObject(camera, object, offset = 1.25) {
            const box = new THREE.Box3().setFromObject(object);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs((maxDim / 2) / Math.tan(fov / 2));
            cameraZ *= offset;

            camera.position.set(center.x + cameraZ * 0.4, center.y + cameraZ * 0.15, center.z + cameraZ * 0.7);
            camera.lookAt(center);
            camera.updateProjectionMatrix();
            controls.update();
        }

        // Loaders
        const gltfLoader = new GLTFLoader();
        const texLoader = new THREE.TextureLoader();

        let disposed = false;

        function loadGLTF(url) {
            return new Promise((resolve, reject) => {
                gltfLoader.load(
                    url,
                    (gltf) => resolve(gltf),
                    undefined,
                    (err) => reject(err)
                );
            });
        }

        async function setup() {
            setLoading(true);
            setError(null);
            // clear previous children
            while (root.children.length) root.remove(root.children[0]);

            if (modelUrl) {
                try {
                    const gltf = await loadGLTF(modelUrl);
                    const model = gltf.scene || gltf.scenes?.[0];
                    model.traverse((n) => {
                        if (n.isMesh) {
                            n.castShadow = true;
                            n.receiveShadow = true;
                        }
                    });

                    // center & scale
                    const box = new THREE.Box3().setFromObject(model);
                    const size = box.getSize(new THREE.Vector3());
                    const center = box.getCenter(new THREE.Vector3());
                    model.position.x += -center.x;
                    model.position.y += -center.y;
                    model.position.z += -center.z;

                    const maxDim = Math.max(size.x, size.y, size.z);
                    const scale = maxDim ? 1.4 / maxDim : 1;
                    model.scale.setScalar(scale);

                    root.add(model);
                    fitCameraToObject(camera, model, 1.2);
                    setLoading(false);
                } catch (err) {
                    console.warn("Model load failed, falling back to image:", err);
                    setError("Model failed to load — showing image fallback.");
                    await setupImage();
                }
            } else {
                await setupImage();
            }
        }

        function setupImage() {
            return new Promise((resolve) => {
                if (!imageUrl) {
                    setLoading(false);
                    resolve();
                    return;
                }
                texLoader.load(
                    imageUrl,
                    (tex) => {
                        tex.encoding = THREE.sRGBEncoding;
                        const aspect = tex.image.width / tex.image.height;
                        const height = 1;
                        const width = height * aspect;
                        const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true });
                        const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
                        plane.rotation.y = 0.06;
                        root.add(plane);
                        fitCameraToObject(camera, plane, 1.4);
                        setLoading(false);
                        resolve();
                    },
                    undefined,
                    (err) => {
                        console.warn("Texture load failed:", err);
                        setError("Image failed to load.");
                        setLoading(false);
                        resolve();
                    }
                );
            });
        }

        setup();

        // Animation loop
        const clock = new THREE.Clock();
        function animate() {
            frameIdRef.current = requestAnimationFrame(animate);
            const dt = clock.getDelta();
            if (autoRotate) root.rotation.y += dt * 0.25;
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        function onResize() {
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
        window.addEventListener("resize", onResize);

        // Cleanup
        return () => {
            disposed = true;
            window.removeEventListener("resize", onResize);
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
            controls.dispose();
            renderer.domElement && renderer.domElement.remove();
            renderer.dispose && renderer.dispose();
            scene.traverse((obj) => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) {
                    if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
                    else obj.material.dispose();
                }
            });
        };
    }, [modelUrl, imageUrl, autoRotate]);

    return (
        <div style={{ width: "100%", height: "60vh", minHeight: "320px", position: "relative", ...style }}>
            {loading && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, background: "rgba(255,255,255,0.6)" }}>
                    <div>Loading 3D viewer...</div>
                </div>
            )}
            {error && (
                <div style={{ position: "absolute", top: 8, left: 8, zIndex: 20, background: "#ffe6e6", color: "#800", padding: "6px 8px", borderRadius: 6 }}>
                    {error}
                </div>
            )}
            <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
}
