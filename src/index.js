import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3";
import ABI from './abi.json'


// connects metamask to the flare testnet (coston2)
var key = Array(25).fill().map(() => Array(25).fill(0));
var op = Array(25).fill().map(() => Array(25).fill(0));
var mayhem_time = Date.now();


var mm = Array(8).fill().map(() => Array(8).fill(0));
var covered = [];
var a_cell = [-1,-1];
var a_id = "";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "#000099", "#6495ed",
                "grey", "pink", "aqua", "gold", "crimson", "chocolate", "#455a64", "silver",
                "#ff99cc", "#66cccc", "#8b9467", "magenta", "teal", "coral", "salmon", "#aaaaaa",
                "#88cc88", "navy", "lime", "olive", "maroon", "#663300", "#ccccff", "tan",
                "#999999", "#cc99ff","#cc6666", "#3399ff", "powderblue", "seagreen", "black"];

var r_clues = [];
var c_clues = [];
var nono_fin = Array(8).fill().map(() => Array(8).fill(0));
var nono_cur = Array(8).fill().map(() => Array(8).fill(0));
var nono_clicks = 0;
var nono_time = Date.now();

var last_click = 0;
var mental_clicks = 0;
var mental_time = Date.now();








async function to_home(){
  window.location.href = "./";
}
window.to_home = to_home;


async function to_launch(game){
  window.location.href = "./launch.html?".concat(game);
}
window.to_launch = to_launch;



