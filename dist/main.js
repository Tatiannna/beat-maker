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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nconst container = document.getElementById(\"container\");\nconst navBar = document.getElementById(\"nav\");\n\nconst newTrackButton = document.createElement('button');\nnewTrackButton.textContent = 'Add Track';\nnav.appendChild(newTrackButton);\n\n\nconst track = document.createElement('ul');\ntrack.classList.add(\"track\");\n\n// Add controls\n    let remove = document.createElement('button');\n    remove.textContent = 'Remove';\n    let mute = document.createElement('button');\n    mute.textContent = 'Mute';\n    track.appendChild(remove);\n    track.appendChild(mute);\n\n\n\n\n//Add segments\nfor (let i = 0; i < 8; i++){\n    let segment = document.createElement('li');\n    segment.classList.add(\"segment\");\n    segment.classList.add(\"off\");\n    segment.dataset.pos = `${i}`;\n    track.appendChild(segment);\n}\n\ncontainer.appendChild(track);\n\n\n\n\n\nnewTrackButton.addEventListener(\"click\", (e) =>{\n    //e.preventDefault();\n    let track = document.createElement('ul');\n    track.classList.add(\"track\");\n\n    //Add controls\n    let remove = document.createElement('button');\n    remove.textContent = 'Remove';\n    let mute = document.createElement('button');\n    mute.textContent = 'Mute';\n    track.appendChild(remove);\n    track.appendChild(mute);\n\n\n    //Add segments\n    for (let i = 0; i < 8; i++){\n        let segment = document.createElement('li');\n        segment.classList.add(\"segment\");\n        segment.classList.add(\"off\");\n        segment.dataset.pos = `${i}`;\n        track.appendChild(segment);\n    }\n\n    console.log(container);\n    container.appendChild(track);\n});\n\n//# sourceURL=webpack://beat-maker/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;