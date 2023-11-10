/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.js */ \"./src/track.js\");\n\n\nclass Controls {\n\n    constructor(track){\n        this.track = track; //TRACK OBJECT, NOT DIV\n        this.addControls();\n    }\n\n    addControls(){\n        console.log(\"Calling addControls(). Value of track: \", this.track);\n\n\n        // create Left track div\n        const trackLeft = document.createElement('div');\n        trackLeft.classList.add(\"track-div-left\");\n        this.track.trackDiv.appendChild(trackLeft);\n\n        // Add controls to left track div\n        let remove = document.createElement('button');\n        remove.textContent = 'Remove';\n        let mute = document.createElement('button');\n        mute.textContent = 'Mute';\n        trackLeft.appendChild(remove);\n        trackLeft.appendChild(mute);\n\n        // 'Remove' button listener\n        this.addControlListeners(remove);\n\n        // Test Sound Button\n        const testButton = document.createElement('button');\n        testButton.textContent = 'Test';\n        trackLeft.appendChild(testButton);\n\n        testButton.addEventListener(\"click\", (e) =>{\n            const audioElement = new Audio(\"./assets/RD_C_1.wav\");\n            audioElement.play();\n        });\n\n        // Add Track Play button\n        const playButton = document.createElement(\"button\");\n        playButton.textContent = \"Play\";\n        trackLeft.appendChild(playButton);\n\n        playButton.addEventListener(\"click\", (e)=> {\n            console.log(this);\n            this.track.playTrack();\n        });\n\n        // Sound TYPE selection dropdown menu\n        let soundTypeMenu = document.createElement('select');\n        let option = document.createElement(\"option\");\n        option.textContent = \"Select Sound Type\";\n        option.setAttribute('selected', true);\n        option.setAttribute('disabled', true);\n        soundTypeMenu.appendChild(option);\n\n        for(let i = 0; i < 5; i++){\n            let option = document.createElement(\"option\");\n            option.textContent = `Type ${i}`;\n            option.value = `${i}`;\n            soundTypeMenu.appendChild(option);\n        } \n        trackLeft.appendChild(soundTypeMenu);\n\n        // Sound selection dropdown menu\n        let soundMenu = document.createElement('select');\n        option = document.createElement(\"option\");\n        option.textContent = \"Select Sound\";\n        option.setAttribute('selected', true);\n        option.setAttribute('disabled', true);\n        soundMenu.appendChild(option);\n\n        for(let i = 0; i < 5; i++){\n            let option = document.createElement(\"option\");\n            option.textContent = `Instrument ${i}`;\n            option.value = `${i}`;\n            soundMenu.appendChild(option);\n        } \n\n        console.log(soundMenu);\n\n        trackLeft.appendChild(soundMenu);\n    }\n\n    addControlListeners(remove){\n        // listener for mute\n        // listener for track remove\n        // listener for volume\n        remove.addEventListener(\"click\", (e) => {\n            this.track.trackDiv.remove()\n        });\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);\n\n//# sourceURL=webpack://beat-maker/./src/controls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.js */ \"./src/track.js\");\n\n\n\nconst container = document.getElementById(\"container\");\nconst navBar = document.getElementById(\"nav\");\n\nconst newTrackButton = document.createElement('button');\nnewTrackButton.textContent = 'Add Track';\nnav.appendChild(newTrackButton);\n\n\nconst track = new _track_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container);\n\nnewTrackButton.addEventListener(\"click\", (e) =>{\n    new _track_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container);\n});\n\n\n\n\n\n\n\n\n\n// //Track container\n// const track = document.createElement('div');\n// track.classList.add(\"track\");\n// container.appendChild(track);\n\n\n// // create Left track div\n// const trackLeft = document.createElement('div');\n// trackLeft.classList.add(\"track-div-left\");\n// track.appendChild(trackLeft);\n\n\n// // Add controls to left track div\n// let remove = document.createElement('button');\n// remove.textContent = 'Remove';\n// let mute = document.createElement('button');\n// mute.textContent = 'Mute';\n// trackLeft.appendChild(remove);\n// trackLeft.appendChild(mute);\n\n// remove.addEventListener(\"click\", (e) => {\n//     track.remove()\n// });\n\n// // Sound selection dropdown menu\n// let soundMenu = document.createElement('select');\n// let option = document.createElement(\"option\");\n// option.textContent = \"Select Sound\";\n// option.setAttribute('selected', true);\n// option.setAttribute('disabled', true);\n// soundMenu.appendChild(option);\n\n// for(let i = 0; i < 5; i++){\n//     let option = document.createElement(\"option\");\n//     option.textContent = \"option\";\n//     soundMenu.appendChild(option);\n// }\n    \n// trackLeft.appendChild(soundMenu);\n\n\n\n\n// //Right track div\n// const trackRight = document.createElement('div');\n// trackRight.classList.add(\"track-div-right\")\n// track.appendChild(trackRight);\n\n\n// //Add segments to right track div\n// let trackUL = document.createElement('ul');\n// for (let i = 0; i < 8; i++){\n//     let segment = document.createElement('li');\n//     segment.classList.add(\"segment\");\n//     segment.classList.add(\"off\");\n//     segment.dataset.pos = `${i}`;\n//     trackUL.appendChild(segment);\n// }\n\n// trackRight.appendChild(trackUL);\n\n\n// // toggle segments class on/ off from click\n// let segmentState = false;\n// trackUL.addEventListener(\"click\", (e) =>{\n\n//     e.stopPropagation();\n\n//     console.log(\"segment clicked!\")\n//     // toggle class on/off\n//     if (segmentState === false){\n//         e.target.classList.remove(\"off\")\n//         e.target.classList.add(\"on\")\n//         segmentState = true;\n//     }else{\n//         e.target.classList.remove(\"on\")\n//         e.target.classList.add(\"off\")\n//         segmentState = false;\n//     }\n// });\n\n\n// newTrackButton.addEventListener(\"click\", (e) =>{\n//     // //Create Track\n//     // let trackUL = document.createElement('ul');\n//     // //trackUL.classList.add(\"track\");\n\n    \n//     // //Add controls\n//     // let remove = document.createElement('button');\n//     // remove.textContent = 'Remove';\n//     // let mute = document.createElement('button');\n//     // mute.textContent = 'Mute';\n//     // track.appendChild(remove);\n//     // track.appendChild(mute);\n\n//     // //Add segments\n//     // for (let i = 0; i < 8; i++){\n//     //     let segment = document.createElement('li');\n//     //     segment.classList.add(\"segment\");\n//     //     segment.classList.add(\"off\");\n//     //     segment.dataset.pos = `${i}`;\n//     //     track.appendChild(segment);\n//     // }\n//     // container.appendChild(track);\n\n\n//     // //Add listener to track (for segments)\n//     // let segmentState = false;\n\n//     // trackUL.addEventListener(\"click\", (e) =>{\n\n//     //     console.log(\"segment clicked!\")\n//     //     // toggle class on/off\n//     //     if (segmentState === false){\n//     //         e.target.classList.remove(\"off\");\n//     //         e.target.classList.add(\"on\");\n//     //         segmentState = true;\n//     //     }else{\n//     //         e.target.classList.remove(\"on\");\n//     //         e.target.classList.add(\"off\");\n//     //         segmentState = false;\n//     //     }\n//     // });\n\n\n\n//     //Track container\n//     const track = document.createElement('div');\n//     track.classList.add(\"track\");\n//     container.appendChild(track);\n\n\n//     // create Left track div\n//     const trackLeft = document.createElement('div');\n//     trackLeft.classList.add(\"track-div-left\");\n//     track.appendChild(trackLeft);\n\n//     // Add controls to left track div\n//         let remove = document.createElement('button');\n//         remove.textContent = 'Remove';\n//         let mute = document.createElement('button');\n//         mute.textContent = 'Mute';\n//         trackLeft.appendChild(remove);\n//         trackLeft.appendChild(mute);\n    \n//     remove.addEventListener(\"click\", (e) => {\n//         track.remove()\n//     });\n\n\n//     //Right track div\n//     const trackRight = document.createElement('div');\n//     trackRight.classList.add(\"track-div-right\")\n//     track.appendChild(trackRight);\n\n\n//     //Add segments to right track div\n//     let trackUL = document.createElement('ul');\n//     for (let i = 0; i < 8; i++){\n//         let segment = document.createElement('li');\n//         segment.classList.add(\"segment\");\n//         segment.classList.add(\"off\");\n//         segment.dataset.pos = `${i}`;\n//         trackUL.appendChild(segment);\n//     }\n\n//     trackRight.appendChild(trackUL);\n//     // console.log(trackUL.parentElement);\n\n\n//     // toggle segments class on/ off from click\n\n//     let segmentState = false;\n//     trackUL.addEventListener(\"click\", (e) =>{\n\n//         e.stopPropagation();\n        \n//         console.log(\"segment clicked!\");\n//         console.log(e.classList);\n\n//         if (e.classList.contains(\"off\")){\n//             e.target.classList.remove(\"off\");\n//             e.target.classList.add(\"on\");\n//         }else{\n//             e.target.classList.remove(\"pn\");\n//             e.target.classList.add(\"off\");\n//         }\n    \n\n//         // toggle class on/off\n//         // if (segmentState === false){\n//         //     e.target.classList.remove(\"off\")\n//         //     e.target.classList.add(\"on\")\n//         //     segmentState = true;\n//         // }else{\n//         //     e.target.classList.remove(\"on\")\n//         //     e.target.classList.add(\"off\")\n//         //     segmentState = false;\n//         // }\n\n//         // if e.classList.includes(\"on\"){\n\n//         // }\n\n//     });\n// });\n\n\n\n\n\n//# sourceURL=webpack://beat-maker/./src/index.js?");

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass Sound {\n    constructor(track){\n        this.audio = new Audio(\"./assets/RD_C_1.wav\");\n    }\n\n    playSound(){\n        console.log(\"playing sound\");\n        this.audio.play();\n    }\n\n    setSound(){\n\n    }\n\n    \n\n    random(){\n\n    }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);\n\n//# sourceURL=webpack://beat-maker/./src/sound.js?");

/***/ }),

