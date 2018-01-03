const Bird = function(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velY = 0;
    this.width = 150;
    this.height = 150;
    this.sprites = [document.getElementById('bird')];
    var self = this;
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 32){
            self.velY = -16;
        }
    })
};

Bird.prototype.update = function() {
    this.y += this.velY;
    this.velY += 1;
};

Bird.prototype.render = function() {
    let renderX = this.x - this.width/2;
    let renderY = this.y - this.height/2;
    this.ctx.drawImage(this.sprites[0], renderX, renderY);
}