async function load_this_game(){
  var url = window.location.toString();
  var game_name = url.substring(url.indexOf('?') + 1);
  if (game_name == 'pixelmayhem'){
    console.log('this is '.concat(game_name));
    document.getElementById('game_title').textContent = 'Pixel Mayhem';
    document.getElementById('bod').innerHTML = `

      <h1 style="color: purple;">Pixel Mayhem</h1>
      <div class="left_cell">
            <table id="pixel_canvas" style="background-color: white;">

            <tr id="r11" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r12" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r13" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r14" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r15" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r16" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r17" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r18" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r19" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r110" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r111" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r112" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r113" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r114" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r115" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r116" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r117" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r118" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r119" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r120" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r121" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r122" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r123" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r124" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r125" style="height: 20px; min-height: 20px;"></tr>

            </table>
            <br>
            <span id="message" style="display: none;"></span>
            <br>
            <span class="countA" style="display: none;">| Total clicks: <span id="countArea">0</span> |</span>
        </div>
        <div class="right_cell">
            <table id="pixel_canvas" style="background-color: white;">

            <tr id="r21" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r22" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r23" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r24" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r25" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r26" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r27" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r28" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r29" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r210" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r211" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r212" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r213" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r214" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r215" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r216" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r217" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r218" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r219" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r220" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r221" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r222" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r223" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r224" style="height: 20px; min-height: 20px;"></tr>
            <tr id="r225" style="height: 20px; min-height: 20px;"></tr>

            </table>
            <br>
            <span id="message" style="display: none;"></span>
            <br>
            <span class="countA" style="display: none;">| Total clicks: <span id="countArea">0</span> |</span>
        </div>
        <div >
          <div style="width: 10%; height: 4%;font-size: 1.3em; cursor:pointer;color:#fefefe;background-color:purple;display:inline-block;" onclick="to_rules();">Rules</div>
          <div style="width: 10%; height: 4%;font-size: 1.3em; cursor:pointer;color:#fefefe;background-color:purple;display:inline-block;" onclick="get_key();">Get Key</div>
        </div>

        `;
    var i = 1;
  while (i < 26){
    var el1 = document.getElementById('r1'.concat(i.toString()));
    var el2 = document.getElementById('r2'.concat(i.toString()));
    var j = 1;
    while (j < 26){
      var id1= "c1".concat(i.toString().concat("x").concat(j.toString()));
      var id2= "c2".concat(i.toString().concat("x").concat(j.toString()));
      el1.innerHTML = el1.innerHTML + `
        <td id="`.concat(id1).concat(`" style="width: 20px; min-width: 20px;" onclick="cell_click(`.concat(id1).concat(`)"></td>
      `));
      el2.innerHTML = el2.innerHTML + `
        <td id="`.concat(id2).concat(`" style="width: 20px; min-width: 20px;" onclick="cell_click(`.concat(id2).concat(`)"></td>
      `));
      j++;
    }


    i++;
  }
    start_game_mayhem();
  }
  else if (game_name == 'snake') {
    console.log('this is '.concat(game_name));
    document.getElementById('game_title').textContent = "Good Ol' Snake";
    document.getElementById('bod').innerHTML = `
    <br/><br/>
    <div style="color: purple;font-size: 4em;font-family:monospace;">Good Ol' Snake</div>
    <br/>

     <canvas id="game2" width="525" height="525" ></canvas>

     <div style="left: 30%;">
            <br/>
            <div id="restart" onclick="to_rules();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center;  cursor: pointer;display: inline-block;">Rules</div>
             <div id="restart" onclick="reloadSnake();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center;  cursor: pointer;display: inline-block;">Retry!</div>
      </div>
    `;
    canvas=document.getElementById('game2');
    ctx=canvas.getContext('2d');
    tileSize=canvas.clientWidth/tileCount-2;
    drawGame();
  }
  else if (game_name == 'monumental') {
    console.log('this is '.concat(game_name));
    document.getElementById('game_title').textContent = 'Monu-Mental';
    document.getElementById('bod').innerHTML = `
      <h1 style="color: purple;">Monu-Mental</h1>

        <div class="central_cell">
            <table id="pixel_table" style="background-color: white;width: 40%">

            <tr id="m1" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m2" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m3" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m4" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m5" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m6" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m7" style="height: 60px; min-height: 60px;"></tr>
            <tr id="m8" style="height: 60px; min-height: 60px;"></tr>




            </table>
            <br>
            <span id="message" style="display: none;"></span>
            <br>
            <span class="countA" style="display: none;">| Total clicks: <span id="countArea">0</span> |</span>
        </div>
        <div>
              <br/>
              <div id="start" onclick="to_rules();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center; cursor: pointer;display:inline-block;margin-left: 4%;margin-right: 0.2%;">Rules</div>
              <div id="start" onclick="submitMental();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center; cursor: pointer;display:inline-block;margin-right: 0.2%;">Submit</div>
              <div id="restart" onclick="restartMental();" style="color:white;background-color: purple;font-size: 2em; width: 10%;height:6%; text-align: center; cursor: pointer;display:inline-block;">New Game</div>
        </div>

        `;
        var i = 1;
        while (i < 9){
          var el = document.getElementById('m'.concat(i.toString()));
          var j = 1;
          while (j < 9){
            var id0= "c".concat(i.toString().concat("x").concat(j.toString()));
            el.innerHTML = el.innerHTML + `
              <td id="`.concat(id0).concat(`" style="width: 20px; min-width: 20px;text-align:center;" onclick="cell_click2(`.concat(id0).concat(`)"></td>
            `));

            j++;
          }


          i++;
        }
      start_game_mental();
  }
  else if (game_name == "nonogram"){
    document.getElementById('game_title').textContent = 'Nonogram';
    document.getElementById("bod").innerHTML = `
       <h1 style="color: purple;">Nonogram</h1>

        <div class="central_cell">
            <table id="nono_table" style="background-color: white;width: 40%">

            <tr id="n0" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n1" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n2" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n3" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n4" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n5" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n6" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n7" style="height: 60px; min-height: 60px;"></tr>
            <tr id="n8" style="height: 60px; min-height: 60px;"></tr>




            </table>

            <span class="countA" style="display: none;">| Total clicks: <span id="countArea">0</span> |</span>
        </div>
        <div>
              <br/>
              <div id="start" onclick="to_rules();" style="color:white;background-color: purple;font-size: 1.6em; width: 7%; text-align: center; cursor: pointer;display:inline-block;margin-left: 4%;margin-right: 0.2%;">Rules</div>
              <div onclick='check_nono();' style="color: white;background-color: purple;font-size: 1.6em;width:13%;display:inline-block;cursor: pointer;">Check Solution</div>
              <div id="restart" onclick="restartNono();" style="color:white;background-color: purple;font-size: 1.6em; width: 10%; text-align: center; cursor: pointer;display:inline-block;">New Game</div>
        </div>
    `;
    var i = 0;
        while (i < 9){
          var el = document.getElementById('n'.concat(i.toString()));
          var j = 0;
          while (j < 9){
            var id0= "cn".concat(i.toString().concat("x").concat(j.toString()));
            if (j == 0 && i == 0){
              el.innerHTML = el.innerHTML + `
              <td id="`.concat(id0).concat(`" style="width: 20px; min-width: 20px;background-color:black;"></td>
            `);
            }
            else if (j == 0){
              el.innerHTML = el.innerHTML + `
              <td id="`.concat(id0).concat(`" style="width: 20px; min-width: 20px;text-align:center;background-color:yellow;"></td>
            `);

            }
            else if (i == 0){
              el.innerHTML = el.innerHTML + `
              <td id="`.concat(id0).concat(`" style="width: 20px; min-width: 20px;text-align:center;background-color:yellow;"></td>
            `);

            }
            else {
              el.innerHTML = el.innerHTML + `
              <td id="`.concat(id0).concat(`" style="width: 20px; min-width: 20px;text-align:center;" onclick="cell_click3(`.concat(id0).concat(`)"></td>
            `));
            }



            j++;
          }


          i++;
        }
        start_game_nono();
    }
    else if (game_name == 'spacerumble'){
      console.log('this is '.concat(game_name));
      document.getElementById('game_title').textContent = 'Space Rumble';
      document.getElementById('bod').innerHTML = `
      <br/><br/>
      <div style="color: purple;font-size: 4em;font-family:monospace;">Space Rumble</div>
      <br/>

      <canvas id="game2" width="800" height="500" ></canvas>

      <div>
              <br/>
              <div id="start" onclick="to_rules();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center; cursor: pointer;display:inline-block;margin-right: 0.2%;">Rules</div>
              <div id="start" onclick="reloadRun();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center; cursor: pointer;display:inline-block;margin-right: 0.2%;">Play!</div>
              <div id="restart" onclick="restartRun();" style="color:white;background-color: purple;font-size: 2em; width: 7%;height:6%; text-align: center; cursor: pointer;display:inline-block;">Retry!</div>
        </div>
      `;
      canvas3=document.getElementById('game2');
      ctx3=canvas3.getContext('2d');
      ctx3.fillStyle = 'pink';
      setupRun();
    }
    else if (game_name == "tetris"){
      console.log('this is '.concat(game_name));
      document.getElementById('game_title').textContent = 'Tetris';
      document.getElementById('bod').innerHTML = `
      <div style="position: absolute; left: 10%; top: 15%;">
        <h1 style="color:purple; font-size: 4em; ">Tetris</h1>
        <div style="color: purple;font-weight: 800;font-size:1.5em;background-color:pink;">Play the all time classic game Tetris on Web 3</div><br/>
        <div style="color: purple;font-weight:800;font-size:1.5em;">Rules: <br/>You can only move the pieces in specific ways. <br/>Your game is over if your pieces reach the top of the screen, <br/>and you can only remove pieces from the screen <br/>by filling all the blank space in a line.</div>
      </div><br/>
      <canvas id="game2" width="320" height="640" style="margin-left: 30%"></canvas>

      <div style="margin-left: 30%;">
              <br/>
              <div id="start" onclick="to_rules();" style="color:white;background-color: purple;font-size: 2em; width: 8%;height:6%; text-align: center; cursor: pointer;display:inline-block;margin-right:1%;">Rules</div>

              <div id="start" onclick="reloadTetris();" style="color:white;background-color: purple;font-size: 2em; width: 8%;height:6%; text-align: center; cursor: pointer;display:inline-block;margin-right:1%;">Play!</div>

              <div id="restart" onclick="restartTetris();" style="color:white;background-color: purple;font-size: 2em; width: 9%;height:6%; text-align: center; cursor: pointer;display:inline-block;">Retry!</div>
        </div>
      `;
      canvas4=document.getElementById('game2');
      ctx4=canvas4.getContext('2d');
      ctx4.fillStyle = 'pink';
      ctx4.fillRect(0, 0, canvas4.width, canvas4.height);
    }
    else {
      document.getElementById("bod").innerHTML = `
        <div class="homeText3">This page does not exist. Are you choosing a valid game?</div>
      `;
    }

}
window.load_this_game = load_this_game;