/***/ "./src/track.js":
/*!**********************!*\
  !*** ./src/track.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.js */ \"./src/controls.js\");\n/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound.js */ \"./src/sound.js\");\n\n\n\n\nclass Track {\n    // add track - add segments, listeners to segments, controls, \n\n    constructor(container){\n        this.trackDiv = this.addTrack(container);\n        this.sound = new _sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.trackDiv);\n        console.log(\"SOUND IS\", this.sound);\n    }\n\n    addTrack(container){\n\n        console.log(\"adding a new track\");\n\n        //Track container\n        // const track = document.createElement('div');\n        this.trackDiv = document.createElement('div');\n        this.trackDiv.classList.add(\"track\");\n        container.appendChild(this.trackDiv);\n\n        // CALL ADD CONTROLS HERE\n        let controls = new _controls_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this); // PASS IN TRACK OBJECT, NOT DIV\n\n\n        //Right track div\n        const trackRight = document.createElement('div');\n        trackRight.classList.add(\"track-div-right\")\n        this.trackDiv.appendChild(trackRight);\n\n        //Add segments to right track div\n        let trackUL = document.createElement('ul');\n        for (let i = 0; i < 8; i++){\n            let segment = document.createElement('li');\n            segment.classList.add(\"segment\");\n            segment.classList.add(\"off\");\n            segment.dataset.pos = `${i}`;\n            trackUL.appendChild(segment);\n        }\n        trackRight.appendChild(trackUL);\n        this.addSegmentListner(trackUL);\n    }\n\n    addSegmentListner(trackUL){\n        let segmentState = false;\n\n        trackUL.addEventListener(\"click\", (e) =>{\n\n            console.log(\"segment clicked!\")\n            // toggle class on/off\n            if (segmentState === false){\n                e.target.classList.remove(\"off\");\n                e.target.classList.add(\"on\");\n                segmentState = true;\n                console.log(this);\n                this.sound.playSound();\n            }else{\n                e.target.classList.remove(\"on\");\n                e.target.classList.add(\"off\");\n                segmentState = false;\n            }\n        });\n    }\n\n    async playTrack(){\n        for(let i = 0; i < 8; i++){\n            this.sound.playSound();\n            console.log(\"hello world!!!\");\n            await delay(1000);\n        }\n    }\n    // randomize (add \"on\" class to random segments)\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Track);\n\n//# sourceURL=webpack://beat-maker/./src/track.js?");

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