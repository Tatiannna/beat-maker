/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/beat.js":
/*!*********************!*\
  !*** ./src/beat.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.js */ \"./src/track.js\");\n\n\n\nclass Beat {\n\n    static tracks = [];\n\n    constructor(container, nav ){\n\n        this.tempo = 1000;\n        this.volume = 1000;\n\n        for(let i = 0; i < 5; i++){\n            Beat.tracks.push(new _track_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container));\n        }\n        this.addNavControls(nav);\n    }\n\n    addNavControls(nav){\n        const navRight = document.getElementById('nav-left');\n        const newTrackButton = document.createElement('button');\n        newTrackButton.textContent = 'Add Track';\n        navRight.appendChild(newTrackButton);\n\n        const play = document.createElement('button');\n        play.textContent = \"Play\";\n        navRight.appendChild(play);\n\n        const tempoPlus = document.createElement('button');\n        tempoPlus.textContent = \"Tempo +\";\n        navRight.appendChild(tempoPlus);\n\n        const tempoMinus = document.createElement('button');\n        tempoMinus.textContent = \"Tempo -\";\n        navRight.appendChild(tempoMinus);\n\n        const volumeMinus = document.createElement('button');\n        volumeMinus.textContent = \"Volume -\";\n        navRight.appendChild(volumeMinus);\n\n        const volumePlus = document.createElement('button');\n        volumePlus.textContent = \"Volume +\";\n        navRight.appendChild(volumePlus);\n\n\n        newTrackButton.addEventListener(\"click\", (e) =>{\n            this.addTrack(container);\n        });\n        \n        play.addEventListener( \"click\", (e) =>{\n            this.playAllTracks();\n        });\n        \n        tempoMinus.addEventListener( \"click\", (e) =>{\n            this.changeTempo(-50);\n        });\n        \n        tempoPlus.addEventListener( \"click\", (e) =>{\n            this.changeTempo(50);\n        });\n\n        volumeMinus.addEventListener( \"click\", (e) =>{\n            this.changeVolume(-50);\n        });\n\n        volumePlus.addEventListener( \"click\", (e) =>{\n            this.changeVolume(50);\n        });\n    }\n\n\n    addTrack(container){\n        const track = new _track_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container);\n        Beat.tracks.push(track);\n        // console.log(\"All tracks:\" ,tracks)\n    }\n\n\n    playAllTracks(){\n        const playFunctions = [];\n\n        if (Beat.tracks.length > 0){\n            Beat.tracks.forEach( (track) => {\n                playFunctions.push(new Promise(track.playTrack.bind(track)));\n            })\n            console.log(playFunctions);\n\n            Promise.all(playFunctions).catch(() => console.log(\"Something went wrong!\"));\n        }else{\n            console.log(\"No tracks to play!\");\n        }\n            \n    }\n\n    changeTempo(diff){\n        this.tempo += diff;\n        console.log(this.tempo);\n    }\n\n    changeVolume(diff){\n        this.volume += diff;\n        console.log(this.volume);\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Beat);\n\n//# sourceURL=webpack://beat-maker/./src/beat.js?");

