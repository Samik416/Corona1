var splayer;

var bg;

var gameState = 0;


var lives = 3;
var heart, HeartImg;

var money = 0;

var edges;

var CoronaImg;
var corona, corona1,corona2, corona3, corona4, corona5, corona6;
var coronagrp;

var CoinImg;
var coin, coin1, coin2;
var coingrp;

var player;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8 ,wall9, wall10, wall11, wall12;
var wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32 ,wall33, wall34, wall35, wall36;
var wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48;
var wall49, wall50, wall51, wall52, wall53, wall54, wall55, wall56 ,wall57, wall58, wall59, wall60;
var wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70, wall71;

var wallgrp;


var wall100, wall101, wall102, wall103, wall104, wall105, wall106, wall107, wall108 ,wall109, wall110, wall111, wall112;
var wall113, wall114, wall115, wall116, wall117, wall118, wall119, wall120, wall121, wall122, wall123, wall124, wall173;
var wall125, wall126, wall127, wall128, wall129, wall130, wall131, wall132 ,wall133, wall134, wall135, wall136, wall174;
var wall137, wall138, wall139, wall140, wall141, wall142, wall143, wall144, wall145, wall146, wall147, wall148, wall175;
var wall149, wall150, wall151, wall152, wall153, wall154, wall155, wall156 ,wall157, wall158, wall159, wall160, wall176;
var wall161, wall162, wall163, wall164, wall165, wall166, wall167, wall168, wall169, wall170, wall171, wall172, wall177;
var wall178, wall179, wall180, wall1181;

var wallgrp1;

function preload(){
  CoronaImg = loadImage("Images/Corona.jpeg");
  CoinImg = loadImage("Images/coin.jpeg");
  HeartImg = loadImage("Images/heart.jpeg");
  bg = loadImage("Images/Bg.jpg");
}

function setup() {
  createCanvas(1300,820);

  coingrp = createGroup();
  coronagrp = createGroup();
  wallgrp = createGroup();
  wallgrp1 = createGroup();
  edges = createEdgeSprites();

  player = createSprite(1225, 76, 40, 40);

  corona = createSprite(820, 315, 10, 10);
  corona1 = createSprite(560, 305, 10, 10);
  corona2 = createSprite(305, 380, 10, 10);
  corona3 = createSprite(460, 750, 10, 10);
  corona4 = createSprite(340, 200, 5, 5);
  corona5 = createSprite(1260, 360, 10, 10);
  corona6 = createSprite(560, 590, 10, 10);


  corona.velocityY = -9;
  corona1.velocityY = -6;
  corona2.velocityX = 6;
  corona3.velocityY = -4;
  corona4.velocityX = -6;
  corona5.velocityY = -6;
  corona6.velocityX = -6;

  corona.addImage(CoronaImg);
  corona1.addImage(CoronaImg);
  corona2.addImage(CoronaImg);
  corona3.addImage(CoronaImg);
  corona4.addImage(CoronaImg);
  corona5.addImage(CoronaImg);
  corona6.addImage(CoronaImg);

  coronagrp.add(corona);
  coronagrp.add(corona1);
  coronagrp.add(corona2);
  coronagrp.add(corona3);
  coronagrp.add(corona4);
  coronagrp.add(corona5);
  coronagrp.add(corona6);

  heart = createSprite(615, 30, 20, 20);
  heart.addImage(HeartImg);

  coin = createSprite(660, 370, 10, 10);
  coin1 = createSprite(1100, 510, 10, 10);
  coin2 = createSprite(670, 660, 10, 10);

  coin.addImage(CoinImg);
  coin1.addImage(CoinImg);
  coin2.addImage(CoinImg);

  coingrp.add(coin);
  coingrp.add(coin1);
  coingrp.add(coin2);

  wallSprites();
  adding();

  splayer = createButton("Single Player");
  splayer.size(200);
  splayer.position(560, 410);
  splayer.mousePressed(gamestates);

  hiding();

  wallSprites1();
  adding1();
}

function draw() {
  background(bg);  

  wallgrp.shapeColor = "black";

  drawSprites();

  player.collide(edges);
  
  if(gameState ===2){
    corona.velocityY = -9;
    corona1.velocityY = -6;
    corona2.velocityX = 6;
    corona3.velocityY = -4;
    corona4.velocityX = -6;
    corona5.velocityY = -6;
    corona6.velocityX = -6;
  
    console.log("Shyam");
  }

  coins();


  if(lives > 0){
  bounceOfff();
  }

  console.log(gameState);
  //console.log(lives);
  //console.log(mouseX, mouseY);

  if(gameState === 0 || gameState ===1){
    wallgrp1.setVisibleEach(false);
  }

  gameState0();
  gameState1();
  gameState2();
}


