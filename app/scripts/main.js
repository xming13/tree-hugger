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

var COLOR_FLOWER_PETAL = 'hotpink';

var COLOR_SPRING_SKY = '#F0FFFF';
var COLOR_SPRING_GROUND = 'springgreen';
var COLOR_SPRING_FLOWER = 'pink';
var COLOR_SUMMER_SKY = '#C6FFEA';
var COLOR_SUMMER_GROUND = '#FFFFB7';
var COLOR_SUMMER_TRUNK = '#e68d45';
var COLOR_SUMMER_TRUNK_STRIPE = '#ffc299';
var COLOR_SUMMER_LEAF = '#2b8050';
var COLOR_SUMMER_COCONUT = 'lightgreen';
var COLOR_AUTUMN_SKY = '#fff04d';
var COLOR_AUTUMN_GROUND = '#FF8533';
var COLOR_AUTUMN_TRUNK = '#B30000';
var COLOR_AUTUMN_LEAF = 'red';
var COLOR_AUTUMN_LEAF_2 = '#FF4500';
var COLOR_WINTER_SKY = '#322F40';
var COLOR_WINTER_GROUND = '#E1F0EB';

var COLOR_BEE_BODY = 'yellow';
var COLOR_BEE_WING = '#ABCCB0';
var COLOR_BEE_BODY_STRIPE = 'black'

var COLOR_TURTLE_SHELL = '#00cc00';
var COLOR_TURTLE_BODY = '#FFDC00';
var COLOR_BALLOON_STRING = 'white';
var COLOR_BALLOON_1 = '#FF9999';
var COLOR_BALLOON_2 = '#9999FF';
var COLOR_BALLOON_3 = '#FFFF99';

var COLOR_FISH = '#FFE926';
var COLOR_CACTUS = '#1D8232';
var COLOR_CACTUS_STRIPE = 'greenyellow';
var COLOR_DESERT_FACE_TEAR = 'lightblue';
var COLOR_JACKALOPE = '#FFDB89';
var COLOR_JACKALOPE_HORN = '#996C4D';
var COLOR_YETI = '#fff';
var COLOR_SEA_MONSTER = 'darkgreen';
var COLOR_SHARK = '#CCCCCC';

var COLOR_SNAKE = '#F4A460';
var COLOR_KNIFE = 'grey';

// Stage
var stage;

// Popcorn
var pop;
var popCanPlay = false;

// Loading
var loadingWrapper;
var loadingTimeline;

// Menu
var menuWrapper;

// Animation
var animationWrapper;
var mainTimeline;

// Gallery Page
var galleryPageWrapper;
var galleryWrapper;
var galleryTimelines = [];
var COLOR_BUTTON_DISABLED = 'lightGrey';
var COLOR_BUTTON_ENABLED = '#E2E2FF';
var COLOR_BUTTON_DISABLED_CONTENT = 'darkGrey';
var COLOR_BUTTON_ENABLED_CONTENT = '#9797FF';
var PAGE_SIZE = 4;
var currentPage = 1;

// for debugging
var DEBUG = false;
var START_TIME = DEBUG ? 104 : 0;

