// Constants
var CIRCLE_RADIUS = 50;
var CIRCLE_RADIUS_SMALL = CIRCLE_RADIUS * 3 / 4;
var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
var SPACING = 5;
var CANVAS_HEIGHT = 320;
var CANVAS_WIDTH = 320;

var LEFT_0 = TOP_0 = -CIRCLE_RADIUS;
var LEFT_1 = TOP_1 = LEFT_0 + SPACING + CIRCLE_DIAMETER;
var LEFT_2 = TOP_2 = LEFT_1 + SPACING + CIRCLE_DIAMETER;
var LEFT_3 = TOP_3 = LEFT_2 + SPACING + CIRCLE_DIAMETER;
var LEFT_4 = TOP_4 = LEFT_3 + SPACING + CIRCLE_DIAMETER;
var TOP_NEG1 = TOP_0 - SPACING - CIRCLE_DIAMETER;
var TOP_5 = TOP_4 + SPACING + CIRCLE_DIAMETER;

// Colors
var COLOR_BORDER = '#F0F8FF';

var COLOR_SKY = '#E4F8FF';
var COLOR_GROUND = 'LightGreen';
var COLOR_HIGH_SKY = 'LightBlue';
var COLOR_SEA = '#6DB7FF';
var COLOR_SEA_GROUND = '#E77E34';
var COLOR_DARK_SKY = '#000025';
var COLOR_DARK_SEA = '#AAAAB3';
var COLOR_ICE_GROUND = '#F2F2F2';
var COLOR_DESERT = '#FFD466';
var COLOR_DESERT_SKY = '#FFFFA5';

var COLOR_BEE_BODY = 'yellow';
var COLOR_BEE_WING = '#ABCCB0';
var COLOR_BEE_BODY_STRIPE = 'black'

var COLOR_TURTLE_SHELL = '#25B325';
var COLOR_TURTLE_BODY = '#FFBE00';
var COLOR_BALLOON_STRING = 'white';
var COLOR_BALLOON_1 = '#FF9999';
var COLOR_BALLOON_2 = '#9999FF';
var COLOR_BALLOON_3 = '#FFFF99';

var COLOR_FISH = '#FFE926';
var COLOR_JACKALOPE = '#FFDB89';
var COLOR_JACKALOPE_HORN = '#996C4D';
var COLOR_SEA_MONSTER = 'darkgreen';
var COLOR_SHARK = '#CCCCCC';

// Stage
var stage;

// Popcorn
var pop;
var popCanPlay = false;

// Menu
var menuWrapper;

// Animation
var animationWrapper;
var mainTimeline;

// Gallery Page
var galleryPageWrapper;
var galleryWrapper;
var COLOR_BUTTON_DISABLED = 'lightGrey';
var COLOR_BUTTON_ENABLED = '#E2E2FF';
var COLOR_BUTTON_DISABLED_CONTENT = 'darkGrey';
var COLOR_BUTTON_ENABLED_CONTENT = '#9797FF';
var PAGE_SIZE = 3;
var currentPage = 1;

// for debugging
var DEBUG = false;
var START_TIME = DEBUG ? 70 : 0;

