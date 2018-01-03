var Environment = function (c, ctx) {
    this.c = c;
    this.ctx = ctx;
    this.bgPos = 0;
    this.fgPos = 0;
    this.bgSpeed = 4;
    this.bgwidth = 900;
    this.bgImg = document.getElementById('bg');
};
Environment.prototype.update = function () {
    this.bgPos -= this.bgSpeed;
    if (this.bgPos < -this.bgwidth) {
        this.bgPos = 0;
    }
};
Environment.prototype.render = function (ctx) {
    for (let i = 0; i <= this.c.width/this.bgwidth + 1; i++){
        this.ctx.drawImage(this.bgImg, this.bgPos + i*this.bgwidth, 0);
    }
};