const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width= 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidthX = 575;
const spriteHeightY = 528;
let gameFrame = 0;
const staggerFrame = 4;
let playerState = 'run';

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spriteAnimation =[];
const animationStates =[{
    name:'idle',
    frames: 7,
},
{
    name:'jump',
    frames: 7,
},
{
    name:'fall',
    frames: 7,
},
{
    name:'run',
    frames: 9,
},
{
    name:'dizzy',
    frames: 11,
},
{
    name:'sit',
    frames: 5,
},
{
    name:'roll',
    frames: 7,
},
{
    name:'bite',
    frames: 7,
},
{
    name:'ko',
    frames: 12,
},
{
    name:'getHit',
    frames: 4,
}];

animationStates.forEach((state, index) => {
    let frames ={
        loc:[],
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidthX;
        let positionY = index * spriteHeightY;
        frames.loc.push({x: positionX, y:positionY})
    }
    spriteAnimation[state.name] = frames;
    });
console.log(spriteAnimation);
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // (img,sx, sy, sw, sh, dx, dy, dw, dh)
    let position = Math.floor
    (gameFrame/staggerFrame) % spriteAnimation[playerState].loc.length;

    let frameX = position * spriteWidthX;

    let frameY = spriteAnimation[playerState].loc[position].y;

    ctx.drawImage(playerImage,frameX,frameY, spriteWidthX,spriteHeightY,0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;

    requestAnimationFrame(animate);
}
animate();