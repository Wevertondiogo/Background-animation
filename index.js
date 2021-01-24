const getClass = (nameClass) => document.getElementsByClassName(nameClass);

const banner = getClass("banner")[0];
const blocks = getClass("blocks");

function SetDelayAndCreateNewBlocks(blocksNumber) {
  for (let i = 1; i < blocksNumber; i++) {
    banner.innerHTML += " <div class='blocks'></div>";
    blocks[i].style.animationDelay = `${i * 0.05}s`;
  }
}

SetDelayAndCreateNewBlocks(400);