function gamestates(){
  gameState = gameState + 1;
  splayer.hide();
}

function hiding(){
  coronagrp.setVisibleEach(false);
  coingrp.setVisibleEach(false);
  wallgrp.setVisibleEach(false);
  //player.visible = false;
  heart.visible = false;
}

function showing(){
  coronagrp.setVisibleEach(true);
    coingrp.setVisibleEach(true);
    wallgrp.setVisibleEach(true);
    player.visible = true;
    heart.visible = true;
}

function move(){
  if(keyWentDown(UP_ARROW)){
    player.velocityY = -8;
    player.velocityX = 0;
  }
  if(keyWentDown(DOWN_ARROW)){
    player.velocityY = 8;
    player.velocityX = 0;
  }
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX = -8;
    player.velocityY = 0;
  }
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 8;
    player.velocityY = 0;
  }

  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0;
  }
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY = 0;
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0;
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0;
  }
}

function bounceOfff(){
  corona.bounceOff(edges);
  corona2.bounceOff(edges);
  corona3.bounceOff(edges);

  corona.bounceOff(wallgrp);
  corona1.bounceOff(wallgrp);
  corona2.bounceOff(wallgrp);
  corona3.bounceOff(wallgrp);
  corona4.bounceOff(wallgrp);
  corona5.bounceOff(wallgrp);
  corona6.bounceOff(wallgrp);

  if(gameState === 2){
  corona.bounceOff(wallgrp1);
  corona1.bounceOff(wallgrp1);
  corona2.bounceOff(wallgrp1);
  corona3.bounceOff(wallgrp1);
  corona4.bounceOff(wallgrp1);
  corona5.bounceOff(wallgrp1);
  corona6.bounceOff(wallgrp1);
  }
}

function coins(){
  if(player.isTouching(coin)){
    money = money + 100;
    coin.destroy();
  }

  if(player.isTouching(coin1)){
    money = money + 100;
    coin1.destroy();
  }

  if(player.isTouching(coin2)){
    money = money + 100;
    coin2.destroy();
  }
}

function gameState0(){
  if(gameState > 0){
    textSize(30);
    fill("red");
    text("Lives: " + lives, 200, 30);

    fill("gold");
    text("Gold: " + money, 1170, 30);

    textSize(20);
    fill("blue");
    text("You", player.x -15, player.y);


    if(player.isTouching(coronagrp)){
      lives = lives -1;
      player.x = 115;
      player.y = 320;
    }


    if(player.isTouching(heart)){
      lives = lives+1;
      money = money + 25;
      heart.destroy();
    }

    if(lives <= 0){

      textSize(40);
      fill("red");
      text("You Lose :(", 550, 255);

      coronagrp.velocityX = 0;
      coronagrp.velocityY = 0;
      coronagrp.collide(wallgrp);
      coronagrp.collide(edges);

      player.velocityX = 0;
      player.velocityY = 0;
    }
    else{
      move();
    }
  }
}

function gameState1(){
  if(gameState === 1){
    showing();

    textSize(25);
    fill("green")
    text("Finish Here", 970, 70);

    player.collide(wallgrp);


    if(player.x > 960 && player.x < 1101 && player.y< 65){
      gameState = 2;
      wallgrp.destroyEach();
    }  
  }
  else if(gameState === 2){
    //wallgrp.destroyEach();
    //player.x = 1225;
    //player.y = 75;

    corona.x = 880; 
    corona.y = 405;

    corona1.x = 1270;
    corona1.y = 390;

    corona2.x = 1080;
    corona2.y = 270;

    corona4.x = 765;
    corona4.y = 30;

    corona5.x = 120;
    corona5.y = 158;

    corona6.x = 1035;
    corona6.y = 580;
    
  }
}

function gameState2(){
  if(gameState === 2){
    player.collide(wallgrp1);
  
    wallgrp1.setVisibleEach(true);
  }
}