function init() {
    stage = new createjs.Stage('canvas');
    stage.enableMouseOver(10);

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    // Defaults;
    TweenLite.defaultEase = Power0.easeNone;

    loadAudio();

    var borders = new createjs.Shape();
    borders.graphics.beginFill(COLOR_BORDER)
        .rect(0, 0, SPACING, CANVAS_HEIGHT)
        .endFill().beginFill(COLOR_BORDER)
        .rect(3 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
        .endFill().beginFill(COLOR_BORDER)
        .rect(0, 0, CANVAS_WIDTH, SPACING)
        .endFill().beginFill(COLOR_BORDER)
        .rect(0, 3 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING);
    stage.addChild(borders);

    renderMenu();

    if (DEBUG) {
        var gridLinesColor = COLOR_BORDER;
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

            pop.on('canplayall', function () {
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
            pop.on('ended', function () {
                setTimeout(function () {
                    stage.removeChild(animationWrapper);
                    renderMenu()
                }, 200);
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

// Render
function renderMenu() {
    if (!menuWrapper) {
        menuWrapper = new createjs.Container();
    }
    if (!stage.getChildByName('menuWrapper')) {
        stage.addChild(menuWrapper);
    }
    menuWrapper.removeAllChildren();

    var btnPlayWrapper = new createjs.Container();
    btnPlayWrapper.x = LEFT_2;
    btnPlayWrapper.y = TOP_2;
    btnPlayWrapper.cursor = 'pointer';

    var btnPlay = new createjs.Shape();
    var arrowLength = 20;
    btnPlay.graphics.beginFill(COLOR_BUTTON_ENABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS)
        .endFill().beginFill(COLOR_BUTTON_ENABLED_CONTENT)
        .setStrokeStyle(4, 'round', 'round')
        .beginStroke(COLOR_BUTTON_ENABLED_CONTENT)
        .moveTo(arrowLength, 0)
        .lineTo(Math.round(-arrowLength * Math.cos(60 * Math.PI / 180)), Math.round(-arrowLength * Math.sin(60 * Math.PI / 180)))
        .lineTo(Math.round(-arrowLength * Math.cos(60 * Math.PI / 180)), Math.round(arrowLength * Math.sin(60 * Math.PI / 180)))
        .closePath();

    btnPlayWrapper.addChild(btnPlay);
    btnPlayWrapper.addEventListener('click', function () {
        stage.removeChild(menuWrapper);
        renderAnim();
    });
    menuWrapper.addChild(btnPlayWrapper);

    var btnFbWrapper = new createjs.Container();
    btnFbWrapper.x = LEFT_1;
    btnFbWrapper.y = TOP_3;
    btnFbWrapper.cursor = 'pointer';

    var btnFb = new createjs.Shape();
    btnFb.graphics.beginFill('#759BE6')
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
        .endFill()
        .setStrokeStyle(7)
        .beginStroke('#fff')
        .moveTo(0, 24)
        .lineTo(0, -11)
        .arcTo(0, -17, 12, -17, 6)
        .lineTo(12, -17)
        .moveTo(-12, -1)
        .lineTo(12, -1);

    btnFbWrapper.addChild(btnFb);
    btnFbWrapper.addEventListener('click', function () {
        alert('not implemented yet!');
    });
    menuWrapper.addChild(btnFbWrapper);

    var btnBrowseWrapper = new createjs.Container();
    btnBrowseWrapper.x = LEFT_2;
    btnBrowseWrapper.y = TOP_3;
    btnBrowseWrapper.cursor = 'pointer';

    var btnBrowse = new createjs.Shape();
    btnBrowse.graphics.beginFill('pink')
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL);
    btnBrowseWrapper.addChild(btnBrowse);
    btnBrowseWrapper.addEventListener('click', function () {
        stage.removeChild(menuWrapper);
        renderGalleryPage();
    });
    menuWrapper.addChild(btnBrowseWrapper);

    var btnInfoWrapper = new createjs.Container();
    btnInfoWrapper.x = LEFT_3;
    btnInfoWrapper.y = TOP_3;
    btnInfoWrapper.cursor = 'pointer';

    var btnInfo = new createjs.Shape();
    btnInfo.graphics.beginFill('#D0D0D0')
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
        .endFill()
        .beginFill('#fff')
        .drawCircle(0, -18, 5)
        .setStrokeStyle(7)
        .beginStroke('#fff')
        .moveTo(-8, -6)
        .lineTo(2, -6)
        .lineTo(2, 16)
        .lineTo(2, -6)
        .endStroke()
        .beginStroke('#fff')
        .moveTo(-11, 16)
        .lineTo(11, 16);

    btnInfoWrapper.addChild(btnInfo);
    btnInfoWrapper.addEventListener('click', function () {
        alert('not implemented yet!')
    });
    menuWrapper.addChild(btnInfoWrapper);

    if (DEBUG) {
        var objs = getJackalopeTimeline(LEFT_2, TOP_1);
        var timeline = objs[0];
        var container = objs[1];
        menuWrapper.addChild(container);
        timeline.eventCallback('onComplete', function () {
            this.restart();
        });
        timeline.play();
    }
}

function renderAnim() {
    if (!animationWrapper) {
        animationWrapper = new createjs.Container();
    }
    if (!stage.getChildByName('animationWrapper')) {
        stage.addChild(animationWrapper);
    }
    animationWrapper.removeAllChildren();

    var flowerObjs = getFlowerTimeline(LEFT_2, TOP_2);
    var flowerTimeline = flowerObjs[0];
    var flowerContainer = flowerObjs[1];

    var treeObjs = getTreeTimeline(LEFT_4, TOP_2);
    var treeTimeline = treeObjs[0];
    var treeContainer = treeObjs[1];

    var transitionTimeline = new TimelineMax();
    transitionTimeline
        .add('transition')
        .to(flowerContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition')
        .to(treeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition');

    var springObjs = getSpringTimeline(0, 0);
    var springTimeline = springObjs[0];
    var springContainer = springObjs[1];

    var summerObjs = getSummerTimeline(0, 0);
    var summerTimeline = summerObjs[0];
    var summerContainer = summerObjs[1];

    var autumnObjs = getAutumnTimeline(0, 0);
    var autumnTimeline = autumnObjs[0];
    var autumnContainer = autumnObjs[1];

    var winterObjs = getWinterTimeline(0, 0);
    var winterTimeline = winterObjs[0];
    var winterContainer = winterObjs[1];

    treeContainer.addChildAt(springContainer, 0);
    treeContainer.addChildAt(summerContainer, 0);
    treeContainer.addChildAt(autumnContainer, 0);
    treeContainer.addChildAt(winterContainer, 0);

    var dist = 1.5 * CIRCLE_RADIUS;
    var subContainerDuration = .7;

    var transitionSeasonTimeline = new TimelineMax();
    transitionSeasonTimeline
        .add('transition1', '+=1')
        .to(springContainer, subContainerDuration, {
            x: -dist,
            y: -dist,
            delay: subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .to(summerContainer, subContainerDuration, {
            x: dist,
            y: -dist,
            delay: 1.5 * subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .to(autumnContainer, subContainerDuration, {
            x: -dist,
            y: dist,
            delay: 2 * subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .to(winterContainer, subContainerDuration, {
            x: dist,
            y: dist,
            delay: 2.5 * subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .add('reverse', '+=1')
        .to(springContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut
        }, 'reverse')
        .to(summerContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut
        }, 'reverse')
        .to(autumnContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut
        }, 'reverse')
        .to(winterContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut,
            onComplete: function () {
                // remove all seasons' animation
                springTimeline.stop();
                summerTimeline.stop();
                autumnTimeline.stop();
                winterTimeline.stop();
            }
        }, 'reverse')
    ;

    var catObjs = getCatTimeline(LEFT_4, TOP_2);
    var catTimeline = catObjs[0];
    var catContainer = catObjs[1];

    var transitionTimeline2 = new TimelineMax();
    transitionTimeline2
        .add('transition')
        .to(treeContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition')
        .to(catContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition');

    var turtleObjs = getTurtleTimeline(LEFT_4, TOP_2);
    var turtleTimeline = turtleObjs[0];
    var turtleContainer = turtleObjs[1];
    var turtleWrapper = turtleObjs[2];

    var transitionTimeline3 = new TimelineMax();
    transitionTimeline3
        .add('transition3')
        .to(catContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition3')
        .to(turtleContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition3');

    var skyContainer = new createjs.Container();
    skyContainer.x = LEFT_2;
    skyContainer.y = TOP_NEG1;
    skyContainer.alpha = 0;
    var sky = new createjs.Shape();
    sky.graphics.beginFill('lightBlue')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    skyContainer.addChild(sky);

    var cloudObjs1 = getCloudTimeline(LEFT_1, TOP_0);
    var cloudContainer1 = cloudObjs1[1];
    var cloudObjs2 = getCloudTimeline(LEFT_3, TOP_NEG1);
    var cloudContainer2 = cloudObjs2[1];

    var transitionTimeline4 = new TimelineMax();
    transitionTimeline4
        .add('transition4')
        .set(skyContainer, {alpha: 0}, 'transition4')
        .to(turtleContainer, 1, {y: TOP_4}, 'transition4')
        .to(turtleWrapper, 1, {y: -(TOP_4 - TOP_2)}, 'transition4')
        .to(skyContainer, .01, {y: TOP_2, alpha: 1}, 'transition4')
        .to(cloudContainer1, 2, {y: TOP_5}, 'transition4')
        .to(cloudContainer2, 2.4, {y: TOP_4}, 'transition4');

    var roofTopObjs = getRoofTopTimeline(LEFT_4, TOP_3);
    var roofTopContainer = roofTopObjs[1];

    var cloudObjs3 = getCloudTimeline(LEFT_4, TOP_1);
    var cloudContainer3 = cloudObjs3[1];

    var transitionTimeline5 = new TimelineMax();

    transitionTimeline5
        .add('transition5')
        .to(cloudContainer3, 3, {x: LEFT_2}, 'transition5')
        .to(roofTopContainer, 2.8, {x: LEFT_0}, 'transition5');

    var seaWaveContainer = getSeaWaveContainer(LEFT_2, TOP_5);

    var seaObjs = getSeaTimeline(LEFT_1, TOP_5);
    var seaContainer = seaObjs[1];

    var transitionTimeline6 = new TimelineMax();
    transitionTimeline6
        .add('transition6')
        .to(cloudContainer3, .5, {y: TOP_NEG1, ease: Circ.easeOut}, 'transition6')
        .to(skyContainer, .5, {y: TOP_0, ease: Circ.easeOut}, 'transition6')
        .to(seaWaveContainer, .5, {y: TOP_2, ease: Circ.easeOut}, 'transition6')
        .to(seaContainer, .5, {y: TOP_3, ease: Circ.easeOut}, 'transition6')
        .add(function () {
            var balloonWrapper = turtleWrapper.getChildAt(0);
            skyContainer.addChild(balloonWrapper);
            turtleWrapper.removeChild(balloonWrapper);
        }, 'transition6')
        .add('turtleGone', '+=0')
        .to(turtleWrapper, 1.2, {y: "+=" + CIRCLE_RADIUS / 2, alpha: 0}, 'turtleGone')
        .to(seaWaveContainer, 1.2, {alpha: 0, ease: Circ.easeOut}, 'turtleGone+=1')
    ;

    var fishObjs = getFishTimeline(LEFT_4, TOP_2);
    var fishContainer = fishObjs[1];

    var cactusObjs = getCactusTimeline(LEFT_2, TOP_1);
    var cactusTimeline = cactusObjs[0];
    var cactusContainer = cactusObjs[1];

    var cactusObjs2 = getCactusTimeline(LEFT_2, TOP_1);
    var cactusTimeline2 = cactusObjs2[0];
    var cactusContainer2 = cactusObjs2[1];
    var cactusFlowerWrapper2 = cactusObjs2[2];
    var cactusCactusWrapper2 = cactusObjs2[3];

    var transitionTimeline7 = new TimelineMax();
    transitionTimeline7
        .add('transition7')
        .to(fishContainer, 8.8, {x: LEFT_0, startAt: {x: LEFT_4}}, 'transition7')
        .to(cactusContainer, .5, {scaleX: 0, scaleY: 0, ease: Power2.easeOut })
        .add(function () {
            // remove cactusTimeline from the timeline
            transitionTimeline7.remove(cactusTimeline);
        })
        .add('transition7b', '+=0.5')
        .to(fishContainer, 8.8, {x: LEFT_4, startAt: {x: LEFT_0, scaleX: -1}}, 'transition7b')
        .add(cactusTimeline, 'transition7+=5')
        .add(cactusTimeline2, 'transition7b+=5')
    ;

    var overlayContainer = new createjs.Container();
    overlayContainer.x = 0;
    overlayContainer.y = 0;
    var overlay = new createjs.Shape();
    overlay.alpha = 0;
    overlay.graphics.beginFill('black').rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    overlayContainer.addChild(overlay);

    var desertGroundContainer1 = getDesertGroundContainer(LEFT_1, TOP_2);
    var desertGroundContainer2 = getDesertGroundContainer(LEFT_3, TOP_2);
    var desertContainer1 = getDesertContainer(LEFT_1, TOP_3);
    var desertContainer2 = getDesertContainer(LEFT_3, TOP_3);

    var desertFaceObjs = getDesertFaceTimeline(LEFT_2, TOP_3);
    var desertFaceTimeline = desertFaceObjs[0];
    var desertFaceContainer = desertFaceObjs[1];

    desertGroundContainer1.scaleX = desertGroundContainer1.scaleY
        = desertGroundContainer1.scaleX = desertGroundContainer2.scaleY
        = desertContainer1.scaleX = desertContainer1.scaleY
        = desertContainer2.scaleX = desertContainer2.scaleY
        = desertFaceContainer.scaleX = desertFaceContainer.scaleY
        = 0;

    var hearts = [];
    for (var i = 1; i <= 25; i++) {
        var heartContainer = getHeartContainer(_random(10, 310), TOP_0 - _random(0, CIRCLE_RADIUS));
        heartContainer.alpha = .8;
        hearts.push(heartContainer);
    }

    var transitionTimeline8 = new TimelineMax();
    transitionTimeline8
        .add('transition8')
        .set([desertGroundContainer1, desertGroundContainer2, desertContainer1, desertContainer2, desertFaceContainer], {scaleX: 0, scaleY: 0})
        .to(seaContainer, .5, {y: TOP_4}, 'transition8')
        .to(cactusContainer2, .5, {y: TOP_2}, 'transition8')
        .add('overlay')
        .add(function () {
            cactusCactusWrapper2.removeChild(cactusFlowerWrapper2);
            cactusFlowerWrapper2.x += LEFT_2;
            cactusFlowerWrapper2.y += TOP_2;
            overlayContainer.addChild(cactusFlowerWrapper2);
        })
        .to(overlay, .5, {alpha: .6, startAt: {alpha: 0}}, 'overlay')
        .to(cactusFlowerWrapper2, .5, {x: LEFT_2, y: TOP_2, scaleX: 3, scaleY: 3, ease: Power3.easeIn}, 'overlay')
        .add(new TimelineMax({delay: .8})
            .to(cactusFlowerWrapper2, .3, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .26, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .22, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .18, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .14, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .1, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .06, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .02, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2}))
        .add('overlayend', '+=4')
        .add('desert', '+=4.5')
        .to(hearts, 16, {y: "+=" + (CIRCLE_DIAMETER + CIRCLE_DIAMETER + CIRCLE_DIAMETER)})
        .to(hearts, 2, {alpha: 0}, '-=2')
        .to(overlay, .5, {alpha: 0}, 'overlayend')
        .to([desertGroundContainer1, desertGroundContainer2], .6, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)}, 'desert')
        .to([desertContainer1, desertContainer2, desertFaceContainer], .6, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)}, 'desert+=1')
        .add(desertFaceTimeline, 'desert+=2')
    ;

    var jackalopeObjs = getJackalopeTimeline(LEFT_4, TOP_2);
    var jackalopeContainer = jackalopeObjs[1];

    var transitionTimeline9 = new TimelineMax();
    transitionTimeline9
        .add('transition9')
        .to([desertGroundContainer1, desertGroundContainer2, cactusContainer2, desertContainer1, desertContainer2, desertFaceContainer],
        .5, {x: "-=" + ((CIRCLE_DIAMETER + SPACING) * 3), ease: Circ.easeOut}, 'transition9')
        .to(jackalopeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition9');

    animationWrapper.addChild(flowerContainer);
    animationWrapper.addChild(treeContainer);
    animationWrapper.addChild(catContainer);
    animationWrapper.addChild(turtleContainer);
    animationWrapper.addChildAt(skyContainer, animationWrapper.getNumChildren() - 1);
    animationWrapper.addChild(cloudContainer1);
    animationWrapper.addChild(cloudContainer2);
    animationWrapper.addChild(cloudContainer3);
    animationWrapper.addChild(roofTopContainer);
    animationWrapper.addChildAt(seaWaveContainer, 0);
    animationWrapper.addChild(seaContainer);
    animationWrapper.addChild(fishContainer);
    animationWrapper.addChild(cactusContainer);
    animationWrapper.addChild(cactusContainer2);
    animationWrapper.addChild(overlayContainer);
    animationWrapper.addChild(desertGroundContainer1);
    animationWrapper.addChild(desertGroundContainer2);
    animationWrapper.addChild(desertContainer1);
    animationWrapper.addChild(desertContainer2);
    animationWrapper.addChild(desertFaceContainer);
    hearts.forEach(function (heartContainer) {
        animationWrapper.addChild(heartContainer);
    });
    animationWrapper.addChild(jackalopeContainer);

    mainTimeline = new TimelineMax({
        paused: true,
        onStart: function () {
            if (popCanPlay && pop) {
                pop.play(START_TIME);
            }
        }
    });

    var flowerToDesertTimeline = new TimelineMax();
    flowerToDesertTimeline
        .add('flower')
        .add(flowerTimeline, '+=19')
        .add(transitionTimeline, '+=0.4')
        .add('tree', '+=0')
        .add(treeTimeline, 'tree')
        .add(transitionSeasonTimeline, 'tree')
        .add(transitionTimeline2, '+=0')
        .add(catTimeline, '-=0.3')
        .add(transitionTimeline3, '+=0')
        .add(turtleTimeline, '+=0.4')
        .add(transitionTimeline4, '+=0.1')
        .add(transitionTimeline5, '+=0.1')
        .add(transitionTimeline6, '+=0')
        .add('fish', '+=0')
        .add('desert', '+=18.1')
        .add(transitionTimeline7, 'fish')
        .add(transitionTimeline8, 'desert')
        .add(transitionTimeline9, '+=0.8')

    var iceWorldTimeline = new TimelineMax();
    iceWorldTimeline
        .add('iceWorld');

    mainTimeline.add(flowerToDesertTimeline);
    mainTimeline.add(iceWorldTimeline);

    mainTimeline.play(START_TIME, false);
}

function renderGalleryPage() {
    if (!galleryPageWrapper) {
        galleryPageWrapper = new createjs.Container();
    }
    if (!stage.getChildByName('galleryPageWrapper')) {
        stage.addChild(galleryPageWrapper);
    }
    galleryPageWrapper.removeAllChildren();

    _renderGallery();
    _renderBtnPrev();
    _renderBtnHome();
    _renderBtnNext();
}

function _renderGallery() {
    galleryWrapper = galleryPageWrapper.getChildByName('galleryWrapper');

    if (!galleryWrapper) {
        galleryWrapper = new createjs.Container();
        galleryPageWrapper.addChild(galleryWrapper);
    }

    switch (currentPage) {
        case 1:
            var flowerObjs = getFlowerTimeline(LEFT_1, TOP_1);
            _processTimelineObjs(flowerObjs);

            var treeObjs = getTreeTimeline(LEFT_2, TOP_1);
            _processTimelineObjs(treeObjs);

            var springObjs = getSpringTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(springObjs);

            var summerObjs = getSummerTimeline(LEFT_1, TOP_2);
            _processTimelineObjs(summerObjs);

            var autumnObjs = getAutumnTimeline(LEFT_2, TOP_2);
            _processTimelineObjs(autumnObjs);

            var winterObjs = getWinterTimeline(LEFT_3, TOP_2);
            _processTimelineObjs(winterObjs);

            break;
        case 2:
            var catObjs = getCatTimeline(LEFT_1, TOP_1);
            _processTimelineObjs(catObjs);

            var turtleObjs = getTurtleTimeline(LEFT_2, TOP_1);
            _processTimelineObjs(turtleObjs);

            var cloudObjs = getCloudTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(cloudObjs);

            var roofTopObjs = getRoofTopTimeline(LEFT_1, TOP_2);
            _processTimelineObjs(roofTopObjs);

            var seaObjs = getSeaTimeline(LEFT_2, TOP_2);
            _processTimelineObjs(seaObjs);

            var fishObjs = getFishTimeline(LEFT_3, TOP_2);
            _processTimelineObjs(fishObjs);

            break;
        case 3:
            var cactusObjs = getCactusTimeline(LEFT_1, TOP_1);
            _processTimelineObjs(cactusObjs);

            var desertFaceObjs = getDesertFaceTimeline(LEFT_2, TOP_1);
            _processTimelineObjs(desertFaceObjs);

            var jackalopeObjs = getJackalopeTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(jackalopeObjs);

            var seaMonsterObjs = getSeaMonsterTimeline(LEFT_2, TOP_2);
            _processTimelineObjs(seaMonsterObjs);

            var sharkObjs = getSharkTimeline(LEFT_3, TOP_2);
            _processTimelineObjs(sharkObjs);

            break;
        default:
            break;
    }

    function _processTimelineObjs(objs) {
        var timeline = objs[0];
        var container = objs[1];
        galleryWrapper.addChild(container);
        timeline.eventCallback('onComplete', function () {
            var self = this;
            setTimeout(function () {
                self.restart();
            }, 500);
        });
        timeline.play();
    }
}

function _renderBtnPrev() {
    var enabled = currentPage > 1;

    var btnPrevWrapper = new createjs.Container();
    btnPrevWrapper.x = LEFT_1;
    btnPrevWrapper.y = TOP_3;
    btnPrevWrapper.cursor = enabled ? 'pointer' : 'default';
    btnPrevWrapper.addEventListener('click', function () {
        if (enabled) {
            currentPage--;
            renderGalleryPage();
        }
    });

    var btnPrev = new createjs.Shape();
    btnPrev.graphics.beginFill(enabled ? COLOR_BUTTON_ENABLED : COLOR_BUTTON_DISABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
        .setStrokeStyle(4, "round", "round")
        .beginStroke(enabled ? COLOR_BUTTON_ENABLED_CONTENT : COLOR_BUTTON_DISABLED_CONTENT)
        .moveTo(6, -12)
        .lineTo(-12, 0)
        .lineTo(6, 12)
        .closePath()
        .endStroke()

    btnPrevWrapper.addChild(btnPrev);
    galleryPageWrapper.addChild(btnPrevWrapper);
}

function _renderBtnNext() {
    var enabled = currentPage < PAGE_SIZE;

    var btnNextWrapper = new createjs.Container();
    btnNextWrapper.x = LEFT_3;
    btnNextWrapper.y = TOP_3;
    btnNextWrapper.cursor = enabled ? 'pointer' : 'default';
    btnNextWrapper.addEventListener('click', function () {
        if (enabled) {
            currentPage++;
            renderGalleryPage();
        }
    });

    var btnNext = new createjs.Shape();
    btnNext.graphics.beginFill(enabled ? COLOR_BUTTON_ENABLED : COLOR_BUTTON_DISABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
        .setStrokeStyle(4, "round", "round")
        .beginStroke(enabled ? COLOR_BUTTON_ENABLED_CONTENT : COLOR_BUTTON_DISABLED_CONTENT)
        .moveTo(-6, -12)
        .lineTo(12, 0)
        .lineTo(-6, 12)
        .closePath()
        .endStroke();
    btnNextWrapper.addChild(btnNext);
    galleryPageWrapper.addChild(btnNextWrapper);
}

function _renderBtnHome() {
    var btnHomeWrapper = new createjs.Container();
    btnHomeWrapper.x = LEFT_2;
    btnHomeWrapper.y = TOP_3;
    btnHomeWrapper.cursor = 'pointer';
    btnHomeWrapper.addEventListener('click', function () {
        stage.removeChild(galleryPageWrapper);
        // reset to page 1
        currentPage = 1;
        renderMenu();
    });

    var btnHome = new createjs.Shape();
    btnHome.graphics.beginFill(COLOR_BUTTON_ENABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
        .endFill()
        .setStrokeStyle(4, "round", "round")
        .beginStroke(COLOR_BUTTON_ENABLED_CONTENT)
        .moveTo(-9, -3)
        .lineTo(-9, 9)
        .lineTo(9, 9)
        .lineTo(9, -3)
        .lineTo(0, -10.5)
        .closePath();

    btnHomeWrapper.addChild(btnHome);
    galleryPageWrapper.addChild(btnHomeWrapper);
}

// Timelines
function getFlowerTimeline(x, y) {
    var flowerTimeline = new TimelineMax();

    var container1 = new createjs.Container();
    container1.x = x;
    container1.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_GROUND);
    var segmentGroundCmd = segmentGround.graphics.arc(0, 0, CIRCLE_RADIUS, 90 * Math.PI / 180, 90 * Math.PI / 180).command;

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SKY);
    var segmentSkyCmd = segmentSky.graphics.arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180).command;

    var flowerWrapper = new createjs.Container();
    flowerWrapper.y = -5;

    var flowerStem = new createjs.Shape();
    flowerStem.graphics.beginFill('green');
    var flowerStemCmd = flowerStem.graphics.rect(-2, 30, 4, 0).command;
    flowerWrapper.addChild(flowerStem);

    var flowerLeaves = new createjs.Shape();
    flowerLeaves.graphics.beginFill('green');
    var flowerLeavesCmd = flowerLeaves.graphics
        .drawEllipse(0, 18, 0, 6)
        .command;
    var flowerLeavesCmd2 = flowerLeaves.graphics
        .drawEllipse(0, 17, 0, 6)
        .command;
    flowerWrapper.addChild(flowerLeaves);

    var flower = new createjs.Shape();
    flower.graphics.beginFill('yellow');
    var flowerCmd = flower.graphics
        .drawCircle(0, 0, 0)
        .command;
    flowerWrapper.addChild(flower);

    var flowerEyes = new createjs.Shape();
    flowerEyes.graphics
        .beginFill('black')
        .drawCircle(-4, 0, 2)
        .endFill().beginFill('black')
        .drawCircle(4, 0, 2);
    flowerWrapper.addChild(flowerEyes);

    var petalColor = 'hotpink';
    var petalRadius = 6;
    var petalDuration = .15;

    var petal1 = new createjs.Shape();
    petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal1, 1); // add at index 1 as flowerStem should be at index 0

    var petal2 = new createjs.Shape();
    petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal2, 1);

    var petal3 = new createjs.Shape();
    petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal3, 1);

    var petal4 = new createjs.Shape();
    petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal4, 1);

    var petal5 = new createjs.Shape();
    petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal5, 1);

    flowerTimeline
        .add('initial')
        .set(segmentGroundCmd, {startAngle: 90 * Math.PI / 180, endAngle: 90 * Math.PI / 180}, 'initial')
        .set(segmentSky, {alpha: 0}, 'initial')
        .set(segmentSkyCmd, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180}, 'initial')
        .set(flowerStemCmd, {h: 0}, 'initial')
        .set(flowerCmd, {radius: 0}, 'initial')
        .set(flowerLeavesCmd, {w: 0}, 'initial')
        .set(flowerLeavesCmd2, {w: 0}, 'initial')
        .set(flowerEyes, {alpha: 0}, 'initial')
        .set(petal1, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal2, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal3, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal4, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal5, {alpha: 0, x: 0, y: 0}, 'initial')
        .to(segmentGroundCmd, .4, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180, ease: Power2.easeIn })
        .add("segmentGroundComplete")
        .add("flowerStemCmdComplete", "+=0.3")
        .add("flowerCmdComplete", "+=0.5")
        .set(segmentSky, {alpha: 1})
        .to(segmentSkyCmd, .55, {startAngle: -90 * Math.PI / 180, endAngle: 270 * Math.PI / 180, ease: Power2.easeOut }, "segmentGroundComplete")
        .to(flowerStemCmd, .3, { h: -30 }, "segmentGroundComplete")
        .to(flowerCmd, .2, {
            radius: 8,
            ease: Back.easeOut.config(2)
        }, "flowerStemCmdComplete")
        .to(flowerLeavesCmd, .2, {
            w: -10,
            ease: Back.easeOut.config(2)
        }, "flowerStemCmdComplete")
        .to(flowerLeavesCmd2, .2, {
            w: 10,
            ease: Back.easeOut.config(2)
        }, "flowerStemCmdComplete")
        .set([flowerEyes, petal1, petal2, petal3, petal4, petal5], {alpha: 1}, 'flowerCmdComplete')
        .to(petal1, petalDuration, {x: 0, y: -11, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal2, petalDuration, {x: 8, y: -4, delay: .5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal3, petalDuration, {x: 6, y: 7, delay: 1.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal4, petalDuration, {x: -6, y: 7, delay: 2.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal5, petalDuration, {x: -8, y: -4, delay: 3.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete');

    container1.addChild(segmentSky);
    container1.addChild(segmentGround);
    container1.addChild(flowerWrapper);

    return [flowerTimeline, container1];
}

function getTreeTimeline(x, y) {
    var treeTimeline = new TimelineMax();

    var container2 = new createjs.Container();
    container2.x = x;
    container2.y = y;

    var segmentGround2 = new createjs.Shape();
    segmentGround2.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    container2.addChild(segmentGround2);

    var segmentSky2 = new createjs.Shape();
    segmentSky2.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    container2.addChild(segmentSky2);

    var treeWrapper = new createjs.Container();
    container2.addChild(treeWrapper);

    var trunk = new createjs.Shape();
    trunk.graphics.beginFill('#F4A71C');
    var trunkCmd = trunk.graphics
        .moveTo(-8, 25)
        .lineTo(8, 25)
        .lineTo(0, 25)
        .command;
    treeWrapper.addChild(trunk);

    var trunk2 = new createjs.Shape();
    trunk2.graphics.beginFill('#F4A71C');
    var trunkCmd2 = trunk2.graphics
        .rect(-3, 22, 6, 0)
        .command;
    treeWrapper.addChild(trunk2);

    var tree = new createjs.Shape();
    tree.graphics.beginFill('#10CA23');
    var treeCmd = tree.graphics
        .drawEllipse(0, 0, 0, 0).command;

    treeWrapper.addChildAt(tree, 0);

    var fruitColor = '#FF6969';

    var fruit1 = new createjs.Shape();
    fruit1.graphics.beginFill(fruitColor);
    var fruitCmd1 = fruit1.graphics
        .drawCircle(-10, 7, 0)
        .command;
    treeWrapper.addChild(fruit1);

    var fruit2 = new createjs.Shape();
    fruit2.graphics.beginFill(fruitColor);
    var fruitCmd2 = fruit2.graphics
        .drawCircle(-3, 1, 0)
        .command;
    treeWrapper.addChild(fruit2);

    var fruit3 = new createjs.Shape();
    fruit3.graphics.beginFill(fruitColor);
    var fruitCmd3 = fruit3.graphics
        .drawCircle(3, 8, 0)
        .command;
    treeWrapper.addChild(fruit3);

    var fruit4 = new createjs.Shape();
    fruit4.graphics.beginFill(fruitColor);
    var fruitCmd4 = fruit4.graphics
        .drawCircle(8, 1, 0)
        .command;
    treeWrapper.addChild(fruit4);

    var fruit5 = new createjs.Shape();
    fruit5.graphics.beginFill(fruitColor);
    var fruitCmd5 = fruit5.graphics
        .drawCircle(12, 6, 0)
        .command;
    treeWrapper.addChild(fruit5);

    treeTimeline
        .to(trunkCmd, .2, {y: 20, ease: Power2.easeIn})
        .to(trunkCmd2, .2, {h: -8, ease: Power2.easeOut})
        .to(treeCmd, .5, {
            x: -20,
            y: -30,
            w: 40,
            h: 46,
            ease: Back.easeOut.config(2)
        })
        .to(fruitCmd1, .2, {
            radius: 2,
            ease: Back.easeOut.config(2)
        })
        .to(fruitCmd2, .2, {
            radius: 2,
            ease: Back.easeOut.config(2)
        })
        .to(fruitCmd3, .2, {
            radius: 2,
            ease: Back.easeOut.config(2)
        })
        .to(fruitCmd4, .2, {
            radius: 2,
            ease: Back.easeOut.config(2)
        })
        .to(fruitCmd5, .2, {
            radius: 2,
            ease: Back.easeOut.config(2)
        });

    return [treeTimeline, container2];
}

function getSpringTimeline(x, y) {
    var springTimeline = new TimelineMax();

    var springContainer = new createjs.Container();
    springContainer.x = x;
    springContainer.y = y;

    var groundFill = '#59AE6B';
    var skyFill = '#AEE7FB';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    springContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    springContainer.addChild(segmentSky);


    return [springTimeline, springContainer];
}

function getSummerTimeline(x, y) {
    var summerTimeline = new TimelineMax();

    var summerContainer = new createjs.Container();
    summerContainer.x = x;
    summerContainer.y = y;

    var groundFill = '#FFFFB7';
    var skyFill = '#C6FFEA';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    summerContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    summerContainer.addChild(segmentSky);

    return [summerTimeline, summerContainer];
}

function getAutumnTimeline(x, y) {
    var autumnTimeline = new TimelineMax();

    var autumnContainer = new createjs.Container();
    autumnContainer.x = x;
    autumnContainer.y = y;

    var groundFill = '#EB6907';
    var skyFill = '#FAA105';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    autumnContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    autumnContainer.addChild(segmentSky);

    return [autumnTimeline, autumnContainer];
}

function getWinterTimeline(x, y) {
    var snowTreeTimeline = new TimelineMax();
    snowTreeTimeline.add('snow');

    var snowTreeContainer = new createjs.Container();
    snowTreeContainer.x = x;
    snowTreeContainer.y = y;

    var groundFill = '#E1F0EB';
    var skyFill = '#322F40';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    snowTreeContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    snowTreeContainer.addChild(segmentSky);

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
        var chance = Math.random();
        var _x = 0;
        if (chance <= 0.45) {
            _x = _randomInteger(-25, -10);
        }
        else if (chance <= 0.9) {
            _x = _randomInteger(10, 25);
        }
        else {
            _x = _randomInteger(-9, 9);
        }

        createjs.Tween
            .get(snow, {override: true})
            .to({alpha: 0}, 100)
            .wait(_randomInteger(0, 2000))
            .to({alpha: _random(0.5, 0.9), x: _x, y: _randomInteger(-55, -50)}, 0)
            .to({y: 24}, _randomInteger(2500, 3000), createjs.Ease.linear)
            .call(function () {
                tweenSnow(snow);
            });

//        function randomX() {
//            var _random = Math.random();
//            if (_random <= 0.45) {
//                return _randomInteger(-25, -10);
//            }
//            else if (_random <= 0.9) {
//                return _randomInteger(10, 25);
//            }
//            else {
//                return _randomInteger(-9, 9);
//            }
//        }

//        snowTreeTimeline
//            .delay(_random(0, 2))
//            .set(snow, {alpha: _random(0.5, 0.9), x: randomX(), y: _randomInteger(-55, -50)}, 'snow')
//            .to(snow, _random(2.5, 3), {y: 24, onComplete: function () {
//                tweenSnow(snow);
//            }});
    }

    snows.forEach(function (snow) {
        tweenSnow(snow);
    });

    snowTreeWrapper.addChild(snowWrapper);
    snowTreeContainer.addChild(snowTreeWrapper);

    return [snowTreeTimeline, snowTreeContainer];
}

function getCatTimeline(x, y) {
    var catTimeline = new TimelineMax();

    var catContainer = new createjs.Container();
    catContainer.x = x;
    catContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    catContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    catContainer.addChild(segmentSky);

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

    var wings = new createjs.Shape();
    wings.graphics
        .endFill().beginFill(COLOR_BEE_WING)
        .drawCircle(-42, -20, 2.5)
        .endFill().beginFill(COLOR_BEE_WING)
        .drawEllipse(-39.5, -24, 5, 6);
    wings.alpha = .8;
    beeWrapper.addChild(wings);

    var body = new createjs.Shape();
    body.graphics
        .endFill().beginFill(COLOR_BEE_BODY)
        .drawEllipse(-45, -20, 16, 12)
        .endFill().beginFill(COLOR_BEE_BODY_STRIPE)
        .arc(-37, -14, 5, 80 * Math.PI / 180, 100 * Math.PI / 180)
        .arc(-37, -14, 5, 260 * Math.PI / 180, 280 * Math.PI / 180)
        .endFill().beginFill(COLOR_BEE_BODY_STRIPE)
        .arc(-41, -14, 4, 80 * Math.PI / 180, 100 * Math.PI / 180)
        .arc(-41, -14, 4, 260 * Math.PI / 180, 280 * Math.PI / 180)
        .endFill().beginFill(COLOR_BEE_BODY_STRIPE)
        .moveTo(-45, -12.5)
        .lineTo(-45, -15.5)
        .lineTo(-49, -14);

    beeWrapper.addChild(body);

    var eye = new createjs.Shape();
    eye.graphics
        .beginFill('black')
        .drawCircle(-33, -16, 1);
    beeWrapper.addChild(eye);

    catContainer.addChild(catWrapper);
    catContainer.addChild(beeWrapper);

    var beeDuration = .3;
    catTimeline
        .to(wings, beeDuration, {alpha: .8, y: "+=1"}, 0)
        .to(wings, beeDuration, {alpha: .5, y: "-=1"}, beeDuration)
        .to(wings, beeDuration, {alpha: .8, y: "+=1"}, 2 * beeDuration)
        .to(wings, beeDuration, {alpha: .5, y: "-=1"}, 3 * beeDuration)
        .to(wings, beeDuration, {alpha: .8, y: "+=1"}, 4 * beeDuration)
        .to(wings, beeDuration, {alpha: .5, y: "-=1"}, 5 * beeDuration)
        .to(beeWrapper, beeDuration * 6, {x: 70}, 0)
        .to(beeWrapper, beeDuration, {y: -5, ease: Sine.easeOut}, 0)
        .to(beeWrapper, beeDuration, {y: 0, ease: Sine.easeIn}, beeDuration)
        .to(beeWrapper, beeDuration, {y: 5, ease: Sine.easeOut}, 2 * beeDuration)
        .to(beeWrapper, beeDuration, {y: 0, ease: Sine.easeIn}, 3 * beeDuration)
        .to(beeWrapper, beeDuration, {y: -5, ease: Sine.easeOut}, 4 * beeDuration)
        .to(beeWrapper, beeDuration, {y: 0, ease: Sine.easeIn}, 5 * beeDuration)
        .to(catEyes, beeDuration * 6, {x: 7}, 0)
        .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 0)
        .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, beeDuration)
        .to(catEyes, beeDuration, {y: 1, ease: Sine.easeOut}, 2 * beeDuration)
        .to(catEyes, beeDuration, {y: 0, ease: Sine.easeOut}, 3 * beeDuration)
        .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 4 * beeDuration)
        .to(catEyes, beeDuration, {y: 0, ease: Sine.easeOut}, 5 * beeDuration)
    ;

    return [catTimeline, catContainer];
}

function getTurtleTimeline(x, y) {
    var turtleTimeline = new TimelineMax();

    var turtleContainer = new createjs.Container();
    turtleContainer.x = x;
    turtleContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    turtleContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    turtleContainer.addChild(segmentSky);

    var turtleWrapper = new createjs.Container();
    var turtle = new createjs.Shape();
    turtle.graphics.beginFill(COLOR_TURTLE_SHELL)
        .arc(0, 25, 15, 0, 180 * Math.PI / 180, true);
    turtleWrapper.addChild(turtle);

    var head = new createjs.Shape();
    head.graphics.beginFill(COLOR_TURTLE_BODY)
        .drawCircle(0, 21, 4.5);
    turtleWrapper.addChild(head);

    var eyes = new createjs.Shape();
    eyes.graphics
        .beginFill('black')
        .drawEllipse(-4, 20, 2, 2)
        .endFill().beginFill('black')
        .drawEllipse(2, 20, 2, 2);
    turtleWrapper.addChild(eyes);

    var turtleEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2});
    turtleEyesTimeline
        .to(eyes, .2, {scaleY: 0, y: 21})
        .to(eyes, .2, {scaleY: 1, y: 0});

    var hand1 = new createjs.Shape();
    hand1.graphics
        .beginFill(COLOR_TURTLE_BODY)
        .moveTo(15, 25)
        .lineTo(13, 18)
        .lineTo(22, 25);
    turtleWrapper.addChild(hand1);

    var hand2 = new createjs.Shape();
    hand2.graphics
        .beginFill(COLOR_TURTLE_BODY)
        .moveTo(-15, 25)
        .lineTo(-13, 18)
        .lineTo(-22, 25);
    turtleWrapper.addChild(hand2);

    var balloonWrapper = new createjs.Container();
    var balloon1 = new createjs.Shape();
    var balloon1StringCmd = balloon1.graphics
        .beginStroke(COLOR_BALLOON_STRING)
        .moveTo(-6, 24)
        .lineTo(-11, -11)
        .command;
    var balloon1Cmd = balloon1.graphics
        .endStroke()
        .endFill().beginFill(COLOR_BALLOON_1)
        .drawEllipse(-18, -20, 14, 18)
        .command;
    balloon1.rotation = -12;
    balloonWrapper.addChild(balloon1);

    var balloon2 = new createjs.Shape();
    var balloon2StringCmd = balloon2.graphics
        .setStrokeStyle(1)
        .beginStroke(COLOR_BALLOON_STRING)
        .moveTo(0, 24)
        .lineTo(0, -11)
        .command;
    var balloon2Cmd = balloon2.graphics
        .endStroke()
        .beginFill(COLOR_BALLOON_2)
        .drawEllipse(-7, -24, 14, 18)
        .command;
    balloon2.rotation = 0;
    balloonWrapper.addChild(balloon2);

    var balloon3 = new createjs.Shape();
    var balloon3StringCmd = balloon3.graphics
        .beginStroke(COLOR_BALLOON_STRING)
        .moveTo(6, 24)
        .lineTo(11, -11)
        .command;
    var balloon3Cmd = balloon3.graphics
        .endStroke()
        .endFill().beginFill(COLOR_BALLOON_3)
        .drawEllipse(4, -20, 14, 18)
        .command;
    balloon3.rotation = 12;
    balloonWrapper.addChild(balloon3);

    turtleWrapper.addChildAt(balloonWrapper, 0);
    turtleContainer.addChild(turtleWrapper);

    turtleTimeline
        .set(balloon1StringCmd, {x: -6, y: 24})
        .set(balloon2StringCmd, {y: 24})
        .set(balloon3StringCmd, {x: 6, y: 24})
        .set(balloon1Cmd, {x: -11, y: -1, w: 0, h: 0})
        .set(balloon2Cmd, {x: 0, y: -3, w: 0, h: 0})
        .set(balloon3Cmd, {x: 9, y: -1, w: 0, h: 0})
        .add('balloon')
        .to(balloon1StringCmd, .4, {x: -10, y: -4})
        .to(balloon2StringCmd, .4, {y: -11}, 'balloon+=0.2')
        .to(balloon3StringCmd, .4, {x: 10, y: -4}, 'balloon+=0.4')
        .to(balloon1Cmd, .4, {x: -18, y: -20, w: 14, h: 18}, 'balloon+=0.2')
        .to(balloon2Cmd, .4, {x: -7, y: -24, w: 14, h: 18}, 'balloon+=0.4')
        .to(balloon3Cmd, .4, {x: 4, y: -20, w: 14, h: 18}, 'balloon+=0.6')
    ;
    var flyTimeline = new TimelineMax();
    flyTimeline
        .add('hands')
        .to(hand1, .5, {rotation: "-=4", startAt: {rotation: "+=2"}, repeat: -1, yoyo: true}, 'hands')
        .to(hand2, .5, {rotation: "+=4", startAt: {rotation: "-=2"}, repeat: -1, yoyo: true}, 'hands')
    ;

    return [turtleTimeline, turtleContainer, turtleWrapper, balloonWrapper];
}

function getCloudTimeline(x, y) {
    var cloudTimeline = new TimelineMax();

    var cloudContainer = new createjs.Container();
    cloudContainer.x = x;
    cloudContainer.y = y;

    var sky = new createjs.Shape();
    sky.graphics.beginFill(COLOR_HIGH_SKY)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    cloudContainer.addChild(sky);

    var cloudWrapper = new createjs.Container();
    var cloud = new createjs.Shape();
    cloud.graphics
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
    cloudWrapper.addChild(cloud);

    var eyes = new createjs.Shape();
    eyes.graphics.beginFill('black');
    eyes.graphics.drawEllipse(-9, -6, 5, 8);
    eyes.graphics.endFill().beginFill('black');
    eyes.graphics.drawEllipse(4, -6, 5, 8);

    var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2});
    eyesTimeline
        .to(eyes, .2, {scaleY: 0, y: -2})
        .to(eyes, .2, {scaleY: 1, y: 0});
    cloudWrapper.addChild(eyes);

    cloudContainer.addChild(cloudWrapper);

    cloudWrapper.x += 6;
    var movingCloudTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
    movingCloudTimeline.to(cloudWrapper, 2, {x: "-=12", ease: Power2.easeInOut });

    cloudTimeline
        .add(movingCloudTimeline, 0)
        .add(eyesTimeline, 0);

    return [cloudTimeline, cloudContainer];
}

function getRoofTopTimeline(x, y) {
    var roofTopTimeline = new TimelineMax();

    var roofTopContainer = new createjs.Container();
    roofTopContainer.x = x;
    roofTopContainer.y = y;

    var sky = new createjs.Shape();
    sky.graphics.beginFill(COLOR_HIGH_SKY)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    roofTopContainer.addChild(sky);

    var roofTop = new createjs.Shape();
    roofTop.graphics.beginFill('pink')
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180)
        .endFill().beginFill('#fff')
        .rect(10, 8, 16, 17)
        .endFill().beginFill('pink')
        .rect(8, 5, 20, 5);
    roofTopContainer.addChild(roofTop);

    var smoke = new createjs.Shape();
    smoke.graphics.beginFill('white');
    var smokeCmd = smoke.graphics
        .drawEllipse(18, 5, 5, 0)
        .command;

    var smoke2 = new createjs.Shape();
    smoke2.graphics.beginFill('white');
    var smokeCmd2 = smoke.graphics
        .drawEllipse(18, 5, 5, 0)
        .command;

    var smoke3 = new createjs.Shape();
    smoke3.graphics.beginFill('white');
    var smokeCmd3 = smoke.graphics
        .drawEllipse(18, 5, 5, 0)
        .command;

    roofTopContainer.addChild(smoke);
    roofTopContainer.addChild(smoke2);
    roofTopContainer.addChild(smoke3);

    roofTopTimeline
        .to(smokeCmd, 4, {
            x: 13,
            y: -16,
            w: 18,
            h: 5,
            ease: Power1.easeIn,
            repeat: -1
        }, 0)
        .to(smokeCmd2, 4, {
            x: 13,
            y: -16,
            w: 18,
            h: 5,
            ease: Power1.easeIn,
            repeat: -1
        }, 1.3)
        .to(smokeCmd3, 4, {
            x: 13,
            y: -16,
            w: 18,
            h: 5,
            ease: Power1.easeIn,
            repeat: -1
        }, 2.6);
    return [roofTopTimeline, roofTopContainer];
}

function getSeaTimeline(x, y) {
    var seaTimeline = new TimelineMax();

    var seaContainer = new createjs.Container();
    seaContainer.x = x;
    seaContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_SEA_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    seaContainer.addChild(segmentGround);

    var segmentSea = new createjs.Shape();
    segmentSea.graphics.beginFill(COLOR_SEA)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    seaContainer.addChild(segmentSea);

    var grass = new createjs.Shape();
    grass.graphics.beginFill('greenyellow');
    grass.graphics
        .drawEllipse(-20, -12, 10, 4)
        .drawEllipse(-20, -2, 10, 4)
        .drawEllipse(-20, 8, 10, 4)
        .drawEllipse(-20, 18, 10, 4)
        .drawEllipse(-8, -12, 10, 4)
        .drawEllipse(-8, -2, 10, 4)
        .drawEllipse(-8, 8, 10, 4)
        .drawEllipse(-8, 18, 10, 4)
        .endFill().beginFill('greenyellow')
        .drawEllipse(-10, -17, 3, 42);
    ;
    seaContainer.addChild(grass);

    var grass2 = new createjs.Shape();
    grass2.graphics.beginFill('green');
    grass2.graphics
        .drawEllipse(-4, -14, 10, 5)
        .drawEllipse(-4, -4, 10, 5)
        .drawEllipse(-4, 4, 10, 5)
        .drawEllipse(-4, 14, 10, 5)
        .drawEllipse(8, -14, 10, 5)
        .drawEllipse(8, -4, 10, 5)
        .drawEllipse(8, 4, 10, 5)
        .drawEllipse(8, 14, 10, 5)
        .endFill().beginFill('green')
        .drawEllipse(6, -20, 3, 45);
    ;
    seaContainer.addChild(grass2);

    var bubble = new createjs.Shape();
    var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(-10, -19, 0)
        .command;
    seaContainer.addChild(bubble);

    var bubble2 = new createjs.Shape();
    var bubbleCmd2 = bubble2.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(-10, -19, 0)
        .command;
    seaContainer.addChild(bubble2);

    var bubble3 = new createjs.Shape();
    var bubbleCmd3 = bubble3.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(-10, -19, 0)
        .command;
    seaContainer.addChild(bubble3);

    var bubble4 = new createjs.Shape();
    var bubbleCmd4 = bubble4.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(7, -19, 0)
        .command;
    seaContainer.addChild(bubble4);

    var bubble5 = new createjs.Shape();
    var bubbleCmd5 = bubble5.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(7, -19, 0)
        .command;
    seaContainer.addChild(bubble5);

    var bubble6 = new createjs.Shape();
    var bubbleCmd6 = bubble6.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(7, -19, 0)
        .command;
    seaContainer.addChild(bubble6);

    seaTimeline
        .to(bubbleCmd, 4, {
            x: -5,
            y: -40,
            radius: 3,
            ease: Power1.easeIn,
            repeat: -1
        }, 0)
        .to(bubbleCmd2, 4, {
            x: -5,
            y: -40,
            radius: 3,
            ease: Power1.easeIn,
            repeat: -1
        }, 1.3)
        .to(bubbleCmd3, 4, {
            x: -5,
            y: -40,
            radius: 3,
            ease: Power1.easeIn,
            repeat: -1
        }, 2.6)
        .to(bubbleCmd4, 4, {
            x: 15,
            y: -40,
            radius: 3,
            ease: Power1.easeIn,
            repeat: -1
        }, 0.5)
        .to(bubbleCmd5, 4, {
            x: 15,
            y: -40,
            radius: 3,
            ease: Power1.easeIn,
            repeat: -1
        }, 1.8)
        .to(bubbleCmd6, 4, {
            x: 15,
            y: -40,
            radius: 3,
            ease: Power1.easeIn,
            repeat: -1
        }, 3.1)
    ;
    return [seaTimeline, seaContainer];
}

function getFishTimeline(x, y) {
    var fishTimeline = new TimelineMax();

    var fishContainer = new createjs.Container();
    fishContainer.x = x;
    fishContainer.y = y;

    var segmentSea = new createjs.Shape();
    segmentSea.graphics.beginFill(COLOR_SEA)
        .arc(0, 0, CIRCLE_RADIUS, -30 * Math.PI / 180, 210 * Math.PI / 180);
    fishContainer.addChild(segmentSea);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_HIGH_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 210 * Math.PI / 180, -30 * Math.PI / 180);
    fishContainer.addChild(segmentSky);

//    var wave = new createjs.Shape();
//    var waveSize = 4;
//    var waveTop = -25;
//    wave.graphics.beginFill(COLOR_HIGH_SKY)
//        .arc(-40, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-30, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-20, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-10, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(0, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(10, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(20, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(30, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(40, waveTop, waveSize, 0, 180 * Math.PI / 180)
//    ;
//    fishContainer.addChild(wave);

    var fishWrapper = new createjs.Container();
    var fish = new createjs.Shape();
    fish.graphics.beginFill(COLOR_FISH);
    fish.graphics.drawEllipse(-15, -8, 30, 16);
    fishWrapper.addChild(fish);

    var wing = new createjs.Shape();
    wing.graphics.beginFill(COLOR_FISH);
    wing.graphics.moveTo(-4, -7)
        .lineTo(6, -7);
    var wingCmd = wing.graphics
        .lineTo(8, -12)
        .command;
    fishWrapper.addChild(wing);

    var wing2 = new createjs.Shape();
    wing2.graphics.beginFill(COLOR_FISH);
    wing2.graphics.moveTo(-4, 7)
        .lineTo(6, 7);
    var wingCmd2 = wing2.graphics
        .lineTo(8, 12)
        .command;
    fishWrapper.addChild(wing2);

    var tail = new createjs.Shape();
    tail.graphics.beginFill(COLOR_FISH);
    tail.graphics.moveTo(11, 0);
    var tailCmd = tail.graphics
        .lineTo(22, -8)
        .command;
    tail.graphics.lineTo(19, 0);
    var tailCmd2 = tail.graphics
        .lineTo(22, 8)
        .command;
    tail.graphics.closePath();
    fishWrapper.addChild(tail);

    var eye = new createjs.Shape();
    eye.graphics.beginFill('black');
    eye.graphics.drawCircle(-8, -2, 1.5);
    fishWrapper.addChild(eye);

    var bubble = new createjs.Shape();
    var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
        .beginStroke('white')
        .drawCircle(-12, -8, 0)
        .command;
    fishContainer.addChild(bubble);

    fishContainer.addChild(fishWrapper);

    var bubbleTimeline = new TimelineMax({repeat: -1, repeatDelay: 1.2});
    bubbleTimeline.to(bubbleCmd, 2, {
        x: -10,
        y: -24,
        radius: 1,
        ease: Power1.easeIn,
        onStart: function () {
            bubble.alpha = 1
        },
        onComplete: function (e) {
            bubble.alpha = 0;
        }
    })

    fishTimeline
        .add('fish')
        .to(wingCmd, 1, {x: 9, y: -9, repeat: -1, yoyo: true}, 'fish')
        .to(wingCmd2, 1, {x: 9, y: 9, repeat: -1, yoyo: true}, 'fish')
        .to(tailCmd, 1, {y: -6, repeat: -1, yoyo: true}, 'fish')
        .to(tailCmd2, 1, {y: 6, repeat: -1, yoyo: true}, 'fish');

    return [fishTimeline, fishContainer];
}

function getCactusTimeline(x, y) {
    var cactusTimeline = new TimelineMax();

    var cactusContainer = new createjs.Container();
    cactusContainer.x = x;
    cactusContainer.y = y;

    var segmentWrapper = new createjs.Container();

    var segmentDesert = new createjs.Shape();
    segmentDesert.graphics.beginFill(COLOR_DESERT);
    var segmentDesertCmd = segmentDesert.graphics.arc(0, 0, CIRCLE_RADIUS, 90 * Math.PI / 180, 90 * Math.PI / 180).command;

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_DESERT_SKY);
    var segmentSkyCmd = segmentSky.graphics.arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180).command;

    segmentWrapper.addChild(segmentSky);
    segmentWrapper.addChild(segmentDesert);

    var cactusWrapper = new createjs.Container();

    var COLOR_CACTUS = '#1D8232';
    var COLOR_CACTUS_STRIPE = 'greenyellow';

    var cactus = new createjs.Shape();
    cactus.graphics.beginFill(COLOR_CACTUS);
    var cactusCmd1 = cactus.graphics.rect(-15, 25, 30, 0).command;
    cactus.graphics.endFill().beginFill(COLOR_CACTUS);
    var cactusCmd2 = cactus.graphics.arc(0, -10, 15, 0 * Math.PI / 180, 0 * Math.PI / 180).command;
    cactusWrapper.addChild(cactus);

    var leftHand = new createjs.Shape();
    leftHand.graphics.setStrokeStyle(10, 'round', 'round')
        .beginStroke(COLOR_CACTUS)
        .moveTo(-15, 10);
    var leftHandCmd = leftHand.graphics.arcTo(-22, 10, -22, -20, 5).command;
    var leftHandCmd2 = leftHand.graphics.lineTo(-15, 10).command;
    cactusWrapper.addChild(leftHand);

    var rightHand = new createjs.Shape();
    rightHand.graphics
        .setStrokeStyle(10, 'round', 'round')
        .beginStroke(COLOR_CACTUS)
        .moveTo(15, 10);
    var rightHandCmd = rightHand.graphics.arcTo(22, 10, 22, 20, 5).command;
    var rightHandCmd2 = rightHand.graphics.lineTo(15, 10).command;
    cactusWrapper.addChild(rightHand);

    var stripe = new createjs.Shape();
    stripe.graphics.setStrokeStyle(1, 'round', 'round')
        .beginStroke(COLOR_CACTUS_STRIPE);
    stripe.graphics.moveTo(0, 25);
    var stripeCmd = stripe.graphics.lineTo(0, 25).command;

    stripe.graphics.endStroke()
        .beginStroke(COLOR_CACTUS_STRIPE)
        .moveTo(-8, 25);
    var stripeCmd2 = stripe.graphics.lineTo(-8, 25).command;

    stripe.graphics.endStroke()
        .beginStroke(COLOR_CACTUS_STRIPE)
        .moveTo(8, 25);
    var stripeCmd3 = stripe.graphics.lineTo(8, 25).command;

    cactusWrapper.addChild(stripe);
    var leftStripe = new createjs.Shape();
    leftStripe.graphics
        .setStrokeStyle(1, 'round', 'round')
        .beginStroke(COLOR_CACTUS_STRIPE)
        .moveTo(-15, 10);
    var leftStripeCmd = leftStripe.graphics.arcTo(-22, 10, -22, -20, 5).command;
    var leftStripeCmd2 = leftStripe.graphics.lineTo(-15, 10).command;
    cactusWrapper.addChild(leftStripe);

    var rightStripe = new createjs.Shape();
    rightStripe.graphics
        .setStrokeStyle(1, 'round', 'round')
        .beginStroke(COLOR_CACTUS_STRIPE)
        .moveTo(15, 10);
    var rightStripeCmd = rightStripe.graphics.arcTo(22, 10, 22, 20, 5).command;
    var rightStripeCmd2 = rightStripe.graphics.lineTo(15, 10).command;
    cactusWrapper.addChild(rightStripe);

    var eyes = new createjs.Shape();
    eyes.graphics.beginFill('black');
    eyes.graphics.drawEllipse(-9, -9, 5, 8);
    eyes.graphics.endFill().beginFill('black');
    eyes.graphics.drawEllipse(4, -9, 5, 8);

    var cactusEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2});
    cactusEyesTimeline
        .to(eyes, .2, {scaleY: 0, y: -5})
        .to(eyes, .2, {scaleY: 1, y: 0});

    cactusWrapper.addChild(eyes);

    var flowerWrapper = new createjs.Container();
    flowerWrapper.x = 12;
    flowerWrapper.y = -19;
    flowerWrapper.scaleX = 0;
    flowerWrapper.scaleY = 0;

    var flower = new createjs.Shape();
    flower.graphics
        .beginFill('yellow')
        .drawCircle(0, 0, 3)
    flowerWrapper.addChild(flower);

    var petalColor = 'hotpink';
    var petalRadius = 3;

    var petal1 = new createjs.Shape();
    petal1.graphics.beginFill(petalColor).drawCircle(0, -5.5, petalRadius);
    flowerWrapper.addChildAt(petal1, 0);

    var petal2 = new createjs.Shape();
    petal2.graphics.beginFill(petalColor).drawCircle(4, -2, petalRadius);
    flowerWrapper.addChildAt(petal2, 0);

    var petal3 = new createjs.Shape();
    petal3.graphics.beginFill(petalColor).drawCircle(3, 3.5, petalRadius);
    flowerWrapper.addChildAt(petal3, 0);

    var petal4 = new createjs.Shape();
    petal4.graphics.beginFill(petalColor).drawCircle(-3, 3.5, petalRadius);
    flowerWrapper.addChildAt(petal4, 0);

    var petal5 = new createjs.Shape();
    petal5.graphics.beginFill(petalColor).drawCircle(-4, -2, petalRadius);
    flowerWrapper.addChildAt(petal5, 0);

    segmentWrapper.alpha = flowerWrapper.alpha = cactusWrapper.alpha = 0;
    cactusContainer.addChild(segmentWrapper);
    cactusWrapper.addChild(flowerWrapper);
    cactusContainer.addChildAt(cactusWrapper, 1);

    cactusTimeline
        .add('initialCactus')
        .set([segmentWrapper, flowerWrapper, cactusWrapper], {alpha: 1})
        .set([segmentSky, segmentDesert, cactus, eyes, leftHand, rightHand, leftStripe, rightStripe], {alpha: 0})
        .set(stripeCmd, {x: 0, y: 25})
        .set(stripeCmd2, {x: -8, y: 25})
        .set(stripeCmd3, {x: 8, y: 25})
        .set([leftHandCmd, leftStripeCmd], {x1: -15, y1: 10, x2: -15, y2: 10, radius: 5})
        .set([rightHandCmd, rightStripeCmd], {x1: 15, y1: 10, x2: 15, y2: 10, radius: 5})
        .set(segmentDesertCmd, {startAngle: 90 * Math.PI / 180, endAngle: 90 * Math.PI / 180})
        .set(segmentSkyCmd, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180})
        .set(segmentDesert, {alpha: 1})
        .to(segmentDesertCmd, .4, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180, ease: Power2.easeIn })
        .set([segmentSky, cactus, leftHand, rightHand, leftStripe, rightStripe], {alpha: 1})
        .add('segmentDesertComplete', '+=0')
        .add('cactusCmd1Complete', '+=0.4')
        .add('handCmdComplete', '+=0.6')
        .add('stripeCmdComplete', '+=0.8')
        .add('eyeComplete', '+=1.4')
        .to(segmentSkyCmd, .55, {startAngle: -90 * Math.PI / 180, endAngle: 270 * Math.PI / 180, ease: Power2.easeOut }, 'segmentDesertComplete')
        .to(cactusCmd1, .4, {h: -35, ease: Power2.easeIn }, 'segmentDesertComplete')
        .to(stripeCmd, .5, {y: -20, ease: Power2.easeIn }, 'segmentDesertComplete')
        .to(stripeCmd2, .5, {y: -16, ease: Power2.easeIn }, 'segmentDesertComplete')
        .to(stripeCmd3, .5, {y: -16, ease: Power2.easeIn }, 'segmentDesertComplete')
        .to(cactusCmd2, .24, {startAngle: -90 * Math.PI / 180, endAngle: 270 * Math.PI / 180, startAt: {startAngle: 0, endAngle: 180 * Math.PI / 180}, ease: Power2.easeOut }, 'cactusCmd1Complete')
        .to([leftHandCmd, leftStripeCmd], .2, {x1: -22, y1: 10, x2: -22, y2: 10}, 'cactusCmd1Complete')
        .to([rightHandCmd, rightStripeCmd], .2, {x1: 22, y1: 10, x2: 22, y2: 10}, 'cactusCmd1Complete')
        .to([leftHandCmd2, leftStripeCmd2], .2, {x: -22, y: -5, startAt: {x: -22, y: 10}}, 'handCmdComplete')
        .to([rightHandCmd2, rightStripeCmd2], .2, {x: 22, y: -10, startAt: {x: 22, y: 10}}, 'handCmdComplete')
        .set(eyes, {alpha: 1}, 'stripeCmdComplete')
        .to(flowerWrapper, .6, { scaleX: 1, scaleY: 1, ease: Back.easeOut.config(4) }, 'eyeComplete')
    ;

    return [cactusTimeline, cactusContainer, flowerWrapper, cactusWrapper, cactusEyesTimeline];
}