// pixel mayhem part

async function cell_click(idx){
  var id = idx.id.toString();
  if (id[1] == "1"){
    console.log('first grid');
    var sp = id.split("c1");
    var grids = sp[1].split("x");
    console.log(grids);
  }
  else if (id[1] == "2"){
    console.log("second grid");
    var sp = id.split("c2");
    var grids = sp[1].split("x");
    console.log(grids);
    const val = op[grids[0] - 1][grids[1] - 1];
    if (val == 0){
      op[grids[0] - 1][grids[1] - 1] = 1;
      document.getElementById(id).style.backgroundColor = 'purple';
    }
    else {
      op[grids[0] - 1][grids[1] - 1] = 0;
      document.getElementById(id).style.backgroundColor = 'white';
    }

  }
  else {
    console.log("wtf just happened man");
  }
}
window.cell_click = cell_click;

function start_game_mayhem(){
  var i = 1;
  var j = 1;
  key = Array(25).fill().map(() => Array(25).fill(0));
  op = Array(25).fill().map(() => Array(25).fill(0));
  mayhem_time = Date.now();
  while (i < 26){
    j = 1;
    while (j < 26){
      var r = Math.floor(Math.random() * 10);
      if (r > 4){
        var id= "c1".concat(i.toString().concat("x").concat(j.toString()));
        document.getElementById(id).style.backgroundColor = 'purple';
        key[i - 1][j - 1] = 1;
      }
      else {
        key[i - 1][j - 1] = 0;
      }
      j++;
    }
    i++;
  }
}

async function get_key(){
  console.log(key);
  console.log(op);
  var flag = true;
  for (var i = 0; i < key.length; i++){
    for (var j = 0; j < key.length; j++){
      if (op[i][j] != key[i][j]){
        flag = false;
        break;
      }
    }
  }
  console.log(flag);
  const time_elapsed = Date.now() - mayhem_time;
  console.log(time_elapsed);
}
window.get_key = get_key;


// snake part

var canvas=document.getElementById('game');
var ctx=canvas.getContext('2d');

var background = new Image();
//background.src = "./img/favicon.ico";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(background,400,400);
}

class snakePart{
constructor(x, y){
    this.x=x;
    this.y=y;
}

}

let speed=5;
let tileCount=23;

var tileSize=canvas.clientWidth/tileCount-2;
let headX=10;
let headY=10;
console.log(canvas.clientWidth);
console.log(tileSize);
// array for snake parts
const snakeParts=[];
let tailLength=0;

//initialize the speed of snake
let xvelocity=0;
let yvelocity=0;

//draw apple
let appleX=5;
let appleY=5;

//scores
let score=0;

//direction
var dir = "";

// create game loop-to continously update screen
function drawGame(){
    changeSnakePosition();
    // game over logic
    let result=isGameOver();
    if(result){// if result is true
        return;
    }
    clearScreen();
    drawBG();
    drawSnake();
    drawApple();
    checkCollision()
    drawScore();
    setTimeout(drawGame, 1000/speed);//update screen 7 times a second
}
//Game Over function
function isGameOver(){
    let gameOver=false;
    //check whether game has started
    if(yvelocity===0 && xvelocity===0){
        //console.log("case 1");
        return false;
    }
    if(headX<0){//if snake hits left wall
        //console.log("case 2");
        gameOver=true;
    }
    else if(headX===tileCount){//if snake hits right wall
        //console.log("case 3");
        gameOver=true;
    }
    else if(headY<0){//if snake hits wall at the top
        //console.log("case 4");
        gameOver=true;
    }
    else if(headY===tileCount){//if snake hits wall at the bottom
        //console.log("case 5");
        gameOver=true;
    }

    //stop game when snake crush to its own body

     for(let i=0; i<snakeParts.length;i++){
         let part=snakeParts[i];
         if(part.x===headX && part.y===headY){//check whether any part of snake is occupying the same space
             gameOver=true;
             break; // to break out of for loop
         }
     }


    //display text Game Over
    if(gameOver){
      ctx.fillStyle = 'black';
      ctx.globalAlpha = 0.75;
      ctx.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);

      ctx.globalAlpha = 1;
      ctx.fillStyle = 'white';
      ctx.font = '22px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GAME OVER! Your score is '.concat(score.toString()), canvas.width / 2, canvas.height / 2);

    }

    return gameOver;// this will stop execution of drawgame method
}

// score function
function drawScore(){
ctx.fillStyle="black"// set our text color to white
ctx.font="10px verdena"//set font size to 10px of font family verdena
ctx.fillText("Score: " +score, canvas.clientWidth-50,10);// position our score at right hand corner

}

