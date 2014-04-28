var aliens = [];
var alienId = 0;
var score = 0;
var total = 0;
var imageSrc = ['assets/images/alien2.png', 'assets/images/alien.png', 'assets/images/alien1.png', 'assets/images/alien3.png', 'assets/images/asteroid.gif'];

function Alien(left, top, maxleft, maxtop) {

    this.maxleft = maxleft;
    this.maxtop = maxtop;

    this.image = document.createElement("IMG");
    this.image.id = alienId;
    ++alienId;

    this.image.setAttribute("onclick", "aliens[getAlienKey(this.id)].removeAlien(); updateScore();");
    this.image.src = imageSrc[Math.floor(Math.random() * imageSrc.length)];

    this.image.style.height = "100px";
    this.image.style.position = "absolute";
    this.image.style.top = top;
    this.image.style.left = left;

    this.move = function () {
        var x = parseInt(this.image.style.left);
        var y = parseInt(this.image.style.top);
        if (y <= this.maxtop) {
            y += 0.025 * this.image.height;
            this.image.style.top = y;
            return true;
        } else {
            this.removeAlien();
            return false;
        }
    };

    this.removeAlien = function () {
        var alien = document.getElementById(this.image.id);
        var key = getAlienKey(this.image.id);
        aliens.splice(key, 1);
        document.body.removeChild(alien);
        return false;
    };

    document.body.appendChild(this.image);
}

function createAliens() {
    var left = Math.random() * 900;
    var top1 = 0;
    aliens.push(new Alien(left, top1, window.innerWidth, window.innerHeight - 110));
    updateTotalAliens();
    return false;
}

function moveAliens() {
    for (var key in aliens) {
        aliens[key].move();
    }
    return false;
}


function updateTotalAliens() {
    document.getElementById('total').innerHTML = ++total;
}

function updateScore() {
    document.getElementById('score').innerHTML = ++score;
}

function getAlienKey(id){
    for (var key in aliens) {
        if (aliens[key].image.id == id) {
            return key;
        }
    }
}
