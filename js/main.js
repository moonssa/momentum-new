/*
const scriptFiles = [
  "js/clock.js",
  "js/greeting.js",
  "js/weather.js",
  "js/todo.js",
  "js/quote.js",
  "js/background.js",
];

const loadScripts = (index = 0) => {
  if (index < scriptFiles.length) {
    const script = document.createElement("script");
    script.src = scriptFiles[index];
    script.onload = function () {
      loadScripts(index + 1);
    };
    document.head.appendChild(script);
  }
};

loadScripts();


function loadScriptsSequentially(scripts, index = 0) {
  if (index < scripts.length) {
    var script = document.createElement("script");
    script.src = scripts[index];
    script.onload = function () {
      loadScriptsSequentially(scripts, index + 1);
    };
    document.head.appendChild(script);
  }
}

*/

function loadScriptsSequentially(scripts, index = 0) {
  if (index < scripts.length) {
    var script = document.createElement("script");
    script.src = scripts[index];
    script.onload = function () {
      loadScriptsSequentially(scripts, index + 1);
    };
    document.head.appendChild(script);
  }
}

var scriptsToLoad = [
  "js/clock.js",
  "js/greeting.js",
  "js/weather.js",
  "js/todo.js",
  "js/quote.js",
  "js/background.js",
];

loadScriptsSequentially(scriptsToLoad);