function init() {
    stage = new createjs.Stage('canvas');
    stage.enableMouseOver(10);

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    // Defaults
    TweenLite.defaultEase = Power0.easeNone;

    var bg = new createjs.Shape();
    bg.graphics.beginFill('white')
        .rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    stage.addChild(bg);

    renderLoading();
    loadAudio();

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

    var requestMp3 = new XMLHttpRequest();
    requestMp3.open('GET', 'audio/Antsy_Pants_-_Tree_Hugger.mp3', true);
    requestMp3.responseType = 'blob';
    requestMp3.onload = function (e) {
        if (this.status == 200) {
            var myBlob = this.response;
            var audioSrc = URL.createObjectURL(myBlob);
            var audio = document.getElementById("audio");
            audio.src = audioSrc;
        }
        else {
            console.log('requestMp3 reached server but error is returned.');
        }
    }
    requestMp3.onerror = function () {
        console.log('requestMp3 onerror: ' + e.message);
    }

    requestMp3.send();

    var lyrics = [
        "[ti:Tree Hugger]",
        "[ar:Kumya Dawson]",
        "[al:JUNO OST]",
        "[00:06.36]Song: Tree Hugger",
        "[00:12.40]Artist: Kimya Dawson",
        "[00:18.00]",
        "[00:19.52]The flower said, \"I wish I was a tree.\"",
        "[00:21.64]The tree said, \"I wish I could be",
        "[00:24.00]A different kind of tree.\"",
        "[00:26.68]The cat wished that it was a bee,",
        "[00:29.02]The turtle wished that it could fly,",
        "[00:31.49]Really high into the sky,",
        "[00:33.82]Over rooftops and then dive",
        "[00:36.15]Deep into the sea.",
        "[00:37.24]",
        "[00:38.34]And in the sea there is a fish,",
        "[00:40.66]A fish that has a secret wish;",
        "[00:43.08]A wish to be a big cactus,",
        "[00:45.33]With a pink flower on it.",
        "[00:47.76]And in the sea there is a fish,",
        "[00:50.10]A fish that has a secret wish;",
        "[00:52.69]A wish to be a big cactus,",
        "[00:54.68]With a pink flower on it.",
        "[00:56.60]",
        "[00:56.95]And the flower",
        "[00:58.85]Would be its offering",
        "[01:01.51]Of love, to the desert.",
        "[01:06.20]And the desert,",
        "[01:08.81]So dry and lonely,",
        "[01:10.88]That the creatures all",
        "[01:12.57]Appreciate the effort.",
        "[01:14.50]",
        "[01:15.88]Et le jackalope a dit, <br>(And the Jackalope said,)",
        "[01:18.26]\"Je voudrais être un yeti, <br>(\"I'd like to be a yeti,)",
        "[01:20.51]Pour voler dans la nuit <br>(To flee in the night)",
        "[01:22.70]Et men aller loin dici.\" <br>(And go far from here.\")",
        "[01:25.11]Mais le yeti a dit, <br>(But the yeti said,)",
        "[01:27.51]\"Je voudrais être un monstre marin, <br>(\"I would like to be a sea monster,)",
        "[01:29.78]Pour pouvoir rentrer dans la mer, <br>(So I could go on the sea,)",
        "[01:32.16]De tous les requins.\" <br>(With all the sharks.\")",
        "[01:33.50]",
        "[01:34.00]And the rattlesnake said,",
        "[01:35.84]\"I wish I had hands so",
        "[01:37.22]I could hug you like a man.\"",
        "[01:39.68]And then the cactus said,",
        "[01:41.53]\"Don't you understand?",
        "[01:43.58]My skin is covered with sharp spikes,",
        "[01:45.91]That'll stab you like a thousand knives.",
        "[01:48.80]A hug would be nice,",
        "[01:50.07]But hug my flower with your eyes.\"",
        "[01:53.21]The flower said, \"I wish I was a tree.\"",
        "[01:55.79]The tree said, \"I wish I could be",
        "[01:58.58]A different kind of tree.\"",
        "[02:01.01]The cat wished that it was a bee,",
        "[02:03.42]The turtle wished that it could fly,",
        "[02:05.89]Really high into the sky,",
        "[02:08.39]Over rooftops and then dive",
        "[02:10.45]Deep into the sea.",
        "[02:12.18]",
        "[02:12.83]And in the sea there is a fish,",
        "[02:15.24]A fish that has a secret wish;",
        "[02:17.69]A wish to be a big cactus,",
        "[02:19.88]With a pink flower on it.",
        "[02:22.43]And in the sea there is a fish,",
        "[02:24.82]A fish that has a secret wish;",
        "[02:27.16]A wish to be a big cactus,",
        "[02:29.63]With a pink flower on it.",
        "[02:30.98]",
        "[02:31.62]And the flower",
        "[02:33.86]Would be its offering",
        "[02:36.01]Of love, to the desert.",
        "[02:40.88]And the desert,",
        "[02:43.17]So dry and lonely,",
        "[02:45.74]That the creatures all,",
        "[02:47.43]Appreciate the effort.",
        "[02:52.00]"];
    var lrcArr = parseLrc(lyrics);
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

    pop.on('canplayall', function () {
        popCanPlay = true;
        renderMenu();

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

    function parseRawLrc(rawLrc) {
        var rawLrcArray = rawLrc.split(/[\r\n]/);
        return parseLrc(rawLrcArray);
    }
    function parseLrc(rawLrcArray) {
        var lrcArr = [];

        var lrcAllRegex = /(\[[0-9.:\[\]]*\])+(.*)/;
        var timeRegex = /\[([0-9]+):([0-9.]+)\]/;

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
function renderLoading() {
    if (!loadingWrapper) {
        loadingWrapper = new createjs.Container();
    }
    if (loadingWrapper.parent != stage) {
        stage.addChild(loadingWrapper);
    }
    loadingWrapper.removeAllChildren();

    var loadingIconWrapper = new createjs.Container();
    loadingIconWrapper.x = LEFT_2;
    loadingIconWrapper.y = TOP_2;
    loadingWrapper.addChild(loadingIconWrapper);

    var loadingIcon = new createjs.Shape();
    loadingIcon.graphics.beginFill(COLOR_HIGH_SKY)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    loadingIconWrapper.addChild(loadingIcon);

    var flower = new createjs.Shape();
    flower.graphics.beginFill('yellow');
    var flowerCmd = flower.graphics
        .drawCircle(0, 0, 0)
        .command;
    loadingIconWrapper.addChild(flower);

    var petalColor = COLOR_FLOWER_PETAL;
    var petalRadius = 6;
    var petalDuration = .25;

    var petal1 = new createjs.Shape();
    petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    loadingIconWrapper.addChildAt(petal1, 1); // add at index 1 as flowerStem should be at index 0

    var petal2 = new createjs.Shape();
    petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    loadingIconWrapper.addChildAt(petal2, 1);

    var petal3 = new createjs.Shape();
    petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    loadingIconWrapper.addChildAt(petal3, 1);

    var petal4 = new createjs.Shape();
    petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    loadingIconWrapper.addChildAt(petal4, 1);

    var petal5 = new createjs.Shape();
    petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    loadingIconWrapper.addChildAt(petal5, 1);

    loadingTimeline = new TimelineMax({repeat: -1, repeatDelay: .3});
    loadingTimeline
        .set([petal1, petal2, petal3, petal4, petal5], {alpha: 0})
        .to(flowerCmd, .6, {
            radius: 6,
            ease: Back.easeOut.config(3)
        })
        .set([petal1, petal2, petal3, petal4, petal5], {alpha: 1})
        .add('flowerCmdComplete')
        .to(petal1, petalDuration, {x: 0, y: -11, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal2, petalDuration, {x: 8, y: -4, delay: .5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal3, petalDuration, {x: 6, y: 7, delay: 1.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal4, petalDuration, {x: -6, y: 7, delay: 2.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal5, petalDuration, {x: -8, y: -4, delay: 3.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete');
}

function renderMenu() {
    if (!menuWrapper) {
        menuWrapper = new createjs.Container();
    }
    if (menuWrapper.parent != stage) {
        stage.addChild(menuWrapper);
    }
    menuWrapper.removeAllChildren();

    stage.removeChild(loadingWrapper);
    loadingTimeline.remove();
    galleryTimelines.forEach(function (timeline) {
        timeline.remove();
    });

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

//        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
    });
    menuWrapper.addChild(btnFbWrapper);

    var btnBrowseWrapper = new createjs.Container();
    btnBrowseWrapper.x = LEFT_2;
    btnBrowseWrapper.y = TOP_3;
    btnBrowseWrapper.cursor = 'pointer';

    var btnBrowse = new createjs.Shape();
    btnBrowse.graphics.beginFill(COLOR_BUTTON_ENABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
        .endFill().beginFill(COLOR_BUTTON_ENABLED_CONTENT)
        .rect(-16, -2, 5, 5)
        .rect(-8.5, -2, 24.5, 5)
        .rect(-16, -12, 5, 5)
        .rect(-8.5, -12, 24.5, 5)
        .rect(-16, 8, 5, 5)
        .rect(-8.5, 8, 24.5, 5)
    ;

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
        var objs = getSummerTimeline(LEFT_2, TOP_1);
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
    if (animationWrapper.parent != stage) {
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
//    skyContainer.x = LEFT_2;
//    skyContainer.y = TOP_NEG1;
//    skyContainer.alpha = 0;
    var sky = new createjs.Shape();
    sky.graphics.beginFill('lightBlue')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    skyContainer.addChild(sky);

    var cloudObjs1 = getCloudTimeline(LEFT_1, TOP_0);
    var cloudContainer1 = cloudObjs1[1];
    var cloudObjs2 = getCloudTimeline(LEFT_3, TOP_NEG1);
    var cloudContainer2 = cloudObjs2[1];

    var turtleFloatTimeline = new TimelineMax();
    turtleFloatTimeline
        .to(turtleWrapper, .44, {y: "-=5", ease: Sine.easeOut})
        .to(turtleWrapper, .44, {y: "+=5", ease: Sine.easeIn})
        .to(turtleWrapper, .44, {y: "+=2.5", ease: Sine.easeOut})
        .to(turtleWrapper, .44, {y: "-=2.5", ease: Sine.easeIn})
        .to(turtleWrapper, .44, {y: "-=5", ease: Sine.easeOut})
        .to(turtleWrapper, .44, {y: "+=5", ease: Sine.easeIn})
        .to(turtleWrapper, .44, {y: "+=2.5", ease: Sine.easeOut})
        .to(turtleWrapper, .44, {y: "-=2.5", ease: Sine.easeIn})
        .to(turtleWrapper, .44, {y: "-=5", ease: Sine.easeOut})
        .to(turtleWrapper, .44, {y: "+=5", ease: Sine.easeIn});

    var transitionTimeline4 = new TimelineMax();
    transitionTimeline4
        .add('transition4')
        .set(turtleContainer, {x: LEFT_4, y: TOP_2})
        .set(turtleWrapper, {y: 0})
        .set(skyContainer, {alpha: 0, x: LEFT_2, y: TOP_NEG1}, 'transition4')
        .to(turtleContainer, 1, {y: TOP_4}, 'transition4')
        .to(turtleWrapper, 1, {y: -(TOP_4 - TOP_2)}, 'transition4')
        .add(turtleFloatTimeline, 'transition4+1')
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

    var desertGroundObj1 = getDesertGroundTimeline(LEFT_1, TOP_2);
    var desertGroundTimeline1 = desertGroundObj1[0];
    var desertGroundContainer1 = desertGroundObj1[1];

    var desertGroundObj2 = getDesertGroundTimeline(LEFT_3, TOP_2);
    var desertGroundTimeline2 = desertGroundObj2[0];
    var desertGroundContainer2 = desertGroundObj2[1];

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
        }, 'overlay')
        .to(overlay, .5, {alpha: .6, startAt: {alpha: 0}}, 'overlay')
        .to(cactusFlowerWrapper2, 1.2, {x: LEFT_2, y: TOP_2, scaleX: 3, scaleY: 3, ease: Power3.easeIn}, 'overlay')
        .add(new TimelineMax({delay: .6})
            .to(cactusFlowerWrapper2, .3, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .26, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .22, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .18, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .14, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .1, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .06, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
            .to(cactusFlowerWrapper2, .02, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2}))
        .add('overlayend', '+=3.5')
        .add('desert', '+=4')
        .to(hearts, 16, {y: "+=" + (CIRCLE_DIAMETER + CIRCLE_DIAMETER + CIRCLE_DIAMETER)})
        .to(hearts, 2, {alpha: 0}, '-=2')
        .to(overlay, .5, {alpha: 0}, 'overlayend')
        .to([desertGroundContainer1, desertGroundContainer2], .6, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)}, 'desert')
        .to([desertContainer1, desertContainer2, desertFaceContainer], .6, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)}, 'desert+=1')
        .add(desertFaceTimeline, 'desert+=2')
        .add(desertGroundTimeline1, 'desert+=7.3')
        .add(desertGroundTimeline2, 'desert+=7.3')
    ;

    var jackalopeObjs = getJackalopeTimeline(LEFT_4, TOP_2);
    var jackalopeContainer = jackalopeObjs[1];

    var transitionTimeline9 = new TimelineMax();
    transitionTimeline9
        .add('transition9')
        .to([desertGroundContainer1, desertGroundContainer2, cactusContainer2, desertContainer1, desertContainer2, desertFaceContainer],
        .5, {x: "-=" + ((CIRCLE_DIAMETER + SPACING) * 3), ease: Circ.easeOut}, 'transition9')
        .to(jackalopeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition9');

    var yetiObjs = getYetiTimeline(LEFT_4, TOP_2);
    var yetiContainer = yetiObjs[1];
    var yetiObjs2 = getYetiTimeline(LEFT_0, TOP_2);
    var yetiContainer2 = yetiObjs2[1];

    var transitionTimeline10 = new TimelineMax();
    transitionTimeline10
        .add('transition10')
        .to(jackalopeContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition10')
        .to(yetiContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition10');

    var transitionTimeline11 = new TimelineMax();
    transitionTimeline11
        .add('transition11')
        .to(yetiContainer, 3, {x: LEFT_4}, 'transition11')
        .to(yetiContainer2, 3, {x: LEFT_2}, '-=1.5');

    var seaMonsterObjs = getSeaMonsterTimeline(LEFT_4, TOP_2);
    var seaMonsterTimeline = seaMonsterObjs[0];
    var seaMonsterContainer = seaMonsterObjs[1];

    var seaMonsterObjs2 = getSeaMonsterTimeline(LEFT_0, TOP_2);
    var seaMonsterContainer2 = seaMonsterObjs2[1];

    var transitionTimeline12 = new TimelineMax();
    transitionTimeline12
        .add('transition12')
        .to(yetiContainer2, .5, {x: LEFT_0}, 'transition12')
        .to(seaMonsterContainer, .5, {x: LEFT_2}, 'transition12');

    var sharkObjs = getSharkTimeline(LEFT_3, TOP_2);
    var sharkContainer = sharkObjs[1];
    var sharkObjs2 = getSharkTimeline(LEFT_1, TOP_2);
    var sharkContainer2 = sharkObjs2[1];

    var transitionTimeline13 = new TimelineMax();
    transitionTimeline13
        .add('transition13')
        .set([sharkContainer, sharkContainer2], {scaleX: 0, scaleY: 0})
        .to(seaMonsterContainer, 1.2, {x: LEFT_4}, 'transition13')
        .to(seaMonsterContainer2, 1.2, {x: LEFT_2}, 'transition13+=0.6')
        .to(sharkContainer, .2, {scaleX: 1, scaleY: 1, ease: Circ.easeIn}, 'transition13+=.9')
        .to(sharkContainer2, .2, {scaleX: 1, scaleY: 1, ease: Circ.easeIn}, 'transition13+=1.5');

    var snakeObjs = getSnakeTimeline(LEFT_4, TOP_2);
    var snakeTimeline = snakeObjs[0];
    var snakeContainer = snakeObjs[1];

    var transitionTimeline14 = new TimelineMax();
    transitionTimeline14
        .add('transition14')
        .to(seaMonsterContainer2, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition14')
        .to([sharkContainer, sharkContainer2], .01, {alpha: 0}, 'transition14')
        .to(snakeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition14');

    var hugObjs = getHugTimeline(LEFT_2, TOP_1);
    var hugContainer = hugObjs[1];
    var hugEyesWrapper = hugObjs[2];
    var hugNobitaWrapper = hugObjs[3];
    var hugDeadEyesWrapper = hugObjs[4];
    hugContainer.scaleX = hugContainer.scaleY = 0;

    var transitionTimeline15 = new TimelineMax();
    transitionTimeline15
        .add('transition15')
        .set(hugContainer, {scaleX: 0, scaleY: 0})
        .to(hugContainer, .7, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)});

    var cactusObjs3 = getCactusTimeline(LEFT_4, TOP_2);
    var cactusContainer3 = cactusObjs3[1];
    var cactusFlowerWrapper3 = cactusObjs3[2];
    var cactusCactusWrapper3 = cactusObjs3[3];

    var questionObjs = getQuestionTimeline(LEFT_3, TOP_1);
    var questionTimeline = questionObjs[0];
    var questionContainer = questionObjs[1];
    questionContainer.scaleX = questionContainer.scaleY = 0;

    var transitionTimeline16 = new TimelineMax();
    transitionTimeline16
        .add('transition16')
        .to(snakeContainer, .5, {x: LEFT_1}, 'transition16')
        .to(hugContainer, .5, {x: LEFT_1}, 'transition16')
        .to(cactusContainer3, .5, {x: LEFT_3}, 'transition16')
        .to(questionContainer, .5, {scaleX: 1, scaleY: 1, ease: Power1.easeOut}, '+=1.2')

    var spikeObjs = getSpikeTimeline(LEFT_3, TOP_1);
    var spikeTimeline = spikeObjs[0];
    var spikeContainer = spikeObjs[1];
    var knifeSets = spikeObjs[2];
    var knifeSet1 = knifeSets[0];
    var knifeSet2 = knifeSets[1];
    var knifeSet3 = knifeSets[2];
    var knifeSet4 = knifeSets[3];
    var knifeSet5 = knifeSets[4];
    var knifeSet6 = knifeSets[5];
    var knifeSet7 = knifeSets[6];
    spikeContainer.scaleX = spikeContainer.scaleY = 0

    var transitionTimeline17 = new TimelineMax();
    transitionTimeline17
        .add('transition17')
        .to(spikeContainer, .5, {scaleX: 1, scaleY: 1, ease: Power1.easeOut})
        .set(questionContainer, {alpha: 0})
        .add(spikeTimeline, '+=0.1')
        .add('knife')
        .to(knifeSet1, 1, {x: '-=200'}, 'knife')
        .set(knifeSet1, {alpha: 0})
        .set(hugEyesWrapper, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .set(hugDeadEyesWrapper, {alpha: 1})
        .to(knifeSet2, 1 / 200 * 212, {x: '-=212'}, 'knife+=.2')
        .set(knifeSet2, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .to(knifeSet3, 1 / 200 * 224, {x: '-=224'}, 'knife+=.4')
        .set(knifeSet3, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .to(knifeSet4, 1 / 200 * 236, {x: '-=236'}, 'knife+=.6')
        .set(knifeSet4, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .to(knifeSet5, 1 / 200 * 248, {x: '-=248'}, 'knife+=.8')
        .set(knifeSet5, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .to(knifeSet6, 1 / 200 * 260, {x: '-=260'}, 'knife+=1')
        .set(knifeSet6, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .to(knifeSet7, 1 / 200 * 272, {x: '-=272'}, 'knife+=1.2')
        .set(knifeSet7, {alpha: 0})
        .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
        .to(spikeContainer, .5, {scaleX: 0, scaleY: 0, ease: Power1.easeOut})
    ;

    var flowerEyeContainer = new createjs.Container();
    var transitionTimeline18 = new TimelineMax();
    transitionTimeline18
        .add('transition18')
        .add(function () {
            cactusCactusWrapper3.removeChild(cactusFlowerWrapper3);
            cactusFlowerWrapper3.x += LEFT_3;
            cactusFlowerWrapper3.y += TOP_2;
            flowerEyeContainer.addChild(cactusFlowerWrapper3);

            hugNobitaWrapper.removeChild(hugEyesWrapper);
            hugEyesWrapper.x += LEFT_2 + hugNobitaWrapper.x;
            hugEyesWrapper.y += TOP_2 + hugNobitaWrapper.y;
            flowerEyeContainer.addChild(hugEyesWrapper);
        })
        .to(cactusFlowerWrapper3, 1.2, {x: LEFT_2, y: TOP_2, scaleX: 5, scaleY: 5, ease: Power3.easeIn})
        .set(hugEyesWrapper, {alpha: 0, scaleX: 3.5, scaleY: 3.5})
        .to(hugEyesWrapper, 1, {x: LEFT_2 + hugNobitaWrapper.x,
            y: TOP_2 + hugNobitaWrapper.y,
            alpha: 1,
            scaleX: 1.5,
            scaleY: 1.5,
            ease: Back.easeOut.config(1)}, '+=.4')
        .to([hugContainer, snakeContainer, spikeContainer, cactusContainer3, questionContainer, hugEyesWrapper, cactusFlowerWrapper3], .5, {
            x: '-=' + (3 * (CIRCLE_DIAMETER + SPACING)), ease: Circ.easeOut}, '+=1')

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
    animationWrapper.addChild(yetiContainer);
    animationWrapper.addChild(yetiContainer2);
    animationWrapper.addChild(seaMonsterContainer);
    animationWrapper.addChild(seaMonsterContainer2);
    animationWrapper.addChild(sharkContainer);
    animationWrapper.addChild(sharkContainer2);
    animationWrapper.addChild(snakeContainer);
    animationWrapper.addChild(questionContainer);
    animationWrapper.addChild(spikeContainer);
    animationWrapper.addChild(hugContainer);
    animationWrapper.addChild(cactusContainer3);
    animationWrapper.addChild(flowerEyeContainer);

    mainTimeline = new TimelineMax({
        paused: true,
//        autoRemoveChildren: true,
        onStart: function () {
//            var status = document.getElementById('status');
//            status.innerHTML += ' mainTimelineOnStart';
        }
    });

    function getFlowerToDesertTimeline(revert) {
        var flowerToDesertTimeline = new TimelineMax({
            autoRemoveChildren: true
        });

        flowerToDesertTimeline
            .add(function () {
                if (revert) {
                    transitionTimeline9.seek(0);
                    transitionTimeline8.seek(0);
                    transitionTimeline7.seek(0);

                    var cactusFlowerWrapper2 = overlayContainer.getChildAt(1);
                    if (cactusFlowerWrapper2) {
                        cactusCactusWrapper2.addChild(cactusFlowerWrapper2);
                        cactusFlowerWrapper2.x -= LEFT_2;
                        cactusFlowerWrapper2.y -= TOP_2;
                        overlayContainer.removeChild(cactusFlowerWrapper2);
                    }

                    var balloonWrapper = skyContainer.getChildAt(1);
                    if (balloonWrapper) {
                        turtleWrapper.addChildAt(balloonWrapper, 0);
                        skyContainer.removeChild(balloonWrapper);
                    }

                    transitionTimeline6.seek(0);
                    transitionTimeline5.seek(0);
                    transitionTimeline4.seek(0);
                    turtleTimeline.seek(0);
                    transitionTimeline3.seek(0);
                    catTimeline.seek(0);
                    transitionTimeline2.seek(0);
                    transitionSeasonTimeline.seek(0);
                    treeTimeline.seek(0);
                    transitionTimeline.seek(0);
                    flowerTimeline.seek(0);
                }
            })
            .add('flower')
            .add(flowerTimeline)
            .add(transitionTimeline, '+=0.4')
            .add('tree', '+=0')
            .add(treeTimeline, 'tree')
            .add(transitionSeasonTimeline, 'tree')
            .add(transitionTimeline2, '+=0')
            .add(catTimeline, '-=0.3')
            .add(transitionTimeline3, '+=0')
            .add(turtleTimeline, '+=0.4')
            .add('tran5', '+=2.5')
            .add(transitionTimeline4, '+=0.1')
            .add(transitionTimeline5, 'tran5')
            .add(transitionTimeline6, '+=0')
            .add('fish', '+=0')
            .add('desert', '+=18.1')
            .add('desertend', 'desert+=19.58')
            .add(transitionTimeline7, 'fish')
            .add(transitionTimeline8, 'desert')
            .add(transitionTimeline9, 'desertend+=0.4')
        ;

        return flowerToDesertTimeline;
    }

    var iceWorldTimeline = new TimelineMax({
        autoRemoveChildren: true
    });
    iceWorldTimeline
        .add('iceWorld')
        .add(transitionTimeline10, '+=1.5')
        .add(transitionTimeline11, '+=2')
        .add(transitionTimeline12, '+=2')
        .add(seaMonsterTimeline)
        .add(transitionTimeline13, '+=1.5')
        .add(transitionTimeline14, '+=2.2')
        .add(snakeTimeline)
        .add(transitionTimeline15, '+=0.2')
        .add(transitionTimeline16, '+=1')
        .add(questionTimeline)
        .add(transitionTimeline17, '+=1.8')
        .add(transitionTimeline18, '+=.24')
        .add(function () {
            getFlowerToDesertTimeline(true).play(0);
        })
    ;

    var flowerToDesertTimeline = getFlowerToDesertTimeline();
    mainTimeline
        .add(flowerToDesertTimeline, '+=19')
        .add(iceWorldTimeline);

    mainTimeline.play(START_TIME, false);
    if (popCanPlay && pop) {
        pop.play(START_TIME);
    }
}

function renderGalleryPage() {
    if (!galleryPageWrapper) {
        galleryPageWrapper = new createjs.Container();
    }
    if (galleryPageWrapper.parent != stage) {
        stage.addChild(galleryPageWrapper);
    }
    galleryPageWrapper.removeAllChildren();
    galleryTimelines.forEach(function (timeline) {
        timeline.remove();
    });

    _renderGallery();
    _renderBtnPrev();
    _renderBtnHome();
    _renderBtnNext();
}

function _renderGallery() {
    if (!galleryWrapper) {
        galleryWrapper = new createjs.Container();
    }
    if (galleryWrapper.parent != galleryPageWrapper) {
        galleryPageWrapper.addChild(galleryWrapper);
    }
    galleryWrapper.removeAllChildren();
    galleryTimelines.forEach(function (timeline) {
        timeline.remove();
    });

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

            var desertGroundObjs = getDesertGroundTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(desertGroundObjs);

            var jackalopeObjs = getJackalopeTimeline(LEFT_1, TOP_2);
            _processTimelineObjs(jackalopeObjs);

            var yetiObjs = getYetiTimeline(LEFT_2, TOP_2);
            _processTimelineObjs(yetiObjs);

            var seaMonsterObjs = getSeaMonsterTimeline(LEFT_3, TOP_2);
            _processTimelineObjs(seaMonsterObjs);

            break;
        case 4:
            var sharkObjs = getSharkTimeline(LEFT_1, TOP_1);
            _processTimelineObjs(sharkObjs);

            var snakeObjs = getSnakeTimeline(LEFT_2, TOP_1);
            _processTimelineObjs(snakeObjs);

            var hugObjs = getHugTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(hugObjs);

            var questionObjs = getQuestionTimeline(LEFT_1, TOP_2);
            _processTimelineObjs(questionObjs);

            var spikeObjs = getSpikeTimeline(LEFT_2, TOP_2);
            _processTimelineObjs(spikeObjs);

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
        galleryTimelines.push(timeline);
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
        galleryTimelines.forEach(function (timeline) {
            timeline.remove();
        });
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

    var petalColor = COLOR_FLOWER_PETAL;
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
        .set(container1, {x: x, y: y})
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

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_SPRING_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    springContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SPRING_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    springContainer.addChild(segmentSky);

    var treeWrapper = new createjs.Container();
    var trunk = new createjs.Shape();
    trunk.graphics.beginFill(COLOR_AUTUMN_TRUNK)
        .moveTo(-8, 25)
        .lineTo(8, 25)
        .lineTo(0, 22)
        .command;
    treeWrapper.addChild(trunk);

    var trunk2 = new createjs.Shape();
    trunk2.graphics.beginFill(COLOR_AUTUMN_TRUNK)
        .rect(-1.5, 24, 3, -8)
        .command;
    treeWrapper.addChild(trunk2);

    function getFlower() {
        var flowerRadius = 3;
        var flower = new createjs.Shape();
        flower.graphics.beginFill(COLOR_SPRING_FLOWER)
            .drawCircle(0, -4, flowerRadius)
            .endFill().beginFill(COLOR_SPRING_FLOWER)
            .drawCircle(-4, -1, flowerRadius)
            .endFill().beginFill(COLOR_SPRING_FLOWER)
            .drawCircle(-2, 3, flowerRadius)
            .endFill().beginFill(COLOR_SPRING_FLOWER)
            .drawCircle(2, 3, flowerRadius)
            .endFill().beginFill(COLOR_SPRING_FLOWER)
            .drawCircle(4, -1, flowerRadius)
        ;
        flower.scaleX = flower.scaleY = 0.5;
        flower.alpha = 0.5;
        return flower;
    }

    var flowerData = [
        {"x": -11.938537023961544, "y": 2.783802844583988},
        {"x": -11.927265889942646, "y": 9.444361511617899},
        {"x": -11.908187756314874, "y": 15.669426031410694},
        {"x": -11.884445546194911, "y": 15.978291761130095},
        {"x": -11.828536000102758, "y": 13.775821194052696},
        {"x": -11.765338394790888, "y": 6.619630008935928},
        {"x": -11.749858751893044, "y": 4.089133452624083},
        {"x": -11.706163482740521, "y": 14.17811505869031},
        {"x": -11.254682337865233, "y": 15.44297207519412},
        {"x": -11.048927541822195, "y": 12.44661495834589},
        {"x": -10.967076357454062, "y": 14.772557731717825},
        {"x": -10.935170805081725, "y": 17.23644670471549},
        {"x": -10.04281578026712, "y": 8.280355393886566},
        {"x": -9.944909105077386, "y": 12.697296872735023},
        {"x": -9.80447056889534, "y": 10.315777283161879},
        {"x": -9.410871030762792, "y": 5.995434891432524},
        {"x": -8.831381656229496, "y": 4.081501836888492},
        {"x": -8.720052799209952, "y": -6.400239520706236},
        {"x": -8.700306979939342, "y": 15.81250982079655},
        {"x": -8.417404739186168, "y": 1.3938065562397242},
        {"x": -8.162943748757243, "y": 3.7646389920264482},
        {"x": -8.124722801148891, "y": 4.0286423889920115},
        {"x": -8.076322199776769, "y": 10.677224477753043},
        {"x": -8.075654190033674, "y": -3.29717038013041},
        {"x": -7.9981082528829575, "y": -0.33519769087433815},
        {"x": -7.7350994925946, "y": -10.02721961401403},
        {"x": -7.673339696601033, "y": 2.1703998493030667},
        {"x": -7.633951351046562, "y": 16.830576333217323},
        {"x": -7.571625100448728, "y": 11.628769759088755},
        {"x": -7.543144399300218, "y": -2.5000903317704797},
        {"x": -7.497133461758494, "y": 9.167129065841436},
        {"x": -7.4449379704892635, "y": -8.10189295746386},
        {"x": -7.328179171308875, "y": 9.763174200430512},
        {"x": -7.186866642907262, "y": 15.310225867666304},
        {"x": -7.115949779748917, "y": -5.026154665276408},
        {"x": -7.071541596204042, "y": 3.097171552479267},
        {"x": -6.905940307304263, "y": -6.881847242824733},
        {"x": -6.816854372620583, "y": 9.606753626838326},
        {"x": -6.80012109875679, "y": 0.8055208120495081},
        {"x": -6.687659388408065, "y": 16.584031620062888},
        {"x": -6.671556729823351, "y": 16.111719668842852},
        {"x": -6.6248501390218735, "y": -9.881953099742532},
        {"x": -6.581895651295781, "y": 0.28699231520295143},
        {"x": -6.481142794713378, "y": -9.414711331948638},
        {"x": -6.122980780899525, "y": -5.583829181268811},
        {"x": -6.087604930624366, "y": 4.2597304889932275},
        {"x": -5.894475331529975, "y": 10.266325710341334},
        {"x": -5.8094714898616076, "y": 10.650253714062274},
        {"x": -5.717962576076388, "y": -0.5119897006079555},
        {"x": -5.608048506081104, "y": -8.052447931841016},
        {"x": -5.594603905454278, "y": -7.433836261741817},
        {"x": -5.5520655903965235, "y": -10.245244170539081},
        {"x": -5.414462769404054, "y": -2.88610874209553},
        {"x": -5.204577958211303, "y": -2.806847557425499},
        {"x": -4.99387345276773, "y": 1.8513455232605338},
        {"x": -4.958492746576667, "y": -8.72763638291508},
        {"x": -4.725881729274988, "y": 13.159698724746704},
        {"x": -4.704066552221775, "y": -10.42619652301073},
        {"x": -4.665494855493307, "y": -9.024285785853863},
        {"x": -4.625839959830046, "y": 10.41821093391627},
        {"x": -4.624952444806695, "y": 0.3477297844365239},
        {"x": -4.587925728410482, "y": -7.245869115926325},
        {"x": -4.583195278421044, "y": 12.863739998079836},
        {"x": -4.260875953361392, "y": 12.718063996173441},
        {"x": -4.248768579214811, "y": -6.005207773298025},
        {"x": -4.148109789937735, "y": 3.2473527593538165},
        {"x": -4.085978351533413, "y": 3.9081102460622787},
        {"x": -4.083788434043527, "y": -10.314791295677423},
        {"x": -3.96896655857563, "y": -1.885686301626265},
        {"x": -3.908116076141596, "y": -9.43749051913619},
        {"x": -3.8453271612524986, "y": -6.3129729479551315},
        {"x": -3.821425510570407, "y": -9.66183101106435},
        {"x": -3.6662942077964544, "y": 7.02500765863806},
        {"x": -3.291131492704153, "y": 8.415610247291625},
        {"x": -3.163777370005846, "y": -9.65953256841749},
        {"x": -3.157650461420417, "y": 12.183321869932115},
        {"x": -2.9735082741826773, "y": -7.227646101266146},
        {"x": -2.93276097625494, "y": 10.65533443260938},
        {"x": -2.9057688675820827, "y": -7.754606971517205},
        {"x": -2.7477461490780115, "y": 9.604268107563257},
        {"x": -2.5140485800802708, "y": -6.163037236779928},
        {"x": -2.3861692305654287, "y": 6.516406127251685},
        {"x": -2.3480358738452196, "y": -10.090584076941013},
        {"x": -2.313767395913601, "y": 4.702176930382848},
        {"x": -2.3026301320642233, "y": -6.0802751844748855},
        {"x": -2.2702184077352285, "y": 1.6875996505841613},
        {"x": -2.2126604709774256, "y": 6.175914362072945},
        {"x": -2.172017779201269, "y": -5.338620603084564},
        {"x": -2.00998960621655, "y": -7.23314124904573},
        {"x": -1.7855555210262537, "y": 9.725313022732735},
        {"x": -1.7855037208646536, "y": 10.341946495696902},
        {"x": -1.7056268323212862, "y": 8.456503910012543},
        {"x": -1.3683628588914871, "y": -7.707965546287596},
        {"x": -1.0086608659476042, "y": -6.1977123552933335},
        {"x": -0.9908119942992926, "y": 7.131784128025174},
        {"x": -0.9856893215328455, "y": 7.030440364964306},
        {"x": -0.7403128333389759, "y": 13.546117547899485},
        {"x": -0.6954271495342255, "y": 10.853952018544078},
        {"x": -0.61479770578444, "y": -3.447875155135989},
        {"x": -0.19576737843453884, "y": -9.167229103855789},
        {"x": -0.08181800879538059, "y": 3.249186678789556},
        {"x": 0.009611360728740692, "y": -0.11179541796445847},
        {"x": 0.3248777277767658, "y": -8.300048901699483},
        {"x": 0.5574602130800486, "y": 10.668686890043318},
        {"x": 0.5700726807117462, "y": -3.10758466552943},
        {"x": 0.6368931122124195, "y": 7.8742102310061455},
        {"x": 0.6778758466243744, "y": -1.650522948242724},
        {"x": 0.8259897697716951, "y": 4.0784147856757045},
        {"x": 0.8592284973710775, "y": 2.5105429450049996},
        {"x": 0.9226030390709639, "y": -2.3765144385397434},
        {"x": 0.9916298445314169, "y": 11.393232206813991},
        {"x": 1.0336243025958538, "y": 3.3274243660271168},
        {"x": 1.050721300765872, "y": -1.6412101686000824},
        {"x": 1.2404909245669842, "y": 13.750081955455244},
        {"x": 1.3459092378616333, "y": -4.9058005241677165},
        {"x": 1.3612300660461187, "y": 12.03355395141989},
        {"x": 1.4509362895041704, "y": -9.61692593805492},
        {"x": 1.5994287338107824, "y": 3.085909416899085},
        {"x": 1.9578855391591787, "y": 13.380819394253194},
        {"x": 2.009372005239129, "y": 4.243940337561071},
        {"x": 2.30795843526721, "y": 11.593500351533294},
        {"x": 2.584801884368062, "y": 12.2643703809008},
        {"x": 2.6859304513782263, "y": 13.964664806611836},
        {"x": 2.726268583908677, "y": -8.043028894811869},
        {"x": 2.9043670780956745, "y": 14.511995385400951},
        {"x": 2.9140095468610525, "y": -5.859877963550389},
        {"x": 2.9314936213195324, "y": -5.96988342795521},
        {"x": 3.231443591415882, "y": 1.1568820448592305},
        {"x": 3.2719071451574564, "y": 16.304655017331243},
        {"x": 3.3161697909235954, "y": -2.8123370856046677},
        {"x": 3.3311692848801613, "y": 4.625337943434715},
        {"x": 3.390936356037855, "y": 3.887844213284552},
        {"x": 3.408504517748952, "y": 5.714880446903408},
        {"x": 3.629077412188053, "y": -6.12628002371639},
        {"x": 3.9522147104144096, "y": -7.495734361000359},
        {"x": 4.017865106463432, "y": 3.983586127869785},
        {"x": 4.022190939635038, "y": 13.965698395855725},
        {"x": 4.1219694670289755, "y": 1.6584833795204759},
        {"x": 4.458406118676066, "y": 2.9079434387385845},
        {"x": 4.508841555565596, "y": 1.4088200945407152},
        {"x": 4.9586143512278795, "y": -4.576432588510215},
        {"x": 4.965515596792102, "y": 4.19045708142221},
        {"x": 5.1218240931630135, "y": 4.015358963981271},
        {"x": 5.176717998459935, "y": 17.28470003698021},
        {"x": 5.264563104137778, "y": 14.948814064264297},
        {"x": 5.344563150778413, "y": -4.822842939756811},
        {"x": 5.384250255301595, "y": 11.393741354346275},
        {"x": 5.510452045127749, "y": 9.026711145415902},
        {"x": 5.602826122194529, "y": -4.803198902867734},
        {"x": 5.720167754217982, "y": -4.268897706642747},
        {"x": 5.759528607130051, "y": 12.630766932852566},
        {"x": 5.7696570083498955, "y": 3.152911619283259},
        {"x": 5.812398919835687, "y": 3.1237152134999633},
        {"x": 6.294082777574658, "y": 6.962155074812472},
        {"x": 6.53848790936172, "y": 17.328913742676377},
        {"x": 6.6075247172266245, "y": 8.611301253549755},
        {"x": 6.765180196613073, "y": -0.3754949979484081},
        {"x": 6.771052340045571, "y": 11.889895581640303},
        {"x": 6.833053948357701, "y": -2.060411537066102},
        {"x": 7.002806268632412, "y": 17.49914810899645},
        {"x": 7.067687407135963, "y": 5.81796723138541},
        {"x": 7.087141105905175, "y": -3.5823393696919084},
        {"x": 7.254141613841057, "y": 8.239134897477925},
        {"x": 7.367422129958868, "y": 6.888900890946388},
        {"x": 7.368472578004003, "y": 3.986550036817789},
        {"x": 7.457366516813636, "y": 1.8207400841638446},
        {"x": 7.583921849727631, "y": 2.159849936142564},
        {"x": 7.780192634090781, "y": -9.281950899399817},
        {"x": 7.817879615351558, "y": -0.20950893871486187},
        {"x": 7.835261430591345, "y": -3.564983488060534},
        {"x": 7.848347816616297, "y": -6.463883855380118},
        {"x": 8.006936928257346, "y": -6.06930844951421},
        {"x": 8.58764940686524, "y": 2.9420746229588985},
        {"x": 9.070556754246354, "y": 4.764065116643906},
        {"x": 9.103363065049052, "y": 14.920263510197401},
        {"x": 9.153529677540064, "y": 13.713290397077799},
        {"x": 9.19834559597075, "y": 5.942743979394436},
        {"x": 9.28686310350895, "y": 16.48197339475155},
        {"x": 9.383957343176007, "y": 15.01934888958931},
        {"x": 9.676848074421287, "y": 13.906043991446495},
        {"x": 9.753761837258935, "y": 12.416522976011038},
        {"x": 9.85736159607768, "y": 6.938287679105997},
        {"x": 9.95800862275064, "y": 2.4495127834379673},
        {"x": 10.049425391480327, "y": 12.175883870571852},
        {"x": 10.272305734455585, "y": 2.822897370904684},
        {"x": 10.328910145908594, "y": 8.16108275949955},
        {"x": 10.339179849252105, "y": 6.46376434341073},
        {"x": 10.420267637819052, "y": 8.078886207193136},
        {"x": 10.429143251851201, "y": 15.65312921628356},
        {"x": 10.50098299048841, "y": 12.68830168992281},
        {"x": 10.61393641680479, "y": 15.557414948940277},
        {"x": 10.639664880931377, "y": 4.903334558010101},
        {"x": 10.798856567591429, "y": 12.546312481164932},
        {"x": 11.202103117480874, "y": 13.298689346760511},
        {"x": 11.350924545899034, "y": 5.644771680235863},
        {"x": 11.48407144099474, "y": 10.471177469938993},
        {"x": 11.491743922233582, "y": 5.7699894197285175},
        {"x": 11.524416318163276, "y": 12.843980517238379},
        {"x": 11.666951252147555, "y": 14.093434516340494},
        {"x": 11.936023598536849, "y": 2.2532736137509346}
    ];
    for (var i = 0; i < flowerData.length; i++) {
        var flower = getFlower();
        flower.x = flowerData[i].x;
        flower.y = flowerData[i].y;
        treeWrapper.addChild(flower);
    }

    // generate random data
//    var flowers = [];
//    for (var i = 0; i < 200; i++) {
//        var flower = getFlower();
//        flower.x += _random(-12, 12);
//
//        if (Math.abs(flower.x) < 9) {
//            flower.y += _random(-12, 16);
//        }
//        else {
//            flower.y += _random(0, 16);
//        }
//        flowers.push({x: flower.x, y: flower.y});
//        treeWrapper.addChild(flower);
//    }
//    flowers = flowers.sort(function(a,b) {
//        if (a.x == b.x) {
//            return a.y - b.y;
//        }
//        return a.x - b.x;
//    })
//    console.log(JSON.stringify(flowers));

    springContainer.addChild(treeWrapper);

    return [springTimeline, springContainer];
}

function getSummerTimeline(x, y) {
    var summerTimeline = new TimelineMax();

    var summerContainer = new createjs.Container();
    summerContainer.x = x;
    summerContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_SUMMER_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    summerContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SUMMER_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    summerContainer.addChild(segmentSky);

    var treeWrapper = new createjs.Container();
    var trunk = new createjs.Shape();

    for (var i = 0; i < 9; i++) {
        trunk.graphics.beginFill(COLOR_SUMMER_TRUNK)
            .rect(-1.5, 25 + (i * -5), 3, -4)
            .endFill()
            .beginFill(COLOR_SUMMER_TRUNK_STRIPE)
            .rect(-1.5, 25 + (i * -5) - 4, 3, -1)
            .endFill();
    }
    treeWrapper.addChild(trunk);

    var leafWrapper = new createjs.Container();
    leafWrapper.y = -20;

    var numLeaves = 8;
    for (var i = 0; i < numLeaves; i++) {
        var leaf = new createjs.Shape();
        leaf.graphics.beginStroke(COLOR_SUMMER_LEAF)
            .arc(9, 5, 10, -150 * Math.PI / 180, -30 * Math.PI / 180)
            .endStroke()
            .setStrokeStyle(1).beginStroke(COLOR_SUMMER_LEAF)
            .moveTo(3, 0).lineTo(3, -3)
            .moveTo(5, 0).lineTo(5, -3)
            .moveTo(7, 0).lineTo(7, -5)
            .moveTo(9, 0).lineTo(9, -5)
            .moveTo(11, 0).lineTo(11, -5)
            .moveTo(13, 0).lineTo(13, -3)
            .moveTo(15, 0).lineTo(15, -3)
        ;
        leaf.rotation = i < numLeaves / 2
            ? (i * 360 / numLeaves - 75)
            : ((i - numLeaves / 2) * 360 / numLeaves - 60);
        leaf.scaleX = i < numLeaves / 2 ? -1 : 1;
        leafWrapper.addChild(leaf);
    }

    treeWrapper.addChild(leafWrapper);

    var coconuts = new createjs.Shape();
    coconuts.graphics.beginFill(COLOR_SUMMER_COCONUT)
        .drawCircle(0, -20, 1.5)
        .drawCircle(2, -18, 1.5)
        .drawCircle(-2, -18, 1.5)
    ;
    treeWrapper.addChild(coconuts);

    summerContainer.addChild(treeWrapper);

    return [summerTimeline, summerContainer];
}

function getAutumnTimeline(x, y) {
    var autumnTimeline = new TimelineMax();

    var autumnContainer = new createjs.Container();
    autumnContainer.x = x;
    autumnContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_AUTUMN_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    autumnContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_AUTUMN_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    autumnContainer.addChild(segmentSky);

    var treeWrapper = new createjs.Container();
    autumnContainer.addChild(treeWrapper);

    var trunk = new createjs.Shape();
    trunk.graphics.beginFill(COLOR_AUTUMN_TRUNK)
        .moveTo(-8, 25)
        .lineTo(8, 25)
        .lineTo(0, 22)
        .command;
    treeWrapper.addChild(trunk);

    var trunk2 = new createjs.Shape();
    trunk2.graphics.beginFill(COLOR_AUTUMN_TRUNK)
        .rect(-1.5, 24, 3, -8)
        .command;
    treeWrapper.addChild(trunk2);

    var leaves = [
        {"x": -7.5, "y": -8.5, "rotation": 281, "alpha": "0.60"},
        {"x": -7.5, "y": -5.5, "rotation": 306, "alpha": "0.38"},
        {"x": -7.5, "y": -4.5, "rotation": 263, "alpha": "0.67"},
        {"x": -7.5, "y": -3.5, "rotation": 341, "alpha": "0.68"},
        {"x": -7.5, "y": 1.5, "rotation": 283, "alpha": "0.69"},
        {"x": -7.5, "y": 1.5, "rotation": 299, "alpha": "0.68"},
        {"x": -7.5, "y": 4.5, "rotation": 178, "alpha": "0.65"},
        {"x": -7.5, "y": 5.5, "rotation": 53, "alpha": "0.36"},
        {"x": -7.5, "y": 8.5, "rotation": 7, "alpha": "0.47"},
        {"x": -7.5, "y": 8.5, "rotation": 209, "alpha": "0.45"},
        {"x": -7.5, "y": 9.5, "rotation": 18, "alpha": "0.51"},
        {"x": -7.5, "y": 17.5, "rotation": 336, "alpha": "0.56"},
        {"x": -6.5, "y": -10.5, "rotation": 2, "alpha": "0.68"},
        {"x": -6.5, "y": -8.5, "rotation": 89, "alpha": "0.41"},
        {"x": -6.5, "y": -3.5, "rotation": 105, "alpha": "0.58"},
        {"x": -6.5, "y": -3.5, "rotation": 328, "alpha": "0.68"},
        {"x": -6.5, "y": 1.5, "rotation": 328, "alpha": "0.57"},
        {"x": -6.5, "y": 3.5, "rotation": 61, "alpha": "0.56"},
        {"x": -6.5, "y": 3.5, "rotation": 150, "alpha": "0.53"},
        {"x": -6.5, "y": 3.5, "rotation": 197, "alpha": "0.48"},
        {"x": -6.5, "y": 3.5, "rotation": 268, "alpha": "0.53"},
        {"x": -6.5, "y": 5.5, "rotation": 9, "alpha": "0.64"},
        {"x": -5.5, "y": -8.5, "rotation": 337, "alpha": "0.45"},
        {"x": -5.5, "y": -4.5, "rotation": 76, "alpha": "0.62"},
        {"x": -5.5, "y": -4.5, "rotation": 133, "alpha": "0.68"},
        {"x": -5.5, "y": -2.5, "rotation": 305, "alpha": "0.59"},
        {"x": -5.5, "y": -1.5, "rotation": 76, "alpha": "0.51"},
        {"x": -5.5, "y": -1.5, "rotation": 222, "alpha": "0.65"},
        {"x": -5.5, "y": 2.5, "rotation": 354, "alpha": "0.37"},
        {"x": -5.5, "y": 3.5, "rotation": 212, "alpha": "0.31"},
        {"x": -5.5, "y": 8.5, "rotation": 34, "alpha": "0.46"},
        {"x": -5.5, "y": 12.5, "rotation": 130, "alpha": "0.65"},
        {"x": -5.5, "y": 15.5, "rotation": 68, "alpha": "0.57"},
        {"x": -5.5, "y": 17.5, "rotation": 117, "alpha": "0.51"},
        {"x": -4.5, "y": -11.5, "rotation": 326, "alpha": "0.43"},
        {"x": -4.5, "y": -9.5, "rotation": 275, "alpha": "0.32"},
        {"x": -4.5, "y": -7.5, "rotation": 295, "alpha": "0.67"},
        {"x": -4.5, "y": -7.5, "rotation": 335, "alpha": "0.40"},
        {"x": -4.5, "y": -6.5, "rotation": 130, "alpha": "0.38"},
        {"x": -4.5, "y": -3.5, "rotation": 148, "alpha": "0.58"},
        {"x": -4.5, "y": -2.5, "rotation": 202, "alpha": "0.61"},
        {"x": -4.5, "y": 0.5, "rotation": 99, "alpha": "0.41"},
        {"x": -4.5, "y": 3.5, "rotation": 241, "alpha": "0.39"},
        {"x": -4.5, "y": 3.5, "rotation": 317, "alpha": "0.43"},
        {"x": -4.5, "y": 4.5, "rotation": 100, "alpha": "0.56"},
        {"x": -4.5, "y": 5.5, "rotation": 341, "alpha": "0.53"},
        {"x": -4.5, "y": 6.5, "rotation": 277, "alpha": "0.55"},
        {"x": -4.5, "y": 9.5, "rotation": 138, "alpha": "0.52"},
        {"x": -4.5, "y": 9.5, "rotation": 148, "alpha": "0.51"},
        {"x": -4.5, "y": 10.5, "rotation": 304, "alpha": "0.32"},
        {"x": -4.5, "y": 15.5, "rotation": 177, "alpha": "0.47"},
        {"x": -4.5, "y": 16.5, "rotation": 258, "alpha": "0.55"},
        {"x": -3.5, "y": -11.5, "rotation": 167, "alpha": "0.38"},
        {"x": -3.5, "y": -9.5, "rotation": 233, "alpha": "0.33"},
        {"x": -3.5, "y": -7.5, "rotation": 211, "alpha": "0.45"},
        {"x": -3.5, "y": -7.5, "rotation": 253, "alpha": "0.35"},
        {"x": -3.5, "y": -5.5, "rotation": 214, "alpha": "0.40"},
        {"x": -3.5, "y": -3.5, "rotation": 17, "alpha": "0.57"},
        {"x": -3.5, "y": 1.5, "rotation": 271, "alpha": "0.38"},
        {"x": -3.5, "y": 1.5, "rotation": 326, "alpha": "0.31"},
        {"x": -3.5, "y": 2.5, "rotation": 352, "alpha": "0.39"},
        {"x": -3.5, "y": 3.5, "rotation": 278, "alpha": "0.49"},
        {"x": -3.5, "y": 10.5, "rotation": 170, "alpha": "0.42"},
        {"x": -3.5, "y": 10.5, "rotation": 284, "alpha": "0.51"},
        {"x": -3.5, "y": 12.5, "rotation": 42, "alpha": "0.69"},
        {"x": -3.5, "y": 15.5, "rotation": 81, "alpha": "0.47"},
        {"x": -3.5, "y": 15.5, "rotation": 308, "alpha": "0.65"},
        {"x": -3.5, "y": 16.5, "rotation": 211, "alpha": "0.32"},
        {"x": -2.5, "y": -12.5, "rotation": 242, "alpha": "0.50"},
        {"x": -2.5, "y": -10.5, "rotation": 44, "alpha": "0.67"},
        {"x": -2.5, "y": -10.5, "rotation": 160, "alpha": "0.31"},
        {"x": -2.5, "y": -6.5, "rotation": 82, "alpha": "0.56"},
        {"x": -2.5, "y": -5.5, "rotation": 100, "alpha": "0.46"},
        {"x": -2.5, "y": -4.5, "rotation": 51, "alpha": "0.51"},
        {"x": -2.5, "y": -4.5, "rotation": 155, "alpha": "0.58"},
        {"x": -2.5, "y": -3.5, "rotation": 306, "alpha": "0.52"},
        {"x": -2.5, "y": -2.5, "rotation": 217, "alpha": "0.34"},
        {"x": -2.5, "y": 3.5, "rotation": 173, "alpha": "0.49"},
        {"x": -2.5, "y": 3.5, "rotation": 209, "alpha": "0.67"},
        {"x": -2.5, "y": 8.5, "rotation": 218, "alpha": "0.63"},
        {"x": -2.5, "y": 8.5, "rotation": 282, "alpha": "0.64"},
        {"x": -2.5, "y": 11.5, "rotation": 244, "alpha": "0.57"},
        {"x": -2.5, "y": 13.5, "rotation": 150, "alpha": "0.56"},
        {"x": -1.5, "y": -7.5, "rotation": 192, "alpha": "0.39"},
        {"x": -1.5, "y": -7.5, "rotation": 199, "alpha": "0.70"},
        {"x": -1.5, "y": -6.5, "rotation": 153, "alpha": "0.57"},
        {"x": -1.5, "y": -4.5, "rotation": 155, "alpha": "0.55"},
        {"x": -1.5, "y": -4.5, "rotation": 265, "alpha": "0.69"},
        {"x": -1.5, "y": -3.5, "rotation": 59, "alpha": "0.69"},
        {"x": -1.5, "y": -3.5, "rotation": 256, "alpha": "0.43"},
        {"x": -1.5, "y": -0.5, "rotation": 117, "alpha": "0.49"},
        {"x": -1.5, "y": 0.5, "rotation": 115, "alpha": "0.34"},
        {"x": -1.5, "y": 0.5, "rotation": 302, "alpha": "0.54"},
        {"x": -1.5, "y": 2.5, "rotation": 81, "alpha": "0.55"},
        {"x": -1.5, "y": 7.5, "rotation": 243, "alpha": "0.39"},
        {"x": -1.5, "y": 8.5, "rotation": 340, "alpha": "0.39"},
        {"x": -1.5, "y": 10.5, "rotation": 268, "alpha": "0.51"},
        {"x": -1.5, "y": 13.5, "rotation": 97, "alpha": "0.47"},
        {"x": -1.5, "y": 14.5, "rotation": 315, "alpha": "0.67"},
        {"x": -1.5, "y": 15.5, "rotation": 234, "alpha": "0.42"},
        {"x": -1.5, "y": 16.5, "rotation": 354, "alpha": "0.46"},
        {"x": -0.5, "y": -12.5, "rotation": 247, "alpha": "0.49"},
        {"x": -0.5, "y": -9.5, "rotation": 173, "alpha": "0.40"},
        {"x": -0.5, "y": -9.5, "rotation": 222, "alpha": "0.69"},
        {"x": -0.5, "y": -5.5, "rotation": 2, "alpha": "0.33"},
        {"x": -0.5, "y": -5.5, "rotation": 152, "alpha": "0.52"},
        {"x": -0.5, "y": -5.5, "rotation": 295, "alpha": "0.51"},
        {"x": -0.5, "y": 3.5, "rotation": 174, "alpha": "0.59"},
        {"x": -0.5, "y": 3.5, "rotation": 188, "alpha": "0.65"},
        {"x": -0.5, "y": 5.5, "rotation": 242, "alpha": "0.63"},
        {"x": -0.5, "y": 5.5, "rotation": 286, "alpha": "0.55"},
        {"x": -0.5, "y": 9.5, "rotation": 243, "alpha": "0.32"},
        {"x": -0.5, "y": 13.5, "rotation": 262, "alpha": "0.62"},
        {"x": -0.5, "y": 13.5, "rotation": 348, "alpha": "0.42"},
        {"x": -0.5, "y": 14.5, "rotation": 32, "alpha": "0.39"},
        {"x": -0.5, "y": 14.5, "rotation": 199, "alpha": "0.61"},
        {"x": -0.5, "y": 14.5, "rotation": 290, "alpha": "0.42"},
        {"x": -0.5, "y": 14.5, "rotation": 299, "alpha": "0.41"},
        {"x": -0.5, "y": 17.5, "rotation": 68, "alpha": "0.35"},
        {"x": 0.5, "y": -9.5, "rotation": 294, "alpha": "0.49"},
        {"x": 0.5, "y": -9.5, "rotation": 343, "alpha": "0.43"},
        {"x": 0.5, "y": -5.5, "rotation": 284, "alpha": "0.32"},
        {"x": 0.5, "y": -4.5, "rotation": 169, "alpha": "0.52"},
        {"x": 0.5, "y": -3.5, "rotation": 303, "alpha": "0.46"},
        {"x": 0.5, "y": -0.5, "rotation": 44, "alpha": "0.42"},
        {"x": 0.5, "y": -0.5, "rotation": 350, "alpha": "0.51"},
        {"x": 0.5, "y": 0.5, "rotation": 360, "alpha": "0.61"},
        {"x": 0.5, "y": 5.5, "rotation": 192, "alpha": "0.55"},
        {"x": 0.5, "y": 7.5, "rotation": 215, "alpha": "0.61"},
        {"x": 0.5, "y": 8.5, "rotation": 210, "alpha": "0.47"},
        {"x": 0.5, "y": 11.5, "rotation": 8, "alpha": "0.51"},
        {"x": 0.5, "y": 11.5, "rotation": 26, "alpha": "0.43"},
        {"x": 0.5, "y": 13.5, "rotation": 24, "alpha": "0.67"},
        {"x": 0.5, "y": 13.5, "rotation": 72, "alpha": "0.52"},
        {"x": 0.5, "y": 17.5, "rotation": 117, "alpha": "0.44"},
        {"x": 1.5, "y": -10.5, "rotation": 7, "alpha": "0.44"},
        {"x": 1.5, "y": -0.5, "rotation": 200, "alpha": "0.53"},
        {"x": 1.5, "y": 1.5, "rotation": 87, "alpha": "0.50"},
        {"x": 1.5, "y": 4.5, "rotation": 3, "alpha": "0.31"},
        {"x": 1.5, "y": 5.5, "rotation": 267, "alpha": "0.70"},
        {"x": 1.5, "y": 13.5, "rotation": 299, "alpha": "0.64"},
        {"x": 1.5, "y": 15.5, "rotation": 308, "alpha": "0.44"},
        {"x": 1.5, "y": 16.5, "rotation": 350, "alpha": "0.66"},
        {"x": 2.5, "y": -12.5, "rotation": 332, "alpha": "0.30"},
        {"x": 2.5, "y": -10.5, "rotation": 295, "alpha": "0.59"},
        {"x": 2.5, "y": -8.5, "rotation": 102, "alpha": "0.50"},
        {"x": 2.5, "y": -6.5, "rotation": 10, "alpha": "0.50"},
        {"x": 2.5, "y": -5.5, "rotation": 0, "alpha": "0.39"},
        {"x": 2.5, "y": -4.5, "rotation": 326, "alpha": "0.33"},
        {"x": 2.5, "y": 3.5, "rotation": 154, "alpha": "0.61"},
        {"x": 2.5, "y": 4.5, "rotation": 246, "alpha": "0.46"},
        {"x": 2.5, "y": 8.5, "rotation": 355, "alpha": "0.69"},
        {"x": 3.5, "y": -12.5, "rotation": 283, "alpha": "0.45"},
        {"x": 3.5, "y": -10.5, "rotation": 96, "alpha": "0.41"},
        {"x": 3.5, "y": -9.5, "rotation": 175, "alpha": "0.51"},
        {"x": 3.5, "y": -7.5, "rotation": 158, "alpha": "0.39"},
        {"x": 3.5, "y": -7.5, "rotation": 202, "alpha": "0.48"},
        {"x": 3.5, "y": -4.5, "rotation": 243, "alpha": "0.39"},
        {"x": 3.5, "y": -4.5, "rotation": 301, "alpha": "0.65"},
        {"x": 3.5, "y": -3.5, "rotation": 58, "alpha": "0.52"},
        {"x": 3.5, "y": -1.5, "rotation": 62, "alpha": "0.61"},
        {"x": 3.5, "y": 0.5, "rotation": 129, "alpha": "0.40"},
        {"x": 3.5, "y": 0.5, "rotation": 204, "alpha": "0.43"},
        {"x": 3.5, "y": 4.5, "rotation": 52, "alpha": "0.61"},
        {"x": 3.5, "y": 9.5, "rotation": 292, "alpha": "0.59"},
        {"x": 3.5, "y": 12.5, "rotation": 268, "alpha": "0.45"},
        {"x": 3.5, "y": 13.5, "rotation": 119, "alpha": "0.46"},
        {"x": 3.5, "y": 14.5, "rotation": 92, "alpha": "0.51"},
        {"x": 3.5, "y": 16.5, "rotation": 147, "alpha": "0.39"},
        {"x": 4.5, "y": -11.5, "rotation": 82, "alpha": "0.46"},
        {"x": 4.5, "y": -8.5, "rotation": 40, "alpha": "0.39"},
        {"x": 4.5, "y": -7.5, "rotation": 3, "alpha": "0.31"},
        {"x": 4.5, "y": -7.5, "rotation": 243, "alpha": "0.36"},
        {"x": 4.5, "y": -5.5, "rotation": 351, "alpha": "0.64"},
        {"x": 4.5, "y": -0.5, "rotation": 73, "alpha": "0.48"},
        {"x": 4.5, "y": -0.5, "rotation": 149, "alpha": "0.54"},
        {"x": 4.5, "y": 2.5, "rotation": 239, "alpha": "0.51"},
        {"x": 4.5, "y": 5.5, "rotation": 52, "alpha": "0.50"},
        {"x": 4.5, "y": 9.5, "rotation": 182, "alpha": "0.70"},
        {"x": 4.5, "y": 11.5, "rotation": 90, "alpha": "0.48"},
        {"x": 4.5, "y": 13.5, "rotation": 191, "alpha": "0.56"},
        {"x": 4.5, "y": 13.5, "rotation": 249, "alpha": "0.49"},
        {"x": 4.5, "y": 14.5, "rotation": 72, "alpha": "0.41"},
        {"x": 5.5, "y": -11.5, "rotation": 349, "alpha": "0.50"},
        {"x": 5.5, "y": -10.5, "rotation": 86, "alpha": "0.65"},
        {"x": 5.5, "y": -7.5, "rotation": 337, "alpha": "0.32"},
        {"x": 5.5, "y": -4.5, "rotation": 204, "alpha": "0.57"},
        {"x": 5.5, "y": -4.5, "rotation": 313, "alpha": "0.33"},
        {"x": 5.5, "y": -1.5, "rotation": 15, "alpha": "0.59"},
        {"x": 5.5, "y": -1.5, "rotation": 300, "alpha": "0.61"},
        {"x": 5.5, "y": 1.5, "rotation": 286, "alpha": "0.40"},
        {"x": 5.5, "y": 3.5, "rotation": 145, "alpha": "0.61"},
        {"x": 5.5, "y": 4.5, "rotation": 212, "alpha": "0.43"},
        {"x": 5.5, "y": 4.5, "rotation": 283, "alpha": "0.48"},
        {"x": 5.5, "y": 5.5, "rotation": 294, "alpha": "0.66"},
        {"x": 5.5, "y": 8.5, "rotation": 246, "alpha": "0.38"},
        {"x": 5.5, "y": 15.5, "rotation": 347, "alpha": "0.53"},
        {"x": 5.5, "y": 16.5, "rotation": 280, "alpha": "0.45"},
        {"x": 6.5, "y": -11.5, "rotation": 99, "alpha": "0.58"},
        {"x": 6.5, "y": -6.5, "rotation": 39, "alpha": "0.62"},
        {"x": 6.5, "y": -2.5, "rotation": 283, "alpha": "0.42"},
        {"x": 6.5, "y": 1.5, "rotation": 19, "alpha": "0.70"},
        {"x": 6.5, "y": 2.5, "rotation": 114, "alpha": "0.44"},
        {"x": 6.5, "y": 2.5, "rotation": 152, "alpha": "0.32"},
        {"x": 6.5, "y": 2.5, "rotation": 249, "alpha": "0.65"},
        {"x": 6.5, "y": 4.5, "rotation": 16, "alpha": "0.58"},
        {"x": 6.5, "y": 6.5, "rotation": 70, "alpha": "0.30"},
        {"x": 6.5, "y": 6.5, "rotation": 297, "alpha": "0.38"},
        {"x": 6.5, "y": 14.5, "rotation": 244, "alpha": "0.38"},
        {"x": 6.5, "y": 17.5, "rotation": 94, "alpha": "0.31"},
        {"x": 7.5, "y": -11.5, "rotation": 152, "alpha": "0.31"},
        {"x": 7.5, "y": -10.5, "rotation": 335, "alpha": "0.56"},
        {"x": 7.5, "y": -9.5, "rotation": 85, "alpha": "0.49"},
        {"x": 7.5, "y": -8.5, "rotation": 132, "alpha": "0.54"},
        {"x": 7.5, "y": -5.5, "rotation": 14, "alpha": "0.44"},
        {"x": 7.5, "y": -1.5, "rotation": 299, "alpha": "0.63"},
        {"x": 7.5, "y": -1.5, "rotation": 332, "alpha": "0.63"},
        {"x": 7.5, "y": 2.5, "rotation": 100, "alpha": "0.53"},
        {"x": 7.5, "y": 3.5, "rotation": 282, "alpha": "0.34"},
        {"x": 7.5, "y": 5.5, "rotation": 102, "alpha": "0.59"},
        {"x": 7.5, "y": 8.5, "rotation": 301, "alpha": "0.44"},
        {"x": 7.5, "y": 11.5, "rotation": 269, "alpha": "0.32"},
        {"x": 7.5, "y": 13.5, "rotation": 303, "alpha": "0.59"},
        {"x": 7.5, "y": 15.5, "rotation": 180, "alpha": "0.57"},
        {"x": 7.5, "y": 17.5, "rotation": 277, "alpha": "0.42"},
        {"x": 8.5, "y": -12.5, "rotation": 23, "alpha": "0.55"},
        {"x": 8.5, "y": -8.5, "rotation": 39, "alpha": "0.61"},
        {"x": 8.5, "y": -7.5, "rotation": 250, "alpha": "0.59"},
        {"x": 8.5, "y": -7.5, "rotation": 312, "alpha": "0.43"},
        {"x": 8.5, "y": -6.5, "rotation": 167, "alpha": "0.60"},
        {"x": 8.5, "y": -4.5, "rotation": 14, "alpha": "0.32"},
        {"x": 8.5, "y": -3.5, "rotation": 192, "alpha": "0.65"},
        {"x": 8.5, "y": -2.5, "rotation": 268, "alpha": "0.40"},
        {"x": 8.5, "y": 1.5, "rotation": 106, "alpha": "0.65"},
        {"x": 8.5, "y": 1.5, "rotation": 161, "alpha": "0.30"},
        {"x": 8.5, "y": 2.5, "rotation": 61, "alpha": "0.43"},
        {"x": 8.5, "y": 8.5, "rotation": 0, "alpha": "0.31"},
        {"x": 8.5, "y": 8.5, "rotation": 21, "alpha": "0.64"},
        {"x": 8.5, "y": 8.5, "rotation": 218, "alpha": "0.54"},
        {"x": 8.5, "y": 9.5, "rotation": 60, "alpha": "0.68"},
        {"x": 8.5, "y": 10.5, "rotation": 12, "alpha": "0.61"},
        {"x": 8.5, "y": 10.5, "rotation": 302, "alpha": "0.31"},
        {"x": 9.5, "y": -12.5, "rotation": 82, "alpha": "0.44"},
        {"x": 9.5, "y": -12.5, "rotation": 181, "alpha": "0.41"},
        {"x": 9.5, "y": -11.5, "rotation": 206, "alpha": "0.39"},
        {"x": 9.5, "y": -8.5, "rotation": 21, "alpha": "0.64"},
        {"x": 9.5, "y": -7.5, "rotation": 82, "alpha": "0.65"},
        {"x": 9.5, "y": -4.5, "rotation": 179, "alpha": "0.35"},
        {"x": 9.5, "y": -4.5, "rotation": 293, "alpha": "0.56"},
        {"x": 9.5, "y": -0.5, "rotation": 3, "alpha": "0.67"},
        {"x": 9.5, "y": 2.5, "rotation": 323, "alpha": "0.52"},
        {"x": 9.5, "y": 4.5, "rotation": 215, "alpha": "0.62"},
        {"x": 9.5, "y": 6.5, "rotation": 147, "alpha": "0.32"},
        {"x": 9.5, "y": 11.5, "rotation": 16, "alpha": "0.35"},
        {"x": 9.5, "y": 13.5, "rotation": 256, "alpha": "0.51"},
        {"x": 9.5, "y": 14.5, "rotation": 322, "alpha": "0.33"},
        {"x": 9.5, "y": 16.5, "rotation": 299, "alpha": "0.56"},
        {"x": 10.5, "y": -11.5, "rotation": 77, "alpha": "0.45"},
        {"x": 10.5, "y": -10.5, "rotation": 314, "alpha": "0.38"},
        {"x": 10.5, "y": -10.5, "rotation": 347, "alpha": "0.45"},
        {"x": 10.5, "y": -9.5, "rotation": 66, "alpha": "0.59"},
        {"x": 10.5, "y": -6.5, "rotation": 14, "alpha": "0.51"},
        {"x": 10.5, "y": -4.5, "rotation": 7, "alpha": "0.69"},
        {"x": 10.5, "y": -4.5, "rotation": 115, "alpha": "0.65"},
        {"x": 10.5, "y": 3.5, "rotation": 39, "alpha": "0.59"},
        {"x": 10.5, "y": 9.5, "rotation": 250, "alpha": "0.45"},
        {"x": 10.5, "y": 12.5, "rotation": 115, "alpha": "0.35"},
        {"x": 10.5, "y": 16.5, "rotation": 121, "alpha": "0.50"},
        {"x": 10.5, "y": 16.5, "rotation": 234, "alpha": "0.31"},
        {"x": 10.5, "y": 16.5, "rotation": 347, "alpha": "0.52"},
        {"x": 10.5, "y": 17.5, "rotation": 244, "alpha": "0.64"},
        {"x": 11.5, "y": -12.5, "rotation": 358, "alpha": "0.48"},
        {"x": 11.5, "y": -11.5, "rotation": 192, "alpha": "0.49"},
        {"x": 11.5, "y": -9.5, "rotation": 104, "alpha": "0.33"},
        {"x": 11.5, "y": -9.5, "rotation": 274, "alpha": "0.55"},
        {"x": 11.5, "y": -8.5, "rotation": 184, "alpha": "0.42"},
        {"x": 11.5, "y": -5.5, "rotation": 109, "alpha": "0.67"},
        {"x": 11.5, "y": -2.5, "rotation": 26, "alpha": "0.37"},
        {"x": 11.5, "y": 0.5, "rotation": 298, "alpha": "0.68"},
        {"x": 11.5, "y": 1.5, "rotation": 137, "alpha": "0.70"},
        {"x": 11.5, "y": 3.5, "rotation": 206, "alpha": "0.67"},
        {"x": 11.5, "y": 4.5, "rotation": 93, "alpha": "0.43"},
        {"x": 11.5, "y": 14.5, "rotation": 130, "alpha": "0.62"},
        {"x": 12.5, "y": -12.5, "rotation": 55, "alpha": "0.58"},
        {"x": 12.5, "y": -12.5, "rotation": 339, "alpha": "0.61"},
        {"x": 12.5, "y": -10.5, "rotation": 131, "alpha": "0.52"},
        {"x": 12.5, "y": -8.5, "rotation": 337, "alpha": "0.61"},
        {"x": 12.5, "y": -7.5, "rotation": 199, "alpha": "0.64"},
        {"x": 12.5, "y": -7.5, "rotation": 275, "alpha": "0.61"},
        {"x": 12.5, "y": -5.5, "rotation": 43, "alpha": "0.68"},
        {"x": 12.5, "y": -5.5, "rotation": 233, "alpha": "0.36"},
        {"x": 12.5, "y": -3.5, "rotation": 65, "alpha": "0.64"},
        {"x": 12.5, "y": -0.5, "rotation": 182, "alpha": "0.47"},
        {"x": 12.5, "y": 2.5, "rotation": 61, "alpha": "0.61"},
        {"x": 12.5, "y": 4.5, "rotation": 48, "alpha": "0.59"},
        {"x": 12.5, "y": 7.5, "rotation": 40, "alpha": "0.58"},
        {"x": 12.5, "y": 10.5, "rotation": 62, "alpha": "0.56"},
        {"x": 12.5, "y": 13.5, "rotation": 256, "alpha": "0.68"},
        {"x": 12.5, "y": 14.5, "rotation": 153, "alpha": "0.65"},
        {"x": 12.5, "y": 17.5, "rotation": 329, "alpha": "0.61"}
    ];
    for (var i = 0;
//         i < 10 &&
         i < leaves.length; i++) {
        var leafData = leaves[i];
        var leaf = new createjs.Shape();

        leaf.regX = leafData.x;
        leaf.regY = leafData.y;
        leaf.rotation = leafData.rotation;
        leaf.alpha = leafData.alpha;
        if (leafData.rotation > 30 && leaf.rotation < 210) {
            leaf.graphics.beginFill(COLOR_AUTUMN_LEAF);
        }
//        else if (leafData.x == -7.5) {
//            leaf.graphics.beginFill('green');
//        }
        else {
            leaf.graphics.beginFill(COLOR_AUTUMN_LEAF_2);
        }
//        leaf.graphics.beginFill('#FF4500');
        leaf.graphics
            .moveTo(0, 0)
            .lineTo(5, 0)
            .lineTo(0, -5)
            .closePath()
        ;

        treeWrapper.addChild(leaf);
    }

    leaves = leaves.sort(function (a, b) {
        if (a.x === b.x) {
            if (a.y === b.y) {
                return a.rotation - b.rotation;
            }
            return a.y - b.y;
        }
        return a.x - b.x;
    });
//    console.log(JSON.stringify(leaves));

    return [autumnTimeline, autumnContainer];
}

function getWinterTimeline(x, y) {
    var snowTreeTimeline = new TimelineMax();
    snowTreeTimeline.add('snow');

    var snowTreeContainer = new createjs.Container();
    snowTreeContainer.x = x;
    snowTreeContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_WINTER_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    snowTreeContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_WINTER_SKY)
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

    var hand1Wrapper = new createjs.Container();
    hand1Wrapper.x = 13;
    hand1Wrapper.y = 18;

    var hand1 = new createjs.Shape();
    hand1.graphics
        .beginFill(COLOR_TURTLE_BODY)
        .moveTo(2, 7)
        .lineTo(0, 0)
        .lineTo(9, 7);
    hand1Wrapper.addChild(hand1);
    turtleWrapper.addChild(hand1Wrapper);

    var hand2Wrapper = new createjs.Container();
    hand2Wrapper.x = -13;
    hand2Wrapper.y = 18;

    var hand2 = new createjs.Shape();
    hand2.graphics
        .beginFill(COLOR_TURTLE_BODY)
        .moveTo(-2, 7)
        .lineTo(0, 0)
        .lineTo(-9, 7);
    hand2Wrapper.addChild(hand2);
    turtleWrapper.addChild(hand2Wrapper);

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
        .to(hand1Wrapper, .44, {rotation: "-=10", startAt: {rotation: "+=8"}, repeat: -1, yoyo: true}, 'hands')
        .to(hand2Wrapper, .44, {rotation: "+=10", startAt: {rotation: "-=8"}, repeat: -1, yoyo: true}, 'hands')
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
    eyes.alpha = 0;
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
    eyebrows.alpha = 0;
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

    var tearWrapper = new createjs.Container();
    var tear = new createjs.Shape();
    tear.graphics.beginFill(COLOR_DESERT_FACE_TEAR)
        .moveTo(0, 0)
        .lineTo(-1, 7)
        .lineTo(-7, 1)
        .endFill().beginFill(COLOR_DESERT_FACE_TEAR)
        .drawCircle(-7, 7, 6);
    tear.rotation = -45;
    tearWrapper.x = 11;
    tearWrapper.y = 10;
    tearWrapper.scaleX = tearWrapper.scaleY = 0;
    tearWrapper.addChild(tear);
    desertFace.addChild(tearWrapper);

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
        .add('happyFace', '+=6')
        .to(eyebrowsArcCmd, 1.2, {x1: -13, y1: -8, x2: -28, y2: -3, radius: 20}, 'desertFace')
        .to(eyebrowsArcCmd2, 1.2, {x1: 13, y1: -8, x2: 28, y2: -3, radius: 20}, 'desertFace')
        .to(tearWrapper, 2, {scaleX: 1, scaleY: 1, ease: Power4.easeOut})
        .set(tearWrapper, {alpha: 0}, 'happyFace')
        .to(eyebrowsStartCmd, 1.0, {x: -6, y: -4}, 'happyFace')
        .to(eyebrowsArcCmd, 1.0, {x1: -17, y1: -20, x2: -28, y2: 0, radius: 10}, 'happyFace')
        .to(eyebrowsEndCmd, 1.0, {x: -28, y: 0}, 'happyFace')
        .to(eyebrowsStartCmd2, 1.0, {x: 6, y: -4}, 'happyFace')
        .to(eyebrowsArcCmd2, 1.0, {x1: 17, y1: -20, x2: 28, y2: 0, radius: 10}, 'happyFace')
        .to(eyebrowsEndCmd2, 1.0, {x: 28, y: 0}, 'happyFace')
        .to([eyesCmd, eyesCmd2], 1.0, {x: '+=2', y: '+=2', h: '0', w: '0'}, 'happyFace')
        .to(pink, 1.0, {alpha: 1}, 'happyFace')
    ;

    return [desertFaceTimeline, desertFaceContainer];
}

function getDesertGroundTimeline(x, y) {
    var desertGroundTimeline = new TimelineMax();

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

    function getCreatureContainer() {
        var creatureWrapper = new createjs.Container();
        var creature = new createjs.Shape();
        creature.graphics.beginFill('black')
            .drawCircle(0, 0, 10);
        creatureWrapper.addChild(creature);

        for (var i = 0; i < 12; i++) {
            var spike = new createjs.Shape();
            spike.graphics.beginStroke('black')
                .moveTo(0, i % 2 == 0 ? -13 : -12)
                .lineTo(0, i % 2 == 0 ? 13 : 12);
            spike.rotation = i * 360 / 24 + 15;
            creatureWrapper.addChild(spike);
        }

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('white')
            .drawCircle(-4, -1, 3)
            .drawCircle(4, -1, 3);

        var eyeballs = new createjs.Shape();
        eyeballs.graphics
            .beginFill('black')
            .drawCircle(-3, -1, 1)
            .drawCircle(3, -1, 1);

        creatureWrapper.addChild(eyes);
        creatureWrapper.addChild(eyeballs);

        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2});
        eyesTimeline
            .to(eyes, .1, {scaleY: 0})
            .to(eyes, .1, {scaleY: 1});

        return creatureWrapper;
    }

    var creatureWrapper1 = getCreatureContainer();
    var creatureWrapper2 = getCreatureContainer();
    var creatureWrapper3 = getCreatureContainer();

    creatureWrapper1.scaleX = creatureWrapper1.scaleY
        = creatureWrapper2.scaleX = creatureWrapper2.scaleY
        = creatureWrapper3.scaleX = creatureWrapper3.scaleY
        = 0;

    creatureWrapper2.x -= 24;
    desertGroundContainer.addChild(creatureWrapper1);
    desertGroundContainer.addChild(creatureWrapper2);
    desertGroundContainer.addChild(creatureWrapper3);

    desertGroundTimeline
        .set([creatureWrapper1, creatureWrapper2, creatureWrapper3], {scaleX: 0, scaleY: 0})
        .to([creatureWrapper1, creatureWrapper2], .2, {scaleX: 1, scaleY: 1})
        .to([creatureWrapper1, creatureWrapper2], .2, {y: '+=13'})
        .add('drop')
        .add(new TimelineMax({repeat: 3})
            .to(creatureWrapper2, .6, {y: '-=19.5', rotation: '+=180'})
            .to(creatureWrapper2, .6, {y: '+=19.5', rotation: '+=180'})
            .to(creatureWrapper2, .03, {})
            , 'drop')
        .add(new TimelineMax()
            .to(creatureWrapper1, .3, {x: '+=12', y: '-=13', rotation: '+=90'})
            .to(creatureWrapper1, .3, {x: '+=12', y: '+=13', rotation: '+=90'})
            .to(creatureWrapper1, .4, {y: '-=26', rotation: '+=90'})
            .to(creatureWrapper1, .4, {y: '+=26', rotation: '+=90'})
            .to(creatureWrapper1, .03, {})
            .add(new TimelineMax({repeat: 2})
                .to(creatureWrapper1, .6, {y: '-=15', rotation: '+=180'})
                .to(creatureWrapper1, .6, {y: '+=15', rotation: '+=180'})
                .to(creatureWrapper1, .03, {}))
            , 'drop')
        .add(new TimelineMax()
            .to(creatureWrapper3, .3, {scaleX: 1, scaleY: 1})
            .to(creatureWrapper3, .2, {y: '+=13'})
            .add(new TimelineMax({repeat: 2})
                .to(creatureWrapper3, .6, {y: '-=13', rotation: '+=180'})
                .to(creatureWrapper3, .6, {y: '+=13', rotation: '+=180'})
                .to(creatureWrapper3, .03, {}))
            , 'drop+=0.5')
    ;
    return [desertGroundTimeline, desertGroundContainer];
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

    var earTimeline = new TimelineMax({repeat: -1, repeatDelay: 1.4});
    earTimeline
        .add('s1')
        .to(ear, .2, {rotation: 50}, 's1')
        .to(ear2, .2, {rotation: -50}, 's1')
        .add('s2')
        .to(ear, .2, {rotation: 45}, 's2')
        .to(ear2, .2, {rotation: -45}, 's2')
        .add('s3')
        .to(ear, .2, {rotation: 55}, 's3')
        .to(ear2, .2, {rotation: -55}, 's3')
        .add('s4')
        .to(ear, .2, {rotation: 40}, 's4')
        .to(ear2, .2, {rotation: -40}, 's4');

    return [jackalopeTimeline, jackalopeContainer];
}

function getYetiTimeline(x, y) {
    var yetiTimeline = new TimelineMax();

    var yetiContainer = new createjs.Container();
    yetiContainer.x = x;
    yetiContainer.y = y;

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_DARK_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    yetiContainer.addChild(segmentSky);

    var segmentIce = new createjs.Shape();
    segmentIce.graphics.beginFill(COLOR_ICE_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    yetiContainer.addChild(segmentIce);

    var yetiWrapper = new createjs.Container();

    var body = new createjs.Shape();
    body.graphics
        .beginFill(COLOR_YETI)
        .drawEllipse(-15, -15, 30, 40);

    yetiWrapper.addChild(body);

    var foot = new createjs.Shape();
    foot.graphics
        .beginFill(COLOR_YETI)
        .drawEllipse(0, 16, 26, 10);

    yetiWrapper.addChild(foot);

    yetiContainer.addChild(yetiWrapper);

    return [yetiTimeline, yetiContainer];
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

    var seaMonsterWrapper = new createjs.Container();

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
    seaMonsterWrapper.addChild(seaMonster);

    var eye = new createjs.Shape();
    eye.graphics
        .beginFill('black')
        .drawCircle(0, 2, 2);
    var eyeWrapper = new createjs.Container();
    eyeWrapper.x = 23;
    eyeWrapper.addChild(eye);
    seaMonsterWrapper.addChild(eyeWrapper);

    var eyeTimeline = new TimelineMax({repeat: -1, repeatDelay: 2});
    eyeTimeline
        .to(eye, .2, {scaleY: 0, y: 2})
        .to(eye, .2, {scaleY: 1, y: 0});

    seaMonsterContainer.addChildAt(seaMonsterWrapper, 1);

    seaMonsterTimeline
        .set(seaMonsterCmd, {y: 50, startAngle: 269 * Math.PI / 180, endAngle: -90 * Math.PI / 180})
        .set(seaMonsterCmd2, {h: 7})
        .set(seaMonsterCmd3, {y: 25})
        .set(eyeWrapper, {y: 28})
        .add('head', '+=0.5')
        .add('seaMonster', '+=1')
        .to(seaMonsterCmd2, 1, {h: -40}, 'head')
        .to(seaMonsterCmd3, 1, {y: -22}, 'head')
        .to(eyeWrapper, 1, {y: -19}, 'head')
        .to(seaMonsterCmd, .5, {startAngle: 180 * Math.PI / 180, endAngle: 0 * Math.PI / 180, ease: Sine.easeOut}, 'seaMonster')
        .to(seaMonsterCmd, .5, {y: 25}, 'seaMonster')
    ;

    return [seaMonsterTimeline, seaMonsterContainer];
}

function getSharkTimeline(x, y) {
    var sharkTimeline = new TimelineMax({repeat: -1});

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
        .set(shark, {x: 36, scaleX: 1})
        .to(shark, 2, {x: -19})
        .to(shark, .1, {x: -38, scaleX: -1})
        .to(shark, 2, {x: 17})
        .to(shark, .1, {x: 36, scaleX: 1});

    return [sharkTimeline, sharkContainer];
}

function getSnakeTimeline(x, y) {
    var snakeTimeline = new TimelineMax();

    var snakeContainer = new createjs.Container();
    snakeContainer.x = x;
    snakeContainer.y = y;

    var segmentDesert = new createjs.Shape();
    segmentDesert.graphics.beginFill(COLOR_DESERT)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_DESERT_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

    snakeContainer.addChild(segmentSky);
    snakeContainer.addChild(segmentDesert);

    var snakeWrapper = new createjs.Container();

    var snake = new createjs.Shape();
    var snakeCmd1 = snake.graphics.beginFill(COLOR_SNAKE)
        .rect(-15, 20, 30, 5)
        .command;
    var snakeCmd2 = snake.graphics
        .rect(10, 15, 20, 5)
        .command;
    var snakeCmd3 = snake.graphics
        .rect(-5, 10, 10, 5)
        .command;
    var snakeCmd4 = snake.graphics
        .rect(-2.5, 10, 5, 14)
        .command;

    var head = new createjs.Shape();
    var headCmd = head.graphics
        .beginFill(COLOR_SNAKE)
        .drawEllipse(-2.5, -10, 14, 8)
        .command;

    snakeWrapper.addChild(snake);
    snakeWrapper.addChild(head);

    var eyes = new createjs.Shape();
    eyes.graphics
        .beginFill('black')
        .drawEllipse(6, -8, 2, 2);
    snakeWrapper.addChild(eyes);

    var hands = new createjs.Shape();
    var handsCmd1 = hands.graphics
        .beginFill(COLOR_SNAKE)
        .drawCircle(-15, 0, 5)
        .command;
    var handsCmd2 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(-23, 0, 2)
        .command;
    var handsCmd3 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(-21, -5, 2)
        .command;
    var handsCmd4 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(-17, -8, 2)
        .command;
    var handsCmd5 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(22, 0, 5)
        .command;
    var handsCmd6 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(30, 0, 2)
        .command;
    var handsCmd7 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(28, -5, 2)
        .command;
    var handsCmd8 = hands.graphics
        .endFill().beginFill(COLOR_SNAKE)
        .drawCircle(24, -8, 2)
        .command;

    snakeWrapper.addChild(hands);

    var snakeEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2});
    snakeEyesTimeline
        .to(eyes, .2, {scaleY: 0, y: -7})
        .to(eyes, .2, {scaleY: 1, y: 0});

    snakeContainer.addChild(snakeWrapper);

    snakeTimeline
        .set([snakeCmd1, snakeCmd2, snakeCmd3], {w: 0})
        .set(snakeCmd4, {h: 0})
        .set(headCmd, {w: 0})
        .set(eyes, {alpha: 0})
        .set([handsCmd1, handsCmd2, handsCmd3, handsCmd4, handsCmd5, handsCmd6, handsCmd7, handsCmd8], {radius: 0})
        .to(snakeCmd1, .4, {w: 30})
        .to(snakeCmd2, .35, {w: -20})
        .to(snakeCmd3, .3, {w: 10})
        .to(snakeCmd4, .3, {h: -16})
        .to(headCmd, .3, {w: 14})
        .set(eyes, {alpha: 1})
        .to(handsCmd1, .2, {radius: 5}, '+=.65')
        .to([handsCmd2, handsCmd3, handsCmd4], .2, {radius: 2})
        .to(handsCmd5, .2, {radius: 5})
        .to([handsCmd6, handsCmd7, handsCmd8], .2, {radius: 2})
    ;

    return [snakeTimeline, snakeContainer];
}

function getHugTimeline(x, y) {
    var hugTimeline = new TimelineMax();

    var hugContainer = new createjs.Container();
    hugContainer.x = x;
    hugContainer.y = y;

    var background = new createjs.Shape();
    background.graphics.beginFill(COLOR_SKY)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    hugContainer.addChild(background);

    var startAngle = 50;
    var endAngle = 75;
    var tree = new createjs.Shape();
    tree.graphics.beginFill(COLOR_JACKALOPE_HORN)
        .arc(0, 0, CIRCLE_RADIUS, -endAngle * Math.PI / 180, -startAngle * Math.PI / 180)
        .arc(0, 0, CIRCLE_RADIUS, startAngle * Math.PI / 180, endAngle * Math.PI / 180);
    hugContainer.addChild(tree);

    var COLOR_FACE = '#FFDA99';
    var COLOR_HAIR = '#000000';
    var COLOR_NOBITA_SHIRT = 'yellow';
    var COLOR_NOBITA_PANTS = 'blue';

    var nobitaWrapper = new createjs.Container();
    var face = new createjs.Shape();
    face.graphics.beginFill(COLOR_FACE)
        .arc(0, 0, 20, -20 * Math.PI / 180, 200 * Math.PI / 180);
    nobitaWrapper.addChild(face);

    var ears = new createjs.Shape();
    ears.graphics.beginFill(COLOR_FACE)
        .arc(-20, 2, 4, 90 * Math.PI / 180, 270 * Math.PI / 180)
        .arc(20, 2, 4, -90 * Math.PI / 180, 90 * Math.PI / 180);
    nobitaWrapper.addChild(ears);

    var hair = new createjs.Shape();
    hair.graphics.beginFill(COLOR_HAIR)
        .arc(0, 0, 20, 200 * Math.PI / 180, -20 * Math.PI / 180)
        .endFill().beginFill(COLOR_HAIR)
        .arc(0, 0, 20, -40 * Math.PI / 180, -2 * Math.PI / 180)
        .lineTo(16, -2)
        .lineTo(13, -10)
        .endFill().beginFill(COLOR_HAIR)
        .arc(0, 0, 20, 220 * Math.PI / 180, 182 * Math.PI / 180, true)
        .lineTo(-16, -2)
        .lineTo(-13, -10)
    ;
    nobitaWrapper.addChild(hair);

    var eyesWrapper = new createjs.Container();
    var eyes = new createjs.Shape();
    eyes.graphics.beginFill('white')
        .drawEllipse(-14, -5, 14, 16)
        .drawEllipse(0, -5, 14, 16);
    var eyeballs = new createjs.Shape();
    eyeballs.graphics.beginFill('black')
        .drawEllipse(-6, 2, 3, 3)
        .drawEllipse(3, 2, 3, 3);
    eyesWrapper.addChild(eyes);
    eyesWrapper.addChild(eyeballs);
    nobitaWrapper.addChild(eyesWrapper);

    var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2});
    eyesTimeline
        .to(eyeballs, .2, {scaleY: 0, y: 3.5})
        .to(eyeballs, .2, {scaleY: 1, y: 0});

    var deadEyesWrapper = new createjs.Container();
    deadEyesWrapper.alpha = 0;
    var deadEye = new createjs.Shape();
    deadEye.graphics.beginStroke('black')
        .moveTo(-11, -2)
        .lineTo(-3, 8)
        .moveTo(-11, 8)
        .lineTo(-3, -2);
    var deadEye2 = new createjs.Shape();
    deadEye2.graphics.beginStroke('black')
        .moveTo(3, -2)
        .lineTo(11, 8)
        .moveTo(3, 8)
        .lineTo(11, -2);
    deadEyesWrapper.addChild(deadEye);
    deadEyesWrapper.addChild(deadEye2);
    nobitaWrapper.addChild(deadEyesWrapper);

    var shirt = new createjs.Shape();
    shirt.graphics.beginFill(COLOR_NOBITA_SHIRT)
        .rect(-12, 20, 24, 15);
    nobitaWrapper.addChild(shirt);

    var pants = new createjs.Shape();
    pants.graphics.beginFill(COLOR_NOBITA_PANTS)
        .rect(-12, 35, 24, 8);
    nobitaWrapper.addChild(pants);

    var limbs = new createjs.Shape();
    limbs.graphics.beginFill(COLOR_FACE)
        .rect(12, 22, 10, 5)
        .arc(22, 24.5, 2.5, -90 * Math.PI / 180, 90 * Math.PI / 180)
        .rect(12, 37, 10, 5)
        .arc(22, 39.5, 2.5, -90 * Math.PI / 180, 90 * Math.PI / 180);
    nobitaWrapper.addChild(limbs);

    nobitaWrapper.x += 01;
    nobitaWrapper.y -= 10;
    hugContainer.addChild(nobitaWrapper);

    return [hugTimeline, hugContainer, eyesWrapper, nobitaWrapper, deadEyesWrapper];
}

function getQuestionTimeline(x, y) {
    var questionTimeline = new TimelineMax({repeat: 1, ease: Bounce.easeOut});

    var questionContainer = new createjs.Container();
    questionContainer.x = x;
    questionContainer.y = y;

    var background = new createjs.Shape();
    background.graphics.beginFill(COLOR_DESERT_SKY)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    questionContainer.addChild(background);

    var questionMark = new createjs.Shape();
    questionMark.graphics
        .setStrokeStyle(4, 'round', 'round')
        .beginStroke('red')
        .arc(0, -10, 10, 180 * Math.PI / 180, 90 * Math.PI / 180)
        .lineTo(0, 8)
        .endStroke().beginStroke('red')
        .drawCircle(0, 18, 1);

    questionContainer.addChild(questionMark);

    questionTimeline
        .to(questionMark, .07, {rotation: 25, repeat: 1, yoyo: true})
        .to(questionMark, .07, {rotation: -25, repeat: 1, yoyo: true});

    return [questionTimeline, questionContainer];
}

function getSpikeTimeline(x, y) {
    var spikeTimeline = new TimelineMax();

    var spikeContainer = new createjs.Container();
    spikeContainer.x = x;
    spikeContainer.y = y;

    var background = new createjs.Shape();
    background.graphics.beginFill(COLOR_DESERT_SKY)
        .drawCircle(0, 0, CIRCLE_RADIUS);
    spikeContainer.addChild(background);

    var cactusWrapper = new createjs.Container();
    var cactus = new createjs.Shape();
    cactus.graphics.beginFill(COLOR_CACTUS)
        .arc(0, 0, CIRCLE_RADIUS, -75 * Math.PI / 180, 75 * Math.PI / 180);
    cactusWrapper.addChild(cactus);

    var cactusStripe = new createjs.Shape();
    var endAngle = 63;
    var startAngle = 55;
    var endAngle2 = 42;
    var startAngle2 = 30;

    cactusStripe.graphics
        .beginFill(COLOR_CACTUS_STRIPE)
        .arc(0, 0, CIRCLE_RADIUS, -endAngle * Math.PI / 180, -startAngle * Math.PI / 180)
        .arc(0, 0, CIRCLE_RADIUS, startAngle * Math.PI / 180, endAngle * Math.PI / 180)
        .endFill().beginFill(COLOR_CACTUS_STRIPE)
        .arc(0, 0, CIRCLE_RADIUS, -endAngle2 * Math.PI / 180, -startAngle2 * Math.PI / 180)
        .arc(0, 0, CIRCLE_RADIUS, startAngle2 * Math.PI / 180, endAngle2 * Math.PI / 180)
    ;
    cactusWrapper.addChild(cactusStripe);

    var spike = new createjs.Shape();
    spike.graphics.beginFill(COLOR_CACTUS)
        .moveTo(13, -30)
        .lineTo(-11, -36)
        .lineTo(13, -42)
        .moveTo(13, -12)
        .lineTo(-11, -18)
        .lineTo(13, -24)
        .moveTo(13, 6)
        .lineTo(-11, 0)
        .lineTo(13, -6)
        .moveTo(13, 24)
        .lineTo(-11, 18)
        .lineTo(13, 12)
        .moveTo(13, 42)
        .lineTo(-11, 36)
        .lineTo(13, 30);
    cactusWrapper.addChildAt(spike, 0);

//    var knife1 = new createjs.Shape();
//    knife1.graphics.beginFill(COLOR_KNIFE)
//        .moveTo(20, -12)
//        .lineTo(-4, -18)
//        .lineTo(20, -24);
//    cactusWrapper.addChildAt(knife1, 0);
//
//    var knife2 = new createjs.Shape();
//    knife2.graphics.beginFill(COLOR_KNIFE)
//        .moveTo(20, 6)
//        .lineTo(-4, 0)
//        .lineTo(20, -6);
//    cactusWrapper.addChildAt(knife2, 0);
//
//    var knife3 = new createjs.Shape();
//    knife3.graphics.beginFill(COLOR_KNIFE)
//        .moveTo(20, 24)
//        .lineTo(-4, 18)
//        .lineTo(20, 12);
//    cactusWrapper.addChildAt(knife3, 0);
//    knife1.alpha = knife2.alpha = knife3.alpha = 0;

    spikeContainer.addChild(cactusWrapper);

    spikeTimeline
        .set(spike, {x: "+=17"})
        .to(spike, 1, {x: "-=10", ease: Back.easeOut.config(4)})
    ;

    var knifeSet1 = new createjs.Container();
    var knifeSet2 = new createjs.Container();
    var knifeSet3 = new createjs.Container();
    var knifeSet4 = new createjs.Container();
    var knifeSet5 = new createjs.Container();
    var knifeSet6 = new createjs.Container();
    var knifeSet7 = new createjs.Container();

    for (var i = 0; i < 35; i++) {
        var knife = new createjs.Shape();
        knife.graphics.beginFill(COLOR_KNIFE)
            .moveTo(25, ((i % 5) * 9) - 15)
            .lineTo(13, ((i % 5) * 9) - 18)
            .lineTo(25, ((i % 5) * 9) - 21);
        if (i < 5) {
            knifeSet1.addChild(knife);
        }
        else if (i < 10) {
            knifeSet2.addChild(knife);
        }
        else if (i < 15) {
            knifeSet3.addChild(knife);
        }
        else if (i < 20) {
            knifeSet4.addChild(knife);
        }
        else if (i < 25) {
            knifeSet5.addChild(knife);
        }
        else if (i < 30) {
            knifeSet6.addChild(knife);
        }
        else {
            knifeSet7.addChild(knife);
        }
    }

    cactusWrapper.addChildAt(knifeSet1, 0);
    cactusWrapper.addChildAt(knifeSet2, 0);
    cactusWrapper.addChildAt(knifeSet3, 0);
    cactusWrapper.addChildAt(knifeSet4, 0);
    cactusWrapper.addChildAt(knifeSet5, 0);
    cactusWrapper.addChildAt(knifeSet6, 0);
    cactusWrapper.addChildAt(knifeSet7, 0);

    return [spikeTimeline, spikeContainer, [knifeSet1, knifeSet2, knifeSet3, knifeSet4, knifeSet5, knifeSet6, knifeSet7]];
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