/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.js */ \"./src/track.js\");\n/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound.js */ \"./src/sound.js\");\n/* harmony import */ var _beat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beat.js */ \"./src/beat.js\");\n\n\n\n\nclass Controls {\n\n    constructor(track){\n        this.track = track; //TRACK OBJECT, NOT DIV\n        this.addControls();\n    }\n\n    addControls(){\n        // console.log(\"Calling addControls(). Value of track: \", this.track);\n\n\n        // create Left track div\n        const trackLeft = document.createElement('div');\n        trackLeft.classList.add(\"track-div-left\");\n        this.track.trackDiv.appendChild(trackLeft);\n\n        // Add controls to left track div\n        let remove = document.createElement('button');\n        remove.textContent = 'Remove';\n        let mute = document.createElement('button');\n        mute.textContent = 'Mute';\n        trackLeft.appendChild(remove);\n        trackLeft.appendChild(mute);\n\n        // 'Remove' button listener\n        this.addControlListeners(remove);\n\n        // Test Sound Button\n        const testButton = document.createElement('button');\n        testButton.textContent = 'Test';\n        trackLeft.appendChild(testButton);\n\n        testButton.addEventListener(\"click\", (e) =>{\n            // const audioElement = new Audio();\n            // audioElement.play();\n            this.track.sound.playSound();\n        });\n\n        // Add Track Play button\n        const playButton = document.createElement(\"button\");\n        playButton.textContent = \"Play\";\n        trackLeft.appendChild(playButton);\n\n        playButton.addEventListener(\"click\", (e)=> {\n            this.track.playTrack();\n        });\n\n\n        // Sound PACK selection dropdown menu\n        let soundTypeMenu = document.createElement('select');\n        let option = document.createElement(\"option\");\n        option.textContent = \"Select Sound Pack\";\n        option.setAttribute('selected', true);\n        option.setAttribute('disabled', true);\n        soundTypeMenu.appendChild(option);\n\n\n        // Populate pack options\n        for(let i = 0; i < _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs.length; i++){\n            let option = document.createElement(\"option\");\n            option.textContent = _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs[i].name;\n            option.value = _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs[i].name;\n            soundTypeMenu.appendChild(option);\n        } \n        trackLeft.appendChild(soundTypeMenu);\n\n        // Sound selection dropdown menu\n        let soundMenu = document.createElement('select');\n        option = document.createElement(\"option\");\n        option.textContent = \"Select Sound\";\n        option.setAttribute('selected', true);\n        option.setAttribute('disabled', true);\n        soundMenu.appendChild(option);\n        trackLeft.appendChild(soundMenu);\n\n\n        // listener for pack selection\n        let selectedPack = null;\n        soundTypeMenu.addEventListener(\"change\", (e)=>{\n            selectedPack = e.srcElement.value;\n            console.log(selectedPack);\n\n            let numSounds;\n            let packIndex;\n            for(let i = 0; i < _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs.length; i++){\n                if (selectedPack === _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs[i].name){\n                    packIndex = i;\n                    numSounds = _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs[i].count;\n                }\n            }\n\n            // List available sounds based on Pack selection\n            soundMenu.replaceChildren();\n            option = document.createElement(\"option\");\n            option.textContent = \"Select Sound\";\n            option.setAttribute('selected', true);\n            option.setAttribute('disabled', true);\n            soundMenu.appendChild(option);\n            for(let i = 0; i < numSounds; i++){\n                let option = document.createElement(\"option\");\n                option.textContent = `${_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].packs[packIndex].name} ${i}`;\n                option.value = `${i}`;\n                soundMenu.appendChild(option);\n            }\n        });\n\n        //Assign track based on sound selection\n        let selectedSound = null;\n        soundMenu.addEventListener(\"change\", (e) => {\n            selectedSound = e.srcElement.value;\n            console.log(selectedSound);\n            this.track.sound.setSound(selectedPack, selectedSound);\n            this.track.sound.playSound();\n        });\n\n    }\n\n    addControlListeners(remove){\n        // listener for mute\n        // listener for track remove\n        // listener for volume\n\n        remove.addEventListener(\"click\", (e) => {\n            let idx = _beat_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tracks.indexOf(this.track);\n            console.log(\"index to remove: \", idx);\n            _beat_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tracks.splice(idx, 1);\n            this.track.trackDiv.remove();\n            //this.track = undefined;\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);\n\n//# sourceURL=webpack://beat-maker/./src/controls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.js */ \"./src/track.js\");\n/* harmony import */ var _beat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beat.js */ \"./src/beat.js\");\n/* harmony import */ var _visualization_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualization.js */ \"./src/visualization.js\");\n/* harmony import */ var _visualization_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_visualization_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound.js */ \"./src/sound.js\");\n\n\n\n\n\n\nconst container = document.getElementById(\"container\");\nconst navBar = document.getElementById(\"nav\");\nconst beat = new _beat_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](container, nav);\n\nlet navLeft = document.getElementById('nav-left');\nconst button = document.createElement('button');\nbutton.textContent = \"visuals\";\nnavLeft.appendChild(button);\n\nlet sound = new _sound_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\nbutton.addEventListener(\"click\", (e) => {\n    //sound.audio.play();\n    sound.playSound();\n});\n\n\n\n//# sourceURL=webpack://beat-maker/./src/index.js?");

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sound {\n\n    static packs = [\n        {name: \"Claps\", count: 7}, \n        {name: \"Blast Block\", count: 9}, \n        {name: \"Egg Shaker\", count: 11}, \n        {name: \"Mid Tom\", count: 10}\n    ];\n\n    constructor(packName, num){\n        this.audio = new Audio();\n        this.setSound(packName = 'Blast Block', num = 7);\n        //this.audio.crossOrigin = 'anonymous'; // CORS access restrictions\n        //this.audio.src = './assets/Claps/0.wav';\n        this.audio.loop = false;\n        this.isAnimating = false;\n        this.audioSourceSet = false;\n\n        //console.log(this.audio);\n        //this.audio.play();\n    }\n\n    playSound(){\n        //console.log(this.visualizeSound());\n        //console.log(this.audio);\n        console.log(this.audio.play());\n        console.log(\"CALLING playSound\");\n\n        const audioCtx = new AudioContext();\n        //console.log(audioCtx);\n\n        //const container = document.getElementById('container');\n        // const canvas = document.getElementById('canvas');     \n        const ctx = canvas.getContext('2d');\n\n        let audioSource;\n        let analyser;\n        \n        // try{\n        if (this.audioSourceSet === false){\n            // if (!audioSource){\n\n            audioSource = audioCtx.createMediaElementSource(this.audio);\n            analyser = audioCtx.createAnalyser();\n            audioSource.connect(analyser);\n            analyser.connect(audioCtx.destination);\n            analyser.fftSize = 64;\n            const bufferLength = analyser.frequencyBinCount; // num of bars, half the value of fft size\n            const dataArray = new Uint8Array(bufferLength); // conversion into proper format. 8 bit integers\n            let barHeight;\n            let x;\n            const barWidth = canvas.width/bufferLength; // 1 bar\n            // }     \n            this.audioSourceSet = true;\n\n\n            const animate = function(){\n                x = 0;\n                ctx.clearRect(0,0, canvas.width, canvas.height);\n                analyser.getByteFrequencyData(dataArray);\n                for(let i = 0; i < bufferLength; i++){\n                    barHeight = dataArray[i];\n                    ctx.fillStyle = 'white';\n                    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);\n                    x += barWidth;\n                }\n                requestAnimationFrame(animate);\n                console.log(\"Visualizer Running!\");\n            }\n\n            //if (this.isAnimating === false){\n            animate();\n                //this.isAnimating = true;\n            //}\n        }\n    }\n    \n\n    visualizeSound(){}\n\n       \n    src(packName, num){\n        let srcPath = './assets/';\n\n        srcPath += `${packName}/${num}.wav`;\n        return srcPath;\n    }\n\n    setSound(packName, num){\n        this.audio = new Audio(this.src(packName, num));\n    }\n\n    visualizeSound(){\n    }\n\n    random(){\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);\n\n//# sourceURL=webpack://beat-maker/./src/sound.js?");

/***/ }),

