window.onload = function () {
    var c = document.getElementById('canvas');
    c.width = window.innerWidth;
    c.height = 600;

    var ctx = c.getContext('2d');


    var environment = new Environment(c, ctx);
    const bird = new Bird(100, 250, ctx);
    gameLoop();
    
    ctx.fillStyle = "#FFFFFF";
    
    /*
     MAIN GAME LOOP
    */
    function gameLoop() {
        ctx.fillRect(0, 0, c.width, c.height);
        environment.update();
        environment.render(ctx);
        bird.update();
        bird.render();
        window.requestAnimationFrame(gameLoop);
    }
};