function getDesertFaceTimeline(x, y) {
    var desertFaceTimeline = new TimelineMax();

    var desertFaceContainer = new createjs.Container();
    desertFaceContainer.x = x;
    desertFaceContainer.y = y;

    var desert = new createjs.Shape();
    desert.graphics
        .beginFill(COLOR_DESERT)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    desertFaceContainer.addChild(desert);

    var desertFace = new createjs.Container();
    var eyes = new createjs.Shape();
    var eyesCmd = eyes.graphics
        .beginFill('black')
        .drawEllipse(-14, 0, 6, 10)
        .command;
    var eyesCmd2 = eyes.graphics
        .endFill().beginFill('black')
        .drawEllipse(8, 0, 6, 10)
        .command;

    var desertFaceEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2});
    desertFaceEyesTimeline
        .to(eyes, .2, {scaleY: 0, y: 5})
        .to(eyes, .2, {scaleY: 1, y: 0});

    desertFace.addChild(eyes);

    var eyebrows = new createjs.Shape();
    var eyebrowsStartCmd = eyebrows.graphics
        .setStrokeStyle(2, 'round', 'round')
        .beginStroke('#000')
        .moveTo(-8, -18)
        .command;
    var eyebrowsArcCmd = eyebrows.graphics
        .arcTo(-18, -13, -28, -3, 20)
        .command;
    var eyebrowsEndCmd = eyebrows.graphics
        .lineTo(-28, -3)
        .command;

    var eyebrowsStartCmd2 = eyebrows.graphics
        .endStroke().beginStroke('#000')
        .moveTo(8, -18)
        .command;
    var eyebrowsArcCmd2 = eyebrows.graphics
        .arcTo(18, -13, 28, -3, 20)
        .command;
    var eyebrowsEndCmd2 = eyebrows.graphics
        .lineTo(28, -3)
        .command;
    desertFace.addChild(eyebrows);

    var pink = new createjs.Shape();
    pink.graphics.beginFill('#FF8097')
        .drawEllipse(-22, 12, 14, 5)
        .drawEllipse(8, 12, 14, 5);
    pink.alpha = 0;
    desertFace.addChild(pink);

    desertFaceContainer.addChild(desertFace);
    desertFaceTimeline
        .set([eyes, eyebrows], {alpha: 0})
        .to([eyes, eyebrows], .6, {alpha: 1})
        .set(eyebrowsArcCmd, {x1: -18, y1: -13, x2: -28, y2: -3, radius: 20})
        .set(eyebrowsArcCmd2, {x1: 18, y1: -13, x2: 28, y2: -3, radius: 20})
        .add('desertFace', '+=1.2')
        .add('happyFace', '+=5.7')
        .to(eyebrowsArcCmd, .8, {x1: -13, y1: -8, x2: -28, y2: -3, radius: 20}, 'desertFace')
        .to(eyebrowsArcCmd2, .8, {x1: 13, y1: -8, x2: 28, y2: -3, radius: 20}, 'desertFace')
        .to(eyebrowsStartCmd, .6, {x: -6, y: -4}, 'happyFace')
        .to(eyebrowsArcCmd, .6, {x1: -17, y1: -20, x2: -28, y2: 0, radius: 10}, 'happyFace')
        .to(eyebrowsEndCmd, .6, {x: -28, y: 0}, 'happyFace')
        .to(eyebrowsStartCmd2, .6, {x: 6, y: -4}, 'happyFace')
        .to(eyebrowsArcCmd2, .6, {x1: 17, y1: -20, x2: 28, y2: 0, radius: 10}, 'happyFace')
        .to(eyebrowsEndCmd2, .6, {x: 28, y: 0}, 'happyFace')
        .to([eyesCmd, eyesCmd2], .6, {x: '+=2', y: '+=2', h: '0', w: '0'}, 'happyFace')
        .to(pink, .6, {alpha: 1}, 'happyFace')
    ;

    return [desertFaceTimeline, desertFaceContainer];
}

