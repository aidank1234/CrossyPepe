import * as THREE from 'three';

export default function PepeImage(zoom) {
    const textureLoader = new THREE.TextureLoader();
    const pepeTexture = textureLoader.load('https://i.ibb.co/Qp7cqhg/high-resolution-pepe-png-clipart-5.png'); // Replace with your image path

    const pepeMaterial = new THREE.SpriteMaterial({ map: pepeTexture });
    const pepeSprite = new THREE.Sprite(pepeMaterial);

    pepeSprite.scale.set(24 * zoom, 24 * zoom, 1); // Set the image scale. Adjust as necessary

    return pepeSprite;
}
