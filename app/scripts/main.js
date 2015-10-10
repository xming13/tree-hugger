var CIRCLE_RADIUS = 50;
var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
var SPACING = 5;
var ANGLE_START = 30;
var CANVAS_HEIGHT = 320;
var CANVAS_WIDTH = 320;

var LEFT_0 = TOP_0 = -CIRCLE_RADIUS;
var LEFT_1 = TOP_1 = SPACING + CIRCLE_RADIUS;
var LEFT_2 = TOP_2 = LEFT_1 + SPACING + CIRCLE_DIAMETER;
var LEFT_3 = TOP_3 = LEFT_2 + SPACING + CIRCLE_DIAMETER;
var LEFT_4 = TOP_4 = LEFT_3 + SPACING + CIRCLE_DIAMETER;
var TOP_NEG1 = TOP_0 - SPACING - CIRCLE_DIAMETER;
var TOP_5 = TOP_4 + SPACING + CIRCLE_DIAMETER;

// Colors
var COLOR_SKY = '#E4F8FF';
var COLOR_GROUND = 'LightGreen';

// Stage
var stage;

// Popcorn
var pop;
var popCanPlay = false;

// for debugging
var DEBUG = true;

function init() {
    stage = new createjs.Stage('canvas');

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    loadAudio();

    drawMenu();
    if (DEBUG) {
        var gridLinesColor = '#F0F8FF';
        var gridLines = new createjs.Shape();
        gridLines.graphics.beginFill(gridLinesColor)
            .rect(0, 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(SPACING + CIRCLE_DIAMETER, 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(2 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(3 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(0, 0, CANVAS_WIDTH, SPACING)
            .endFill().beginFill(gridLinesColor)
            .rect(0, SPACING + CIRCLE_DIAMETER, CANVAS_WIDTH, SPACING)
            .endFill().beginFill(gridLinesColor)
            .rect(0, 2 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING)
            .endFill().beginFill(gridLinesColor)
            .rect(0, 3 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING);
        stage.addChild(gridLines);
    }
}

function loadAudio() {
    pop = Popcorn("#audio");
    pop.load();

    var request = new XMLHttpRequest();
    request.open('GET', 'audio/Antsy_Pants_-_Tree_Hugger.txt', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var lrcArr = parseLrc(request.responseText);

            var lrc, lrcNext;
            for (var i = 0; i < lrcArr.length; i++) {
                lrc = lrcArr[i];
                lrcNext = lrcArr[i + 1];

                if (lrcNext) {
                    pop.footnote({
                        start: lrc.starttime,
                        end: lrcNext.starttime,
                        text: lrc.line,
                        target: 'lyrics'
                    });
                }
            }
            console.log(lrcArr);

            pop.on('canplay', function () {
                popCanPlay = true;
                // hide #loading
//                var loading = document.getElementById('loading');
//                loading.style.display = 'none';
//
//                // show #btn-start
//                var btnStart = document.getElementById('btn-start');
//                btnStart.style.display = '';
//
//                btnStart.addEventListener("click", function () {
//                    // hide #btn-start
//                    btnStart.style.display = 'none';
//
//                    // Add class 'loaded' to container
//                    var container = document.getElementsByClassName('container')[0];
//                    if (container.classList) {
//                        container.classList.add('loaded');
//                    }
//                    else {
//                        container.className += ' loaded';
//                    }
//
//                    // start
//                    pop.play();
//                });
            });
        } else {
            console.log('request reached server but error is returned.');
        }
    };

    request.onerror = function () {
        console.log('request.onerror');
    };

    request.send();

    function parseLrc(rawLrc) {
        var lrcArr = [];

        var lrcAllRegex = /(\[[0-9.:\[\]]*\])+(.*)/;
        var timeRegex = /\[([0-9]+):([0-9.]+)\]/;
        var rawLrcArray = rawLrc.split(/[\r\n]/);

        for (var i = 0; i < rawLrcArray.length; i++) {
            // handle lrc
            var lrc = lrcAllRegex.exec(rawLrcArray[i]);

            if (lrc && lrc[0]) {
                var times = lrc[1].replace(/\]\[/g, "],[").split(",");

                for (var j = 0; j < times.length; j++) {
                    var time = timeRegex.exec(times[j]);
                    if (time && time[0]) {
                        lrcArr.push({ "starttime": parseInt(time[1], 10) * 60 + parseFloat(time[2]), "line": lrc[2] });
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;

        //sort lrcArr
        lrcArr.sort(function (a, b) {
            return a.starttime - b.starttime;
        });

        return lrcArr;
    }
}

function drawMenu() {
    var btnPlay = new createjs.Shape();
    btnPlay.graphics.beginFill('lightblue')
        .drawCircle(LEFT_1, TOP_2, CIRCLE_RADIUS);
    btnPlay.addEventListener('click', function () {
        stage.removeChild(btnPlay);
        stage.removeChild(btnBrowse);
        playAnim();
    });
    stage.addChild(btnPlay);

    var btnBrowse = new createjs.Shape();
    btnBrowse.graphics.beginFill('pink')
        .drawCircle(LEFT_3, TOP_2, CIRCLE_RADIUS);
    stage.addChild(btnBrowse);
}

function playAnim() {
    if (popCanPlay && pop) {
        pop.play();
    }
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


    // Card 1: flower
    var container1 = new createjs.Container();
    container1.x = LEFT_2;
    container1.y = TOP_2;

    var segmentGround = new createjs.Shape();
    segmentGround.angle = 90;
    segmentGround.fill = COLOR_GROUND;

    var segmentSky = new createjs.Shape();
    segmentSky.angle = ANGLE_START;
    segmentSky.alpha = 0;
    segmentSky.fill = COLOR_SKY;

    var tweenSegmentGround = createjs.Tween.get(segmentGround)
        .to({angle: ANGLE_START}, 400, createjs.Ease.getPowIn(2))
        .call(function () {
            var tweenSegmentSky = createjs.Tween.get(segmentSky)
                .to({alpha: 1})
                .to({angle: -180}, 1200, createjs.Ease.getPowOut(2));
            tweenSegmentSky.addEventListener('change', changeSegment);
        });
    tweenSegmentGround.addEventListener('change', changeSegment);

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
    flowerWrapper.y = -5;

    var flowerStem = new createjs.Shape();
    flowerStem.graphics.beginFill('green');
    var flowerStemCmd = flowerStem.graphics.rect(-2, 30, 4, 0).command;
    flowerWrapper.addChild(flowerStem);

    var flower = new createjs.Shape();
    flower.alpha = 0.0;
    flower.radius = 0;
    flower.fill = 'yellow';
    flowerWrapper.addChild(flower);

    createjs.Tween.get(flowerStemCmd)
        .wait(900)
        .to({h: -30}, 300)
        .call(function () {
            var flowerLeaves = new createjs.Shape();
            flowerLeaves.graphics.beginFill('green');
            var flowerLeavesCmd = flowerLeaves.graphics
                .drawEllipse(0, 18, 0, 6)
                .command;
            var flowerLeavesCmd2 = flowerLeaves.graphics
                .drawEllipse(0, 17, 0, 6)
                .command;
            flowerWrapper.addChild(flowerLeaves);

            createjs.Tween.get(flowerLeavesCmd)
                .to({w: -10}, 200, createjs.Ease.getBackOut(2));
            createjs.Tween.get(flowerLeavesCmd2)
                .to({w: 10}, 200, createjs.Ease.getBackOut(2));

            var tweenFlower = createjs.Tween.get(flower)
                .set({alpha: 1})
                .to({radius: 8}, 200, createjs.Ease.getBackOut(2))
                .set({label: 'flower'})
                .call(function () {
                    var flowerEyes = new createjs.Shape();
                    flowerEyes.graphics
                        .beginFill('black')
                        .drawCircle(-4, 0, 2)
                        .endFill().beginFill('black')
                        .drawCircle(4, 0, 2);
                    flowerWrapper.addChild(flowerEyes);

                    var petalColor = 'hotpink';
                    var petalRadius = 6;
                    var petalDuration = 150;

                    var petal1 = new createjs.Shape();
                    petal1.alpha = 0;
                    petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
                    flowerWrapper.addChildAt(petal1, 1); // add at index 1 as flowerStem should be at index 0
                    createjs.Tween.get(petal1)
                        .set({alpha: 1})
                        .to({x: 0, y: -11}, petalDuration, createjs.Ease.getBackOut(1));

                    var petal2 = new createjs.Shape();
                    petal2.alpha = 0;
                    petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
                    flowerWrapper.addChildAt(petal2, 1);
                    createjs.Tween.get(petal2)
                        .wait(.5 * petalDuration)
                        .set({alpha: 1})
                        .to({x: 8, y: -4}, petalDuration, createjs.Ease.getBackOut(1));

                    var petal3 = new createjs.Shape();
                    petal3.alpha = 0;
                    petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
                    flowerWrapper.addChildAt(petal3, 1);
                    createjs.Tween.get(petal3)
                        .wait(1.5 * petalDuration)
                        .set({alpha: 1})
                        .to({x: 6, y: 7}, petalDuration, createjs.Ease.getBackOut(1));

                    var petal4 = new createjs.Shape();
                    petal4.alplha = 0;
                    petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
                    flowerWrapper.addChildAt(petal4, 1);
                    createjs.Tween.get(petal4)
                        .wait(2.5 * petalDuration)
                        .set({alpha: 1})
                        .to({x: -6, y: 7}, petalDuration, createjs.Ease.getBackOut(1));

                    var petal5 = new createjs.Shape();
                    petal5.alpha = 0;
                    petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
                    flowerWrapper.addChildAt(petal5, 1);
                    createjs.Tween.get(petal5)
                        .wait(3.5 * petalDuration)
                        .set({alpha: 1})
                        .to({x: -8, y: -4}, petalDuration, createjs.Ease.getBackOut(1))
                        .wait(200)
                        .call(container2Start);
                });

            tweenFlower.addEventListener('change', circleExpand);
            function circleExpand(e) {
                var obj = e.target.target;
                obj.graphics.clear();
                obj.graphics.beginFill(obj.fill).drawCircle(0, 0, obj.radius);
            }
        });

    container1.addChild(segmentSky);
    container1.addChild(segmentGround);
    container1.addChild(flowerWrapper);

    // Card 2: Tree
    var container2 = new createjs.Container();
    container2.x = LEFT_4;
    container2.y = TOP_2;

    var segmentGround2 = new createjs.Shape();
    segmentGround2.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    container2.addChild(segmentGround2);

    var segmentSky2 = new createjs.Shape();
    segmentSky2.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    container2.addChild(segmentSky2);

//    DEVEL
//    container2.x = LEFT_2;
//    container2Start();

    function container2Start() {
        console.log('container2Start');
        createjs.Tween.get(container1).to({x: LEFT_0}, 500, createjs.Ease.circOut);
        createjs.Tween.get(container2).to({x: LEFT_2}, 500, createjs.Ease.circOut);

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
        var dist = 1.5 * CIRCLE_RADIUS;

        // DEVEL
//        subContainers[0].x = -dist;
//        subContainers[0].y = -dist;
//        subContainers[1].x = dist;
//        subContainers[1].y = -dist;
//        subContainers[2].x = -dist;
//        subContainers[2].y = dist;
//        subContainers[3].x = dist;
//        subContainers[3].y = dist;

        // winter
        var snowTreeWrapper = new createjs.Container();
        var snowTree = new createjs.Shape();
        snowTree.graphics
            .beginFill('white')
            .lineTo(-12, -5)
            .lineTo(0, -20)
            .lineTo(12, -5)
            .endFill().beginFill('white')
            .lineTo(-14, 5)
            .lineTo(0, -10)
            .lineTo(14, 5)
            .endFill().beginFill('white')
            .lineTo(-16, 15)
            .lineTo(0, 0)
            .lineTo(16, 15)
            .endFill().beginFill('white')
            .lineTo(-18, 25)
            .lineTo(0, 10)
            .lineTo(18, 25);
        snowTreeWrapper.addChild(snowTree);

        var snows = [];
        var snowWrapper = new createjs.Container();
        var snowSize = 3;

        for (var i = 0; i < 9; i++) {
            var snow = new createjs.Shape();
            snow.alpha = 0;
            snow.graphics
                .beginFill('white')
                .drawCircle(0, 0, snowSize);
            snows.push(snow);
            snowWrapper.addChild(snow);
        }

        function tweenSnow(snow) {
            var _random = Math.random();
            var _x = 0;
            if (_random <= 0.45) {
                _x = getRandomInt(-25, -10);
            }
            else if (_random <= 0.9) {
                _x = getRandomInt(10, 25);
            }
            else {
                _x = getRandomInt(-9, 9);
            }

            createjs.Tween
                .get(snow, {override: true})
                .to({alpha: 0}, 100)
                .wait(getRandomInt(0, 2000))
                .to({alpha: getRandomArbitrary(0.5, 0.9), x: _x, y: getRandomInt(-55, -50)}, 0)
                .to({y: 24}, getRandomInt(2500, 3000), createjs.Ease.linear)
                .call(function () {
                    tweenSnow(snow);
                });
        }

        snows.forEach(function (snow) {
            tweenSnow(snow);
        });

        snowTreeWrapper.addChild(snowWrapper);
        subContainers[3].addChild(snowTreeWrapper);

        createjs.Tween.get(subContainers[0]).wait(subContainerDuration)
            .to({x: -dist, y: -dist}, subContainerDuration, createjs.Ease.cubicIn);
        createjs.Tween.get(subContainers[1]).wait(1.5 * subContainerDuration)
            .to({x: dist, y: -dist}, subContainerDuration, createjs.Ease.cubicIn);
        createjs.Tween.get(subContainers[2]).wait(2 * subContainerDuration)
            .to({x: -dist, y: dist}, subContainerDuration, createjs.Ease.cubicIn);
        createjs.Tween.get(subContainers[3]).wait(2.5 * subContainerDuration)
            .to({x: dist, y: dist}, subContainerDuration, createjs.Ease.cubicIn)
            .call(function () {
                var delay = 500;
                var duration = 300;
                createjs.Tween.get(subContainers[0]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut);
                createjs.Tween.get(subContainers[1]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut);
                createjs.Tween.get(subContainers[2]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut);
                createjs.Tween.get(subContainers[3]).wait(delay).to({x: 0, y: 0}, duration, createjs.Ease.cubicOut)
                    .wait(200)
                    .call(function () {
                        snows.forEach(function (snow) {
                            createjs.Tween.removeTweens(snow);
                        });
                        container3Start();
                    });
            });
    }

    // Card 3: Cat
    var container3 = new createjs.Container();
    container3.x = LEFT_4;
    container3.y = TOP_2;

    var segmentGround3 = segmentGround2.clone();
    container3.addChild(segmentGround3);

    var segmentSky3 = segmentSky2.clone();
    container3.addChild(segmentSky3);

    var catWrapper = new createjs.Container();
    var catHead = new createjs.Shape();
    catHead.graphics.beginFill('#fff').drawEllipse(-15, 5, 30, 25);
    catWrapper.addChild(catHead);

    var catEyes = new createjs.Shape();
    catEyes.graphics.beginFill('black')
        .drawCircle(-10, 14, 2)
        .drawCircle(2, 14, 2)
        .beginFill('pink')
        .drawEllipse(-13, 17, 5, 2)
        .drawEllipse(-1, 17, 5, 2);
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
        createjs.Tween.get(container2).to({x: LEFT_0}, 500, createjs.Ease.circOut);
        createjs.Tween.get(container3).to({x: LEFT_2}, 500, createjs.Ease.circOut)
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
                    .to({y: 0}, beeDuration, createjs.Ease.sineIn)
                    .wait(200)
                    .call(container4Start);
            });
    }

    // Card 4: Turtle
    var container4 = new createjs.Container();
    container4.x = LEFT_4;
    container4.y = TOP_2;

    var segmentGround4 = segmentGround3.clone();
    container4.addChild(segmentGround4);

    var segmentSky4 = segmentSky3.clone();
    container4.addChild(segmentSky4);

    var turtleWrapper = new createjs.Container();
    var turtle = new createjs.Shape();
    turtle.graphics.beginFill('green').drawCircle(0, 15, 12);
    turtleWrapper.addChild(turtle);
    container4.addChild(turtleWrapper);

    var container4a = new createjs.Container();
    container4a.x = LEFT_2;
    container4a.y = TOP_NEG1;
    var sky = new createjs.Shape();
    sky.graphics.beginFill('lightBlue')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    container4a.addChild(sky);

    var container4b = new createjs.Container();
    container4b.x = LEFT_1;
    container4b.y = TOP_0;
    var sky4b = sky.clone();
    container4b.addChild(sky4b);
    var cloud4b = new createjs.Shape();
    cloud4b.graphics
        .beginFill('white')
        .drawCircle(-20, 5, 13)
        .endFill()
        .beginFill('white')
        .drawCircle(-5, 12, 12)
        .endFill()
        .beginFill('white')
        .drawCircle(9, 12, 10)
        .endFill()
        .beginFill('white')
        .drawCircle(20, 4, 12)
        .endFill()
        .beginFill('white')
        .drawCircle(-7, -9, 14)
        .endFill()
        .beginFill('white')
        .drawCircle(13, -11, 10)
        .endFill()
        .beginFill('white')
        // filler
        .drawCircle(0, 5, 15)
    ;
    container4b.addChild(cloud4b);

    var container4c = new createjs.Container();
    container4c.x = LEFT_3;
    container4c.y = TOP_NEG1;
    var sky4c = sky.clone();
    container4c.addChild(sky4c);
    var cloud4c = cloud4b.clone();
    container4c.addChild(cloud4c);

    function container4Start() {
        createjs.Tween.get(container3).to({x: LEFT_0}, 500, createjs.Ease.circOut);
        createjs.Tween.get(container4).to({x: LEFT_2}, 500, createjs.Ease.circOut)
            .wait(500).call(function () {
                createjs.Tween.get(container4)
                    .to({y: TOP_4}, 1000, createjs.Ease.none);
                createjs.Tween.get(turtleWrapper)
                    .to({y: -(TOP_4 - TOP_2)}, 1000, createjs.Ease.none);
                createjs.Tween.get(container4a)
                    .to({y: TOP_2}, 400, createjs.Ease.linear);
                createjs.Tween.get(container4b)
                    .to({y: TOP_5}, 2000, createjs.Ease.linear);
                createjs.Tween.get(container4c)
                    .to({y: TOP_4}, 2000, createjs.Ease.linear);
            });
    }

    stage.addChild(container1);
    stage.addChild(container2);
    stage.addChild(container3);
    stage.addChild(container4);
    stage.addChildAt(container4a, stage.getNumChildren() - 1);
    stage.addChild(container4b);
    stage.addChild(container4c);
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}