function getJackalopeTimeline(x, y) {
    var jackalopeTimeline = new TimelineMax();

    var jackalopeContainer = new createjs.Container();
    jackalopeContainer.x = x;
    jackalopeContainer.y = y;

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_DARK_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    jackalopeContainer.addChild(segmentSky);

    var segmentIce = new createjs.Shape();
    segmentIce.graphics.beginFill(COLOR_ICE_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    jackalopeContainer.addChild(segmentIce);

    var jackalopeWrapper = new createjs.Container();
    var body = new createjs.Shape();
    body.graphics
        .beginFill(COLOR_JACKALOPE)
        .arc(0, 25, 12.5, 180 * Math.PI / 180, 0 * Math.PI / 180);
    jackalopeWrapper.addChild(body);

    var faceWrapper = new createjs.Container();

    var face = new createjs.Shape();
    face.graphics
        .beginFill(COLOR_JACKALOPE)
        .drawEllipse(-7, 0, 14, 15);
    faceWrapper.addChild(face);

    var eyes = new createjs.Shape();
    eyes.graphics
        .beginFill('black')
        .drawCircle(-3, 7, 1.5)
        .drawCircle(3, 7, 1.5);
    faceWrapper.addChild(eyes);

    var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
    eyesTimeline
        .to(eyes, .2, {scaleY: 0, y: 7})
        .to(eyes, .2, {scaleY: 1, y: 0});

    var ear = new createjs.Shape();
    ear.graphics
        .beginFill(COLOR_JACKALOPE)
        .drawEllipse(4.5, -14, 4, 14);
    ear.rotation = 40;
    faceWrapper.addChild(ear);

    var ear2 = new createjs.Shape();
    ear2.graphics
        .beginFill(COLOR_JACKALOPE)
        .drawEllipse(-8.5, -14, 4, 14);
    ear2.rotation = -40;
    faceWrapper.addChild(ear2);

    var anthelopeHorns = new createjs.Shape();
    anthelopeHorns.graphics
        .setStrokeStyle(2, 'round', 'round')
        .beginStroke(COLOR_JACKALOPE_HORN)
        .moveTo(-3, 0)
        .arcTo(-9, -3, -4, -6, 4)
        .endStroke().beginStroke(COLOR_JACKALOPE_HORN)
        .moveTo(-5, -3)
        .arcTo(-17, -9, -9, -14, 6)
        .endStroke().beginStroke(COLOR_JACKALOPE_HORN)
        .moveTo(3, 0)
        .arcTo(9, -3, 4, -6, 4)
        .endStroke().beginStroke(COLOR_JACKALOPE_HORN)
        .moveTo(5, -3)
        .arcTo(17, -9, 9, -14, 6)
    ;
    faceWrapper.addChild(anthelopeHorns);

    faceWrapper.x = 5;
    jackalopeWrapper.addChild(faceWrapper);
    jackalopeContainer.addChild(jackalopeWrapper);

    var earTimeline = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 1});
    earTimeline
        .add('start')
        .to(ear, .5, {rotation: 50}, 'start')
        .to(ear2, .5, {rotation: -50}, 'start')
        .add('end')
        .to(ear, .5, {rotation: 40}, 'end')
        .to(ear2, .5, {rotation: -40}, 'end')

    return [jackalopeTimeline, jackalopeContainer];
}

