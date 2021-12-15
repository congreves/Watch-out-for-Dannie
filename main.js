let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let currentlyPlaying = true;

let dannie = "http://127.0.0.1:5500/images/dannie.svg";

let friend2 = "http://127.0.0.1:5500/images/friend2.svg";

let friend1 = "http://127.0.0.1:5500/images/friend1.svg";

let closedDoorPath = "http://127.0.0.1:5500/images/closedoor.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isDannie = (door) => {
  if (door.src === dannie) {
    return true;
  } else {
    return false;
  }
};
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isDannie(door)) {
    gameOver();
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = dannie;
    openDoor2 = friend2;
    openDoor3 = friend1;
  } else if (choreDoor === 1) {
    openDoor2 = dannie;
    openDoor1 = friend2;
    openDoor3 = friend1;
  } else {
    choreDoor === 2;
    openDoor3 = dannie;
    openDoor1 = friend2;
    openDoor2 = friend1;
  }
};

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML =
    "When you are ready..click on the door you want to open!";
  startButton.classList.remove("buttonActive");
  startButton.classList.remove("buttonLoose");
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};
const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "Yeeeey you found your friends! Wanna play again?";
    startButton.classList.add("buttonActive");
    currentlyPlaying = false;
  } else {
    startButton.innerHTML = "OH NOOOOO....Game over! Play again?";
    currentlyPlaying = false;
    startButton.classList.add("buttonLoose");
  }
};

startRound();
