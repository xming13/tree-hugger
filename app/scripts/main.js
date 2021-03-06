(function () {
    // Constants
    var CIRCLE_RADIUS = 50;
    var CIRCLE_RADIUS_SMALL = CIRCLE_RADIUS * 3 / 4;
    var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
    var SPACING = 5;
    var CANVAS_HEIGHT = 320;
    var CANVAS_WIDTH = 320;

    var LEFT_0 = -CIRCLE_RADIUS;
    var TOP_0 = LEFT_0;
    var LEFT_1 = LEFT_0 + SPACING + CIRCLE_DIAMETER;
    var TOP_1 = LEFT_1;
    var LEFT_2 = LEFT_1 + SPACING + CIRCLE_DIAMETER;
    var TOP_2 = LEFT_2;
    var LEFT_3 = LEFT_2 + SPACING + CIRCLE_DIAMETER;
    var TOP_3 = LEFT_3;
    var LEFT_4 = LEFT_3 + SPACING + CIRCLE_DIAMETER;
    var TOP_4 = LEFT_4;
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

    var COLOR_TREE_TRUNK = '#F4A71C';
    var COLOR_TREE_LEAVES = '#12e627';
    var COLOR_TREE_FRUIT = '#FF6666';

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
    var COLOR_BEE_BODY_STRIPE = 'black';

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
    var COLOR_YETI_BLUE = '#f0ffff';
    var COLOR_YETI_DARK_BLUE = '#B0E0E6';
    var COLOR_SEA_MONSTER = 'darkgreen';
    var COLOR_SHARK = '#CCCCCC';

    var COLOR_SNAKE = '#F4A460';
    var COLOR_KNIFE = 'darkgrey';
    var COLOR_KNIFE_HANDLE = 'grey';

    // Stage
    var stage;

    // Popcorn
    var pop;
    var popCanPlay = false;

    // Loading
    var loadingWrapper;
    var loadingTimeline;
    var isLoadingFinished;

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
    var PAGE_SIZE = 6;
    var currentPage = 1;

    // Info
    var infoWrapper;

    // for debugging
    var DEBUG = false;
    var START_TIME = DEBUG ? 0 : 0;
//        168 : 0;
    var debugObjs = null;
    //getNContainer(LEFT_2, TOP_1);

    function isMobileOrTablet() {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        //console.log(check, 'isMobileOrTablet');
        return check;
    }

    function init() {
        stage = new createjs.Stage('canvas');
        if (!isMobileOrTablet()) {
            stage.enableMouseOver(10);
        }

        // Ticker
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        createjs.Ticker.addEventListener('tick', function () {
            //console.log(TweenMax.getAllTweens().length);
        });

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
        requestMp3.open('GET', 'audio/Antsy_Pants_-_Tree_Hugger_64.mp3', true);
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
        };
        requestMp3.onerror = function () {
            console.log('requestMp3 onerror: ' + e.message);
        };

        requestMp3.send();

        var lyrics = [
            "[ti:Tree Hugger]",
            "[ar:Kimya Dawson]",
            "[al:JUNO OST]",
            "[00:05.00]Song: Tree Hugger",
            "[00:11.50]Artist: Antsy Pants & Kimya Dawson",
            "[00:18.00]",
            "[00:19.20]The flower said, \"I wish I was a tree.\"",
            "[00:21.14]The tree said, \"I wish I could be",
            "[00:23.50]A different kind of tree.\"",
            "[00:25.78]The cat wished that it was a bee,",
            "[00:28.52]The turtle wished that it could fly,",
            "[00:30.59]Really high into the sky,",
            "[00:32.92]Over rooftops and then dive",
            "[00:35.65]Deep into the sea.",
            "[00:38.04]And in the sea there is a fish,",
            "[00:40.16]A fish that has a secret wish;",
            "[00:42.58]A wish to be a big cactus,",
            "[00:44.43]With a pink flower on it.",
            "[00:47.26]And in the sea there is a fish,",
            "[00:49.60]A fish that has a secret wish;",
            "[00:52.02]A wish to be a big cactus,",
            "[00:53.87]With a pink flower on it.",
            "[00:56.45]And the flower",
            "[00:58.35]Would be its offering",
            "[01:01.01]Of love, to the desert.",
            "[01:05.50]And the desert,",
            "[01:07.81]So dry and lonely,",
            "[01:10.08]That the creatures all",
            "[01:12.07]Appreciate the effort.",
            "[01:14.80]",
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
            "[01:53.71]The flower said, \"I wish I was a tree.\"",
            "[01:55.65]The tree said, \"I wish I could be",
            "[01:58.01]A different kind of tree.\"",
            "[02:00.29]The cat wished that it was a bee,",
            "[02:03.03]The turtle wished that it could fly,",
            "[02:05.50]Really high into the sky,",
            "[02:07.83]Over rooftops and then dive",
            "[02:10.56]Deep into the sea.",
            "[02:12.95]And in the sea there is a fish,",
            "[02:15.07]A fish that has a secret wish;",
            "[02:17.49]A wish to be a big cactus,",
            "[02:19.34]With a pink flower on it.",
            "[02:22.17]And in the sea there is a fish,",
            "[02:24.51]A fish that has a secret wish;",
            "[02:26.93]A wish to be a big cactus,",
            "[02:28.78]With a pink flower on it.",
            "[02:31.36]And the flower",
            "[02:33.26]Would be its offering",
            "[02:35.92]Of love, to the desert.",
            "[02:40.41]And the desert,",
            "[02:42.72]So dry and lonely,",
            "[02:44.99]That the creatures all,",
            "[02:46.98]Appreciate the effort.",
            "[02:49.71]"];
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
            isLoadingFinished = true;
        });
        pop.on('ended', function () {
            setTimeout(function () {
                //console.log('pop ended');
                ga('send', 'event', 'Ending', 'finish', 'Ending Finish', {
                    nonInteraction: true
                });
                stage.removeChild(animationWrapper);
                renderMenu();
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
                    }
                }
            }

            //sort lrcArr
            lrcArr.sort(function (a, b) {
                return a.starttime - b.starttime;
            });

            return lrcArr;
        }
    }

    // Render
    function renderLoading() {
        isLoadingFinished = false;

        if (!loadingWrapper) {
            loadingWrapper = new createjs.Container();
        }
        if (loadingWrapper.parent != stage) {
            stage.addChild(loadingWrapper);
        }
        loadingWrapper.removeAllChildren();

        var loadingText = new createjs.Text('Loading', '18px Happy Monkey', '#000');
        loadingText.x = CANVAS_WIDTH / 2;
        loadingText.y = 80;
        loadingText.lineWidth = CANVAS_WIDTH - 30;
        loadingText.textAlign = 'center';
        loadingWrapper.addChild(loadingText);

        var waitingText = new createjs.Text('This might take a while...', '16px Happy Monkey', '#000');
        waitingText.x = CANVAS_WIDTH / 2;
        waitingText.y = 220;
        waitingText.lineWidth = CANVAS_WIDTH - 80;
        waitingText.lineHeight = 20;
        waitingText.textAlign = 'center';
        loadingWrapper.addChild(waitingText);

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

        loadingTimeline = new TimelineMax({
            repeat: -1,
            repeatDelay: .3,
            onRepeat: function () {
                if (isLoadingFinished) {
                    loadingTimeline.stop().kill();
                    renderMenu();
                }
            }
        });
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
        TweenMax.killAll();

        if (!menuWrapper) {
            menuWrapper = new createjs.Container();
        }
        if (menuWrapper.parent != stage) {
            stage.addChild(menuWrapper);
        }
        menuWrapper.removeAllChildren();

        stage.removeChild(loadingWrapper);
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
            ga('send', 'event', 'Animation', 'start', 'Start Animation');
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
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
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
            ga('send', 'event', 'Info', 'view', 'View Info');
            renderInfo();
        });
        menuWrapper.addChild(btnInfoWrapper);

        if (DEBUG && debugObjs) {
            var timeline = debugObjs[0];
            var container = debugObjs[1];
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

        mainTimeline = new TimelineMax({
            paused: true,
            autoRemoveChildren: true,
            onStart: function () {
                //console.log('mainTimeline onStart');
            },
            onComplete: function () {
                //console.log('mainTimeline onComplete');
            }
        });
        mainTimeline.name = 'mainTimeline';

        function getOpeningTimeline() {
            var openingTimeline = new TimelineMax({
                autoRemoveChildren: true,
                paused: true,
                onStart: function () {
                }
            });
            openingTimeline.name = 'openingTimeline';

            var defaultContainer = getDefaultContainer(LEFT_2, TOP_2);
            var springContainer = getSpringContainer(LEFT_2, TOP_2);
            var summerContainer = getSummerContainer(LEFT_2, TOP_2);
            var autumnContainer = getAutumnContainer(LEFT_2, TOP_2);
            var winterContainer = getWinterContainer(LEFT_2, TOP_2);
            var seaContainer = getSeaContainer(LEFT_2, TOP_2);
            var desertGroundContainer = getDesertGroundContainer(LEFT_2, TOP_2);
            var iceContainer = getIceContainer(LEFT_2, TOP_2);
            var iceSeaContainer = getIceSeaContainer(LEFT_2, TOP_2);

            var defaultCreature = getCreatureContainer();
            var springCreature = getCreatureContainer();
            var summerCreature = getCreatureContainer();
            var autumnCreature = getCreatureContainer();
            var winterCreature = getCreatureContainer();
            var seaCreature = getCreatureContainer();
            var desertGroundCreature = getCreatureContainer();
            var iceCreature = getCreatureContainer();
            var iceSeaCreature = getCreatureContainer();

            defaultContainer.addChild(defaultCreature);
            springContainer.addChild(springCreature);
            summerContainer.addChild(summerCreature);
            autumnContainer.addChild(autumnCreature);
            winterContainer.addChild(winterCreature);
            seaContainer.addChild(seaCreature);
            desertGroundContainer.addChild(desertGroundCreature);
            iceContainer.addChild(iceCreature);
            iceSeaContainer.addChild(iceSeaCreature);

            var containers = [defaultContainer, springContainer, summerContainer, autumnContainer, winterContainer,
                seaContainer, desertGroundContainer, iceContainer, iceSeaContainer];
            var creatures = [defaultCreature, springCreature, summerCreature, autumnCreature, winterCreature,
                seaCreature, desertGroundCreature, iceCreature, iceSeaCreature];

            containers.forEach(function (container) {
                container.scaleX = container.scaleY = 0;
            });
            creatures.forEach(function (creature) {
                creature.y += 13;
            });

            var creatureTimeline = new TimelineMax({repeat: -1})
                .to(creatures, .6, {y: '-=19.5', rotation: '+=180'})
                .to(creatures, .6, {y: '+=19.5', rotation: '+=180'})
                .to(creatures, .03, {});

            animationWrapper.addChild(iceSeaContainer);
            animationWrapper.addChild(iceContainer);
            animationWrapper.addChild(desertGroundContainer);
            animationWrapper.addChild(seaContainer);
            animationWrapper.addChild(winterContainer);
            animationWrapper.addChild(autumnContainer);
            animationWrapper.addChild(summerContainer);
            animationWrapper.addChild(springContainer);
            animationWrapper.addChild(defaultContainer);

            var durationPosition = .5;
            var durationAppear = .4;
            var delay = '+=1';
            openingTimeline
                .to(defaultContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut}, delay)
                .to(defaultContainer, durationPosition, {x: LEFT_1, y: TOP_1, ease: Circ.easeOut}, delay)
                .to(springContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(springContainer, durationPosition, {x: LEFT_2, y: TOP_1, ease: Circ.easeOut}, delay)
                .to(summerContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(summerContainer, durationPosition, {x: LEFT_3, y: TOP_1, ease: Circ.easeOut}, delay)
                .to(autumnContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(autumnContainer, durationPosition, {x: LEFT_1, y: TOP_2, ease: Circ.easeOut}, delay)
                .to(winterContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(winterContainer, durationPosition, {x: LEFT_3, y: TOP_2, ease: Circ.easeOut}, delay)
                .to(seaContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(seaContainer, durationPosition, {x: LEFT_1, y: TOP_3, ease: Circ.easeOut}, delay)
                .to(desertGroundContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(desertGroundContainer, durationPosition, {x: LEFT_2, y: TOP_3, ease: Circ.easeOut}, delay)
                .to(iceContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(iceContainer, durationPosition, {x: LEFT_3, y: TOP_3, ease: Circ.easeOut}, delay)
                .to(iceSeaContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(iceSeaContainer, durationPosition, {x: LEFT_2, y: TOP_2, ease: Circ.easeOut}, delay)
                .to(containers, durationPosition, {scaleX: 0, scaleY: 0, ease: Circ.easeOut}, '+=.4')
                .add(function () {
                    creatureTimeline.stop().kill();

                    creatures.forEach(function (creature) {
                        creature.stopKillTimeline();
                    });
                })
                // delay .2 sec
                .to({}, .2, {});
            //console.log(openingTimeline.duration(), 'openingTimeline.duration()');
            //console.log(openingTimeline.duration(), 'openingTimeline.duration()');
            return openingTimeline;
        }

        function getFlowerToDesertTimeline() {
            var flowerToDesertTimeline = new TimelineMax({
                autoRemoveChildren: true,
                paused: true,
                onStart: function () {
                }
            });

            flowerToDesertTimeline
                .add('next', '+=56.515');

            flowerToDesertTimeline.eventCallback('onStart', function () {
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
                    .to(treeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition')
                    .add(function () {
                        flowerTimeline.stop().kill();
                        //console.log('flowerTimeline.stop().kill();');
                    });

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
                            //console.log('stopkill tree and seasons timeline');
                            // remove all seasons' animation
                            treeTimeline.stop().kill();
                            springTimeline.stop().kill();
                            summerTimeline.stop().kill();
                            summerContainer.stopKillTimeline();
                            autumnTimeline.stop().kill();
                            winterTimeline.stop().kill();
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
                    .to(catContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition')
                ;

                animationWrapper.addChild(flowerContainer);
                animationWrapper.addChild(treeContainer);
                animationWrapper.addChild(catContainer);

                var tlPart1 = new TimelineMax({
                    autoRemoveChild: true,
                    paused: true,
                    onStart: function () {
                        //console.log('tlPart1.onStart', (new Date()).toISOString());
                        //console.log(TweenMax.getAllTweens().length, 'tlPart1 onStart');
                    },
                    onComplete: function () {
                        //console.log(TweenMax.getAllTweens().length, 'tlPart1 onComplete');

                        var tlPart2 = new TimelineMax({
                            autoRemoveChild: true,
                            paused: true,
                            onStart: function () {
                                //console.log(TweenMax.getAllTweens().length, 'tlPart2 onStart');
                            },
                            onComplete: function () {
                                //console.log(TweenMax.getAllTweens().length, 'tlPart2 onComplete');

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
                                    .add(function () {
                                        cloudContainer3.stopKillTimeline();
                                        //console.log('cloudContainer3.stopKillTimeline()');
                                    })
                                    .add('turtleGone', '+=0')
                                    .to(turtleWrapper, 1.2, {y: "+=" + CIRCLE_RADIUS / 2, alpha: 0}, 'turtleGone')
                                    .add(function () {
                                        turtleContainer.stopKillTimeline();
                                        //console.log('turtleContainer.stopKillTimeline()');
                                    })
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
                                    .to(fishContainer, 8.55, {x: LEFT_0, startAt: {x: LEFT_4}}, 'transition7')
                                    .to(cactusContainer, .5, {scaleX: 0, scaleY: 0, ease: Power2.easeOut })
                                    .add('transition7b', '+=0.5')
                                    .to(fishContainer, 8.55, {x: LEFT_4, startAt: {x: LEFT_0, scaleX: -1}}, 'transition7b')
                                    .add(cactusTimeline, 'transition7+=5')
                                    .add(cactusTimeline2, 'transition7b+=5')
                                    .add(function () {
                                        cactusContainer.stopKillTimeline();
                                        //console.log('cactusContainer.stopKillTimeline()');
                                        cactusTimeline.stop().kill();
                                        //console.log('cactusTimeline.stopKillTimeline()');
                                    }, 'transition7b')
                                    .add(function () {
                                        fishContainer.stopKillTimeline();
                                        //console.log('fishContainer.stopKillTimeline()');
                                    })
                                ;

                                animationWrapper.addChildAt(seaWaveContainer, 0);
                                animationWrapper.addChild(seaContainer);
                                animationWrapper.addChild(fishContainer);
                                animationWrapper.addChild(cactusContainer);
                                animationWrapper.addChild(cactusContainer2);

                                var tlPart3 = new TimelineMax({
                                    autoRemoveChild: true,
                                    paused: true,
                                    onStart: function () {
                                        //console.log(TweenMax.getAllTweens().length, 'tlPart3 onStart');
                                    },
                                    onComplete: function () {
                                        //console.log(TweenMax.getAllTweens().length, 'tlPart3 onComplete');

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
                                                seaContainer.stopKillTimeline();
                                                //console.log('seaContainer.stopKillTimeline();');
                                            }, 'overlay')
                                            .to(overlay, .5, {alpha: .6, startAt: {alpha: 0}}, 'overlay')
                                            .to(cactusFlowerWrapper2, 1.2, {x: LEFT_2, y: TOP_2, scaleX: 3, scaleY: 3, ease: Power3.easeIn}, 'overlay')
                                            .add(new TimelineMax({delay: .6, autoRemoveChildren: true})
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
                                            .add(desertGroundTimeline1, 'desert+=6.3')
                                            .add(desertGroundTimeline2, 'desert+=6.3')
                                        ;

                                        var transitionTimeline9 = new TimelineMax();
                                        transitionTimeline9
                                            .add('transition9')
                                            .to([desertGroundContainer1, desertGroundContainer2, cactusContainer2, desertContainer1, desertContainer2, desertFaceContainer],
                                            .5, {x: "-=" + ((CIRCLE_DIAMETER + SPACING) * 3), ease: Circ.easeOut}, 'transition9')
                                            .add(function () {
                                                desertFaceContainer.stopKillTimeline();
                                                desertGroundContainer1.stopKillTimeline();
                                                desertGroundContainer2.stopKillTimeline();
                                                cactusContainer2.stopKillTimeline();
                                                //console.log('desertFaceContainer.stopKillTimeline();');
                                                //console.log('desertGroundContainer1.stopKillTimeline();');
                                                //console.log('desertGroundContainer2.stopKillTimeline();');
                                                //console.log('cactusContainer2.stopKillTimeline();');
                                            });

                                        animationWrapper.addChild(overlayContainer);
                                        animationWrapper.addChild(desertGroundContainer1);
                                        animationWrapper.addChild(desertGroundContainer2);
                                        animationWrapper.addChild(desertContainer1);
                                        animationWrapper.addChild(desertContainer2);
                                        animationWrapper.addChild(desertFaceContainer);
                                        hearts.forEach(function (heartContainer) {
                                            animationWrapper.addChild(heartContainer);
                                        });

                                        var tlPart4 = new TimelineMax({
                                            autoRemoveChild: true,
                                            paused: true,
                                            onStart: function () {
                                                //console.log(TweenMax.getAllTweens().length, 'tlPart4 onStart');
                                            },
                                            onComplete: function () {
                                                //console.log('tlPart4.onComplete', (new Date()).toISOString());
                                                //console.log(TweenMax.getAllTweens().length, 'tlPart4 onComplete');
                                            }
                                        });

                                        tlPart4
                                            .add('next', '+=19.08')
                                            .add(transitionTimeline8)
                                            .add(transitionTimeline9, 'next');
                                        tlPart4.play();
                                        //console.log(tlPart4.duration(), 'tlPart4.duration()');

                                    }
                                });

                                tlPart3
                                    .add(transitionTimeline6)
                                    .add('fish')
//                                    .add('desert', '+=18.1')
//                                    .add('desertend', 'desert+=19.58')
//                                    .add('next', 'desertend+=0.4')
                                    .add(transitionTimeline7, 'fish')
//                                    .add(transitionTimeline8, 'desert')
//                                    .add(transitionTimeline9, 'next');

                                tlPart3.play();
                                //console.log(tlPart3.duration(), 'tlPart3.duration()');
                            }
                        });

                        var turtleObjs = getTurtleTimeline(LEFT_4, TOP_2);
                        var turtleTimeline = turtleObjs[0];
                        var turtleContainer = turtleObjs[1];
                        var turtleWrapper = turtleObjs[2];

                        var transitionTimeline3 = new TimelineMax();
                        transitionTimeline3
                            .add('transition3')
                            .to(catContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition3')
                            .to(turtleContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition3')
                        ;

                        var skyContainer = new createjs.Container();
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
                            .to(cloudContainer2, 2.4, {y: TOP_4}, 'transition4')
                            .add(function () {
                                cloudContainer1.stopKillTimeline();
                                cloudContainer2.stopKillTimeline();
                            });

                        var roofTopObjs = getRoofTopTimeline(LEFT_4, TOP_3);
                        var roofTopContainer = roofTopObjs[1];

                        var cloudObjs3 = getCloudTimeline(LEFT_4, TOP_1);
                        var cloudContainer3 = cloudObjs3[1];

                        var transitionTimeline5 = new TimelineMax();

                        transitionTimeline5
                            .add('transition5')
                            .to(cloudContainer3, 3, {x: LEFT_2}, 'transition5')
                            .to(roofTopContainer, 2.8, {x: LEFT_0}, 'transition5')
                            .add(function () {
                                roofTopContainer.stopKillTimeline();
                            });

                        tlPart2.add(transitionTimeline3)
                            .add(turtleTimeline, '+=.4')
                            .add('tran5', '+=2.5')
                            .add(transitionTimeline4, '+=.1')
                            .add(transitionTimeline5, 'tran5')
                            .add(function () {
                                // this will be done in tlPart3
//                                turtleContainer.stopKillTimeline();
//                                cloudContainer3.stopKillTimeline();
//                                //console.log('turtleContainer cloudContainer3.stop().kill();');
                            });

                        animationWrapper.addChild(turtleContainer);
                        animationWrapper.addChildAt(skyContainer, animationWrapper.getNumChildren() - 1);
                        animationWrapper.addChild(cloudContainer1);
                        animationWrapper.addChild(cloudContainer2);
                        animationWrapper.addChild(cloudContainer3);
                        animationWrapper.addChild(roofTopContainer);

                        tlPart2.play();
                        //console.log(tlPart2.duration(), 'tlPart2.duration()');
                    }
                });

                tlPart1.add('flower')
                    .add(flowerTimeline)
                    .add(transitionTimeline, '+=0.4')
                    .add('tree')
                    .add(treeTimeline, 'tree')
                    .add(transitionSeasonTimeline, 'tree')
                    .add(transitionTimeline2)
                    .add(catTimeline, '-=.3')
                    .add(function () {
                        transitionTimeline.stop().kill();
                        //console.log('transitionTimeline.stop().kill();');

                        transitionSeasonTimeline.stop().kill();
                        //console.log('transitionSeasonTimeline.stop().kill();');

                        transitionTimeline2.stop().kill();
                        //console.log('transitionTimeline2.stop().kill();');

                        catTimeline.stop().kill();
                        //console.log('catTimeline.stop().kill();');
                    });
                tlPart1.play();
                //console.log(tlPart1.duration(), 'tlPart1.duration()');
            });

            return flowerToDesertTimeline;
        }

        function getIceWorldTimeline() {
            var iceWorldTimeline = new TimelineMax({
                autoRemoveChild: true,
                paused: true,
                onStart: function () {
                    //console.log('iceWorld.onStart', (new Date()).toISOString());
                    var jackalopeObjs = getJackalopeTimeline(LEFT_4, TOP_2);
                    var jackalopeContainer = jackalopeObjs[1];

                    var transitionTimeline9b = new TimelineMax();
                    transitionTimeline9b
                        .add('transition9b')
                        .to(jackalopeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition9b');

                    var yetiObjs = getYetiTimeline(LEFT_4, TOP_2);
                    var yetiTimeline = yetiObjs[0];
                    var yetiContainer = yetiObjs[1];
                    var yetiObjs2 = getYetiTimeline(LEFT_0, TOP_2);
                    var yetiTimeline2 = yetiObjs2[0];
                    var yetiContainer2 = yetiObjs2[1];

                    var transitionTimeline10 = new TimelineMax();
                    transitionTimeline10
                        .add('transition10')
                        .to(jackalopeContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition10')
                        .to(yetiContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition10')
                        .add(function () {
                            jackalopeContainer.stopKillTimeline();
                        });

                    var transitionTimeline11 = new TimelineMax();
                    transitionTimeline11
                        .add('transition11')
                        .add('move', '+=1.5')
                        .to(yetiContainer, 3, {x: LEFT_4}, 'transition11')
                        .add(yetiTimeline, 'transition11')
                        .to(yetiContainer2, 3, {x: LEFT_2}, 'move')
                        .add(yetiTimeline2, 'move')
                        .add(function () {
                            yetiContainer.stopKillTimeline();
                        });

                    var seaMonsterObjs = getSeaMonsterTimeline(LEFT_4, TOP_2);
                    var seaMonsterTimeline = seaMonsterObjs[0];
                    var seaMonsterContainer = seaMonsterObjs[1];

                    var seaMonsterObjs2 = getSeaMonsterTimeline(LEFT_0, TOP_2);
                    var seaMonsterContainer2 = seaMonsterObjs2[1];

                    var transitionTimeline12 = new TimelineMax();
                    transitionTimeline12
                        .add('transition12')
                        .to(yetiContainer2, .5, {x: LEFT_0}, 'transition12')
                        .to(seaMonsterContainer, .5, {x: LEFT_2}, 'transition12')
                        .add(function () {
                            yetiContainer2.stopKillTimeline();
                        });

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
                        .to(sharkContainer2, .2, {scaleX: 1, scaleY: 1, ease: Circ.easeIn}, 'transition13+=1.5')
                        .add(function () {
                            seaMonsterContainer.stopKillTimeline();
                        });

                    animationWrapper.addChild(jackalopeContainer);
                    animationWrapper.addChild(yetiContainer);
                    animationWrapper.addChild(yetiContainer2);
                    animationWrapper.addChild(seaMonsterContainer);
                    animationWrapper.addChild(seaMonsterContainer2);
                    animationWrapper.addChild(sharkContainer);
                    animationWrapper.addChild(sharkContainer2);

                    var tlPart1 = new TimelineMax({
                        autoRemoveChildren: true,
                        paused: true,
                        onStart: function () {
                            //console.log('iceWorld.tlPart1.onStart', (new Date()).toISOString());

                            //console.log(TweenMax.getAllTweens().length, 'iceWorldTimeline onStart');
                        },
                        onComplete: function () {
                            //console.log(TweenMax.getAllTweens().length, 'iceWorldTimeline onComplete');

                            var snakeObjs = getSnakeTimeline(LEFT_4, TOP_2);
                            var snakeTimeline = snakeObjs[0];
                            var snakeContainer = snakeObjs[1];

                            var transitionTimeline14 = new TimelineMax();
                            transitionTimeline14
                                .add('transition14')
                                .to(seaMonsterContainer2, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition14')
                                .to([sharkContainer, sharkContainer2], .01, {alpha: 0}, 'transition14')
                                .to(snakeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition14')
                                .add(function () {
                                    seaMonsterContainer2.stopKillTimeline();
                                    sharkContainer.stopKillTimeline();
                                    sharkContainer2.stopKillTimeline();
                                });

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
                                .to(hugContainer, 1, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)});

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
                                .to(questionContainer, .5, {scaleX: 1, scaleY: 1, ease: Power1.easeOut}, '+=1.2');

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
                            spikeContainer.scaleX = spikeContainer.scaleY = 0;

                            var transitionTimeline17 = new TimelineMax();
                            transitionTimeline17
                                .add('transition17')
                                .to(spikeContainer, .5, {scaleX: 1, scaleY: 1, ease: Power1.easeOut})
                                .set(questionContainer, {alpha: 0})
                                .add(spikeTimeline, '+=0.1')
                                .add('knife', '+=.4')
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
                                .to(cactusFlowerWrapper3, 1, {x: LEFT_2, y: TOP_2, scaleX: 5, scaleY: 5, ease: Power3.easeIn}, '+=.4')
                                .set(hugEyesWrapper, {alpha: 0, scaleX: 3.5, scaleY: 3.5})
                                .to(hugEyesWrapper, 1, {x: LEFT_2 + hugNobitaWrapper.x,
                                    y: TOP_2 + hugNobitaWrapper.y,
                                    alpha: 1,
                                    scaleX: 1.5,
                                    scaleY: 1.5,
                                    ease: Back.easeOut.config(1)}, '+=.4')
                                .to([hugContainer, snakeContainer, spikeContainer, cactusContainer3, questionContainer, hugEyesWrapper, cactusFlowerWrapper3], .5, {
                                    x: '-=' + (3 * (CIRCLE_DIAMETER + SPACING)), ease: Circ.easeOut}, '+=1')
                                .add(function () {
                                    hugContainer.stopKillTimeline();
                                    snakeContainer.stopKillTimeline();
                                    spikeContainer.stopKillTimeline();
                                    cactusContainer3.stopKillTimeline();
                                });

                            animationWrapper.addChild(snakeContainer);
                            animationWrapper.addChild(questionContainer);
                            animationWrapper.addChild(spikeContainer);
                            animationWrapper.addChild(hugContainer);
                            animationWrapper.addChild(cactusContainer3);
                            animationWrapper.addChild(flowerEyeContainer);

                            var tlPart2 = new TimelineMax({
                                autoRemoveChildren: true,
                                paused: true,
                                onStart: function () {
                                    //console.log('iceWorld.tlPart2.onStart', (new Date()).toISOString());
                                    //console.log(TweenMax.getAllTweens().length, 'iceWorld tlPart2 onStart');
                                },
                                onComplete: function () {
                                    //console.log('iceWorld.tlPart2.onComplete', (new Date()).toISOString());
                                    //console.log(TweenMax.getAllTweens().length, 'iceWorld tlPart2 onComplete');
                                }
                            });

                            tlPart2
                                .add(transitionTimeline14, '+=1.9')
                                .add(snakeTimeline)
                                .add(transitionTimeline15, '+=.4')
                                .add(transitionTimeline16, '+=1')
                                .add(questionTimeline)
                                .add(transitionTimeline17, '+=1.8')
                                .add(transitionTimeline18, '+=.24');

                            tlPart2.play();
                            //console.log(tlPart2.duration(), 'iceWorld tlPart2.duration()');
                        }
                    });

                    tlPart1
                        .add('iceWorld')
                        .add(transitionTimeline9b)
                        .add(transitionTimeline10, '+=1.5')
                        .add(transitionTimeline11, '+=2')
                        .add(transitionTimeline12, '+=2')
                        .add(seaMonsterTimeline)
                        .add(transitionTimeline13, '+=1.5')
                    ;
                    tlPart1.play();
                    //console.log(tlPart1.duration(), 'iceWorld tlPart1.duration()');
                }
            });

            iceWorldTimeline.add('next', '+=37.96');
            return iceWorldTimeline;
        }

        function getEndingTimeline() {
            var endingTimeline = new TimelineMax({
                autoRemoveChildren: true,
                paused: true,
                onStart: function () {
                    //console.log(TweenMax.getAllTweens().length, 'endingTimeline onStart');
                    ga('send', 'event', 'Ending', 'start', 'Ending Start', {
                        nonInteraction: true
                    });
                },
                onComplete: function () {
                    //console.log(TweenMax.getAllTweens().length, 'endingTimeline onComplete');
                }
            });

            var catObjs = getEndCatTimeline(LEFT_4, TOP_2);
            var catContainer = catObjs[1];

            var balloonObjs = getEndBalloonTimeline(LEFT_4, TOP_2);
            var balloonContainer = balloonObjs[1];

            var seaObjs = getEndSeaTimeline(LEFT_4, TOP_2);
            var seaContainer = seaObjs[1];

            var endCactusObjs = getEndCactusTimeline(LEFT_4, TOP_2);
            var endCactusContainer = endCactusObjs[1];

            var yetiObjs = getEndYetiTimeline(LEFT_4, TOP_2);
            var yetiContainer = yetiObjs[1];

            var seaMonsterObjs = getEndSeaMonsterTimeline(LEFT_4, TOP_2);
            var seaMonsterContainer = seaMonsterObjs[1];

            var containers = [catContainer, balloonContainer, seaContainer, endCactusContainer, yetiContainer, seaMonsterContainer];

            containers.forEach(function (container) {
                animationWrapper.addChild(container);
            });

            var tContainer = getTContainer(LEFT_1, TOP_1);
            var hContainer = getHContainer(LEFT_2, TOP_1);
            var eContainer = getEContainer(LEFT_3, TOP_1);
            var eContainer2 = getEContainer(LEFT_1, TOP_3);
            var nContainer = getNContainer(LEFT_2, TOP_3);
            var dContainer = getDContainer(LEFT_3, TOP_3);
            var theEndContainers = [tContainer, hContainer, eContainer, eContainer2, nContainer, dContainer];

            theEndContainers.forEach(function (container) {
                animationWrapper.addChild(container);
                container.stopKillTimeline();
            });

            endingTimeline
                .set(theEndContainers, {scaleX: 0, scaleY: 0})
                .to(theEndContainers, 1, {scaleX: 1, scaleY: 1})
            ;

            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                endingTimeline
                    .to(container, 2 * containers.length, {x: LEFT_0}, 'end+=' + (2 * containers.length / 4 * i));
            }

            return endingTimeline;
        }

        // Original implementation is to construct a mainTimeline that contains all the sub timelines.
        // However, this is not performant on mobile devices.
        // Instead, we use custom function to create timeline on the fly during the onStart and onComplete event .

//        var openingTimeline = getOpeningTimeline();
//        var flowerToDesertTimeline = getFlowerToDesertTimeline();
//        var iceWorldTimeline = getIceWorldTimeline();
//        var flowerToDesertTimeline2 = getFlowerToDesertTimeline();
//        var endingTimeline = getEndingTimeline();

//        mainTimeline
//            .add(openingTimeline)
//            .add(flowerToDesertTimeline)
//            .add('flowerToDesertEnd')
//            .add(iceWorldTimeline, 'flowerToDesertEnd-=.5')
//            .add(flowerToDesertTimeline2)
//            .add(endingTimeline);

        mainTimeline
            .to({}, .00000001, {}) // required to trigger onStart function
            .add(function () {
                var openingTimeline = getOpeningTimeline();
                openingTimeline.eventCallback('onComplete', function () {
                    //console.log(TweenMax.getAllTweens().length, 'openingTimeline onComplete');
                    var flowerToDesertTimeline = getFlowerToDesertTimeline();
                    flowerToDesertTimeline.add(function () {
                        var iceWorldTimeline = getIceWorldTimeline();
                        iceWorldTimeline.add(function () {
                            var flowerToDesertTimeline2 = getFlowerToDesertTimeline();
                            flowerToDesertTimeline2.add(function () {
                                //console.log(TweenMax.getAllTweens().length, 'flowerToDesertTimeline2 onComplete');
                                var endingTimeline = getEndingTimeline();
                                endingTimeline.play();
                            }, 'next');
                            flowerToDesertTimeline2.play();
                        }, 'next');
                        iceWorldTimeline.play();
                    }, 'next');

                    flowerToDesertTimeline.play();
                });
                openingTimeline.play();
            });

        mainTimeline.play(START_TIME);
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

    function renderInfo() {
        if (!infoWrapper) {
            infoWrapper = new createjs.Container();
            infoWrapper.setBounds(100, 100, CANVAS_WIDTH - 30, CANVAS_HEIGHT - 30);
            infoWrapper.cursor = 'auto';
        }
        if (infoWrapper.parent != stage) {
            stage.addChild(infoWrapper);
        }
        infoWrapper.removeAllChildren();

        var background = new createjs.Shape();
        var outerSize = 15;
        background.graphics.beginFill('#BBE3FA')
            .drawRoundRect(outerSize, outerSize, CANVAS_WIDTH - 2 * outerSize, CANVAS_HEIGHT - 2 * outerSize, outerSize);
        infoWrapper.addChild(background);

        var btnCloseWrapper = new createjs.Container();
        var btnClose = new createjs.Shape();
        btnClose.rotation = 45;
        btnClose.graphics.beginFill('#999999')
            .drawRoundRect(0, 0 + 28 / 2 - 6 / 2, 28, 6, 3)
            .drawRoundRect(0 + 28 / 2 - 6 / 2, 0, 6, 28, 3);
        btnCloseWrapper.addChild(btnClose);
        btnCloseWrapper.x = 275;
        btnCloseWrapper.y = 20;
        btnCloseWrapper.cursor = 'pointer';
        btnCloseWrapper.addEventListener('click', function () {
            stage.removeChild(infoWrapper);
            github.style.display = 'none';
            profilePic.style.display = 'none';
        });
        infoWrapper.addChild(btnCloseWrapper);

        var mainText = new createjs.Text('This is a short animation for the song Tree Hugger.\nThe song is performed by Kimya Dawson & Antsy Pants and appears on the album Juno (2008).', '16px Happy Monkey', '#000');
        mainText.x = CANVAS_WIDTH / 2;
        mainText.y = 60;
        mainText.lineWidth = CANVAS_WIDTH - 4 * outerSize;
        mainText.lineHeight = 24;
        mainText.textAlign = 'center';
        infoWrapper.addChild(mainText);

        var footerText = new createjs.Text('Crafted with \'\'\'\nby Wei Seng', '14px Happy Monkey', '#000');
        footerText.x = CANVAS_WIDTH / 2;
        footerText.y = 239.5;
        footerText.lineWidth = CANVAS_WIDTH - 4 * outerSize;
        footerText.lineHeight = 20;
        footerText.textAlign = 'center';
        infoWrapper.addChild(footerText);

        var heart = getHeartContainer(209, 248);
        infoWrapper.addChild(heart);

        var github = document.getElementById('github');
        github.style.display = 'block';
        var profilePic = document.getElementById('profile-pic');
        profilePic.style.display = 'block';
    }

    function _renderGallery() {
        ga('send', 'event', 'Gallery', 'show', 'Show Gallery Page ' + currentPage);
        TweenMax.killAll();

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
            case 5:
                var catObjs = getEndCatTimeline(LEFT_1, TOP_1);
                _processTimelineObjs(catObjs);

                var balloonObjs = getEndBalloonTimeline(LEFT_2, TOP_1);
                _processTimelineObjs(balloonObjs);

                var seaObjs = getEndSeaTimeline(LEFT_3, TOP_1);
                _processTimelineObjs(seaObjs);

                var endCactusObjs = getEndCactusTimeline(LEFT_1, TOP_2);
                _processTimelineObjs(endCactusObjs);

                var yetiObjs = getEndYetiTimeline(LEFT_2, TOP_2);
                _processTimelineObjs(yetiObjs);

                var seaMonsterObjs = getEndSeaMonsterTimeline(LEFT_3, TOP_2);
                _processTimelineObjs(seaMonsterObjs);

                break;
            case 6:
                var t = getTContainer(LEFT_1, TOP_1);
                _processContainer(t);

                var h = getHContainer(LEFT_2, TOP_1);
                _processContainer(h);

                var e = getEContainer(LEFT_3, TOP_1);
                _processContainer(e);

                var e = getEContainer(LEFT_1, TOP_2);
                _processContainer(e);

                var n = getNContainer(LEFT_2, TOP_2);
                _processContainer(n);

                var d = getDContainer(LEFT_3, TOP_2);
                _processContainer(d);

                break;
            default:
                break;
        }

        function _processTimelineObjs(objs) {
            var timeline = objs[0];
            var container = objs[1];
            galleryWrapper.addChild(container);
            if (timeline) {
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

        function _processContainer(container) {
            _processTimelineObjs([null, container]);
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
            .endStroke();

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

        var container = getDefaultContainer(x, y);

        var treeWrapper = new createjs.Container();
        container.addChild(treeWrapper);

        var trunk = new createjs.Shape();
        trunk.graphics.beginFill(COLOR_TREE_TRUNK);
        var trunkCmd = trunk.graphics
            .moveTo(-8, 25)
            .lineTo(8, 25)
            .lineTo(0, 25)
            .command;
        treeWrapper.addChild(trunk);

        var trunk2 = new createjs.Shape();
        trunk2.graphics.beginFill(COLOR_TREE_TRUNK);
        var trunkCmd2 = trunk2.graphics
            .rect(-3, 22, 6, 0)
            .command;
        treeWrapper.addChild(trunk2);

        var tree = new createjs.Shape();
        tree.graphics.beginFill(COLOR_TREE_LEAVES);
        var treeCmd = tree.graphics
            .drawEllipse(0, 0, 0, 0).command;

        treeWrapper.addChildAt(tree, 0);

        var fruit1 = new createjs.Shape();
        fruit1.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd1 = fruit1.graphics
            .drawCircle(-10, 8, 0)
            .command;
        treeWrapper.addChild(fruit1);

        var fruit2 = new createjs.Shape();
        fruit2.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd2 = fruit2.graphics
            .drawCircle(-5, 0, 0)
            .command;
        treeWrapper.addChild(fruit2);

        var fruit3 = new createjs.Shape();
        fruit3.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd3 = fruit3.graphics
            .drawCircle(0, 7, 0)
            .command;
        treeWrapper.addChild(fruit3);

        var fruit4 = new createjs.Shape();
        fruit4.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd4 = fruit4.graphics
            .drawCircle(5, 0, 0)
            .command;
        treeWrapper.addChild(fruit4);

        var fruit5 = new createjs.Shape();
        fruit5.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd5 = fruit5.graphics
            .drawCircle(10, 8, 0)
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

        return [treeTimeline, container];
    }

    function getSpringTimeline(x, y) {
        var springTimeline = new TimelineMax();

        var springContainer = getSpringContainer(x, y);

        var treeWrapper = new createjs.Container();
        var trunk = new createjs.Shape();
        trunk.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .moveTo(-8, 25)
            .lineTo(8, 25)
            .lineTo(0, 22);
        treeWrapper.addChild(trunk);

        var trunk2 = new createjs.Shape();
        trunk2.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .rect(-1.5, 24, 3, -8);
        treeWrapper.addChild(trunk2);

        function getFlower() {
            var flowerRadius = 4;
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
            {"x": -11.9, "y": 2.8},
            {"x": -11.8, "y": 13.8},
            {"x": -11.3, "y": 15.4},
            {"x": -10, "y": 8.3},
            {"x": -8.8, "y": 4.1},
            {"x": -8.2, "y": 3.8},
            {"x": -8, "y": -0.3},
            {"x": -7.6, "y": 11.6},
            {"x": -7.3, "y": 9.8},
            {"x": -6.9, "y": -6.9},
            {"x": -6.7, "y": 16.1},
            {"x": -6.1, "y": -5.6},
            {"x": -5.7, "y": -0.5},
            {"x": -5.4, "y": -2.9},
            {"x": -4.7, "y": 13.2},
            {"x": -4.6, "y": 0.3},
            {"x": -4.2, "y": -6},
            {"x": -4, "y": -1.9},
            {"x": -3.7, "y": 7},
            {"x": -3, "y": -7.2},
            {"x": -2.5, "y": -6.2},
            {"x": -2.3, "y": -6.1},
            {"x": -2, "y": -7.2},
            {"x": -1.4, "y": -7.7},
            {"x": -0.7, "y": 13.5},
            {"x": -0.1, "y": 3.2},
            {"x": 0.6, "y": -3.1},
            {"x": 0.9, "y": 2.5},
            {"x": 1.1, "y": -1.6},
            {"x": 1.5, "y": -9.6},
            {"x": 2.3, "y": 11.6},
            {"x": 2.9, "y": 14.5},
            {"x": 3.3, "y": 16.3},
            {"x": 3.4, "y": 5.7},
            {"x": 4, "y": 14},
            {"x": 5, "y": -4.6},
            {"x": 5.3, "y": 14.9},
            {"x": 5.6, "y": -4.8},
            {"x": 5.8, "y": 3.1},
            {"x": 6.8, "y": -0.4},
            {"x": 7.1, "y": 5.8},
            {"x": 7.4, "y": 4},
            {"x": 7.8, "y": -0.2},
            {"x": 8.6, "y": 2.9},
            {"x": 9.2, "y": 5.9},
            {"x": 9.8, "y": 12.4},
            {"x": 10.3, "y": 2.8},
            {"x": 10.4, "y": 15.7},
            {"x": 10.8, "y": 12.5},
            {"x": 11.5, "y": 5.8}
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
//    //console.log(JSON.stringify(flowers));

        springContainer.addChild(treeWrapper);

        return [springTimeline, springContainer];
    }

    function getSummerTimeline(x, y) {
        var summerTimeline = new TimelineMax();

        var summerContainer = getSummerContainer(x, y);

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
        var leftLeaves = [];
        var rightLeaves = [];
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
            if (i < numLeaves / 2) {
                leftLeaves.push(leaf);
            }
            else {
                rightLeaves.push(leaf);
            }
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

        var rotation = 6;
        var leavesTimeline = new TimelineMax({repeat: -1});
        leavesTimeline
            .add('leaves')
            .to(leftLeaves, 1, {rotation: '-=' + rotation}, 'leaves')
            .to(rightLeaves, 1, {rotation: '+=' + rotation}, 'leaves')
            .add('leavesEnd')
            .to(leftLeaves, 1, {rotation: '+=' + rotation}, 'leavesEnd')
            .to(rightLeaves, 1, {rotation: '-=' + rotation}, 'leavesEnd')
        ;

        summerContainer.stopKillTimeline = function () {
            //console.log('summerContainer stopKillTimeline')
            leavesTimeline.stop().kill();
        };

        return [summerTimeline, summerContainer];
    }

    function getAutumnTimeline(x, y) {
        var autumnTimeline = new TimelineMax();

        var autumnContainer = getAutumnContainer(x, y);

        var treeWrapper = new createjs.Container();
        autumnContainer.addChild(treeWrapper);

        var trunk = new createjs.Shape();
        trunk.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .moveTo(-8, 25)
            .lineTo(8, 25)
            .lineTo(0, 22);
        treeWrapper.addChild(trunk);

        var trunk2 = new createjs.Shape();
        trunk2.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .rect(-1.5, 24, 3, -8);
        treeWrapper.addChild(trunk2);

        var leaves = [
            {"x": -16.5, "y": -0.2, "rotation": 20, "alpha": 0.5},
            {"x": -13.5, "y": -13.2, "rotation": 20, "alpha": 0.5},
            {"x": -12.5, "y": -10.2, "rotation": 10, "alpha": 0.62},
            {"x": -12.5, "y": -5.2, "rotation": 20, "alpha": 0.5},
            {"x": -12.5, "y": -0.2, "rotation": 10, "alpha": 0.5},
            {"x": -10.5, "y": -12.2, "rotation": 10, "alpha": 0.6},
            {"x": -10.5, "y": -9.2, "rotation": 10, "alpha": 0.54},
            {"x": -7.5, "y": -8.5, "rotation": 281, "alpha": 0.6},
            {"x": -7.5, "y": -5.5, "rotation": 306, "alpha": 0.38},
            {"x": -7.5, "y": -4.5, "rotation": 263, "alpha": 0.67},
            {"x": -7.5, "y": -3.5, "rotation": 341, "alpha": 0.68},
            {"x": -7.5, "y": 1.5, "rotation": 283, "alpha": 0.69},
            {"x": -7.5, "y": 1.5, "rotation": 299, "alpha": 0.68},
            {"x": -7.5, "y": 8.5, "rotation": 209, "alpha": 0.45},
            {"x": -7.5, "y": 9.5, "rotation": 18, "alpha": 0.51},
            {"x": -7.5, "y": 17.5, "rotation": 336, "alpha": 0.56},
            {"x": -6.5, "y": -10.5, "rotation": 2, "alpha": 0.68},
            {"x": -6.5, "y": -8.5, "rotation": 89, "alpha": 0.41},
            {"x": -6.5, "y": -3.5, "rotation": 105, "alpha": 0.58},
            {"x": -6.5, "y": -3.5, "rotation": 328, "alpha": 0.68},
            {"x": -6.5, "y": 1.5, "rotation": 328, "alpha": 0.57},
            {"x": -6.5, "y": 3.5, "rotation": 61, "alpha": 0.56},
            {"x": -6.5, "y": 3.5, "rotation": 150, "alpha": 0.53},
            {"x": -6.5, "y": 3.5, "rotation": 197, "alpha": 0.48},
            {"x": -6.5, "y": 3.5, "rotation": 268, "alpha": 0.53},
            {"x": -6.5, "y": 5.5, "rotation": 9, "alpha": 0.64},
            {"x": -5.5, "y": -8.5, "rotation": 337, "alpha": 0.45},
            {"x": -5.5, "y": -4.5, "rotation": 76, "alpha": 0.62},
            {"x": -5.5, "y": -4.5, "rotation": 133, "alpha": 0.68},
            {"x": -5.5, "y": -2.5, "rotation": 305, "alpha": 0.59},
            {"x": -5.5, "y": -1.5, "rotation": 76, "alpha": 0.51},
            {"x": -5.5, "y": -1.5, "rotation": 222, "alpha": 0.65},
            {"x": -5.5, "y": 2.5, "rotation": 354, "alpha": 0.37},
            {"x": -5.5, "y": 3.5, "rotation": 212, "alpha": 0.31},
            {"x": -5.5, "y": 8.5, "rotation": 34, "alpha": 0.46},
            {"x": -5.5, "y": 12.5, "rotation": 130, "alpha": 0.65},
            {"x": -5.5, "y": 15.5, "rotation": 68, "alpha": 0.57},
            {"x": -5.5, "y": 17.5, "rotation": 117, "alpha": 0.51},
            {"x": -4.5, "y": -11.5, "rotation": 326, "alpha": 0.43},
            {"x": -4.5, "y": -9.5, "rotation": 275, "alpha": 0.32},
            {"x": -4.5, "y": -7.5, "rotation": 295, "alpha": 0.67},
            {"x": -4.5, "y": -7.5, "rotation": 335, "alpha": 0.4},
            {"x": -4.5, "y": -6.5, "rotation": 130, "alpha": 0.38},
            {"x": -4.5, "y": -3.5, "rotation": 148, "alpha": 0.58},
            {"x": -4.5, "y": -2.5, "rotation": 202, "alpha": 0.61},
            {"x": -4.5, "y": 4.5, "rotation": 100, "alpha": 0.56},
            {"x": -4.5, "y": 5.5, "rotation": 341, "alpha": 0.53},
            {"x": -4.5, "y": 6.5, "rotation": 277, "alpha": 0.55},
            {"x": -4.5, "y": 9.5, "rotation": 138, "alpha": 0.52},
            {"x": -4.5, "y": 9.5, "rotation": 148, "alpha": 0.51},
            {"x": -4.5, "y": 10.5, "rotation": 304, "alpha": 0.32},
            {"x": -4.5, "y": 15.5, "rotation": 177, "alpha": 0.47},
            {"x": -4.5, "y": 16.5, "rotation": 258, "alpha": 0.55},
            {"x": -3.5, "y": -11.5, "rotation": 167, "alpha": 0.38},
            {"x": -3.5, "y": -9.5, "rotation": 233, "alpha": 0.33},
            {"x": -3.5, "y": -7.5, "rotation": 211, "alpha": 0.45},
            {"x": -3.5, "y": -7.5, "rotation": 253, "alpha": 0.35},
            {"x": -3.5, "y": -5.5, "rotation": 214, "alpha": 0.4},
            {"x": -3.5, "y": -3.5, "rotation": 17, "alpha": 0.57},
            {"x": -3.5, "y": 1.5, "rotation": 271, "alpha": 0.38},
            {"x": -3.5, "y": 1.5, "rotation": 326, "alpha": 0.31},
            {"x": -3.5, "y": 2.5, "rotation": 352, "alpha": 0.39},
            {"x": -3.5, "y": 3.5, "rotation": 278, "alpha": 0.49},
            {"x": -3.5, "y": 10.5, "rotation": 170, "alpha": 0.42},
            {"x": -3.5, "y": 10.5, "rotation": 284, "alpha": 0.51},
            {"x": -3.5, "y": 12.5, "rotation": 42, "alpha": 0.69},
            {"x": -2.5, "y": -12.5, "rotation": 242, "alpha": 0.5},
            {"x": -2.5, "y": -10.5, "rotation": 44, "alpha": 0.67},
            {"x": -2.5, "y": -10.5, "rotation": 160, "alpha": 0.31},
            {"x": -2.5, "y": -6.5, "rotation": 82, "alpha": 0.56},
            {"x": -2.5, "y": -5.5, "rotation": 100, "alpha": 0.46},
            {"x": -2.5, "y": -4.5, "rotation": 51, "alpha": 0.51},
            {"x": -2.5, "y": -4.5, "rotation": 155, "alpha": 0.58},
            {"x": -2.5, "y": -3.5, "rotation": 306, "alpha": 0.52},
            {"x": -2.5, "y": -2.5, "rotation": 217, "alpha": 0.34},
            {"x": -2.5, "y": 8.5, "rotation": 282, "alpha": 0.64},
            {"x": -2.5, "y": 11.5, "rotation": 244, "alpha": 0.57},
            {"x": -2.5, "y": 13.5, "rotation": 150, "alpha": 0.56},
            {"x": -1.5, "y": -7.5, "rotation": 192, "alpha": 0.39},
            {"x": -1.5, "y": -7.5, "rotation": 199, "alpha": 0.7},
            {"x": -1.5, "y": -6.5, "rotation": 153, "alpha": 0.57},
            {"x": -1.5, "y": -4.5, "rotation": 155, "alpha": 0.55},
            {"x": -1.5, "y": -4.5, "rotation": 265, "alpha": 0.69},
            {"x": -1.5, "y": -3.5, "rotation": 59, "alpha": 0.69},
            {"x": -1.5, "y": -3.5, "rotation": 256, "alpha": 0.43},
            {"x": -1.5, "y": -0.5, "rotation": 117, "alpha": 0.49},
            {"x": -1.5, "y": 0.5, "rotation": 115, "alpha": 0.34},
            {"x": -1.5, "y": 0.5, "rotation": 302, "alpha": 0.54},
            {"x": -1.5, "y": 2.5, "rotation": 81, "alpha": 0.55},
            {"x": -1.5, "y": 13.5, "rotation": 97, "alpha": 0.47},
            {"x": -1.5, "y": 14.5, "rotation": 315, "alpha": 0.67},
            {"x": -1.5, "y": 15.5, "rotation": 234, "alpha": 0.42},
            {"x": -1.5, "y": 16.5, "rotation": 354, "alpha": 0.46},
            {"x": -0.5, "y": -12.5, "rotation": 247, "alpha": 0.49},
            {"x": -0.5, "y": -9.5, "rotation": 173, "alpha": 0.4},
            {"x": -0.5, "y": -9.5, "rotation": 222, "alpha": 0.69},
            {"x": -0.5, "y": -5.5, "rotation": 2, "alpha": 0.33},
            {"x": -0.5, "y": -5.5, "rotation": 152, "alpha": 0.52},
            {"x": -0.5, "y": -5.5, "rotation": 295, "alpha": 0.51},
            {"x": -0.5, "y": 3.5, "rotation": 174, "alpha": 0.59},
            {"x": -0.5, "y": 3.5, "rotation": 188, "alpha": 0.65},
            {"x": -0.5, "y": 5.5, "rotation": 242, "alpha": 0.63},
            {"x": -0.5, "y": 5.5, "rotation": 286, "alpha": 0.55},
            {"x": -0.5, "y": 14.5, "rotation": 32, "alpha": 0.39},
            {"x": -0.5, "y": 14.5, "rotation": 199, "alpha": 0.61},
            {"x": -0.5, "y": 14.5, "rotation": 290, "alpha": 0.42},
            {"x": -0.5, "y": 14.5, "rotation": 299, "alpha": 0.41},
            {"x": -0.5, "y": 17.5, "rotation": 68, "alpha": 0.35},
            {"x": 0.5, "y": -9.5, "rotation": 294, "alpha": 0.49},
            {"x": 0.5, "y": -9.5, "rotation": 343, "alpha": 0.43},
            {"x": 0.5, "y": -5.5, "rotation": 284, "alpha": 0.32},
            {"x": 0.5, "y": -4.5, "rotation": 169, "alpha": 0.52},
            {"x": 0.5, "y": -3.5, "rotation": 303, "alpha": 0.46},
            {"x": 0.5, "y": -0.5, "rotation": 44, "alpha": 0.42},
            {"x": 0.5, "y": -0.5, "rotation": 350, "alpha": 0.51},
            {"x": 0.5, "y": 0.5, "rotation": 360, "alpha": 0.61},
            {"x": 0.5, "y": 11.5, "rotation": 8, "alpha": 0.51},
            {"x": 0.5, "y": 11.5, "rotation": 26, "alpha": 0.43},
            {"x": 0.5, "y": 13.5, "rotation": 24, "alpha": 0.67},
            {"x": 0.5, "y": 13.5, "rotation": 72, "alpha": 0.52},
            {"x": 0.5, "y": 17.5, "rotation": 117, "alpha": 0.44},
            {"x": 1.5, "y": -10.5, "rotation": 7, "alpha": 0.44},
            {"x": 1.5, "y": -0.5, "rotation": 200, "alpha": 0.53},
            {"x": 1.5, "y": 1.5, "rotation": 87, "alpha": 0.5},
            {"x": 1.5, "y": 4.5, "rotation": 3, "alpha": 0.31},
            {"x": 1.5, "y": 5.5, "rotation": 267, "alpha": 0.7},
            {"x": 1.5, "y": 13.5, "rotation": 299, "alpha": 0.64},
            {"x": 1.5, "y": 15.5, "rotation": 308, "alpha": 0.44},
            {"x": 2.5, "y": -8.5, "rotation": 102, "alpha": 0.5},
            {"x": 2.5, "y": -6.5, "rotation": 10, "alpha": 0.5},
            {"x": 2.5, "y": -5.5, "rotation": 0, "alpha": 0.39},
            {"x": 2.5, "y": -4.5, "rotation": 326, "alpha": 0.33},
            {"x": 2.5, "y": 3.5, "rotation": 154, "alpha": 0.61},
            {"x": 2.5, "y": 4.5, "rotation": 246, "alpha": 0.46},
            {"x": 2.5, "y": 8.5, "rotation": 355, "alpha": 0.69},
            {"x": 3.5, "y": -12.5, "rotation": 283, "alpha": 0.45},
            {"x": 3.5, "y": -10.5, "rotation": 96, "alpha": 0.41},
            {"x": 3.5, "y": -9.5, "rotation": 175, "alpha": 0.51},
            {"x": 3.5, "y": -7.5, "rotation": 158, "alpha": 0.39},
            {"x": 3.5, "y": -7.5, "rotation": 202, "alpha": 0.48},
            {"x": 3.5, "y": -4.5, "rotation": 243, "alpha": 0.39},
            {"x": 3.5, "y": -4.5, "rotation": 301, "alpha": 0.65},
            {"x": 3.5, "y": -3.5, "rotation": 58, "alpha": 0.52},
            {"x": 3.5, "y": -1.5, "rotation": 62, "alpha": 0.61},
            {"x": 3.5, "y": 0.5, "rotation": 129, "alpha": 0.4},
            {"x": 3.5, "y": 0.5, "rotation": 204, "alpha": 0.43},
            {"x": 3.5, "y": 4.5, "rotation": 52, "alpha": 0.61},
            {"x": 3.5, "y": 9.5, "rotation": 292, "alpha": 0.59},
            {"x": 3.5, "y": 12.5, "rotation": 268, "alpha": 0.45},
            {"x": 3.5, "y": 13.5, "rotation": 119, "alpha": 0.46},
            {"x": 3.5, "y": 14.5, "rotation": 92, "alpha": 0.51},
            {"x": 3.5, "y": 16.5, "rotation": 147, "alpha": 0.39},
            {"x": 4.5, "y": -11.5, "rotation": 82, "alpha": 0.46},
            {"x": 4.5, "y": -8.5, "rotation": 40, "alpha": 0.39},
            {"x": 4.5, "y": -7.5, "rotation": 3, "alpha": 0.31},
            {"x": 4.5, "y": -7.5, "rotation": 243, "alpha": 0.36},
            {"x": 4.5, "y": -5.5, "rotation": 351, "alpha": 0.64},
            {"x": 4.5, "y": -0.5, "rotation": 73, "alpha": 0.48},
            {"x": 4.5, "y": -0.5, "rotation": 149, "alpha": 0.54},
            {"x": 4.5, "y": 2.5, "rotation": 239, "alpha": 0.51},
            {"x": 4.5, "y": 5.5, "rotation": 52, "alpha": 0.5},
            {"x": 4.5, "y": 9.5, "rotation": 182, "alpha": 0.7},
            {"x": 4.5, "y": 11.5, "rotation": 90, "alpha": 0.48},
            {"x": 4.5, "y": 13.5, "rotation": 191, "alpha": 0.56},
            {"x": 4.5, "y": 13.5, "rotation": 249, "alpha": 0.49},
            {"x": 4.5, "y": 14.5, "rotation": 72, "alpha": 0.41},
            {"x": 5.5, "y": -11.5, "rotation": 349, "alpha": 0.5},
            {"x": 5.5, "y": -10.5, "rotation": 86, "alpha": 0.65},
            {"x": 5.5, "y": -7.5, "rotation": 337, "alpha": 0.32},
            {"x": 5.5, "y": -4.5, "rotation": 204, "alpha": 0.57},
            {"x": 5.5, "y": -4.5, "rotation": 313, "alpha": 0.33},
            {"x": 5.5, "y": -1.5, "rotation": 15, "alpha": 0.59},
            {"x": 5.5, "y": -1.5, "rotation": 300, "alpha": 0.61},
            {"x": 5.5, "y": 1.5, "rotation": 286, "alpha": 0.4},
            {"x": 5.5, "y": 3.5, "rotation": 145, "alpha": 0.61},
            {"x": 5.5, "y": 4.5, "rotation": 212, "alpha": 0.43},
            {"x": 5.5, "y": 4.5, "rotation": 283, "alpha": 0.48},
            {"x": 5.5, "y": 5.5, "rotation": 294, "alpha": 0.66},
            {"x": 5.5, "y": 8.5, "rotation": 246, "alpha": 0.38},
            {"x": 5.5, "y": 15.5, "rotation": 347, "alpha": 0.53},
            {"x": 5.5, "y": 16.5, "rotation": 280, "alpha": 0.45},
            {"x": 6.5, "y": -2.5, "rotation": 283, "alpha": 0.42},
            {"x": 6.5, "y": 1.5, "rotation": 19, "alpha": 0.7},
            {"x": 6.5, "y": 2.5, "rotation": 114, "alpha": 0.44},
            {"x": 6.5, "y": 2.5, "rotation": 152, "alpha": 0.32},
            {"x": 6.5, "y": 2.5, "rotation": 249, "alpha": 0.65},
            {"x": 6.5, "y": 4.5, "rotation": 16, "alpha": 0.58},
            {"x": 6.5, "y": 6.5, "rotation": 70, "alpha": 0.3},
            {"x": 6.5, "y": 6.5, "rotation": 297, "alpha": 0.38},
            {"x": 6.5, "y": 14.5, "rotation": 244, "alpha": 0.38},
            {"x": 6.5, "y": 17.5, "rotation": 94, "alpha": 0.31},
            {"x": 7.5, "y": -11.5, "rotation": 152, "alpha": 0.31},
            {"x": 7.5, "y": -10.5, "rotation": 335, "alpha": 0.56},
            {"x": 7.5, "y": -9.5, "rotation": 85, "alpha": 0.49},
            {"x": 7.5, "y": -8.5, "rotation": 132, "alpha": 0.54},
            {"x": 7.5, "y": -5.5, "rotation": 14, "alpha": 0.44},
            {"x": 7.5, "y": -1.5, "rotation": 299, "alpha": 0.63},
            {"x": 7.5, "y": -1.5, "rotation": 332, "alpha": 0.63},
            {"x": 7.5, "y": 2.5, "rotation": 100, "alpha": 0.53},
            {"x": 7.5, "y": 3.5, "rotation": 282, "alpha": 0.34},
            {"x": 7.5, "y": 5.5, "rotation": 102, "alpha": 0.59},
            {"x": 7.5, "y": 8.5, "rotation": 301, "alpha": 0.44},
            {"x": 7.5, "y": 11.5, "rotation": 269, "alpha": 0.32},
            {"x": 7.5, "y": 13.5, "rotation": 303, "alpha": 0.59},
            {"x": 7.5, "y": 15.5, "rotation": 180, "alpha": 0.57},
            {"x": 7.5, "y": 17.5, "rotation": 277, "alpha": 0.42},
            {"x": 8.5, "y": -12.5, "rotation": 23, "alpha": 0.55},
            {"x": 8.5, "y": -8.5, "rotation": 39, "alpha": 0.61},
            {"x": 8.5, "y": -7.5, "rotation": 250, "alpha": 0.59},
            {"x": 8.5, "y": -7.5, "rotation": 312, "alpha": 0.43},
            {"x": 8.5, "y": -6.5, "rotation": 167, "alpha": 0.6},
            {"x": 8.5, "y": -4.5, "rotation": 14, "alpha": 0.32},
            {"x": 8.5, "y": -3.5, "rotation": 192, "alpha": 0.65},
            {"x": 8.5, "y": -2.5, "rotation": 268, "alpha": 0.4},
            {"x": 8.5, "y": 1.5, "rotation": 106, "alpha": 0.65},
            {"x": 8.5, "y": 1.5, "rotation": 161, "alpha": 0.3},
            {"x": 8.5, "y": 2.5, "rotation": 61, "alpha": 0.43},
            {"x": 8.5, "y": 8.5, "rotation": 0, "alpha": 0.31},
            {"x": 8.5, "y": 8.5, "rotation": 21, "alpha": 0.64},
            {"x": 8.5, "y": 8.5, "rotation": 218, "alpha": 0.54},
            {"x": 8.5, "y": 9.5, "rotation": 60, "alpha": 0.68},
            {"x": 8.5, "y": 10.5, "rotation": 12, "alpha": 0.61},
            {"x": 8.5, "y": 10.5, "rotation": 302, "alpha": 0.31},
            {"x": 9.5, "y": -12.5, "rotation": 82, "alpha": 0.44},
            {"x": 9.5, "y": -12.5, "rotation": 181, "alpha": 0.41},
            {"x": 9.5, "y": -11.5, "rotation": 206, "alpha": 0.39},
            {"x": 9.5, "y": -8.5, "rotation": 21, "alpha": 0.64},
            {"x": 9.5, "y": -7.5, "rotation": 82, "alpha": 0.65},
            {"x": 9.5, "y": -4.5, "rotation": 179, "alpha": 0.35},
            {"x": 9.5, "y": -4.5, "rotation": 293, "alpha": 0.56},
            {"x": 9.5, "y": -0.5, "rotation": 3, "alpha": 0.67},
            {"x": 9.5, "y": 2.5, "rotation": 323, "alpha": 0.52},
            {"x": 9.5, "y": 4.5, "rotation": 215, "alpha": 0.62},
            {"x": 9.5, "y": 6.5, "rotation": 147, "alpha": 0.32},
            {"x": 9.5, "y": 11.5, "rotation": 16, "alpha": 0.35},
            {"x": 9.5, "y": 13.5, "rotation": 256, "alpha": 0.51},
            {"x": 9.5, "y": 14.5, "rotation": 322, "alpha": 0.33},
            {"x": 9.5, "y": 16.5, "rotation": 299, "alpha": 0.56},
            {"x": 10.5, "y": -11.5, "rotation": 77, "alpha": 0.45},
            {"x": 10.5, "y": -10.5, "rotation": 314, "alpha": 0.38},
            {"x": 10.5, "y": -10.5, "rotation": 347, "alpha": 0.45},
            {"x": 10.5, "y": -9.5, "rotation": 66, "alpha": 0.59},
            {"x": 10.5, "y": -6.5, "rotation": 14, "alpha": 0.51},
            {"x": 10.5, "y": -4.5, "rotation": 7, "alpha": 0.69},
            {"x": 10.5, "y": -4.5, "rotation": 115, "alpha": 0.65},
            {"x": 10.5, "y": 3.5, "rotation": 39, "alpha": 0.59},
            {"x": 10.5, "y": 9.5, "rotation": 250, "alpha": 0.45},
            {"x": 10.5, "y": 12.5, "rotation": 115, "alpha": 0.35},
            {"x": 10.5, "y": 16.5, "rotation": 121, "alpha": 0.5},
            {"x": 10.5, "y": 16.5, "rotation": 234, "alpha": 0.31},
            {"x": 10.5, "y": 16.5, "rotation": 347, "alpha": 0.52},
            {"x": 10.5, "y": 17.5, "rotation": 244, "alpha": 0.64},
            {"x": 11.5, "y": -12.5, "rotation": 358, "alpha": 0.48},
            {"x": 11.5, "y": -11.5, "rotation": 192, "alpha": 0.49},
            {"x": 11.5, "y": -9.5, "rotation": 104, "alpha": 0.33},
            {"x": 11.5, "y": -9.5, "rotation": 274, "alpha": 0.55},
            {"x": 11.5, "y": -8.5, "rotation": 184, "alpha": 0.42},
            {"x": 11.5, "y": -5.5, "rotation": 109, "alpha": 0.67},
            {"x": 11.5, "y": -2.5, "rotation": 26, "alpha": 0.37},
            {"x": 11.5, "y": 0.5, "rotation": 298, "alpha": 0.68},
            {"x": 11.5, "y": 1.5, "rotation": 137, "alpha": 0.7},
            {"x": 11.5, "y": 3.5, "rotation": 206, "alpha": 0.67},
            {"x": 11.5, "y": 4.5, "rotation": 93, "alpha": 0.43},
            {"x": 11.5, "y": 14.5, "rotation": 130, "alpha": 0.62},
            {"x": 12.5, "y": -12.5, "rotation": 55, "alpha": 0.58},
            {"x": 12.5, "y": -12.5, "rotation": 339, "alpha": 0.61},
            {"x": 12.5, "y": -10.5, "rotation": 131, "alpha": 0.52},
            {"x": 12.5, "y": -8.5, "rotation": 337, "alpha": 0.61},
            {"x": 12.5, "y": -7.5, "rotation": 199, "alpha": 0.64},
            {"x": 12.5, "y": -7.5, "rotation": 275, "alpha": 0.61},
            {"x": 12.5, "y": -5.5, "rotation": 43, "alpha": 0.68},
            {"x": 12.5, "y": -5.5, "rotation": 233, "alpha": 0.36},
            {"x": 12.5, "y": -3.5, "rotation": 65, "alpha": 0.64},
            {"x": 12.5, "y": -0.5, "rotation": 182, "alpha": 0.47},
            {"x": 12.5, "y": 2.5, "rotation": 61, "alpha": 0.61},
            {"x": 12.5, "y": 4.5, "rotation": 48, "alpha": 0.59},
            {"x": 12.5, "y": 7.5, "rotation": 40, "alpha": 0.58},
            {"x": 12.5, "y": 10.5, "rotation": 62, "alpha": 0.56},
            {"x": 12.5, "y": 13.5, "rotation": 256, "alpha": 0.68},
            {"x": 12.5, "y": 14.5, "rotation": 153, "alpha": 0.65},
            {"x": 12.5, "y": 17.5, "rotation": 329, "alpha": 0.61}
        ];
        for (var i = 0; i < leaves.length; i++) {
            var leafData = leaves[i];
            var leaf = new createjs.Shape();

            leaf.regX = leafData.x;
            leaf.regY = leafData.y;
            leaf.rotation = leafData.rotation;
            leaf.alpha = leafData.alpha;
            if (leafData.rotation > 30 && leaf.rotation < 210) {
                leaf.graphics.beginFill(COLOR_AUTUMN_LEAF);
            }
            else {
                leaf.graphics.beginFill(COLOR_AUTUMN_LEAF_2);
            }

            leaf.graphics
                .moveTo(0, 0)
                .lineTo(5, 0)
                .lineTo(0, -5)
                .closePath()
            ;

            treeWrapper.addChild(leaf);
        }

//        leaves = leaves.sort(function (a, b) {
//            if (a.x === b.x) {
//                if (a.y === b.y) {
//                    return a.rotation - b.rotation;
//                }
//                return a.y - b.y;
//            }
//            return a.x - b.x;
//        });
//    //console.log(JSON.stringify(leaves));

        return [autumnTimeline, autumnContainer];
    }

    function getWinterTimeline(x, y) {
        var snowTreeTimeline = new TimelineMax();
        snowTreeTimeline.add('snow');

        var snowTreeContainer = getWinterContainer(x, y);

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

        var catContainer = getDefaultContainer(x, y);

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
            .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, 3 * beeDuration)
            .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 4 * beeDuration)
            .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, 5 * beeDuration)
        ;

        return [catTimeline, catContainer];
    }

    function getTurtleTimeline(x, y) {
        var turtleTimeline = new TimelineMax();

        var turtleContainer = getDefaultContainer(x, y);

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
            .to(hand2Wrapper, .44, {rotation: "+=10", startAt: {rotation: "-=8"}, repeat: -1, yoyo: true}, 'hands');

        turtleContainer.stopKillTimeline = function () {
            turtleEyesTimeline.stop().kill();
            flyTimeline.stop().kill();
        };

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

        cloudContainer.stopKillTimeline = function () {
            movingCloudTimeline.stop().kill();
            eyesTimeline.stop().kill();
        };

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

        var smokeTimeline = new TimelineMax();
        smokeTimeline
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

        roofTopContainer.stopKillTimeline = function () {
            smokeTimeline.stop().kill();
        };

        return [roofTopTimeline, roofTopContainer];
    }

    function getSeaTimeline(x, y) {
        var seaTimeline = new TimelineMax();

        var seaContainer = getSeaContainer(x, y);

        var grassWrapper = new createjs.Container();
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
        grassWrapper.addChild(grass);

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
        grassWrapper.addChild(grass2);

        var bubble = new createjs.Shape();
        var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-10, -19, 0)
            .command;
        grassWrapper.addChild(bubble);

        var bubble2 = new createjs.Shape();
        var bubbleCmd2 = bubble2.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-10, -19, 0)
            .command;
        grassWrapper.addChild(bubble2);

        var bubble3 = new createjs.Shape();
        var bubbleCmd3 = bubble3.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-10, -19, 0)
            .command;
        grassWrapper.addChild(bubble3);

        var bubble4 = new createjs.Shape();
        var bubbleCmd4 = bubble4.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(7, -19, 0)
            .command;
        grassWrapper.addChild(bubble4);

        var bubble5 = new createjs.Shape();
        var bubbleCmd5 = bubble5.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(7, -19, 0)
            .command;
        grassWrapper.addChild(bubble5);

        var bubble6 = new createjs.Shape();
        var bubbleCmd6 = bubble6.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(7, -19, 0)
            .command;
        grassWrapper.addChild(bubble6);

        seaContainer.addChild(grassWrapper);

        var bubbleTimeline = new TimelineMax();
        bubbleTimeline
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

        seaContainer.stopKillTimeline = function () {
            bubbleTimeline.stop().kill();
        };

        return [seaTimeline, seaContainer, grassWrapper];
    }

    function getFishTimeline(x, y) {
        var fishContainer = getSeaWaveContainer(x, y);

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
            onComplete: function () {
                bubble.alpha = 0;
            }
        });

        var fishMoveTimeline = new TimelineMax();
        fishMoveTimeline
            .add('fish')
            .to(wingCmd, 1, {x: 9, y: -9, repeat: -1, yoyo: true}, 'fish')
            .to(wingCmd2, 1, {x: 9, y: 9, repeat: -1, yoyo: true}, 'fish')
            .to(tailCmd, 1, {y: -6, repeat: -1, yoyo: true}, 'fish')
            .to(tailCmd2, 1, {y: 6, repeat: -1, yoyo: true}, 'fish');

        fishContainer.stopKillTimeline = function () {
            fishMoveTimeline.stop().kill();
            bubbleTimeline.stop().kill();
        };

        return [null, fishContainer];
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
        var cactusCmd2 = cactus.graphics.arc(0, -10, 15, 0, 0).command;
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
            .drawCircle(0, 0, 3);
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

        cactusContainer.stopKillTimeline = function () {
            cactusEyesTimeline.stop().kill();
        };

        return [cactusTimeline, cactusContainer, flowerWrapper, cactusWrapper];
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
            .to(tearWrapper, 2, {scaleX: 1, scaleY: 1, ease: Power4.easeOut}, 'desertFace')
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

        desertFaceContainer.stopKillTimeline = function () {
            desertFaceEyesTimeline.stop().kill();
        };

        return [desertFaceTimeline, desertFaceContainer];
    }

    function getDesertGroundTimeline(x, y) {
        var desertGroundTimeline = new TimelineMax();

        var desertGroundContainer = getDesertGroundContainer(x, y);

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

        desertGroundContainer.stopKillTimeline = function () {
            desertGroundTimeline.stop().kill();
            creatureWrapper1.stopKillTimeline();
            creatureWrapper2.stopKillTimeline();
            creatureWrapper3.stopKillTimeline();
        };

        return [desertGroundTimeline, desertGroundContainer];
    }

    function getJackalopeTimeline(x, y) {
        var jackalopeTimeline = new TimelineMax();

        var jackalopeContainer = getIceContainer(x, y);

        var jackalopeWrapper = new createjs.Container();
        var body = new createjs.Shape();
        body.graphics
            .beginFill(COLOR_JACKALOPE)
            .arc(0, 25, 12.5, 180 * Math.PI / 180, 0);
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

        jackalopeContainer.stopKillTimeline = function () {
            eyesTimeline.stop().kill();
            earTimeline.stop().kill();
        };

        return [jackalopeTimeline, jackalopeContainer];
    }

    function getYetiTimeline(x, y) {
        var yetiTimeline = new TimelineMax();

        var yetiContainer = getIceContainer(x, y);

        var yetiWrapper = new createjs.Container();

        var head = new createjs.Shape();
        head.graphics.beginFill(COLOR_YETI)
            .drawCircle(0, -15, 15);

        var face = new createjs.Shape();
        face.graphics.beginFill(COLOR_YETI_DARK_BLUE)
            .drawCircle(0, -15, 11);

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('black')
            .drawEllipse(-6, -20, 3, 4)
            .drawEllipse(4, -20, 3, 4)
        ;
        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 1.5, yoyo: true});
        eyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -18})
            .to(eyes, .2, {scaleY: 1, y: 0});

        var mouth = new createjs.Shape();
        mouth.graphics.beginFill(COLOR_YETI)
            .arc(0, -24, 21, 30 * Math.PI / 180, 150 * Math.PI / 180)
        ;

        var teeth = new createjs.Shape();
        teeth.graphics.beginFill(COLOR_YETI_DARK_BLUE)
            .arc(0, -21, 17, 35 * Math.PI / 180, 145 * Math.PI / 180)
            .endFill()
            .setStrokeStyle(4)
            .beginStroke(COLOR_YETI_BLUE)
            .moveTo(-4.7, -11)
            .lineTo(-4.7, -8)
            .moveTo(4.7, -11)
            .lineTo(4.7, -8)
        ;

        var body = new createjs.Shape();
        body.graphics
            .beginFill(COLOR_YETI)
            .drawCircle(0, 0, 24)
        ;

        var tummy = new createjs.Shape();
        tummy.graphics
            .beginFill(COLOR_YETI_BLUE)
            .drawCircle(0, 0, 18);

        var leftHandWrapper = new createjs.Container();
        leftHandWrapper.x = -22;
        leftHandWrapper.y = -8;

        var leftHand = new createjs.Shape();
        leftHand.graphics
            .setStrokeStyle(8, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(0, 0)
            .lineTo(0, 16);
        leftHand.rotation = -20;
        leftHandWrapper.addChild(leftHand);

        var leftHandTimeline = new TimelineMax({repeat: -1, yoyo: true});
        leftHandTimeline
            .to(leftHand, .8, {rotation: "+=40", ease: Sine.easeOut})
            .to(leftHand, .8, {rotation: "-=40", ease: Sine.easeIn});

        var rightHandWrapper = new createjs.Container();
        rightHandWrapper.x = 22;
        rightHandWrapper.y = -8;

        var rightHand = new createjs.Shape();
        rightHand.graphics
            .setStrokeStyle(8, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(0, 0)
            .lineTo(0, 16)
        ;
        rightHand.rotation = 20;
        rightHandWrapper.addChild(rightHand);

        var rightHandTimeline = new TimelineMax({repeat: -1, yoyo: true});
        rightHandTimeline
            .to(rightHand, .8, {rotation: "-=40", ease: Sine.easeOut})
            .to(rightHand, .8, {rotation: "+=40", ease: Sine.easeIn});

        var leftFoot = new createjs.Shape();
        leftFoot.graphics
            .beginFill(COLOR_YETI)
            .setStrokeStyle(7, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(-6, 22)
            .lineTo(-20, 22)
        ;

        var rightFoot = new createjs.Shape();
        rightFoot.graphics
            .beginFill(COLOR_YETI)
            .setStrokeStyle(7, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(6, 22)
            .lineTo(20, 22)
        ;

        var hair = new createjs.Shape();
        hair.graphics
            .setStrokeStyle(2)
            .beginStroke(COLOR_YETI)
            .moveTo(0, -10)
            .lineTo(0, -33)
            .moveTo(0, -10)
            .lineTo(-5, -32)
            .moveTo(0, -10)
            .lineTo(5, -32);

        var upperWrapper = new createjs.Container();
        upperWrapper.addChild(body);
        upperWrapper.addChild(tummy);
        upperWrapper.addChild(leftHandWrapper);
        upperWrapper.addChild(rightHandWrapper);

        var headWrapper = new createjs.Container();
        headWrapper.addChild(hair);
        headWrapper.addChild(head);
        headWrapper.addChild(face);
        headWrapper.addChild(mouth);
        headWrapper.addChild(teeth);
        headWrapper.addChild(eyes);
        headWrapper.scaleX = headWrapper.scaleY = 0.9;
        headWrapper.y -= 6;

        upperWrapper.addChild(headWrapper);

        yetiWrapper.addChild(upperWrapper);
        yetiWrapper.addChild(leftFoot);
        yetiWrapper.addChild(rightFoot);

        yetiContainer.addChild(yetiWrapper);

        var degreeRotation = 15;
        yetiTimeline
            .add('right')
            .to([upperWrapper, rightFoot], .5, {rotation: '-=' + degreeRotation}, 'right')
            .add('rightend')
            .to([upperWrapper, rightFoot], .5, {rotation: '+=' + degreeRotation}, 'rightend')
            .add('left')
            .to([upperWrapper, leftFoot], .5, {rotation: '+=' + degreeRotation}, 'left')
            .add('leftend')
            .to([upperWrapper, leftFoot], .5, {rotation: '-=' + degreeRotation}, 'leftend')
            .add('right2')
            .to([upperWrapper, rightFoot], .5, {rotation: '-=' + degreeRotation}, 'right2')
            .add('rightend2')
            .to([upperWrapper, rightFoot], .5, {rotation: '+=' + degreeRotation}, 'rightend2')
        ;

        yetiContainer.stopKillTimeline = function () {
            eyesTimeline.stop().kill();
            leftHandTimeline.stop().kill();
            rightHandTimeline.stop().kill();
        };

        return [yetiTimeline, yetiContainer, leftHandTimeline, rightHandTimeline, leftHand, rightHand];
    }

    function getSeaMonsterTimeline(x, y) {
        var seaMonsterTimeline = new TimelineMax();

        var seaMonsterContainer = getIceSeaContainer(x, y);

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
            .to(seaMonsterCmd, .5, {startAngle: 180 * Math.PI / 180, endAngle: 0, ease: Sine.easeOut}, 'seaMonster')
            .to(seaMonsterCmd, .5, {y: 25}, 'seaMonster')
        ;

        seaMonsterContainer.stopKillTimeline = function () {
            eyeTimeline.stop().kill();
        };

        return [seaMonsterTimeline, seaMonsterContainer];
    }

    function getSharkTimeline(x, y) {
        var sharkTimeline = new TimelineMax({repeat: -1});

        var sharkContainer = getIceSeaContainer(x, y);

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

        sharkContainer.stopKillTimeline = function () {
            sharkTimeline.stop().kill();
        };

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
            .drawRoundRect(-15, 20, 30, 5, 0)
            .command;
        var snakeCmd2 = snake.graphics.endFill().beginFill(COLOR_SNAKE)
            .drawRoundRect(10, 15, 20, 5, 0)
            .command;
        var snakeCmd3 = snake.graphics.endFill().beginFill(COLOR_SNAKE)
            .drawRoundRect(-5, 10, 10, 5, 0)
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
            .set([snakeCmd1, snakeCmd2, snakeCmd3], {w: 0, radiusTL: 0, radiusTR: 0, radiusBL: 0, radiusBR: 0})
            .set(snakeCmd4, {h: 0})
            .set(headCmd, {w: 0})
            .set(eyes, {alpha: 0})
            .set([handsCmd1, handsCmd2, handsCmd3, handsCmd4, handsCmd5, handsCmd6, handsCmd7, handsCmd8], {radius: 0})
            .set(snakeCmd1, {radiusTL: 2.5, radiusTR: 2.5, radiusBL: 2.5, radiusBR: 2.5})
            .to(snakeCmd1, .4, {w: 30})
            .set(snakeCmd2, {radiusTL: 2.5, radiusTR: 2.5, radiusBL: 2.5, radiusBR: 2.5})
            .to(snakeCmd2, .35, {x: -10, w: 20})
            .set(snakeCmd3, {radiusTL: 2.5, radiusTR: 2.5, radiusBL: 2.5, radiusBR: 2.5})
            .to(snakeCmd3, .3, {w: 10})
            .to(snakeCmd4, .3, {h: -16})
            .to(headCmd, .3, {w: 14})
            .set(eyes, {alpha: 1})
            .to(handsCmd1, .2, {radius: 5}, '+=.15')
            .to([handsCmd2, handsCmd3, handsCmd4], .2, {radius: 2})
            .to(handsCmd5, .2, {radius: 5})
            .to([handsCmd6, handsCmd7, handsCmd8], .2, {radius: 2})
        ;

        snakeContainer.stopKillTimeline = function () {
            snakeEyesTimeline.stop().kill();
        };

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
            .drawRoundRectComplex(-12, 20, 24, 15, 5, 5, 0, 0);
        nobitaWrapper.addChild(shirt);

        var pants = new createjs.Shape();
        pants.graphics.beginFill(COLOR_NOBITA_PANTS)
            .drawRoundRectComplex(-12, 35, 24, 8, 0, 0, 0, 5);
        nobitaWrapper.addChild(pants);

        var limbs = new createjs.Shape();
        limbs.graphics.beginFill(COLOR_FACE)
            .rect(12, 22, 10, 5)
            .arc(22, 24.5, 2.5, -90 * Math.PI / 180, 90 * Math.PI / 180)
            .rect(12, 37, 10, 5)
            .arc(22, 39.5, 2.5, -90 * Math.PI / 180, 90 * Math.PI / 180);
        nobitaWrapper.addChild(limbs);

        nobitaWrapper.x += 1;
        nobitaWrapper.y -= 10;
        hugContainer.addChild(nobitaWrapper);

        hugContainer.stopKillTimeline = function () {
            eyesTimeline.stop().kill();
        };

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
                .moveTo(24, ((i % 5) * 12) - 18)
                .lineTo(13, ((i % 5) * 12) - 21)
                .lineTo(24, ((i % 5) * 12) - 24)
                .endFill().beginFill(COLOR_KNIFE_HANDLE)
                .rect(24, ((i % 5) * 12) - 26, 3, 10)
                .endFill().beginFill(COLOR_KNIFE_HANDLE)
                .rect(27, ((i % 5) * 12) - 22, 3, 2)
            ;

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

        spikeContainer.stopKillTimeline = function () {
            spikeTimeline.stop().kill();
        };

        return [spikeTimeline, spikeContainer, [knifeSet1, knifeSet2, knifeSet3, knifeSet4, knifeSet5, knifeSet6, knifeSet7]];
    }

    // End timelines
    function getEndCatTimeline(x, y) {
        var catTimeline = new TimelineMax();

        var catContainer = getDefaultContainer(x, y);

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
        catWrapper.x += 18;
        catContainer.addChild(catWrapper);

        var creature = getCreatureContainer();
        catContainer.addChild(creature);
        creature.x -= 18;
        creature.y += 13;

        catEyes.y = 1;

        var creatureTimeline = new TimelineMax({repeat: -1, ease: Sine.easeInOut});
        creatureTimeline
            .add('start')
            .to(creature, .6, {y: '-=19.5', rotation: '+=180'}, 'start')
            .to(catEyes, .6, {y: -1}, 'start')
            .to(creature, .6, {y: '+=19.5', rotation: '+=180'}, 'start+=.6')
            .to(catEyes, .6, {y: 1}, 'start+=.6');
        creatureTimeline.name = 'creatureTimeline';
        catContainer.timeline = creatureTimeline;

        return [catTimeline, catContainer];
    }

    function getEndBalloonTimeline(x, y) {
        var balloonTimeline = new TimelineMax();

        var balloonContainer = new createjs.Container();
        balloonContainer.x = x;
        balloonContainer.y = y;

        var background = new createjs.Shape();
        background.graphics
            .beginFill(COLOR_HIGH_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        balloonContainer.addChild(background);

        var balloonWrapper = new createjs.Container();
        var balloon1 = new createjs.Shape();
        balloon1.graphics
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(-6, 24)
            .lineTo(-11, -11);
        balloon1.graphics
            .endStroke()
            .endFill().beginFill(COLOR_BALLOON_1)
            .drawEllipse(-18, -20, 14, 18);
        balloon1.rotation = -12;
        balloonWrapper.addChild(balloon1);

        var balloon2 = new createjs.Shape();
        balloon2.graphics
            .setStrokeStyle(1)
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(0, 24)
            .lineTo(0, -11);
        balloon2.graphics
            .endStroke()
            .beginFill(COLOR_BALLOON_2)
            .drawEllipse(-7, -24, 14, 18);
        balloon2.rotation = 0;
        balloonWrapper.addChild(balloon2);

        var balloon3 = new createjs.Shape();
        balloon3.graphics
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(6, 24)
            .lineTo(11, -11);
        balloon3.graphics
            .endStroke()
            .endFill().beginFill(COLOR_BALLOON_3)
            .drawEllipse(4, -20, 14, 18);
        balloon3.rotation = 12;
        balloonWrapper.addChild(balloon3);

        var creature = getCreatureContainer();
        creature.addChildAt(balloonWrapper, 0);
        balloonContainer.addChild(creature);

        balloonWrapper.y -= 20;
        creature.y += 10;
        creature.rotation = 10;

        var creatureTimeline = new TimelineMax({repeat: -1, yoyo: true});
        creatureTimeline.to(creature, 1, {y: '+=4'});

        var creatureTimeline2 = new TimelineMax({repeat: -1});
        creatureTimeline2
            .to(creature, 2, {rotation: '-=20'})
            .to(creature, 1.5, {})
            .to(creature, 2, {rotation: '+=20'})
            .to(creature, 1.5, {});
        creatureTimeline2.name = 'creatureTimeline2';
        balloonContainer.timeline = creatureTimeline2;

        return [balloonTimeline, balloonContainer];
    }

    function getEndSeaTimeline(x, y) {
        var seaObjs = getSeaTimeline(x, y);
        var seaTimeline = seaObjs[0];
        var seaContainer = seaObjs[1];
        var grassWrapper = seaObjs[2];

        var creature = getCreatureContainer();
        seaContainer.addChild(creature);
        creature.x = 25;
        creature.y = 12;

        grassWrapper.x -= 10;

        var bubble = new createjs.Shape();
        var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(2, -19, 0)
            .command;
        creature.addChild(bubble);

        var bubble2 = new createjs.Shape();
        var bubbleCmd2 = bubble2.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(2, -19, 0)
            .command;
        creature.addChild(bubble2);

        var bubble3 = new createjs.Shape();
        var bubbleCmd3 = bubble3.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(2, -19, 0)
            .command;
        creature.addChild(bubble3);

        seaTimeline
            .to(bubbleCmd, 4, {
                x: 10,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 0.5)
            .to(bubbleCmd2, 4, {
                x: 10,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 1.8)
            .to(bubbleCmd3, 4, {
                x: 10,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 3.1)
        ;

        var creatureTimeline = new TimelineMax({repeat: -1, yoyo: true});
        creatureTimeline
            .to(creature, .5, {y: '-=3'});
        return [seaTimeline, seaContainer];
    }

    function getEndCactusTimeline(x, y) {
        var cactusContainer = getDesertGroundContainer(x, y);
        var cactusWrapper = new createjs.Container();

        var cactus = new createjs.Shape();
        cactus.graphics.beginFill(COLOR_CACTUS)
            .rect(-15, 25, 30, -35)
            .endFill().beginFill(COLOR_CACTUS)
            .arc(0, -10, 15, -90 * Math.PI / 180, 270 * Math.PI / 180);
        cactusWrapper.addChild(cactus);

        var leftHand = new createjs.Shape();
        leftHand.graphics.setStrokeStyle(10, 'round', 'round')
            .beginStroke(COLOR_CACTUS)
            .moveTo(-15, 10);
        leftHand.graphics.arcTo(-22, 10, -22, 10, 5);
        var leftHandCmd = leftHand.graphics.lineTo(-22, -5).command;
        cactusWrapper.addChild(leftHand);

        var rightHand = new createjs.Shape();
        rightHand.graphics
            .setStrokeStyle(10, 'round', 'round')
            .beginStroke(COLOR_CACTUS)
            .moveTo(15, 10);
        rightHand.graphics.arcTo(22, 10, 22, 10, 5);
        var rightHandCmd = rightHand.graphics.lineTo(22, -10).command;
        cactusWrapper.addChild(rightHand);

        var stripe = new createjs.Shape();
        stripe.graphics.setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(0, 25)
            .lineTo(0, -20)
            .endStroke().beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(-8, 25)
            .lineTo(-8, -16)
            .endStroke().beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(8, 25)
            .lineTo(8, -16);

        cactusWrapper.addChild(stripe);
        var leftStripe = new createjs.Shape();
        leftStripe.graphics
            .setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(-15, 10);
        leftStripe.graphics.arcTo(-22, 10, -22, 10, 5);
        var leftStripeCmd = leftStripe.graphics.lineTo(-22, -5).command;
        cactusWrapper.addChild(leftStripe);

        var rightStripe = new createjs.Shape();
        rightStripe.graphics
            .setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(15, 10);
        rightStripe.graphics.arcTo(22, 10, 22, 10, 5);
        var rightStripeCmd = rightStripe.graphics.lineTo(22, -10).command;
        cactusWrapper.addChild(rightStripe);

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('black')
            .drawEllipse(-9, -9, 5, 8)
            .endFill().beginFill('black')
            .drawEllipse(4, -9, 5, 8);

        var cactusEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2});
        cactusEyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -5})
            .to(eyes, .2, {scaleY: 1, y: 0});

        cactusWrapper.addChild(eyes);

        var flowerWrapper = new createjs.Container();
        flowerWrapper.x = 12;
        flowerWrapper.y = -19;

        var flower = new createjs.Shape();
        flower.graphics
            .beginFill('yellow')
            .drawCircle(0, 0, 3);
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

        var creature = getCreatureContainer();
        creature.x = 22;
        creature.y = -24;

        cactusWrapper.addChild(flowerWrapper);
        cactusContainer.addChild(cactusWrapper);
        cactusContainer.addChild(creature);

        var cactusTimeline = new TimelineMax({ease: Sine.easeInOut, repeat: -1});
        cactusTimeline
            .add('start')
            .to(creature, .5, {x: '-=22', y: '-=14', rotation: '-=180'})
            .to(creature, .5, {x: '-=22', y: '+=14', rotation: '-=180'})
            .to([leftHandCmd, leftStripeCmd], .5, {y: '-=5'}, 'start+=.5')
            .to([rightHandCmd, rightStripeCmd], .5, {y: '+=5'}, 'start+=.5')
            .add('start2')
            .to(creature, .5, {x: '+=22', y: '-=14', rotation: '-=180'})
            .to(creature, .5, {x: '+=22', y: '+=14', rotation: '-=180'})
            .to([leftHandCmd, leftStripeCmd], .5, {y: '+=5'}, 'start2+=.5')
            .to([rightHandCmd, rightStripeCmd], .5, {y: '-=5'}, 'start2+=.5');

        return [cactusTimeline, cactusContainer];
    }

    function getEndYetiTimeline(x, y) {
        var yetiObjs = getYetiTimeline(x, y);
        var yetiTimeline = yetiObjs[0];
        var yetiContainer = yetiObjs[1];
        var leftHandTimeline = yetiObjs[2];
        var rightHandTimeline = yetiObjs[3];
        yetiTimeline.remove();
        leftHandTimeline.remove();
        rightHandTimeline.remove();

        var leftHand = yetiObjs[4];
        var rightHand = yetiObjs[5];

        var creature = getCreatureContainer();
        yetiContainer.addChild(creature);
        creature.y += 5;

        var endYetiTimeline = new TimelineMax({repeat: -1});
        endYetiTimeline
            .add('hands')
            .to(leftHand, .8, {rotation: "+=40", ease: Sine.easeOut}, 'hands')
            .to(leftHand, .8, {rotation: "-=40", ease: Sine.easeIn}, 'hands+=.8')
            .to(rightHand, .8, {rotation: "-=40", ease: Sine.easeOut}, 'hands')
            .to(rightHand, .8, {rotation: "+=40", ease: Sine.easeIn}, 'hands+=.8')
            .to(creature, 1.6, {rotation: '+=360'}, 'hands')
            .to(creature, .4, {y: '+=8'}, 'hands')
            .to(creature, .8, {y: '-=16'}, 'hands+=.4')
            .to(creature, .4, {y: '+=8'}, 'hands+=1.2')
            .to(creature, .6, {});

        return [endYetiTimeline, yetiContainer];
    }

    function getEndSeaMonsterTimeline(x, y) {

        var seaMonsterContainer = getIceSeaContainer(x, y);

        var seaMonsterWrapper = new createjs.Container();

        var seaMonster = new createjs.Shape();
        seaMonster.graphics
            .beginFill(COLOR_SEA_MONSTER)
            .arc(-10, 25, 20, 180 * Math.PI / 180, 0);

        seaMonster.graphics
            .endFill().beginFill(COLOR_SEA_MONSTER)
            .rect(10, 25, 8, -40);

        seaMonster.graphics
            .endFill().beginFill(COLOR_SEA_MONSTER)
            .drawEllipse(10, -22, 20, 12);
        seaMonsterWrapper.addChild(seaMonster);

        var eye = new createjs.Shape();
        eye.graphics
            .beginFill('black')
            .drawCircle(0, 2, 2);
        var eyeWrapper = new createjs.Container();
        eyeWrapper.x = 23;
        eyeWrapper.y = -19;
        eyeWrapper.addChild(eye);
        seaMonsterWrapper.addChild(eyeWrapper);

        var eyeTimeline = new TimelineMax({repeat: -1, repeatDelay: 2});
        eyeTimeline
            .to(eye, .2, {scaleY: 0, y: 2})
            .to(eye, .2, {scaleY: 1, y: 0});

        seaMonsterContainer.addChildAt(seaMonsterWrapper, 1);

        var creature = getCreatureContainer();
        creature.x = -10;
        seaMonsterContainer.addChild(creature);

        seaMonsterWrapper.y += 10;

        var seaMonsterTimeline = new TimelineMax({repeat: -1});
        seaMonsterTimeline
            .add('bounce')
            .add('bounce2', 'bounce+=.9')
            .to(seaMonsterWrapper, .3, {y: '-=10'}, 'bounce')
            .to(creature, 1.2, {x: '+=30', ease: Sine.easeIn}, 'bounce')
            .to(creature, 1.2, {rotation: '+=360'}, 'bounce')
            .to(creature, .9, {y: '-=36'}, 'bounce')
            .to(creature, .3, {y: '+=12'}, 'bounce2')
            .to(seaMonsterWrapper, .3, {y: '+=10'}, 'bounce2')
            .to(creature, .6, {})
            .add('bounce3')
            .to(seaMonsterWrapper, .3, {y: '-=10'}, 'bounce3')
            .to(creature, .3, {y: '-=12'}, 'bounce3')
            .add('bounce4')
            .to(creature, .9, {y: '+=36'}, 'bounce4')
            .to(creature, 1.2, {x: '-=30', ease: Sine.easeOut}, 'bounce4-=.3')
            .to(creature, 1.2, {rotation: '-=360'}, 'bounce4-=.3')
            .to(seaMonsterWrapper, .3, {y: '+=10'}, 'bounce4+=.6')
            .to(creature, .6, {});

        return [seaMonsterTimeline, seaMonsterContainer];
    }

    // Containers
    function getDefaultContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getSpringContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_SPRING_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SPRING_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getSummerContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_SUMMER_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SUMMER_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getAutumnContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_AUTUMN_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_AUTUMN_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getWinterContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_WINTER_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_WINTER_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getSeaWaveContainer(x, y) {
        var segmentSea = new createjs.Shape();
        segmentSea.graphics.beginFill(COLOR_SEA)
            .arc(0, 0, CIRCLE_RADIUS, -30 * Math.PI / 180, 210 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_HIGH_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 210 * Math.PI / 180, -30 * Math.PI / 180);

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

        return _constructContainer(x, y, [segmentSea, segmentSky]);
    }

    function getSeaContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_SEA_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSea = new createjs.Shape();
        segmentSea.graphics.beginFill(COLOR_SEA)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSea]);
    }

    function getDesertGroundContainer(x, y) {
        var segmentDesert = new createjs.Shape();
        segmentDesert.graphics.beginFill(COLOR_DESERT)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DESERT_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentDesert, segmentSky]);
    }

    function getIceContainer(x, y) {
        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DARK_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        var segmentIce = new createjs.Shape();
        segmentIce.graphics.beginFill(COLOR_ICE_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        return _constructContainer(x, y, [segmentSky, segmentIce]);
    }

    function getIceSeaContainer(x, y) {
        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DARK_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        var segmentSea = new createjs.Shape();
        segmentSea.graphics.beginFill(COLOR_DARK_SEA)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        return _constructContainer(x, y, [segmentSky, segmentSea]);
    }

    // Custom containers
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
        eyesTimeline.name = 'eyesTimeline1';

        creatureWrapper.stopKillTimeline = function () {
            eyesTimeline.stop().kill();
        };
        return creatureWrapper;
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

    function getTContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature1.y -= unitLength;
        creature2.y -= unitLength;
        creature3.x += unitLength;
        creature3.y -= unitLength;
        creature5.y += unitLength;

        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);

        container.stopKillTimeline = function () {
            creature1.stopKillTimeline();
            creature2.stopKillTimeline();
            creature3.stopKillTimeline();
            creature4.stopKillTimeline();
            creature5.stopKillTimeline();
        };

        return container;
    }

    function getHContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();
        var creature7 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature1.y -= unitLength;
        creature2.x -= unitLength;
        creature3.x -= unitLength;
        creature3.y += unitLength;
        creature5.x += unitLength;
        creature5.y -= unitLength;
        creature6.x += unitLength;
        creature7.x += unitLength;
        creature7.y += unitLength;

        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);
        container.addChild(creature7);

        container.stopKillTimeline = function () {
            creature1.stopKillTimeline();
            creature2.stopKillTimeline();
            creature3.stopKillTimeline();
            creature4.stopKillTimeline();
            creature5.stopKillTimeline();
            creature6.stopKillTimeline();
            creature7.stopKillTimeline();
        };

        return container;
    }

    function getEContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();
        var creature7 = getCreatureContainer();
        var creature8 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature1.y -= unitLength;
        creature2.y -= unitLength;
        creature3.x += unitLength;
        creature3.y -= unitLength;
        creature4.x -= unitLength;
        creature6.x -= unitLength;
        creature6.y += unitLength;
        creature7.y += unitLength;
        creature8.x += unitLength;
        creature8.y += unitLength;

        creature5.scaleY = .6;
        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);
        container.addChild(creature7);
        container.addChild(creature8);

        container.stopKillTimeline = function () {
            creature1.stopKillTimeline();
            creature2.stopKillTimeline();
            creature3.stopKillTimeline();
            creature4.stopKillTimeline();
            creature5.stopKillTimeline();
            creature6.stopKillTimeline();
            creature7.stopKillTimeline();
            creature8.stopKillTimeline();
        };

        return container;
    }

    function getNContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature2.x -= unitLength;
        creature2.y += unitLength;
        creature3.x += unitLength / 2;
        creature3.y -= unitLength;
        creature4.x += unitLength;
        creature5.x += unitLength;
        creature5.y += unitLength;
        creature6.x -= unitLength / 2;
        creature6.y -= unitLength;

        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);

        container.stopKillTimeline = function () {
            creature1.stopKillTimeline();
            creature2.stopKillTimeline();
            creature3.stopKillTimeline();
            creature4.stopKillTimeline();
            creature5.stopKillTimeline();
            creature6.stopKillTimeline();
        };

        return container;
    }

    function getDContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength / 2;
        creature1.y -= unitLength;
        creature2.x += unitLength / 2;
        creature2.y -= unitLength;
        creature3.x -= unitLength / 2;
        creature4.x += unitLength;
        creature5.x -= unitLength / 2;
        creature5.y += unitLength;
        creature6.x += unitLength / 2;
        creature6.y += unitLength;

        creature4.scaleX = .75;
        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);

        container.stopKillTimeline = function () {
            creature1.stopKillTimeline();
            creature2.stopKillTimeline();
            creature3.stopKillTimeline();
            creature4.stopKillTimeline();
            creature5.stopKillTimeline();
            creature6.stopKillTimeline();
        };

        return container;
    }

    function getCustomHeartContainer(x, y) {
        var segmentDesert = new createjs.Shape();
        segmentDesert.graphics.beginFill(COLOR_DESERT)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DESERT_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        var container = _constructContainer(x, y, [segmentDesert, segmentSky]);

        var heartContainer1 = getHeartContainer(-20, 0);
        var heartContainer2 = getHeartContainer(0, 15);
        var heartContainer3 = getHeartContainer(20, 0);
        var heartContainer4 = getHeartContainer(15, -20);
        var heartContainer5 = getHeartContainer(-15, -20);
        var heartContainer6 = getHeartContainer(0, -5);

        container.addChild(heartContainer1);
        container.addChild(heartContainer2);
        container.addChild(heartContainer3);
        container.addChild(heartContainer4);
        container.addChild(heartContainer5);
        container.addChild(heartContainer6);

        return [null, container];
    }

    // Utilities
    /**
     * Returns a createjs.Container instance with center (x, y) and segments as its children.
     */
    function _constructContainer(x, y, segments) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        segments.forEach(function (segment) {
            container.addChild(segment);
        });

        return container;
    }

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

    init();
})();