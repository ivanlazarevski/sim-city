import { createScene } from "./scene.js";
import { createCity } from "./city.js";

export function createGame() {
  let activeToolId = "";
  const scene = createScene();
  const city = createCity(16);
  scene.initialize(city);

  scene.onObjectSelected = (selectedObject, event) => {
    // Only place or remove with left click
    if (event.buttons !== 1) {
      return;
    }

    let { x, y } = selectedObject.userData;
    const tile = city.data[x][y];

    if (activeToolId === "bulldoze") {
      tile.buildingId = undefined;
      scene.update(city);
      return;
    }

    // Place building at location
    tile.buildingId = activeToolId;
    scene.update(city);
  };

  document.addEventListener("mousedown", scene.onMouseDown.bind(scene), false);
  document.addEventListener("mouseup", scene.onMouseUp.bind(scene), false);
  document.addEventListener("mousemove", scene.onMouseMove.bind(scene), false);

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  });

  const game = {
    update() {
      city.update();
      scene.update(city);
    },
    setActiveToolId(toolId) {
      activeToolId = toolId;
    },
  };

  setInterval(() => {
    game.update();
  }, 1000);

  scene.start();

  return game;
}
