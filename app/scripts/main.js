function init() {
    var circles = [];
    var CIRCLE_RADIUS = 50;
    var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
    var SPACING = 10;
    var ANGLE_START = 30;

    // Colors
    var COLOR_SKY = '#E4F8FF';
    var COLOR_GROUND = 'LightGreen';

    // Stage
    var stage = new createjs.Stage('canvas');

    // Clipping Mask
    var clipped_disk = new createjs.Shape();
    clipped_disk.graphics.beginFill('#000000')
//        .drawCircle(CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .endFill()
//        .beginFill('#00ff00')
//        .drawCircle(CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS)
        .drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .endFill()
//        .beginFill('#00ff00')
//        .drawCircle(CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS)
//        .drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS)
    ;

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    // Timeline
    var timeline = new createjs.Timeline([], {}, {paused: true});

    // Card 1: flower
    var container1 = new createjs.Container();
    container1.x = CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS;
    container1.y = CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS;

    var segmentGround = new createjs.Shape();
    segmentGround.angle = 90;
    segmentGround.fill = COLOR_GROUND;
    var tweenSegmentGround = createjs.Tween.get(segmentGround)
        .to({angle: ANGLE_START}, 400, createjs.Ease.getPowIn(2));
    tweenSegmentGround.addEventListener('change', changeSegment);
    timeline.addLabel("ground", 0);
    timeline.addTween(tweenSegmentGround);

//    var g = new createjs.Graphics();
//    g.rect(-CIRCLE_RADIUS, -CIRCLE_RADIUS, CIRCLE_DIAMETER, CIRCLE_DIAMETER);
//    clipped_disk.clip = g;
//    container1.addChild(clipped_disk);

    var segmentSky = new createjs.Shape();
    segmentSky.angle = ANGLE_START;
    segmentSky.alpha = 0;
    segmentSky.fill = COLOR_SKY;
    var tweenSegmentSky = createjs.Tween.get(segmentSky)
        .wait(400)
        .set({alpha: 1})
        .to({angle: -180}, 1200, createjs.Ease.getPowOut(2));
    tweenSegmentSky.addEventListener('change', changeSegment);
    timeline.addLabel("sky", 1);
    timeline.addTween(tweenSegmentSky);

    function changeSegment(e) {
        var segment = e.target.target;
        var angleFromCenter = 90 - segment.angle;
        var startAngle = (90 - angleFromCenter) * Math.PI / 180;
        var endAngle = (90 + angleFromCenter) * Math.PI / 180;

        segment.graphics.clear();
        segment.graphics.beginFill(segment.fill)
//            .rect(-CIRCLE_RADIUS, -CIRCLE_RADIUS, CIRCLE_DIAMETER, CIRCLE_DIAMETER);
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
        .set({label: 'flower'})
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
                .to({x: -8, y: -4}, petalDuration, createjs.Ease.getBackOut(1))
                .call(container2Start);
        });

    timeline.addTween(tweenFlower);
    timeline.gotoAndPlay("flower");

    tweenFlower.addEventListener('change', circleExpand);
    function circleExpand(e) {
        var obj = e.target.target;
        obj.graphics.clear();
        obj.graphics.beginFill(obj.fill).drawCircle(0, 0, obj.radius);
    }

    flowerWrapper.y = -5;
    flowerWrapper.addChild(flower);

    container1.addChild(segmentSky);
    container1.addChild(segmentGround);
    container1.addChild(flowerWrapper);

    circles.push(container1);

    // Card 2: Tree
    var container2 = new createjs.Container();
    container2.x = 3 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS;
    container2.y = CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    container2.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    container2.addChild(segmentSky);
    circles.push(container2);

    function container2Start() {
//        createjs.Tween.get(flowerWrapper).to({x: 2 * CIRCLE_DIAMETER + SPACING}, 500, createjs.Ease.circOut);
        createjs.Tween.get(container1).to({x: -1 * CIRCLE_RADIUS}, 500, createjs.Ease.circOut);
        createjs.Tween.get(container2).to({x: CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS}, 500, createjs.Ease.circOut);

        var subContainers = [];
        var groundFills = ['#59AE6B', '#FFFFB7', '#EB6907', '#E1F0EB'];
        var skyFills = ['#AEE7FB', '#C6FFEA', '#FAA105', '#322F40'];

        for (var i = 0; i < 4; i++) {
            var _container = new createjs.Container();
            var _segmentGround = new createjs.Shape();
            _segmentGround.graphics.beginFill(groundFills[i])
                .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
            _container.addChild(_segmentGround);
            var _segmentSky = new createjs.Shape();
            _segmentSky.graphics.beginFill(skyFills[i])
                .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
            _container.addChild(_segmentSky);

            subContainers.push(_container);
            container2.addChildAt(_container, 0);
        }

        var subContainerDuration = 500;
        createjs.Tween.get(subContainers[0]).wait(subContainerDuration)
            .to({x: -1 * (CIRCLE_DIAMETER + SPACING), y: -1 * (CIRCLE_DIAMETER + SPACING)}, subContainerDuration, createjs.Ease.cubicIn);
        createjs.Tween.get(subContainers[1]).wait(1.5 * subContainerDuration)
            .to({x: 1 * (CIRCLE_DIAMETER + SPACING), y: -1 * (CIRCLE_DIAMETER + SPACING)}, subContainerDuration, createjs.Ease.cubicIn);
        createjs.Tween.get(subContainers[2]).wait(2 * subContainerDuration)
            .to({x: -1 * (CIRCLE_DIAMETER + SPACING), y: 1 * (CIRCLE_DIAMETER + SPACING)}, subContainerDuration, createjs.Ease.cubicIn);
        createjs.Tween.get(subContainers[3]).wait(2.5 * subContainerDuration)
            .to({x: 1 * (CIRCLE_DIAMETER + SPACING), y: 1 * (CIRCLE_DIAMETER + SPACING)}, subContainerDuration, createjs.Ease.cubicIn)
            .call(container2Complete);

        function container2Complete() {
            var delay = 500;
            var duration = 300;
            createjs.Tween.get(subContainers[0]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut);
            createjs.Tween.get(subContainers[1]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut);
            createjs.Tween.get(subContainers[2]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut);
            createjs.Tween.get(subContainers[3]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut)
                .call(container3Start);
        }
    }

    // Card 3: Cat
    var container3 = new createjs.Container();
    container3.x = 3 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS;
    container3.y = CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS;
    circles.push(container3);

    var segmentGround3 = new createjs.Shape();
    segmentGround3.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    container3.addChild(segmentGround3);

    var segmentSky3 = new createjs.Shape();
    segmentSky3.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    container3.addChild(segmentSky3);

    var catWrapper = new createjs.Container();
    var catHead = new createjs.Shape();
    catHead.graphics.beginFill('#fff').drawEllipse(-15, 5, 30, 25);
    catWrapper.addChild(catHead);

    var catEyes = new createjs.Shape();
    catEyes.graphics.beginFill('black')
        .drawCircle(-10, 14, 2)
        .drawCircle(2, 14, 2);
    catWrapper.addChild(catEyes);

    var catEars = new createjs.Shape();
    catEars.graphics
        .beginFill('#fff')
        .moveTo(-15, 14)
        .lineTo(-10, 0)
        .lineTo(-1, 7)
        .closePath()
        .moveTo(15, 14)
        .lineTo(10, 0)
        .lineTo(1, 7)
        .closePath();
    catWrapper.addChild(catEars);

    var beeWrapper = new createjs.Container();
    var bee = new createjs.Shape();
    bee.graphics
        .beginFill('yellow')
        .drawEllipse(-45, -20, 16, 12);

    beeWrapper.addChild(bee);

    container3.addChild(catWrapper);
    container3.addChild(beeWrapper);

    function container3Start() {
        createjs.Tween.get(container2).wait(200).to({x: -1 * CIRCLE_RADIUS}, 500, createjs.Ease.circOut);
        createjs.Tween.get(container3).wait(500).to({x: CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS}, 500, createjs.Ease.circOut)
            .call(function () {
                var beeDuration = 300;
                createjs.Tween.get(bee)
                    .to({x: 70}, beeDuration * 6, createjs.Ease.none);
                createjs.Tween.get(bee)
                    .to({y: -5}, beeDuration, createjs.Ease.sineOut)
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn)
                    .to({y: 5}, beeDuration, createjs.Ease.sineOut)
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn)
                    .to({y: -5}, beeDuration, createjs.Ease.sineOut)
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn);

                createjs.Tween.get(catEyes)
                    .to({x: 7}, beeDuration * 6, createjs.Ease.none);
                createjs.Tween.get(catEyes)
                    .to({y: -1}, beeDuration, createjs.Ease.sineOut)
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn)
                    .to({y: 1}, beeDuration, createjs.Ease.sineOut)
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn)
                    .to({y: -1}, beeDuration, createjs.Ease.sineOut)
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn);
            });
    }

//    var circle2 = new createjs.Shape();
//    circle2.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle2);

//    var circle3 = new createjs.Shape();
//    circle3.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle3);

//    var circle4 = new createjs.Shape();
//    circle4.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle4);

//    var circle5 = new createjs.Shape();
//    circle5.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle5);

//    var circle6 = new createjs.Shape();
//    circle6.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle6);

//    var circle7 = new createjs.Shape();
//    circle7.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle7);

//    var circle8 = new createjs.Shape();
//    circle8.graphics.beginFill('DeepSkyBlue').drawCircle(CIRCLE_DIAMETER + SPACING + CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle8);

//    var circle9 = new createjs.Shape();
//    circle9.graphics.beginFill('DeepSkyBlue').drawCircle(2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, 2 * (CIRCLE_DIAMETER + SPACING) + CIRCLE_RADIUS, CIRCLE_RADIUS);
//    circles.push(circle9);

    circles.forEach(function (circle) {
        stage.addChild(circle);
    });
}