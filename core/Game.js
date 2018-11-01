import BlockManager from "./BlockManager"
import ModsManager from "./ModsManager";

class Game {
  constructor ({startingMap, blocksPath, eventsPath, modsPath}) {
    this.startingMap = startingMap;

    this.eventsPath = eventsPath;
    this.blocksPath = blocksPath;

    this.blockManager = new BlockManager();
    this.modManager = new ModsManager(modsPath);
  }

  async load () {
    await this.blockManager.loadBlocks(this.blocksPath);
  }
}

export default Game;
