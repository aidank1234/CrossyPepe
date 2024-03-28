import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const loadModel = (path, onLoad) => {
    const loader = new GLTFLoader();
    loader.load(path, gltf => onLoad(gltf.scene), undefined, error => console.error(error));
};