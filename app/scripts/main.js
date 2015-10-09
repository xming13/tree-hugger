function init() {
    var circles = [];
    var CIRCLE_RADIUS = 50;
    var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
    var SPACING = 10;

    var stage = new createjs.Stage('canvas');

    var circle1 = new createjs.Shape();
    circle1.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle1);

    var circle2 = new createjs.Shape();
    circle2.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle2);

    var circle3 = new createjs.Shape();
    circle3.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle3);

    var circle4 = new createjs.Shape();
    circle4.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle4);

    var circle5 = new createjs.Shape();
    circle5.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle5);

    var circle6 = new createjs.Shape();
    circle6.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle6);

    var circle7 = new createjs.Shape();
    circle7.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle7);

    var circle8 = new createjs.Shape();
    circle8.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle8);

    var circle9 = new createjs.Shape();
    circle9.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle9);

    circles.forEach(function (circle) {
        stage.addChild(circle);
    });

    stage.update();
}