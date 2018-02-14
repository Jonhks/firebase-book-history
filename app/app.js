var commentText = document.getElementById("comment-text");
var commentPreviewContainer = document.getElementById("comment-preview");

commentText.addEventListener("keyup", updatePreview);

function updatePreview() {
  var textToUpdate = event.target.value;
  commentPreviewContainer.innerHTML = textToUpdate;
}

var changeSizeBigBtn = document.getElementById("change-size-big");

changeSizeBigBtn.addEventListener("click", changeSizeBig);

function changeSizeBig(size) {
  commentPreviewContainer.style.fontSize = "36px";
}