/***/ "./src/track.js":
/*!**********************!*\
  !*** ./src/track.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.js */ \"./src/controls.js\");\n/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound.js */ \"./src/sound.js\");\n/* harmony import */ var _beat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beat.js */ \"./src/beat.js\");\n\n\n\n\n\n\nclass Track {\n\n    constructor(container){\n        this.segments = [];\n        this.trackDiv = null;\n        this.sound = new _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.buildTrack(container);\n    }\n\n    buildTrack(container){\n\n\n        //Track container\n        this.trackDiv = document.createElement('div');\n        this.trackDiv.classList.add(\"track\");\n        container.appendChild(this.trackDiv);\n\n        // ADD CONTROLS HERE\n        let controls = new _controls_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n\n\n        //Right track div\n        const trackRight = document.createElement('div');\n        trackRight.classList.add(\"track-div-right\")\n        this.trackDiv.appendChild(trackRight);\n\n        //Add segments to right track div\n        let trackUL = document.createElement('ul');\n        for (let i = 0; i < 8; i++){\n            let segment = document.createElement('li');\n            segment.classList.add(\"segment\");\n            segment.classList.add(\"off\");\n            segment.dataset.pos = `${i}`;\n            this.segments.push(segment);\n            trackUL.appendChild(segment);\n        }\n        trackRight.appendChild(trackUL);\n        this.addSegmentListner(trackUL);\n    }\n\n\n    addSegmentListner(trackUL){\n        trackUL.addEventListener(\"click\", (e) =>{\n            if (e.srcElement.classList[0] == \"segment\"){\n                if (e.srcElement.classList[1] === \"off\"){\n                    e.target.classList.remove(\"off\");\n                    e.target.classList.add(\"on\");\n                }else{\n                    e.target.classList.remove(\"on\");\n                    e.target.classList.add(\"off\");\n                }\n            }\n        });\n    }\n\n\n    playTrack(){\n        let count = 0;\n\n        function playSegment(){\n            if (this.segments[count].classList[1] === \"on\"){\n                this.sound.playSound();\n                console.log(`Playing sound for segment ${count+1}`);\n            }else{\n                console.log(`NO SOUND for segment ${count+1}`);\n            }\n            count += 1;\n            if (count === 8) clearInterval(countInterval);\n        }\n        const countInterval = setInterval(playSegment.bind(this), 1000);\n    }\n    // randomize (add \"on\" class to random segments)\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Track);\n\n//# sourceURL=webpack://beat-maker/./src/track.js?");