function adding(){
  wallgrp.add(wall1);
  wallgrp.add(wall2);
  wallgrp.add(wall3);
  wallgrp.add(wall4);
  wallgrp.add(wall5);
  wallgrp.add(wall6);
  wallgrp.add(wall7);
  wallgrp.add(wall8);
  wallgrp.add(wall9);
  wallgrp.add(wall10);
  wallgrp.add(wall11);
  wallgrp.add(wall12);
  wallgrp.add(wall14);
  wallgrp.add(wall15);
  wallgrp.add(wall16);
  wallgrp.add(wall17);
  wallgrp.add(wall18);
  wallgrp.add(wall19);
  wallgrp.add(wall20);
  wallgrp.add(wall21);
  wallgrp.add(wall22);
  wallgrp.add(wall23);
  wallgrp.add(wall24);
  wallgrp.add(wall25);
  wallgrp.add(wall26);
  wallgrp.add(wall27);
  wallgrp.add(wall28);
  wallgrp.add(wall29);
  wallgrp.add(wall30);
  wallgrp.add(wall31);
  wallgrp.add(wall32);
  wallgrp.add(wall33);
  wallgrp.add(wall34);
  wallgrp.add(wall35);
  wallgrp.add(wall36);
  wallgrp.add(wall37);
  wallgrp.add(wall38);
  wallgrp.add(wall39);
  wallgrp.add(wall40);
  wallgrp.add(wall41);
  wallgrp.add(wall42);
  wallgrp.add(wall43);
  wallgrp.add(wall44);
  wallgrp.add(wall45);
  wallgrp.add(wall46);
  wallgrp.add(wall47);
  wallgrp.add(wall48);
  wallgrp.add(wall49);
  wallgrp.add(wall50);
  wallgrp.add(wall51);
  wallgrp.add(wall52);
  wallgrp.add(wall53);
  wallgrp.add(wall54);
  wallgrp.add(wall55);
  wallgrp.add(wall56);
  wallgrp.add(wall57);
  wallgrp.add(wall58);
  wallgrp.add(wall59);
  wallgrp.add(wall60);
  wallgrp.add(wall61);
  wallgrp.add(wall62);
  wallgrp.add(wall63);
  wallgrp.add(wall64);
  wallgrp.add(wall65);
  wallgrp.add(wall66);
  wallgrp.add(wall67);
  wallgrp.add(wall68);
  wallgrp.add(wall69);
  wallgrp.add(wall70);
  wallgrp.add(wall71);
  wallgrp.shapeColor = "black";
}

function wallSprites(){
  wall1 = createSprite(40, 520, 80, 10);
  wall2 = createSprite(80, 550, 10, 70);
  wall3 = createSprite(80, 770, 10, 200);
  wall4 = createSprite(125, 670, 100, 10);
  wall5 = createSprite(175, 600, 10, 150);
  wall6 = createSprite(220, 520, 100, 10);
  wall7 = createSprite(270, 485, 10, 80);
  wall8 = createSprite(220, 445, 280, 10);
  wall9 = createSprite(120, 355, 80, 10);
  wall10 = createSprite(160, 320, 10, 80);
  wall11 = createSprite(125, 280, 80, 10);
  wall12 = createSprite(85, 195, 10, 180);
  wall14 = createSprite(435, 375, 150, 10);
  wall15 = createSprite(510, 240, 10, 280);
  wall16 = createSprite(255, 105, 350, 10);
  wall17 = createSprite(340, 140, 10, 80);
  wall18 = createSprite(430, 30, 10, 160);
  wall19 = createSprite(210, 180, 80, 10);
  wall20 = createSprite(250, 268, 10, 185);
  wall21 = createSprite(345, 265, 180, 10);
  wall22 = createSprite(430, 220, 10, 80);
  wall23 = createSprite(600, 180, 350, 10);
  wall24 = createSprite(230, 740, 100, 10);
  wall25 = createSprite(280, 680, 10, 130);
  wall26 = createSprite(400, 620, 240, 10);
  wall27 = createSprite(360, 790, 10, 200);
  wall28 = createSprite(395, 685, 80, 10);
  wall29 = createSprite(365, 580, 10, 80);
  wall30 = createSprite(400, 540, 80, 10);
  wall31 = createSprite(445, 510, 10, 70);
  wall32 = createSprite(530, 470, 180, 10);
  wall33 = createSprite(525, 675, 10, 120);
  wall34 = createSprite(615, 435, 10, 80);
  wall35 = createSprite(655, 400, 70, 10);
  wall36 = createSprite(690, 370, 10, 70);
  wall37 = createSprite(650, 340, 85, 10);
  wall38 = createSprite(660, 550, 230, 10);
  wall39 = createSprite(770, 365, 10, 480);
  wall40 = createSprite(600, 740, 200, 10);
  wall41 = createSprite(700, 685, 10, 120);
  wall42 = createSprite(660, 630, 70, 10);
  wall43 = createSprite(630, 660, 10, 50);
  wall44 = createSprite(660, 30, 10, 70);
  wall45 = createSprite(620, 70, 90, 10);
  wall46 = createSprite(770, 690, 150, 10);
  wall47 = createSprite(780, 790, 10, 70);
  wall48 = createSprite(840, 730, 10, 70);
  wall49 = createSprite(1020, 760, 360, 10);
  wall50 = createSprite(1200, 690, 10, 150);
  wall51 = createSprite(930, 690, 10, 150);
  wall52 = createSprite(965, 615, 210, 10);
  wall53 = createSprite(1065, 685, 154, 10);
  wall54 = createSprite(1140, 585, 10, 210);
  wall55 = createSprite(1000, 580, 10, 70);
  wall56 = createSprite(965, 550, 70, 10);
  wall57 = createSprite(965, 470, 210, 10);
  wall58 = createSprite(865, 340, 10, 440);
  wall59 = createSprite(1070, 470, 10, 150);
  wall60 = createSprite(1185, 540, 240, 10);
  wall61 = createSprite(1145, 400, 154, 10);
  wall62 = createSprite(1220, 430, 10, 70);
  wall63 = createSprite(960, 145, 10, 440);
  wall64 = createSprite(985, 370, 60, 10);
  wall65 = createSprite(1010, 290, 10, 150);
  wall66 = createSprite(1120, 290, 210, 10);
  wall67 = createSprite(1155, 210, 10, 150);
  wall68 = createSprite(1185, 130, 70, 10);
  wall69 = createSprite(1070, 130, 70, 10);
  wall70 = createSprite(1110, 60, 10, 150);
  wall71= createSprite(1260, 210, 80, 10);
}


