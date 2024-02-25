const canvas = document.querySelector('#canvas');

// Setup
canvas.width = 1280;
canvas.height = 720;
const blockSize = 10;
const gridWidth = blockSize * 8;
const gridHeight = blockSize * 8;
const padding = blockSize * 2;

const gridsAcross = Math.floor(canvas.width / (gridWidth + padding));
const gridsDown = Math.floor(canvas.height / (gridHeight + padding));

const ctx = canvas.getContext('2d');

setInterval(drawSetOfGrids, 500);

function drawSetOfGrids(){
  ctx.clearRect(0,0,canvas.width, canvas.height)

  for(let i=0; i<gridsDown; i++){
    for(let j=0; j<gridsAcross; j++){
      const grid1 = createRandom8BitGrid();

      ctx.save();
      const gridX = j * (gridWidth + padding)
      const gridY = i * (gridHeight + padding)
      ctx.translate(gridX, gridY)
      drawGrid(ctx, grid1, blockSize);
      ctx.restore();
    }
  }
}

function createRandom8BitGrid() {
  const grid = [];
  for (let y = 0; y < 8; y++) {
    const row = [];
    for (let x = 0; x < 8; x++) {
      row.push(Math.round(Math.random()));
    }
    grid.push(row);
  }
  return grid;
}

function drawGrid(ctx, gridArr, cellSize) {
  for (let y = 0; y < gridArr.length; y++) {
    const row = gridArr[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      if (cell === 1) {
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}