function getSeaMonsterTimeline(x, y) {
    var seaMonsterTimeline = new TimelineMax();

    var seaMonsterContainer = new createjs.Container();
    seaMonsterContainer.x = x;
    seaMonsterContainer.y = y;

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_DARK_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    seaMonsterContainer.addChild(segmentSky);

    var segmentSea = new createjs.Shape();
    segmentSea.graphics.beginFill(COLOR_DARK_SEA)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    seaMonsterContainer.addChild(segmentSea);

    var seaMonster = new createjs.Shape();
    var seaMonsterCmd = seaMonster.graphics
        .beginFill(COLOR_SEA_MONSTER)
        .arc(-10, 45, 20, 269 * Math.PI / 180, -90 * Math.PI / 180)
        .command;

    var seaMonsterCmd2 = seaMonster.graphics
        .endFill().beginFill(COLOR_SEA_MONSTER)
        .rect(10, 25, 8, -40)
        .command;

    var seaMonsterCmd3 = seaMonster.graphics
        .endFill().beginFill(COLOR_SEA_MONSTER)
        .drawEllipse(10, -22, 20, 12)
        .command;

    var eye = new createjs.Shape();
    var eyeCmd = eye.graphics
        .beginFill('black')
        .drawEllipse(21, -19, 4, 4)
        .command;

    seaMonsterContainer.addChildAt(seaMonster, 1);
    seaMonsterContainer.addChild(eye);

    seaMonsterTimeline
        .set(seaMonsterCmd, {startAngle: 269 * Math.PI / 180, endAngle: -90 * Math.PI / 180})
        .add('head')
        .add('seaMonster', '+=0.5')
        .to(seaMonsterCmd2, 1, {h: -40, startAt: {h: 0}}, 'head')
        .to(seaMonsterCmd3, 1, {y: -22, startAt: {y: 18}}, 'head')
        .to(eyeCmd, 1, {y: -19, startAt: {y: 21}}, 'head')
        .to(seaMonsterCmd, .5, {startAngle: 180 * Math.PI / 180, endAngle: 0 * Math.PI / 180, ease: Sine.easeOut}, 'seaMonster')
        .to(seaMonsterCmd, .5, {y: 25, startAt: {y: 50}}, 'seaMonster')
    ;

    return [seaMonsterTimeline, seaMonsterContainer];
}

