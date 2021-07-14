const width = 28;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
let squares = [];
let pacmanCurrentIndex = 490;
document.addEventListener("keydown", movePacman);

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    // Create grid square
    const square = document.createElement("div");
    // TODO: Add relevant border, dependant on surrounding squares
    // Put square in grid
    grid.appendChild(square);
    // Push square to squares array
    squares.push(square);
    // Populate starting board with game elements
    switch (layout[i]) {
      case 0:
        squares[i].classList.add("pac-dot");
        break;
      case 1:
        squares[i].classList.add("wall");
        break;
      case 2:
        squares[i].classList.add("ghost-lair");
        break;
      case 3:
        squares[i].classList.add("power-pill");
        break;
      case 4:
        squares[i].classList.add("empty");
        break;
      default:
        break;
    }
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
}

createBoard();

function movePacman(e) {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  switch (e.key) {
    case "Up":
    case "ArrowUp":
      if (
        pacmanCurrentIndex - width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains("wall")
      ) {
        pacmanCurrentIndex -= width;
      }
      break;
    case "Down":
    case "ArrowDown":
      if (
        pacmanCurrentIndex + width < width * width &&
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
      ) {
        pacmanCurrentIndex += width;
      }
      break;
    case "Left":
    case "ArrowLeft":
      // TODO: Animate Pacman (grow/shrink) and add short pause for warp
      if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex = 391;
      } else if (
        pacmanCurrentIndex % width !== 0 &&
        !squares[pacmanCurrentIndex - 1].classList.contains("wall")
      ) {
        pacmanCurrentIndex -= 1;
      }
      break;
    case "Right":
    case "ArrowRight":
      // TODO: Animate Pacman (grow/shrink) and add short pause for warp
      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 364;
      } else if (
        pacmanCurrentIndex % width < width - 1 &&
        !squares[pacmanCurrentIndex + 1].classList.contains("wall")
      ) {
        pacmanCurrentIndex += 1;
      }
      break;
    default:
      return;
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  powerPillEaten();
  pacDotEaten();
}

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score += 10;
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
  }
  if (score === 0) {
    scoreDisplay.textContent = "00";
  } else {
    scoreDisplay.textContent = score;
  }
}

function powerPillEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("power-pill")) {
    score += 100;
    squares[pacmanCurrentIndex].classList.remove("power-pill");
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(unScareGhosts, 10000);
  }
}

function unScareGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("inky", 351, 300),
  new Ghost("pinky", 376, 400),
  new Ghost("clyde", 379, 500),
];

// Add ghosts to board
ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

ghosts.forEach((ghost) => {
  moveGhost(ghost);
});

function moveGhost(ghost) {
  const directions = [1, -1, width, -width];
  let randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  ghost.timerId = setInterval(function () {
    // Check if direction is valid (i.e. not a wall or another ghost)
    if (
      !squares[ghost.currentIndex + randomDirection].classList.contains(
        "wall"
      ) &&
      !squares[ghost.currentIndex + randomDirection].classList.contains("ghost")
    ) {
      // Remove ghost.className and 'ghost' class
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost");
      // Add direction to ghost.currentIndex
      ghost.currentIndex += randomDirection;
      // Re-apply ghost.className and 'ghost' class
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else {
      randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
    }
  }, ghost.speed);
}
