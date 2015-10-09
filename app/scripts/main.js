function init() {
    var circles = [];
    var CIRCLE_RADIUS = 50;
    var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
    var SPACING = 10;
    var ANGLE_START = 30;

    // Stage
    var stage = new createjs.Stage('canvas');

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    // Card 1: flower
    var container1 = new createjs.Container();
    container1.x = CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS;
    container1.y = CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS;

    var segmentGrass = new createjs.Shape();
    segmentGrass.angle = 90;
    segmentGrass.fill = 'LightGreen';
    var tweenSegmentGrass = createjs.Tween.get(segmentGrass)
        .to({angle: ANGLE_START}, 400, createjs.Ease.getPowIn(2));
    tweenSegmentGrass.addEventListener('change', changeSegment);

    var segmentSky = new createjs.Shape();
    segmentSky.angle = ANGLE_START;
    segmentSky.alpha = 0;
    segmentSky.fill = '#E4F8FF';
    var tweenSegmentSky = createjs.Tween.get(segmentSky)
        .wait(400)
        .set({alpha: 1})
        .to({angle: -180}, 1200, createjs.Ease.getPowOut(2));
    tweenSegmentSky.addEventListener('change', changeSegment);

    function changeSegment(e) {
        var segment = e.target.target;
        var angleFromCenter = 90 - segment.angle;
        var startAngle = (90 - angleFromCenter) * Math.PI / 180;
        var endAngle = (90 + angleFromCenter) * Math.PI / 180;

        segment.graphics.clear();
        segment.graphics.beginFill(segment.fill)
            .arc(0, 0, CIRCLE_RADIUS, startAngle, endAngle);
    }

    var flowerWrapper = new createjs.Container();
    var flower = new createjs.Shape();
    flower.alpha = 0.0;
    flower.radius = 0;
    flower.fill = 'yellow';

    var tweenFlower = createjs.Tween.get(flower)
        .wait(900)
        .set({alpha: 1})
        .to({radius: 6}, 200, createjs.Ease.getBackOut(4))
        .call(function () {
            var petalColor = 'hotpink';
            var petalRadius = 6;
            var petalDuration = 150;

            var petal1 = new createjs.Shape();
            petal1.alpha = 0;
            petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
            flowerWrapper.addChildAt(petal1, 0);
            createjs.Tween.get(petal1)
                .set({alpha: 1})
                .to({x: 0, y: -11}, petalDuration, createjs.Ease.getBackOut(1));

            var petal2 = new createjs.Shape();
            petal2.alpha = 0;
            petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
            flowerWrapper.addChildAt(petal2, 0);
            createjs.Tween.get(petal2)
                .wait(.5 * petalDuration)
                .set({alpha: 1})
                .to({x: 8, y: -4}, petalDuration, createjs.Ease.getBackOut(1));

            var petal3 = new createjs.Shape();
            petal3.alpha = 0;
            petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
            flowerWrapper.addChildAt(petal3, 0);
            createjs.Tween.get(petal3)
                .wait(1.5 * petalDuration)
                .set({alpha: 1})
                .to({x: 6, y: 7}, petalDuration, createjs.Ease.getBackOut(1));

            var petal4 = new createjs.Shape();
            petal4.alplha = 0;
            petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
            flowerWrapper.addChildAt(petal4, 0);
            createjs.Tween.get(petal4)
                .wait(2.5 * petalDuration)
                .set({alpha: 1})
                .to({x: -6, y: 7}, petalDuration, createjs.Ease.getBackOut(1));

            var petal5 = new createjs.Shape();
            petal5.alpha = 0;
            petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
            flowerWrapper.addChildAt(petal5, 0);
            createjs.Tween.get(petal5)
                .wait(3.5 * petalDuration)
                .set({alpha: 1})
                .to({x: -8, y: -4}, petalDuration, createjs.Ease.getBackOut(1));
        });


    tweenFlower.addEventListener('change', circleExpand);
    function circleExpand(e) {
        var obj = e.target.target;
        obj.graphics.clear();
        obj.graphics.beginFill(obj.fill).drawCircle(0, 0, obj.radius);
    }

    flowerWrapper.y = -5;
    flowerWrapper.addChild(flower);

    container1.addChild(segmentSky);
    container1.addChild(segmentGrass);
    container1.addChild(flowerWrapper);

    circles.push(container1);

    // Card 2: Tree
    var container2 = new createjs.Container();

    circles.push(container2);


//    var circle2 = new createjs.Shape();
//    circle2.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle2);

    var circle3 = new createjs.Shape();
    circle3.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle3);

    var circle4 = new createjs.Shape();
    circle4.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
    circles.push(circle4);

//    var circle5 = new createjs.Shape();
//    circle5.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle5);

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
}