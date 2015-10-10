function init() {
//    var stage = new createjs.Stage("canvas");
//    createjs.Ticker.addEventListener("tick", stage);
//
//    var mc = new createjs.MovieClip(null, 0, true, {start:20});
//    stage.addChild(mc);
//
//    var child1 = new createjs.Shape(
//        new createjs.Graphics().beginFill("#999999")
//            .drawCircle(30,30,30));
//    var child2 = new createjs.Shape(
//        new createjs.Graphics().beginFill("#5a9cfb")
//            .drawCircle(30,30,30));
//
//    mc.timeline.addTween(
//        createjs.Tween.get(child1)
//            .to({x:0}).to({x:60}, 50).to({x:0}, 50));
//    mc.timeline.addTween(
//        createjs.Tween.get(child2)
//            .to({x:60}).to({x:0}, 50).to({x:60}, 50));

   // mc.gotoAndPlay("start");

    var clipped_disk = new createjs.Shape();
    clipped_disk.graphics.beginFill('#00ff00').drawCircle(0, 0, 100);

    var clipping_rect = new createjs.Graphics();
    clipping_rect.drawRect(0, -50, 100, 100);
    clipped_disk.clip = clipping_rect;

    var container = new createjs.Container();
    container.addChild(clipped_disk);
    container.x = 150;
    container.y = 150;

    var stage = new createjs.Stage(document.getElementById('canvas'));
    stage.addChild(container);
    stage.update();}