function adding1(){
  wallgrp1.add(wall100);
  wallgrp1.add(wall101);
  wallgrp1.add(wall102);
  wallgrp1.add(wall103);
  wallgrp1.add(wall104);
  wallgrp1.add(wall105);
  wallgrp1.add(wall106);
  wallgrp1.add(wall107);
  wallgrp1.add(wall108);
  wallgrp1.add(wall109);
  wallgrp1.add(wall110);
  wallgrp1.add(wall111);
  wallgrp1.add(wall112);
  wallgrp1.add(wall113);
  wallgrp1.add(wall114);
  wallgrp1.add(wall115);
  wallgrp1.add(wall116);
  wallgrp1.add(wall117);
  wallgrp1.add(wall118);
  wallgrp1.add(wall119);
  wallgrp1.add(wall120);
  wallgrp1.add(wall121);
  wallgrp1.add(wall122);
  wallgrp1.add(wall123);
  wallgrp1.add(wall124);
  wallgrp1.add(wall125);
  wallgrp1.add(wall126);
  wallgrp1.add(wall127);
  wallgrp1.add(wall128);
  wallgrp1.add(wall129);
  wallgrp1.add(wall130);
  wallgrp1.add(wall131);
  wallgrp1.add(wall132);
  wallgrp1.add(wall133);
  wallgrp1.add(wall135);
  wallgrp1.add(wall136);
  wallgrp1.add(wall137);
  wallgrp1.add(wall138);
  wallgrp1.add(wall139);
  wallgrp1.add(wall140);
  wallgrp1.add(wall141);
  wallgrp1.add(wall142);
  wallgrp1.add(wall143);
  wallgrp1.add(wall144);
  wallgrp1.add(wall145);
  wallgrp1.add(wall146);
  wallgrp1.add(wall147);
  wallgrp1.add(wall148);
  wallgrp1.add(wall149);
  wallgrp1.add(wall150);
  wallgrp1.add(wall151);
  wallgrp1.add(wall152);
  wallgrp1.add(wall153);
  wallgrp1.add(wall154);
  wallgrp1.add(wall155);
  wallgrp1.add(wall156);
  wallgrp1.add(wall157);
  wallgrp1.add(wall158);
  wallgrp1.add(wall159);
  wallgrp1.add(wall160);
  wallgrp1.add(wall161);
  wallgrp1.add(wall162);
  wallgrp1.add(wall163);
  wallgrp1.add(wall164);
  wallgrp1.add(wall165);
  wallgrp1.add(wall166);
  wallgrp1.add(wall167);
  wallgrp1.add(wall168);
  wallgrp1.add(wall169);
  wallgrp1.add(wall170);
  wallgrp1.add(wall171);
  wallgrp1.add(wall172);
  wallgrp1.add(wall173);
  wallgrp1.add(wall174);
  wallgrp1.add(wall175);
  wallgrp1.add(wall176);
  wallgrp1.add(wall177);
  wallgrp1.add(wall178);
  wallgrp1.add(wall179);
  wallgrp1.add(wall180);
  wallgrp1.add(wall181);
}
function wallSprites1(){
  wall100 = createSprite(75, 70, 150, 10);
  wall101 = createSprite(145, 110, 10, 70);
  wall102 = createSprite(110, 140, 70, 10);
  wall103 = createSprite(75, 335, 10, 400)
  wall104 = createSprite(40, 605, 75, 10);
  wall105 = createSprite(75, 710, 10, 70);
  wall106 = createSprite(110, 680, 70, 10);
  wall107 = createSprite(150, 485, 10, 400);
  wall108 = createSprite(180, 210, 70, 10);
  wall109 = createSprite(220, 105, 10, 220);
  wall110 = createSprite(260, 70, 70, 10);
  wall111 = createSprite(290, 280, 290, 10);
  wall112 = createSprite(300, 210, 10, 130);
  wall113 = createSprite(415, 140, 240, 10);
  wall114 = createSprite(530, 100, 10, 70);
  wall115 = createSprite(390, 100, 10, 70);
  wall116 = createSprite(460, 35, 10, 70);
  wall117 = createSprite(530, 250, 10, 70);
  wall118 = createSprite(490, 220, 230, 10);
  wall119 = createSprite(610, 105, 10, 240);
  wall120 = createSprite(430, 310, 10, 70);
  wall121 = createSprite(150, 785, 10, 70);
  wall122 = createSprite(185, 750, 80, 10);
  wall123 = createSprite(225, 720, 10, 70);
  wall124 = createSprite(260, 680, 80, 10);
  wall125 = createSprite(300, 710, 10, 70);
  wall126 = createSprite(230, 610, 150, 10);
  wall127 = createSprite(300, 570, 10, 70);
  wall128 = createSprite(370, 535, 150, 10);
  wall129 = createSprite(370, 750, 150, 10);
  wall130 = createSprite(440, 710, 10, 70);
  wall131 = createSprite(400, 680, 70, 10);
  wall132 = createSprite(370, 640, 10, 70);
  wall133 = createSprite(440, 570, 10, 70);
  wall135 = createSprite(480, 350, 260, 10);
  wall136 = createSprite(510, 605, 10, 300);
  wall137 = createSprite(500, 450, 540, 10);
  wall138 = createSprite(550, 750, 70, 10);
  wall139 = createSprite(580, 785, 10, 70);
  wall140 = createSprite(235, 490, 10, 70);
  wall141 = createSprite(295, 405, 10, 100);
  wall142 = createSprite(255, 360, 70, 10);
  wall143 = createSprite(705, 255, 10, 400);
  wall144 = createSprite(670, 290, 70, 10);
  wall145 = createSprite(735, 540, 450, 10);
  wall146 = createSprite(825, 535, 10, 170);
  wall147 = createSprite(855, 615, 70, 10);
  wall148 = createSprite(580, 645, 10, 70);
  wall149 = createSprite(610, 675, 70, 10);
  wall150 = createSprite(645, 680, 10, 140);
  wall151 = createSprite(700, 615, 110, 10);
  wall152 = createSprite(750, 645, 10, 70);
  wall153 = createSprite(935, 675, 480, 10);
  wall154 = createSprite(700, 745, 10, 150);
  wall155 = createSprite(790, 750, 70, 10);
  wall156 = createSprite(820, 790, 10, 70);
  wall157 = createSprite(890, 715, 10, 70);
  wall158 = createSprite(980, 640, 10, 70);
  wall159 = createSprite(980, 790, 10, 70);
  wall160 = createSprite(1040, 755, 130, 10);
  wall161 = createSprite(1170, 715, 10, 80);
  wall162 = createSprite(1210, 750, 80, 10);
  wall163 = createSprite(1245, 640, 10, 220);
  wall164 = createSprite(1180, 535, 130, 10);
  wall165 = createSprite(1170, 420, 10, 240);
  wall166 = createSprite(1205, 305, 80, 10);
  wall167 = createSprite(1240, 260, 10, 80);
  wall168 = createSprite(770, 375, 10, 160);
  wall169 = createSprite(900, 220, 160, 10);
  wall170 = createSprite(985, 105, 10, 240);
  wall171 = createSprite(880, 155, 10, 140);
  wall172 = createSprite(855, 90, 60, 10);
  wall173 = createSprite(830, 130, 10, 70);
  wall174 = createSprite(930, 60, 10, 160);
  wall175 = createSprite(930, 290, 10 , 150);
  wall176 = createSprite(960, 360, 70, 10);
  wall177 = createSprite(990, 400, 10, 70);
  wall178 = createSprite(1030, 430, 70, 10);
  wall179 = createSprite(1165, 220, 160, 10);
  wall180 = createSprite(1090, 180, 10, 70);
  wall181 = createSprite(1130, 150, 70, 10);
}