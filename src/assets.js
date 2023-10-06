import * as THREE from "three";
const geometry = new THREE.BoxGeometry(1, 1, 1);

const assets = {
  grass: (x, y) => {
    const material = new THREE.MeshLambertMaterial({ color: 0x2ecc71 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = {
      id: "grass",
      x,
      y,
    };
    mesh.position.set(x, -0.5, y);
    return mesh;
  },
  residential: (x, y) => {
    const material = new THREE.MeshLambertMaterial({ color: 0xe74c3c });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = {
      id: "residential",
      x,
      y,
    };
    mesh.position.set(x, 0.5, y);
    return mesh;
  },
  commercial: (x, y) => {
    const material = new THREE.MeshLambertMaterial({ color: 0x3498db });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = {
      id: "commercial",
      x,
      y,
    };
    mesh.scale.set(1, 2, 1);
    mesh.position.set(x, 0.5, y);
    return mesh;
  },
  industrial: (x, y) => {
    const material = new THREE.MeshLambertMaterial({ color: 0xf1c40f });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = {
      id: "industrial",
      x,
      y,
    };
    mesh.scale.set(1, 3, 1);
    mesh.position.set(x, 0.5, y);
    return mesh;
  },
  road: (x, y) => {
    const material = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = {
      id: "road",
      x,
      y,
    };
    mesh.scale.set(1, 0.1, 1);
    mesh.position.set(x, 0.05, y);
    return mesh;
  },
};

export function createAssetInstance(assetId, x, y) {
  if (assetId in assets) {
    return assets[assetId](x, y);
  }

  console.warn("Asset ID not found");
  return undefined;
}
