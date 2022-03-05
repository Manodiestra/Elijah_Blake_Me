// Open the section of the page the user navigated to
let targetDivName = window.location.href.split('#')[1];
let targetContentDiv = document.getElementById(targetDivName);

// Auto expand the target div content
setTimeout(function() {
  targetContentDiv.click();
}, 500);