// clear our screen
 function clearScreen(){

ctx.fillStyle= 'pink'// make screen black
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height

 }
 function drawSnake(){

    ctx.fillStyle="#009900";
    //loop through our snakeparts array
    for(let i=0;i<snakeParts.length;i++){
        //draw snake parts
        let part=snakeParts[i]
         ctx.fillRect(part.x *tileCount, part.y *tileCount, tileSize,tileSize)
    }
    //add parts to snake --through push
    snakeParts.push(new snakePart(headX,headY));//put item at the end of list next to the head
    if(snakeParts.length>tailLength){
        snakeParts.shift();//remove furthest item from  snake part if we have more than our tail size

    }
    ctx.fillStyle="#007700";
    ctx.fillRect(headX* tileCount,headY* tileCount, tileSize,tileSize)

    if (dir=="up"){
      ctx.fillStyle = "pink"
      ctx.beginPath()
      ctx.moveTo(headX*tileCount, headY*tileCount)
      ctx.lineTo(headX*tileCount + tileSize/2, headY*tileCount + 2*tileSize/3)
      ctx.lineTo(headX*tileCount + tileSize, headY*tileCount)
      ctx.fill()
    }
    else if (dir == "down"){
      ctx.fillStyle = "pink"
      ctx.beginPath()
      ctx.moveTo(headX*tileCount, headY*tileCount + tileSize)
      ctx.lineTo(headX*tileCount + tileSize/2, headY*tileCount + tileSize/3)
      ctx.lineTo(headX*tileCount + tileSize, headY*tileCount + tileSize)
      ctx.fill()
    }
    else if (dir == "right"){
      ctx.fillStyle = "pink"
      ctx.beginPath()
      ctx.moveTo(headX*tileCount + tileSize, headY*tileCount)
      ctx.lineTo(headX*tileCount + tileSize/3, headY*tileCount + tileSize/2)
      ctx.lineTo(headX*tileCount + tileSize, headY*tileCount + tileSize)
      ctx.fill()
    }
    else if (dir == "left"){
      ctx.fillStyle = "pink"
      ctx.beginPath()
      ctx.moveTo(headX*tileCount, headY*tileCount)
      ctx.lineTo(headX*tileCount + 2*tileSize/3, headY*tileCount + tileSize/2)
      ctx.lineTo(headX*tileCount, headY*tileCount + tileSize)
      ctx.fill()
    }
    else {}





 }
 function changeSnakePosition(){
     headX=headX + xvelocity;
     headY=headY+ yvelocity;

 }
 function drawApple(){
    //console.log("being called");
      ctx.beginPath();
      ctx.arc(appleX*tileCount + tileSize/2, appleY*tileCount + tileSize/2, tileSize/2, 0, 2*Math.PI);
     ctx.fillStyle="red";
     ctx.fill();

     //ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)
 }
 // check for collision and change apple position
 function checkCollision(){
     if(appleX==headX && appleY==headY){
        console.log("hey");
         appleX=Math.floor(Math.random()*tileCount);
         appleY=Math.floor(Math.random()*tileCount);
         tailLength++;
         score++; //increase our score value

     }
 }


function reloadSnake(){
  window.location.reload();
}
window.reloadSnake = reloadSnake;

function drawBG(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(background,400,400);
}
window.drawBG = drawBG;



// mental part

function shuffle_arr(arr){
  var i;
  for (i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function one_to_two_d(arr){
  return Array(8).fill().map((_, i) => arr.slice(i * 8, (i + 1) * 8));
}

function start_game_mental(){
  var i = 1;
  var j = 0;
  mm = Array(10).fill().map(() => Array(10).fill(0));
  covered = [];
  mental_clicks = 0;
  mental_time = Date.now();
  a_cell = [-1,-1];
  a_id = "";
  var ref_arr = [];
  while (j < 32){
    ref_arr[j] = j + 1;
    ref_arr[64 - j - 1] = j + 1;
    j++;
  }
  var shuf_arr = shuffle_arr(ref_arr);
  console.log(shuf_arr);
  mm = one_to_two_d(shuf_arr);
  console.log(mm);

}

function pause(){
  last_click = Date.now();
  return new Promise(resolve => setTimeout(resolve, 1000));
}


async function cell_click2(idx){
  var this_click = Date.now();
  if (this_click - last_click < 1000){
    return;
  }
  else {
    mental_clicks++;
  }
  var id = idx.id.toString();
  var sp = id.split("c");
  var grids = sp[1].split("x");
  console.log(grids);
  const val = mm[grids[0] - 1][grids[1] - 1];
  if (covered.indexOf(val) != -1){
    return;
  }
  if (a_cell[0] == grids[0] && a_cell[1] == grids[1]){
    return;
  }
  var el = document.getElementById(id);
  var txt = document.getElementById(id).textContent ?? "";
  if (a_id == ""){
    document.getElementById(id).textContent = val.toString();
    document.getElementById(id).style.backgroundColor = colors[val - 1];
    a_id = id;
    a_cell = [grids[0], grids[1]];
  }
  else {
    document.getElementById(id).textContent = val.toString();
    document.getElementById(id).style.backgroundColor = colors[val - 1];
    if (val == mm[a_cell[0] - 1][a_cell[1] - 1]){
      if (covered.indexOf(val) == -1){
        covered.push(val);
      }
    }
    else {
      await pause();
      document.getElementById(id).textContent = "";
      document.getElementById(a_id).textContent = "";
      document.getElementById(id).style.backgroundColor = "white";
      document.getElementById(a_id).style.backgroundColor = "white";
    }
    a_id = "";
    a_cell = [-1,-1];
  }





}
window.cell_click2 = cell_click2;

async function submitMental(){
  console.log(covered);
  if (covered.length == 32){
    console.log('success!');
    const time_taken = Date.now() - mental_time;
    console.log(mental_clicks);
    console.log(time_taken);
  }
  else {
    console.log('incomplete');
  }
}
window.submitMental = submitMental;

async function restartMental(){
  window.location.reload();
}
window.restartMental = restartMental;


// nonogram

function generateNonogram(width, height) {
  const grid = Array(height).fill(0).map(() => Array(width).fill(0));

  function isValid(x, y) {
    // Check rows and columns for validity
    for (let i = 0; i < height; i++) {
      let rowSum = 0;
      for (let j = 0; j < width; j++) {
        rowSum += grid[i][j];
      }
      if (rowSum > width) return false;
    }

    for (let i = 0; i < width; i++) {
      let colSum = 0;
      for (let j = 0; j < height; j++) {
        colSum += grid[j][i];
      }
      if (colSum > height) return false;
    }

    return true;
  }

  function backtrack(x, y) {
    if (y >= grid.length) return true;

    for (let i = 0; i < 2; i++) {
      grid[y][x] = i;

      if (x < grid[0].length - 1) {
        if (backtrack(x + 1, y)) return true;
      } else if (y < grid.length - 1) {
        if (backtrack(0, y + 1)) return true;
      } else {
        return isValid(x, y);
      }
    }

    return false;
  }

  backtrack(0, 0);

  // Randomly set some cells to 1
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (Math.random() < 0.5) {
        grid[i][j] = 1;
      }
    }
  }

  return grid;
}

