function load(){
    let ls = document.getElementById('lScreen');
    if(ls == null || ls == undefined) return;
    ls.innerHTML = '<div id="c"><div id="a"></div></div>';
    myMove();
}

function loadFin(){
    let ls = document.getElementById('lScreen');
    if(ls == null || ls == undefined) return;
    ls.innerHTML = '';
}

async function splash(){
    let body = document.getElementById('bd');
    if(bd == null || bd == undefined) return;
    let html = body.innerHTML;
    body.innerHTML = '<div id="lScreen"></div>';
    load();
    await new Promise(r => setTimeout(r, 2000));
    loadFin();
    body.innerHTML = html;
}

function myMove() {
    if(document.getElementById('a') == undefined) return;
    if(document.getElementById('c') == undefined) return;
    var elem = document.getElementById("a");
    var cont = document.getElementById('c');
    var max = 50;
    var min = 0;
    var rel = 1;
    cont.style.width = (max + (max/rel)) + "px";
    cont.style.height = (max + (max/rel)) + "px";
    elem.style.width = (max/rel) + "px";
    elem.style.height = (max/rel) + "px";
    var pos = 0;
    var posX = 0;
    var posY = 0;
    var id = setInterval(frame, 10);
    var lr = true;
    var tb = false;
    var rl = false;
    function frame() {
      var speed = max/10;
      if (pos == 351) {
        clearInterval(id);
      } else {
        if(lr){
            lr = !(posX >= max);
          tb = (posX >= max);
            posX += speed;
          if(posX > max) posX = max;
        }
        else if(tb){
            tb = !(posY >= max);
          rl = (posY >= max);
            posY += speed;
          if(posY > max) posY = max;
        }
        else if(rl){
          rl = !(posX <= min);
          posX -= speed;
          if(posX < min) posX = min;
        }
        else{
            lr = (posY <= min);
          posY -= speed;
          if(posY < min) posY = min;
        }
        elem.style.top = posY + 'px'; 
        elem.style.left = posX + 'px'; 
      }
    }
    
}