function getSharkTimeline(x, y) {
    var sharkTimeline = new TimelineMax();

    var sharkContainer = new createjs.Container();
    sharkContainer.x = x;
    sharkContainer.y = y;

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_DARK_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    sharkContainer.addChild(segmentSky);

    var segmentSea = new createjs.Shape();
    segmentSea.graphics.beginFill(COLOR_DARK_SEA)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    sharkContainer.addChild(segmentSea);

    var shark = new createjs.Shape();
    shark.graphics.beginFill(COLOR_SHARK)
        .moveTo(-25, 25)
        .arcTo(-12.5, 5, 0, 2, 40)
        .arcTo(2, 12, 8, 25, 30)
        .lineTo(8, 25)
    ;
    sharkContainer.addChild(shark);

    sharkTimeline
        .to(shark, 2, {x: -19, startAt: {x: 36}, repeat: -1, yoyo: true});
    return [sharkTimeline, sharkContainer];
}

// Containers
function getSeaWaveContainer(x, y) {
    var seaWaveContainer = new createjs.Container();
    seaWaveContainer.x = x;
    seaWaveContainer.y = y;

    var segmentSea = new createjs.Shape();
    segmentSea.graphics.beginFill(COLOR_SEA)
        .arc(0, 0, CIRCLE_RADIUS, -30 * Math.PI / 180, 210 * Math.PI / 180);
    seaWaveContainer.addChild(segmentSea);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_HIGH_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 210 * Math.PI / 180, -30 * Math.PI / 180);
    seaWaveContainer.addChild(segmentSky);