function generateNonogramClues(grid) {
  const rowClues = [];
  const colClues = [];

  // Generate row clues
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    const blackBlocks = [];
    const whiteBlocks = [];
    let currentBlock = 0;

    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) {
        currentBlock++;
      } else {
        if (currentBlock > 0) {
          blackBlocks.push(currentBlock);
          currentBlock = 0;
        }
      }
    }

    if (currentBlock > 0) {
      blackBlocks.push(currentBlock);
    }

    rowClues.push(blackBlocks);
  }

  // Generate column clues
  for (let j = 0; j < grid[0].length; j++) {
    const col = [];
    for (let i = 0; i < grid.length; i++) {
      col.push(grid[i][j]);
    }

    const blackBlocks = [];
    const whiteBlocks = [];
    let currentBlock = 0;

    for (let i = 0; i < col.length; i++) {
      if (col[i] === 1) {
        currentBlock++;
      } else {
        if (currentBlock > 0) {
          blackBlocks.push(currentBlock);
          currentBlock = 0;
        }
      }
    }

    if (currentBlock > 0) {
      blackBlocks.push(currentBlock);
    }

    colClues.push(blackBlocks);
  }

  return { rowClues, colClues };
}

async function nono_test(){
  const nonogram = generateNonogram(8, 8);
  console.log(nonogram);
  const clues = generateNonogramClues(nonogram);
  console.log(clues);
}
window.nono_test = nono_test;


async function cell_click3(idx){
  var id = idx.id.toString();
  var sp = id.split("cn");
  var grids = sp[1].split("x");
  nono_clicks++;
  if (nono_cur[grids[0] - 1][grids[1] - 1] == 0){
    nono_cur[grids[0] - 1][grids[1] - 1] = 1;
    document.getElementById(id).style.backgroundColor = "purple";
  }
  else {
    nono_cur[grids[0] - 1][grids[1] - 1] = 0;
    document.getElementById(id).style.backgroundColor = "white";
  }

}
window.cell_click3 = cell_click3;


async function start_game_nono(){
  nono_fin = Array(8).fill().map(() => Array(8).fill(0));
  nono_cur = Array(8).fill().map(() => Array(8).fill(0));
  nono_fin = generateNonogram(8,8);
  nono_clicks = 0;
  nono_time = Date.now();
  const clues = generateNonogramClues(nono_fin);
  r_clues = clues.rowClues;
  c_clues = clues.colClues;

  var k = 0;
  while (k < 9){
    if (k != 0){
      var id = "cn".concat(k.toString()).concat('x0');
      document.getElementById(id).textContent = c_clues[k - 1].toString();
    }
    k++;
  }
  k = 0;
  while (k < 9){
    if (k != 0){
      var id = "cn0x".concat(k.toString());
      document.getElementById(id).textContent = r_clues[k - 1].toString();
    }
    k++;
  }

}

function compareArrays(a, b){
  if (a.length != b.length){
    return false;
  }
  for (var i = 0; i < a.length; i++){
    if (a[i] != b[i]){
      return false;
    }
  }
  return true;
}


async function check_nono(){
  var fin_clues = generateNonogramClues(nono_fin);
  var cur_clues = generateNonogramClues(nono_cur);
  console.log(fin_clues);
  console.log(cur_clues);


  var flag = true;
  for (var i = 0; i < fin_clues.colClues.length; i++) {
    if (!compareArrays(fin_clues.colClues[i], cur_clues.rowClues[i]) || !compareArrays(fin_clues.rowClues[i], cur_clues.colClues[i])){
      flag = false;
      break;
    }
  }
  if (flag){
    console.log('success!');
    const time_taken = Date.now() - nono_time;
    console.log(nono_clicks);
    console.log(time_taken);
  }
  else {
    console.log('incomplete!');
  }

}
window.check_nono = check_nono;

async function restartNono(){
  window.location.reload();
}
window.restartNono = restartNono;




// space rumble

var canvas3 = document.getElementById('game');
var ctx3 = canvas3.getContext('2d');

// Set the canvas dimensions
canvas3.width = 640;
canvas3.height = 480;

// Load the assets
const playerImage = new Image();
playerImage.src = './img/playerbg.png';

const obstacle1Image = new Image();
obstacle1Image.src = './img/obstacle1bg.png';

const obstacle2Image = new Image();
obstacle2Image.src = './img/obstacle2bg.png';

// Define the game variables
var playerX = 10;
var playerY = canvas3.height - 50;
let playerSpeed = 25;

var obstacles = [];
var obstacleSpeed = 4;

var scoreRun = 0;

var stars = [];

function clearScreen2(){

  ctx3.fillStyle= 'rgb(0,0,60)';// make screen nightsky
  ctx3.fillRect(0,0,canvas3.clientWidth,canvas3.clientHeight)// nightskylike color start from 0px left, right to canvas width and canvas height
  ctx3.fillStyle = 'white';
  if (stars.length == 0){
    for (let i = 0; i < 200; i++){
      const x = Math.floor(Math.random() * canvas3.width);
      const y = Math.floor(Math.random() * canvas3.height);
      ctx3.beginPath();
      ctx3.arc(x, y, 1, 0, 2 * Math.PI);
      ctx3.fill();
      stars.push([x, y]);
    }

  }
  else {
    for (let i = 0; i < stars.length; i++){
      const x = stars[i][0] - 1;
      stars[i][0] = x;
      const y = stars[i][1];
      ctx3.beginPath();
      ctx3.arc(x, y, 1, 0, 2 * Math.PI);
      ctx3.fill();

    }
    var r = Math.floor(Math.random() * 10);
    if (r > 5){
      const new_y = Math.floor(Math.random() * canvas3.height);
      stars.push([canvas3.width, new_y]);
    }

    stars = stars.filter((entry) => entry[0] >= 0);

  }



}

