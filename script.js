const canvas = document.querySelector('#canvas');

// Setup
canvas.width = 1280;
canvas.height = 720;

const ctx = canvas.getContext('2d');
const grid1 = createRandom8BitGrid();
drawGrid(ctx, grid1, 20);

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