/***/ }),

/***/ "./src/visualization.js":
/*!******************************!*\
  !*** ./src/visualization.js ***!
  \******************************/
/***/ (() => {

eval("\n\n// function visualize(){\n//     let WIDTH = 1000;\n//     let HEIGHT = 250;\n\n\n//     const canvas = document.getElementById(\"canvas\");\n//     const canvasCtx = canvas.getContext(\"2d\");\n\n//     const audioCtx = new AudioContext();\n//     const analyser = audioCtx.createAnalyser();\n\n//     // let stream = new MediaStream();\n//     // const source = audioCtx.createMediaStreamSource(stream);\n//     // source.connect(analyser);\n//     // analyser.connect(distortion);\n//     // distortion.connect(audioCtx.destination);\n\n\n//     analyser.fftSize = 2048;\n//     const bufferLength = analyser.frequencyBinCount;\n//     const dataArray = new Uint8Array(bufferLength);\n\n//     analyser.getByteTimeDomainData(dataArray);\n\n\n//     canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);\n\n\n//     function draw() {\n//         const drawVisual = requestAnimationFrame(draw);\n//         analyser.getByteTimeDomainData(dataArray);\n//         canvasCtx.fillStyle = \"rgb(200, 200, 200)\";\n//         canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);\n//         canvasCtx.lineWidth = 2;\n//         canvasCtx.strokeStyle = \"rgb(0, 0, 0)\";\n//         canvasCtx.beginPath();\n\n//         const sliceWidth = WIDTH / bufferLength;\n//         let x = 0;\n\n//         for (let i = 0; i < bufferLength; i++) {\n//             const v = dataArray[i] / 128.0;\n//             const y = v * (HEIGHT / 2);\n        \n//             if (i === 0) {\n//             canvasCtx.moveTo(x, y);\n//             } else {\n//             canvasCtx.lineTo(x, y);\n//             }\n        \n//             x += sliceWidth;\n//         }\n\n//         canvasCtx.lineTo(WIDTH, HEIGHT / 2);\n//         canvasCtx.stroke();\n//     }\n\n//     draw();\n// }\n\n// export default visualize;\n\n\n\n\n\n    \n\n\n\n\n\n\n\n\n//# sourceURL=webpack://beat-maker/./src/visualization.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;