function checkCollisionRun(x1, y1, w1, h1, x2, y2, w2, h2) {
  if (x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2) {
    return true;
  } else {
    return false;
  }
}


async function setupRun() {
  // Clear the canvas
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  clearScreen2();
  // Draw the player
  ctx3.drawImage(playerImage, 0, 0, playerImage.width, playerImage.height, playerX, playerY, 70, 50);




}
window.setupRun = setupRun;



async function reloadRun() {
  // Clear the canvas
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  clearScreen2();
  // Draw the player
  ctx3.drawImage(playerImage, 0, 0, playerImage.width, playerImage.height, playerX, playerY, 70, 50);

  // Update the obstacles
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x -= obstacleSpeed;

    // Draw the obstacle
    ctx3.drawImage(obstacles[i].image, 0, 0, obstacles[i].image.width, obstacles[i].image.height, obstacles[i].x, obstacles[i].y, 50, 50);

    // Check for collision with the player
    if (checkCollisionRun(playerX, playerY, 50, 50, obstacles[i].x, obstacles[i].y, 50, 50)) {
      // Game over
      ctx3.fillStyle = 'black';
      ctx3.globalAlpha = 0.75;
      ctx3.fillRect(0, canvas3.height / 2 - 30, canvas3.width, 60);

      ctx3.globalAlpha = 1;
      ctx3.fillStyle = 'white';
      ctx3.font = '32px monospace';
      ctx3.textAlign = 'center';
      ctx3.textBaseline = 'middle';
      ctx3.fillText('GAME OVER! Your score is '.concat(scoreRun.toString()), canvas3.width / 2, canvas3.height / 2);
      obstacles = [];
      scoreRun = 0;
      return;
    }

    // Remove the obstacle if it's off the screen
    if (obstacles[i].x < -obstacles[i].image.width) {
      obstacles.splice(i, 1);
    }
  }

  // Add new obstacles
  var yObst = Math.floor(Math.random() * (canvas3.height - 50));
  var zone_prev = 0;
  var zone_new = 1;
  var strikes = 0;
  const band = canvas3.height/3;


  if (Math.random() < 0.035) {
    const obstacleImage = Math.random() < 0.5 ? obstacle1Image : obstacle2Image;
    if (yObst > 2*band){
      yObst = Math.floor(Math.random() * (band));
      zone_new = 1;
    }
    else if (yObst <= 2*band && yObst > band){
      yObst = Math.floor(Math.random() * (band - 50) + 2*band);
      zone_new = 2;
    }
    else {
      yObst = Math.floor(Math.random() * (band - 50) + band);
      zone_new = 3;
    }

    if (zone_new != zone_prev){
      obstacles.push({ x: canvas3.width, y: yObst, image: obstacleImage });
      zone_prev = zone_new;
    }
    else {
      strikes++;
      if (strikes == 3){
        strikes = 0;
        zone_prev = 0;
      }

    }

  }

  // Update the score
  scoreRun = scoreRun + 1 + Math.floor(scoreRun/1000);

  // Draw the score
  ctx3.font = '24px Arial';
  ctx3.fillStyle = 'purple';
  ctx3.textAlign = 'left';
  ctx3.textBaseline = 'top';
  ctx3.fillText('Score: ' + scoreRun, 10, 10);

  // Request the next frame
  requestAnimationFrame(reloadRun);
}
window.reloadRun = reloadRun;

function restartRun(){

    window.location.reload();
}
window.restartRun = restartRun;


// tetris

var canvas4 = document.getElementById('game');
var ctx4 = canvas4.getContext('2d');

// Set the canvas dimensions
canvas4.width = 640;
canvas4.height = 480;

const gridTetris = 32;
const tetrominoSequence = [];

// keep track of what is in every cell of the game using a 2d array
// tetris playfield is 10x20, with a few rows offscreen
const playfield = [];

// populate the empty state
for (let row = -2; row < 20; row++) {
  playfield[row] = [];

  for (let col = 0; col < 10; col++) {
    playfield[row][col] = 0;
  }
}

// how to draw each tetromino
// @see https://tetris.fandom.com/wiki/SRS
const tetrominos = {
  'I': [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]
  ],
  'J': [
    [1,0,0],
    [1,1,1],
    [0,0,0],
  ],
  'L': [
    [0,0,1],
    [1,1,1],
    [0,0,0],
  ],
  'O': [
    [1,1],
    [1,1],
  ],
  'S': [
    [0,1,1],
    [1,1,0],
    [0,0,0],
  ],
  'Z': [
    [1,1,0],
    [0,1,1],
    [0,0,0],
  ],
  'T': [
    [0,1,0],
    [1,1,1],
    [0,0,0],
  ]
};

// color of each tetromino
const colorsTetris = {
  'I': 'cyan',
  'O': 'yellow',
  'T': 'purple',
  'S': 'green',
  'Z': 'red',
  'J': 'blue',
  'L': 'orange'
};

var countTetris = 0;
var tetromino = getNextTetromino();
var rAF = null;  // keep track of the animation frame so we can cancel it
var gameOverTetris = false;
var scoreTetris = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// generate a new tetromino sequence
// @see https://tetris.fandom.com/wiki/Random_Generator
function generateSequence() {
  const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

  while (sequence.length) {
    const rand = getRandomInt(0, sequence.length - 1);
    const name = sequence.splice(rand, 1)[0];
    tetrominoSequence.push(name);
  }
}


