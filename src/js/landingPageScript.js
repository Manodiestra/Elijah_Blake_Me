let changingText = document.getElementById("changingText");
let baseText = "I'm a proud ";
let curIndex = 0;
let textOptions = [
  "Software Developer",
  "Husband & Father",
  "Privacy Advocate",
  "Cowboy",
];
function changeTextDisplay() {
  setTimeout(function() {
    changingText.innerText = baseText + textOptions[
      curIndex % textOptions.length];
    curIndex++;
    changeTextDisplay();
  }, 1000);
}
changeTextDisplay();