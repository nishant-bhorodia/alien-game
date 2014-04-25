var aliens = [];
var alienId = 0;

function Alien(left, top, maxleft, maxtop) {
    this.imageSrc = ['assets/images/alien.png', 'assets/images/alien1.png', 'assets/images/alien3.png', 'assets/images/asteroid.gif'];
    this.maxleft = maxleft;
    this.maxtop = maxtop;

    this.image = document.createElement("IMG");
    this.image.id = alienId;
    ++alienId;

    this.image.setAttribute("onclick", "this.className = 'removeAlien';");
    this.image.src = this.imageSrc[Math.floor(Math.random() * this.imageSrc.length)];

    this.image.style.height = "100px";
    this.image.style.position = "absolute";
    this.image.style.top = top;
    this.image.style.left = left;

    this.move = function() {
        var x = parseInt(this.image.style.left);
        var y = parseInt(this.image.style.top);
        if (y <= this.maxtop) {
            y += 0.025 * this.image.height;
            this.image.style.top = y;
            return true;
        } else {
            this.image.className = "removeAlien";
            return false;
        }
    };

    document.body.appendChild(this.image);

}

function createAliens() {
    var left = Math.random() * 900;
    var top1 = 0;
    aliens.push(new Alien(left, top1, window.innerWidth, window.innerHeight - 110));
    return false;
}

function moveAliens() {
    removeAliens();
    for (var key in aliens) {
        aliens[key].move();
    }
    return false;
}

function removeAliens() {
    var cells = document.getElementsByClassName('removeAlien');
    var len = cells.length;
    if (len !== 0) {
        for (var i = 0; i < len; i++) {
            for (var key in aliens) {
                if (aliens[key].image.id === cells[i].id)
                    aliens.splice(key, 1);
            }
            document.body.removeChild(cells[i]);
        }
    }
    return false;
}