// get the next tetromino in the sequence
function getNextTetromino() {
  if (tetrominoSequence.length === 0) {
    generateSequence();
  }

  const name = tetrominoSequence.pop();
  const matrix = tetrominos[name];

  // I and O start centered, all others start in left-middle
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

  // I starts on row 21 (-1), all others start on row 22 (-2)
  const row = name === 'I' ? -1 : -2;

  return {
    name: name,      // name of the piece (L, O, etc.)
    matrix: matrix,  // the current rotation matrix
    row: row,        // current row (starts offscreen)
    col: col         // current col
  };
}



// rotate an NxN matrix 90deg
// @see https://codereview.stackexchange.com/a/186834
function rotate(matrix) {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) =>
    row.map((val, j) => matrix[N - j][i])
  );

  return result;
}

// check to see if the new matrix/row/col is valid
function isValidMove(matrix, cellRow, cellCol) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] && (
          // outside the game bounds
          cellCol + col < 0 ||
          cellCol + col >= playfield[0].length ||
          cellRow + row >= playfield.length ||
          // collides with another piece
          playfield[cellRow + row][cellCol + col])
        ) {
        return false;
      }
    }
  }

  return true;
}



// place the tetromino on the playfield
function placeTetromino() {
  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {

        // game over if piece has any part offscreen
        if (tetromino.row + row < 0) {
          return showGameOver();
        }
        else {
          scoreTetris++;
        }

        playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
      }
    }
  }

  // check for line clears starting from the bottom and working our way up
  for (let row = playfield.length - 1; row >= 0; ) {
    if (playfield[row].every(cell => !!cell)) {

      // drop every row above this one
      for (let r = row; r >= 0; r--) {
        for (let c = 0; c < playfield[r].length; c++) {
          playfield[r][c] = playfield[r-1][c];
        }
      }
      scoreTetris += 10;
    }
    else {
      row--;
    }
  }

  tetromino = getNextTetromino();
}


// show the game over screen
function showGameOver() {
  cancelAnimationFrame(rAF);
  gameOverTetris = true;

  ctx4.fillStyle = 'black';
  ctx4.globalAlpha = 0.75;
  ctx4.fillRect(0, canvas4.height / 2 - 30, canvas4.width, 60);

  ctx4.globalAlpha = 1;
  ctx4.fillStyle = 'white';
  ctx4.font = '16px monospace';
  ctx4.textAlign = 'center';
  ctx4.textBaseline = 'middle';
  ctx4.fillText('GAME OVER! Your score is '.concat(scoreTetris.toString()), canvas4.width / 2, canvas4.height / 2);
}


function clearScreen4(){
  ctx4.fillStyle = 'pink';
  ctx4.fillRect(0, 0, canvas4.width, canvas4.height);
  // Draw the score
  ctx4.font = '24px Arial';
  ctx4.fillStyle = 'purple';
  ctx4.textAlign = 'left';
  ctx4.textBaseline = 'top';
  ctx4.fillText('Score: ' + scoreTetris, 10, 10);
}


// game loop
function loop() {
  rAF = requestAnimationFrame(loop);
  ctx4.clearRect(0,0,canvas4.width,canvas4.height);
  clearScreen4();

  // draw the playfield
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col];
        ctx4.shadowColor = 'grey';
        ctx4.shadowBlur = 2;
        ctx4.shadowOffsetX = 1;
        ctx4.shadowOffsetY = 1;
        ctx4.fillStyle = colorsTetris[name];

        // drawing 1 px smaller than the grid creates a grid effect
        ctx4.fillRect(col * gridTetris, row * gridTetris, gridTetris-1, gridTetris-1);
        ctx4.strokeStyle = 'pink';
        ctx4.strokeRect(col * gridTetris, row * gridTetris, gridTetris-1, gridTetris-1);
      }
    }
  }

  // draw the active tetromino
  if (tetromino) {

    // tetromino falls every 35 frames
    if (++countTetris > 35) {
      tetromino.row++;
      countTetris = 0;

      // place piece if it runs into anything
      if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTetromino();
      }
    }

    ctx4.fillStyle = colorsTetris[tetromino.name];

    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {

          // drawing 1 px smaller than the grid creates a grid effect
          ctx4.fillRect((tetromino.col + col) * gridTetris, (tetromino.row + row) * gridTetris, gridTetris-1, gridTetris-1);
        }
      }
    }
  }
}



async function reloadTetris(){
  rAF = requestAnimationFrame(loop);
}
window.reloadTetris = reloadTetris;



async function restartTetris(){
  window.location.reload();
}
window.restartTetris = restartTetris;

// common

async function to_wp(){
  window.open('https://docs.google.com/document/d/1QllAptTCUifm2BWRoMr8lhODAeokwHTPDXP5lr6IN5U/edit?usp=sharing', '_blank');
}
window.to_wp = to_wp;

async function to_rules(){
  var url = window.location.toString();
  var game_name = url.substring(url.indexOf('?') + 1);
  window.open('./info.html?'.concat(game_name), '_blank');
}
window.to_rules = to_rules;