//    var wave = new createjs.Shape();
//    var waveSize = 4;
//    wave.graphics.beginFill(COLOR_HIGH_SKY)
//        .arc(-40, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-30, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-20, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-10, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(0, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(10, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(20, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(30, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(40, -25, waveSize, 0, 180 * Math.PI / 180)
//    ;
//    seaWaveContainer.addChild(wave);

    return seaWaveContainer;
}

function getDesertGroundContainer(x, y) {
    var desertGroundContainer = new createjs.Container();
    desertGroundContainer.x = x;
    desertGroundContainer.y = y;

    var segmentDesert = new createjs.Shape();
    segmentDesert.graphics
        .beginFill(COLOR_DESERT)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics
        .beginFill(COLOR_DESERT_SKY)
        .arc(0, 0, CIRCLE_RADIUS, -90 * Math.PI / 180, 270 * Math.PI / 180);

    desertGroundContainer.addChild(segmentSky);
    desertGroundContainer.addChild(segmentDesert);

    return desertGroundContainer;
}

function getDesertContainer(x, y) {
    var desertContainer = new createjs.Container();
    desertContainer.x = x;
    desertContainer.y = y;

    var desert = new createjs.Shape();
    desert.graphics
        .beginFill(COLOR_DESERT)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    desertContainer.addChild(desert);

    return desertContainer;
}

function getHeartContainer(x, y) {
    var heartContainer = new createjs.Container();
    heartContainer.x = x;
    heartContainer.y = y;

    var COLOR_HEART = '#ff6666';
    var heartSize = 10;
    var heart = new createjs.Shape();
    heart.graphics
        .beginFill(COLOR_HEART)
        .arc(0, -heartSize / 2, heartSize / 2, 0, 180 * Math.PI / 180, true)
        .arc(heartSize / 2, 0, heartSize / 2, 270 * Math.PI / 180, 90 * Math.PI / 180)
        .rect(-heartSize / 2, -heartSize / 2, heartSize, heartSize)
    ;
    heart.rotation = -45;
    heartContainer.addChild(heart);

    return heartContainer;
}

// Utilities
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function _random(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function _randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}