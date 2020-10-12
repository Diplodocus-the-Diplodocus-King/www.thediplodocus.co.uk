!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e);var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dinoId="dino-".concat(n),this.source=e.src,this.gameArea=document.querySelector(".game-area"),this.xPosition=Math.random()*(window.innerWidth-200),this.yPosition=0,this.facingDirection=Math.round(Math.random())*Math.PI,this.walkSpeed=2*Math.random(),this.jumpInterval=Math.round(65*Math.random()+35),this.jumpCounter=0,this.hit=!1}var e,n,i;return e=t,(n=[{key:"init",value:function(){var t=document.createElement("img");t.src=this.source,t.classList.add("dino"),t.setAttribute("id","".concat(this.dinoId)),this.gameArea.appendChild(t),t.style.left=this.xPosition,t.style.transform="rotateY(".concat(this.facingDirection,"rad)"),0===this.walkSpeed&&(this.walkSpeed=.1),this.moveDino(t)}},{key:"moveDino",value:function(t){var e=this,n=setInterval((function(){e.hit&&clearInterval(n),0===e.facingDirection&&e.xPosition<window.innerWidth-200?(e.xPosition+=e.walkSpeed,t.style.left=e.xPosition):0===e.facingDirection&&e.xPosition>=window.innerWidth-200?(e.facingDirection=Math.PI,t.style.transform="rotateY(".concat(e.facingDirection,"rad)")):e.facingDirection===Math.PI&&e.xPosition>0?(e.xPosition-=e.walkSpeed,t.style.left=e.xPosition):e.facingDirection===Math.PI&&e.xPosition<=0&&(e.facingDirection=0,t.style.transform="rotateY(".concat(e.facingDirection,"rad)")),e.jumpCounter===e.jumpInterval-1?(e.yPosition+=10,t.style.bottom=e.yPosition,e.jumpCounter++):e.jumpCounter===e.jumpInterval?(e.yPosition+=-10,t.style.bottom=e.yPosition,e.jumpCounter=0):e.jumpCounter>e.jumpInterval?e.jumpCounter=0:e.jumpCounter++}),50)}},{key:"flyDino",value:function(t){var e=this,n=0;n=1===Math.round(Math.random())?Math.random()*(Math.PI/180*75)+Math.PI/180*45:Math.random()*(Math.PI/180*315)+Math.PI/180*285;var o=0;this.velocity=20,this.facingDirection=0;var i=setInterval((function(){e.yPosition+=e.velocity*Math.cos(n),e.xPosition+=e.velocity*Math.sin(n),o+=.05,e.xPosition<0||e.xPosition>window.innerWidth||e.yPosition>window.innerHeight?(t.remove(),clearInterval(i)):(t.style.left=e.xPosition,t.style.bottom=e.yPosition,t.style.transform="rotate(".concat(o,"rad)"))}),50)}}])&&o(e.prototype,n),i&&o(e,i),t}();function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(e,n,o,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.laserId="laser-".concat(e),this.gameArea=document.querySelector(".game-area"),this.xPosition=n,this.yPosition=o,this.rotation=i,this.velocity=3,this.hit=!1,this.damage=r}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=document.createElement("img");t.src="./dist/assets/images/laser-green.svg",t.classList.add("laser"),t.setAttribute("id","".concat(this.laserId)),this.gameArea.appendChild(t),this.xPosition+=-t.width/2,t.style.left=this.xPosition,t.style.bottom=this.yPosition,t.style.transform="rotate(".concat(this.rotation,"rad)");var e=document.createElement("audio");this.damage>1?e.src="./dist/assets/sounds/weapon_dd.mp3":e.src="./dist/assets/sounds/weapon_player.mp3",e.setAttribute("preload","auto"),e.setAttribute("controls","none"),e.style.display="none",this.gameArea.appendChild(e),e.play(),this.moveLaser(t,e)}},{key:"moveLaser",value:function(t,e){var n=this,o=setInterval((function(){n.xPosition+=n.velocity*Math.sin(n.rotation),n.yPosition+=n.velocity*Math.cos(n.rotation),n.hit?(t.remove(),e.remove(),clearInterval(o)):(t.style.left=n.xPosition,t.style.bottom=n.yPosition)}),10)}}])&&r(e.prototype,n),o&&r(e,o),t}();function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.powerupId="powerup-".concat(e),this.gameArea=document.querySelector(".game-area"),this.xPosition=Math.round(Math.random()*(window.innerWidth-100-100)+100),this.yPosition=Math.round(Math.random()*(window.innerHeight-100-100)+100),this.powerupType=Math.round(2*Math.random()),this.hit=!1}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=document.createElement("img");switch(this.powerupType){case 0:t.src="./dist/assets/images/powerups/energy.svg";break;case 1:t.src="./dist/assets/images/powerups/fire.svg";break;case 2:t.src="./dist/assets/images/powerups/bullet.svg"}t.classList.add("powerup"),t.setAttribute("id","".concat(this.powerupId)),this.gameArea.appendChild(t),t.style.left=this.xPosition,t.style.bottom=this.yPosition;var e=document.createElement("audio");e.src="./dist/assets/sounds/explosion_powerup.mp3",e.setAttribute("preload","auto"),e.setAttribute("controls","none"),e.style.display="none",this.gameArea.appendChild(e),this.trigger(t,e)}},{key:"trigger",value:function(t,e){var n=this,o=setInterval((function(){n.hit&&(t.src="./dist/assets/images/powerups/powerup_hit.gif",e.play(),setTimeout((function(){t.remove()}),700),setTimeout((function(){e.remove()}),983),clearInterval(o))}),10)}}])&&s(e.prototype,n),o&&s(e,o),t}();function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameArea=document.querySelector(".game-area"),this.cannon=document.querySelector(".laser-cannon"),this.dinoArray=new Array,this.laserArray=new Array,this.powerupArray=new Array,this.laserCounter=0,this.powerupCounter=0,this.firerate=500,this.damage=1,this.shots=1,this.gunReloaded=!0,this.powerupOn=!1,this.rotateCannonHandler=this.rotateCannon.bind(this),this.cannonShootHandler=this.cannonShoot.bind(this)}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=this;this.createDinos(),this.cannon.style.left="".concat(window.innerWidth/2-this.cannon.width/2),window.onresize=function(){t.cannon.style.left="".concat(window.innerWidth/2-t.cannon.width/2)},window.addEventListener("mousemove",this.rotateCannonHandler),window.addEventListener("click",this.cannonShootHandler)}},{key:"createDinos",value:function(){var t=this;fetch("./dist/assets/json/dino.json").then((function(t){return t.json()})).then((function(e){e.forEach((function(e,n){t.dinoArray[n]=new i(e,n),t.dinoArray[n].init()}))}))}},{key:"createPowerup",value:function(){var t=this.powerupArray.length;this.powerupArray.push(new c(this.powerupCounter)),this.powerupArray[t].init()}},{key:"rotateCannon",value:function(t){var e=window.innerWidth/2-t.clientX,n=window.innerHeight-this.cannon.height/2-t.clientY;t.clientY>=window.innerHeight-this.cannon.height/2&&(n=1);var o=Math.atan(e/n);this.cannon.style.transform="rotate(".concat(-o,"rad)")}},{key:"cannonShoot",value:function(){var t=this;if(this.gunReloaded){this.gunReloaded=!this.gunReloaded;var e=window.innerWidth/2,n=this.cannon.height/2,o=window.getComputedStyle(this.cannon,null).getPropertyValue("transform"),i=o.slice(o.indexOf("(")+1,o.indexOf(")")).split(", "),r=Math.asin(i[1]);if(this.shots>1)for(var s=[-.35,0,.35],c=0;c<3;c++){var h=this.laserArray.length;this.laserArray.push(new a(this.laserCounter,e,n,r+s[c],this.damage)),this.laserArray[h].init(),this.laserCounter>=999?this.laserCounter=0:this.laserCounter++}else{var u=this.laserArray.length;this.laserArray.push(new a(this.laserCounter,e,n,r,this.damage)),this.laserArray[u].init(),this.laserCounter>=999?this.laserCounter=0:this.laserCounter++}setTimeout((function(){t.gunReloaded=!t.gunReloaded}),this.firerate)}}},{key:"powerupActive",value:function(t){var e=this;switch(this.powerupOn=!0,t){case 0:this.firerate=250;break;case 1:this.damage=2;break;case 2:this.shots=3}setTimeout((function(){e.powerupOn=!1,console.log("powerdown"),e.firerate=500,e.damage=1,e.shots=1}),15e3)}},{key:"updateLaserArray",value:function(){var t=this.laserArray.filter((function(t){return null!==document.getElementById("".concat(t.laserId))}));this.laserArray=t}},{key:"updateDinoArray",value:function(){var t=this.dinoArray.filter((function(t){return null!==document.getElementById("".concat(t.dinoId))}));this.dinoArray=t}},{key:"updatePowerupArray",value:function(){var t=this.powerupArray.filter((function(t){return null!==document.getElementById("".concat(t.powerupId))}));this.powerupArray=t}},{key:"gameOver",value:function(){window.removeEventListener("mousemove",this.rotateCannonHandler),window.removeEventListener("click",this.cannonShootHandler)}}])&&h(e.prototype,n),o&&h(e,o),t}();function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.meteorId="meteor-".concat(e),this.gameArea=document.querySelector(".game-area"),this.xPosition=Math.random()*(window.innerWidth-100),this.yPosition=-100,this.rotation=Math.random()*(Math.PI/180*36),this.hitPoints=o,this.velocity=n,this.spinV=Math.random()*(.03-.001)+.001,this.spinDirection=Math.random(),this.spin=0,this.hit=!1,this.groundHit=!1,this.damageTaken=1}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=document.createElement("img");switch(this.hitPoints){case 1:t.src="./dist/assets/images/meteors/meteor_basic.svg";break;case 2:t.src="./dist/assets/images/meteors/meteor_2.svg";break;case 3:t.src="./dist/assets/images/meteors/meteor_3.svg";break;case 4:t.src="./dist/assets/images/meteors/meteor_4.svg";break;case 5:t.src="./dist/assets/images/meteors/meteor_5.svg";break;case 6:t.src="./dist/assets/images/meteors/meteor_6.svg"}t.classList.add("meteor"),t.setAttribute("id","".concat(this.meteorId)),this.gameArea.appendChild(t),t.style.left=this.xPosition,t.style.top=this.yPosition;var e=this.xPosition,n=document.createElement("audio");n.src="./dist/assets/sounds/explosion_asteroid.mp3",n.setAttribute("preload","auto"),n.setAttribute("controls","none"),n.style.display="none",this.gameArea.appendChild(n),this.moveMeteor(t,e,n)}},{key:"moveMeteor",value:function(t,e,n){var o=this,i=setInterval((function(){o.yPosition+=o.velocity*Math.cos(o.rotation),e<window.innerWidth/2?o.xPosition+=o.velocity*Math.sin(o.rotation):o.xPosition-=o.velocity*Math.sin(o.rotation),o.spinDirection>.5?o.spin+=o.spinV:o.spin-=o.spinV,o.hit||o.groundHit?(o.hitPoints-=o.damageTaken,o.hitPoints<=0||o.groundHit?(!1===o.groundHit&&(t.src="./dist/assets/images/meteors/explosion.gif"),t.style.transform="rotate(0rad)",clearInterval(i),n.play(),setTimeout((function(){t.remove()}),700),setTimeout((function(){n.remove()}),842)):(t.style.left=o.xPosition,t.style.top=o.yPosition,t.style.transform="rotate(".concat(o.spin,"rad)"),o.hit=!o.hit)):(t.style.left=o.xPosition,t.style.top=o.yPosition,t.style.transform="rotate(".concat(o.spin,"rad)"))}),10)}}])&&l(e.prototype,n),o&&l(e,o),t}();function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameArea=document.querySelector(".game-area"),this.meteorArray=new Array,this.meteorCounter=0,this.wave=1,this.waveSize=Math.round(Math.pow(this.wave,2)+10),this.waveRemianing=this.waveSize,this.intervalMax=5e3,this.intervalMin=3e3,this.meteorMax=Math.round(.1*this.waveSize),this.meteorMin=Math.round(.01*this.waveSize),this.meteorVmax=1,this.meteorVmin=.5,this.gameover=!1}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.waveGenerator()}},{key:"updateMeteorArray",value:function(){var t=this.meteorArray.filter((function(t){return null!==document.getElementById("".concat(t.meteorId))}));this.meteorArray=t}},{key:"waveGenerator",value:function(){var t=this;if(!this.gameover){var e=Math.random()*(this.intervalMax-this.intervalMin)+this.intervalMin,n=Math.round(Math.random()*(this.meteorMax-this.meteorMin)+this.meteorMin);setTimeout((function(){for(var e=1;e<=n;e++){var o=t.meteorArray.length,i=t.meteorRoll(),r=Math.random()*(t.meteorVmax-t.meteorVmin)+t.meteorVmin;t.meteorArray.push(new d(t.meteorCounter,r,i)),t.meteorArray[o].init(),t.meteorCounter++}t.waveRemianing-=n,t.waveRemianing<=0?(console.log("new wave!"),t.wave++,t.waveSize=Math.round(Math.pow(t.wave,2)+10),t.waveRemianing=t.waveSize,t.intervalMax=5e3-100*t.wave,t.intervalMin=3e3-100*t.wave,t.meteorMax=Math.round(.1*t.waveSize),t.meteorMin=Math.round(.01*t.waveSize),t.meteorVmax=1+.05*t.wave,t.meteorVmin=.5+.05*t.wave,t.waveGenerator()):t.waveGenerator()}),e)}}},{key:"meteorRoll",value:function(){var t=Math.round(100*Math.random());return this.wave<3?t>=75?2:1:this.wave<5?t>=88?3:t>=63?2:1:this.wave<7?t>=94?4:t>=81?3:t>=56?2:1:this.wave<10?t>=97?5:t>=91?4:t>=78?3:t>=53?2:1:t>=98?6:t>=95?5:t>=89?4:t>=77?3:t>=52?2:1}}])&&m(e.prototype,n),o&&m(e,o),t}();function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.highScoreContainer=document.querySelector(".highscore-container"),this.filename="./dist/assets/json/highscore.json",this.highScoresDb=db.collection("highscores"),this.highScores=new Array,this.finalScore=document.querySelector(".final-score"),this.finalScoreVal=0,this.highScoreForm=document.querySelector(".highscore-form"),this.nameInput=document.querySelector(".highscore-name"),this.submit=!1}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=this;this.highScoreContainer.innerHTML=" ",this.highScoresDb.onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"===e.type){var n=e.doc.data();n.id=e.doc.id,t.highScores.push(n)}})),t.displayHighScores()})),this.highScoreForm.addEventListener("submit",(function(e){if(e.preventDefault(),!t.submit){t.submit=!t.submit;for(var n=0;n<t.highScores.length;n++)if(t.highScores[n].score<t.finalScoreVal){t.highScores.push({id:void 0,rank:t.highScores[n].rank,name:t.nameInput.value,score:t.finalScoreVal});for(var o=t.highScores[n].rank,i=n;i<t.highScores.length-1;i++)o++,console.log(o,t.highScores[i].rank),t.highScores[i].rank=o;break}t.highScores.sort((function(t,e){return t.score>e.score?-1:e.score>t.score?1:0})),t.highScores.forEach((function(e){e.id&&e.rank<11?t.highScoresDb.doc(e.id).set({rank:e.rank,name:e.name,score:e.score}).then((function(){console.log("write successful")})).catch((function(t){console.log(t)})):e.id&&11===e.rank?t.highScoresDb.doc(e.id).delete().then((function(){console.log("delete successful")})).catch((function(t){console.log(t)})):t.highScoresDb.add({rank:e.rank,name:e.name,score:e.score}).then((function(t){console.log("add successful"),e.id=t.id})).catch((function(t){console.log(t)}))}))}}))}},{key:"printFinalScore",value:function(t){this.finalScoreVal=t,this.finalScore.innerText="Score: ".concat(t)}},{key:"displayHighScores",value:function(){var t=this;this.highScores.sort((function(t,e){return t.score>e.score?-1:e.score>t.score?1:0})),this.highScoreContainer.innerHTML=" ",this.highScores.forEach((function(e){t.highScoreContainer.innerHTML+="<p>".concat(e.rank,". ").concat(e.name,": ").concat(e.score)}))}}])&&p(e.prototype,n),o&&p(e,o),t}(),g=document.querySelector(".start-modal"),v=document.querySelector(".end-modal"),w=document.querySelectorAll(".play"),b=new y;b.init(),setTimeout((function(){g.style.display="initial"}),500),w.forEach((function(t){t.addEventListener("click",(function(){g.style.display="none",v.style.display="none",b.submit=!1,setTimeout((function(){var t=new u;t.init();var e=new f;e.init();var n=document.querySelector(".score"),o=0;n.innerText="SCORE: ".concat(o),setTimeout((function(){!function(){var i=this,r=setInterval((function(){t.updateLaserArray(),t.updateDinoArray(),t.updatePowerupArray(),e.updateMeteorArray(),t.dinoArray.length||(b.printFinalScore(o),v.style.display="initial",t.gameOver(),e.gameover=!0,e.meteorArray.forEach((function(t){document.getElementById("".concat(t.meteorId)).remove()})),t.powerupArray.forEach((function(t){document.getElementById("".concat(i.powerupId)).remove()})),e.updateMeteorArray(),t.updatePowerupArray(),clearInterval(r)),e.meteorArray.length>=4&&t.powerupArray.length<1&&!1===t.powerupOn&&t.createPowerup(),t.updatePowerupArray(),t.powerupArray.forEach((function(e){var n=document.getElementById("".concat(e.powerupId)).getBoundingClientRect(),o=[],i=0;n.left<n.right?o[0]=n.left+(n.right-n.left)/2:n.left>n.right?o[0]=n.right+(n.left-n.right)/2:o[0]=n.left,n.top<n.bottom?o[1]=n.top+(n.bottom-n.top)/2:n.top>n.bottom?o[1]=n.bottom+(n.top-n.bottom)/2:o[1]=n.top,i=n.height>n.width?n.width/2*.45:n.height/2*.45,t.laserArray.forEach((function(n){var r=document.getElementById("".concat(n.laserId)).getBoundingClientRect(),a=[r.left,r.top],s=[r.right,r.top];(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)<=Math.pow(i,2)||Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)<=Math.pow(i,2))&&(e.hit=!0,n.hit=!0,t.powerupActive(e.powerupType))}))})),t.updateLaserArray(),e.meteorArray.forEach((function(e){var i=document.getElementById("".concat(e.meteorId)),r=i.getBoundingClientRect(),a=[],s=0;r.left<r.right?a[0]=r.left+(r.right-r.left)/2:r.left>r.right?a[0]=r.right+(r.left-r.right)/2:a[0]=r.left,r.top<r.bottom?a[1]=r.top+(r.bottom-r.top)/2:r.top>r.bottom?a[1]=r.bottom+(r.top-r.bottom)/2:a[1]=r.top,s=r.height>r.width?r.width/2*.45:r.height/2*.45,(r.top>.9*window.innerHeight||r.bottom>.9*window.innerHeight)&&t.dinoArray.forEach((function(t){var n=document.getElementById("".concat(t.dinoId)),o=n.getBoundingClientRect(),r=[];r=o.left<o.right?[o.left+(o.right-o.left)/2,window.innerHeight]:[o.right+(o.left-o.right)/2,window.innerHeight],Math.pow(r[0]-a[0],2)+Math.pow(r[1]-a[1],2)<=Math.pow(3*s,2)&&(t.hit=!0,e.groundHit=!0,i.style.height="10%",i.style.width="10%",i.src="./dist/assets/images/meteors/explosion_floor.gif",t.flyDino(n))})),(r.top>window.innerHeight||r.bottom>window.innerHeight)&&(e.groundHit=!0,i.style.height="10%",i.style.width="10%",i.src="./dist/assets/images/meteors/explosion_floor.gif"),t.laserArray.forEach((function(i){var r=document.getElementById("".concat(i.laserId)).getBoundingClientRect(),c=[r.left,r.top],h=[r.right,r.top];Math.pow(c[0]-a[0],2)+Math.pow(c[1]-a[1],2)<=Math.pow(s,2)||Math.pow(h[0]-a[0],2)+Math.pow(h[1]-a[1],2)<=Math.pow(s,2)?(e.damageTaken=t.damage,e.hit=!0,i.hit=!0,e.hitPoints>=t.damage?o+=10*t.damage:o+=10*(t.damage-e.hitPoints),n.innerText="SCORE: ".concat(o)):(r.top<0||r.right<0||r.left>window.innerWidth)&&(i.hit=!0)}))}))}),10)}()}),3e3)}),500)}))}))}]);