async function load_rules(){
  var url = window.location.toString();
  var game_name = url.substring(url.indexOf('?') + 1);
  var el = document.getElementById('game_info');
  var el2 = document.getElementById("game_title");
  if (game_name == 'pixelmayhem'){
    el2.textContent = 'Pixel Mayhem';
    el.innerHTML = `
        <p style="font-size: 2em;">Are you confident of your laser focus?</p>
        <p style="font-size: 1.6em;">Play Pixel Mayhem and recreate the canvas on the left EXACTLY as it is on your canvas on the right.</p>
        <p style="font-size: 1.6em;">Do this in lesser time than your competing players to win Pixel Mayhem.</p>
    `;
  }
  else if (game_name == 'snake'){
    el2.textContent = "Good Ol' Snake";
    el.innerHTML = `
        <p style="font-size: 2em;">Snake is back! This time on Web 3!</p>
        <p style="font-size: 1.6em;">The iconic Snake Game is back to make you relive your childhood. Move the Snake with Up, Down, Left, Right keys on your Keyboard. The Snake gets longer with each bug it eats. It dies if it touches the boundary or itself (not meant to sound wrong but it probably does).</p>
        <p style="font-size: 1.6em;">Start the game by pressing the Up, Down, Left, or Right key.</p>
    `;
  }
  else if (game_name == 'nonogram'){
    el2.textContent = 'Nonogram';
    el.innerHTML = `
        <p style="font-size: 2em;">The widely popular Nonogram is now LIVE on your favorite chains!</p>
        <p style="font-size: 1.6em;">The goal is to fill the boxes in the grid as per the hints given next to the columns and rows. You're also being timed so you need to be correct, but also quicker than your competing players.</p>
        <p style="font-size: 1.6em;">For example, a [3, 1, 1] next to a row means three consecutive blocks are to be shaded, then a couple of single blocks away from it, and one another as well.</p>
        <p style="font-size: 1.6em;"> Usually, each Nonogram has 1 UNIQUE solution, but if you're confident yours is correct but not unique, we count it too!</p>
    `;
  }
  else if (game_name == 'monumental'){
    el2.textContent = 'Monu-Mental';
    el.innerHTML = `
        <p style="font-size: 2em;">The Mental Game is for you if you flex a Photographic Memory</p>
        <p style="font-size: 1.6em;">The goal is to highlight two boxes with the same symbol and color inside them.  </p>
        <p style="font-size: 1.6em;">Click two matching symbols and they remain visible, but if they don't match, they hide back! Make every box in the grid visible to complete Monu-Mental. You're also being timed so make sure to be quicker than your competing players!</p>

    `;
  }
  else if (game_name == 'spacerumble'){
    el2.textContent = 'Space Rumble';
    el.innerHTML = `
        <p style="font-size: 2em;">A Sort of Variation of Space Impact from Our Black and White Phone Days</p>
        <p style="font-size: 1.6em;">Can you help Astro Doggo navigate through space dodging the scary asteroids?  </p>
        <p style="font-size: 1.6em;">Move him up and down the screen to avoid getting hit. Remember, asteroids can destabilize the ship just by being too close to it, without even touching it. So try to fly at a SAFE DISTANCE. There is always 'at least' one place safe on the screen and it is advised to remain close to the center to have access to that spot at all times.</p>
        <p style="font-size: 1.6em;">The highest score at the time of competition close wins!</p>

    `;
  }
  else if (game_name == 'tetris'){
    el2.textContent = 'Tetris';
    el.innerHTML = `
        <p style="font-size: 2em;">The Iconic Tetris Game is back to remind you of the Good Ol' Days</p>
        <p style="font-size: 1.6em;">Accommodate as many blocks on the canvas as you can before they overflow.  </p>
        <p style="font-size: 1.6em;">Completely filled horizontal rows disappear, leaving you with more room to work with.</p>
        <p style="font-size: 1.6em;">The highest score at the time of competition close wins!</p>

    `;
  }
  else {
    el2.textContent = 'Game Not Found';
    document.getElementById('now_tagline').style.display = 'none';
    el.innerHTML = `
        <p style="font-size: 2em;">This link is broken</p>

        <p style="font-size: 1.6em;">Are you sure the selected game exists? </p>

    `;
  }
}
window.load_rules = load_rules;




async function back_to_game(){
  var url = window.location.toString();
  var game_name = url.substring(url.indexOf('?') + 1);
  window.location.href = './launch.html?'.concat(game_name);
}
window.back_to_game = back_to_game;

//add event listener to our body
 //document.body.addEventListener('keydown', keyDown);

 document.body.addEventListener('keydown', (e) => {

  const key = e.key;
  const code = e.code;
  //console.log(`keydown key: ${key}, code: ${code}`);

  var url = window.location.toString();
  var game_name = url.substring(url.indexOf('?') + 1);

  if (game_name == "snake"){
    //up
    if(e.code=="ArrowUp"){
      //prevent snake from moving in opposite direcction
        if(yvelocity==1)
        return;
        yvelocity=-1;
        xvelocity=0;
        dir="up";

    }
    //down
    if(e.code=="ArrowDown"){
        if(yvelocity==-1)
        return;
        yvelocity=1;
        xvelocity=0;
        dir="down";
    }

    //left
    if(e.code=="ArrowLeft"){
        if(xvelocity==1)
        return;
        yvelocity=0;
        xvelocity=-1;
        dir="left";
    }
    //right
    if(e.code=="ArrowRight"){
        if(xvelocity==-1)
        return;
        yvelocity=0;
        xvelocity=1;
        dir="right";
    }
  }
  else if (game_name == "spacerumble"){
      if (e.code == "ArrowUp"){
        if (playerY < playerSpeed){
          playerY = 0;
        }
        else {
          playerY = playerY - playerSpeed;
        }

      }
      if (e.code == "ArrowDown"){
        if (playerY + playerSpeed > canvas3.height - 50){
          playerY = canvas3.height - 50;
        }
        else {
          playerY = playerY + playerSpeed;
        }
      }
  }
  else if (game_name == "tetris"){
    if (e.code == "ArrowLeft"){
      const col = tetromino.col - 1;
      if (isValidMove(tetromino.matrix, tetromino.row, col)) {
        tetromino.col = col;
      }
    }
    else if (e.code == "ArrowRight"){
      const col = tetromino.col + 1;
      if (isValidMove(tetromino.matrix, tetromino.row, col)) {
        tetromino.col = col;
      }
    }
    else if (e.code == "ArrowUp"){
      const matrix = rotate(tetromino.matrix);
      if (isValidMove(matrix, tetromino.row, tetromino.col)) {
        tetromino.matrix = matrix;
      }
    }
    else if (e.code == "ArrowDown"){
      const row = tetromino.row + 1;

      if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
        tetromino.row = row - 1;

        placeTetromino();
        return;
      }

      tetromino.row = row;
      }

    else {}
  }



});
