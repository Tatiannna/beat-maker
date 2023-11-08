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

eval("\n\nconst container = document.getElementById(\"container\");\nconst navBar = document.getElementById(\"nav\");\n\nconst newTrackButton = document.createElement('button');\nnewTrackButton.textContent = 'Add Track';\nnav.appendChild(newTrackButton);\n\n\n//Track container\nconst track = document.createElement('div');\ntrack.classList.add(\"track\");\ncontainer.appendChild(track);\n\n//Right track div\nconst trackRight = document.createElement('div');\ntrackRight.classList.add(\"track-div-right\")\ntrack.appendChild(trackRight);\n\n\n//Add segments to right track div\nconst trackUL = document.createElement('ul');\nfor (let i = 0; i < 8; i++){\n    let segment = document.createElement('li');\n    segment.classList.add(\"segment\");\n    segment.classList.add(\"off\");\n    segment.dataset.pos = `${i}`;\n    track.appendChild(segment);\n}\ntrackRight.appendChild(trackUL);\n\n\n\n// create Left track div\nconst trackLeft = document.createElement('div');\ntrackLeft.classList.add(\"track-div-left\");\ntrack.appendChild(trackLeft);\n\n// Add controls to left track div\n    let remove = document.createElement('button');\n    remove.textContent = 'Remove';\n    let mute = document.createElement('button');\n    mute.textContent = 'Mute';\n    trackLeft.appendChild(remove);\n    trackLeft.appendChild(mute);\n\n\n\n\nlet segmentState = false;\n\ntrack.addEventListener(\"click\", (e) =>{\n\n    console.log(\"segment clicked!\")\n    // toggle class on/off\n    if (segmentState === false){\n        e.target.classList.remove(\"off\")\n        e.target.classList.add(\"on\")\n        segmentState = true;\n    }else{\n        e.target.classList.remove(\"on\")\n        e.target.classList.add(\"off\")\n        segmentState = false;\n    }\n});\n\n\nnewTrackButton.addEventListener(\"click\", (e) =>{\n\n    //Create Track\n\n    let trackUL = document.createElement('ul');\n    //trackUL.classList.add(\"track\");\n\n    \n    //Add controls\n    let remove = document.createElement('button');\n    remove.textContent = 'Remove';\n    let mute = document.createElement('button');\n    mute.textContent = 'Mute';\n    track.appendChild(remove);\n    track.appendChild(mute);\n\n    //Add segments\n    for (let i = 0; i < 8; i++){\n        let segment = document.createElement('li');\n        segment.classList.add(\"segment\");\n        segment.classList.add(\"off\");\n        segment.dataset.pos = `${i}`;\n        track.appendChild(segment);\n    }\n    container.appendChild(track);\n\n\n    //Add listener to track (for segments)\n\n    let segmentState = false;\n\n    track.addEventListener(\"click\", (e) =>{\n\n        console.log(\"segment clicked!\")\n        // toggle class on/off\n        if (segmentState === false){\n            e.target.classList.remove(\"off\");\n            e.target.classList.add(\"on\");\n            segmentState = true;\n        }else{\n            e.target.classList.remove(\"on\");\n            e.target.classList.add(\"off\");\n            segmentState = false;\n        }\n    });\n\n});\n\n\n\n//# sourceURL=webpack://beat-maker/./src/index.js?");

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