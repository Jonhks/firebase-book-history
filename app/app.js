var commentText = document.getElementById("comment-text");
var commentPreviewContainer = document.getElementById("comment-preview");

commentText.addEventListener("keyup", updatePreview);

function updatePreview() {
  var textToUpdate = event.target.value;
  commentPreviewContainer.innerHTML = textToUpdate;
}

var changeSizeBigBtn = document.getElementById("change-size-big");
var changeSizeSmallBtn = document.getElementById("change-size-small");

changeSizeBigBtn.addEventListener("click", changeSizeBig);
changeSizeSmallBtn.addEventListener("click", changeSizeSmall);

function changeSizeBig() {
  commentPreviewContainer.style.fontSize = "36px";
}

function changeSizeSmall() {
  commentPreviewContainer.style.fontSize = "10px";
}
