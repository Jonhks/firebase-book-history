var commentsContainer = document.getElementById("comments-container");
var sendBtn = document.getElementById("send-btn");

var commentsData = [
  {
    content: "Me gusta el fron end development",
    style: {
      textAlign: "left",
      fontSize: "36px",
      backgroundColor: "red",
      color: "white"
    }
  },
  {
    content: "Chido",
    style: {
      textAlign: "right",
      fontSize: "36px",
      backgroundColor: "white",
      color: "black"
    }
  }
];

function drawComments() {
  commentsContainer.innerHTML = "";
  commentsData.forEach((comment, index) => {
    var commentData = comment;
    var commentDOM = createDomElementFromData(commentData, index);
    commentsContainer.appendChild(commentDOM);
  });
}

function createDomElementFromData(data, id) {
  var section = document.createElement("section");
  section.innerHTML = data.content;
  section.className = "comment";
  Object.assign(section.style, data.style);
  //edit btn
  var editBtn = document.createElement("button");
  editBtn.innerText = "Editar";
  editBtn.onclick = editComment;
  editBtn.dataset.commentId = id;
  section.appendChild(editBtn);
  //delete btn
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Borrar";
  deleteBtn.onclick = deleteComment;
  deleteBtn.dataset.commentId = id;
  section.appendChild(deleteBtn);
  return section;
}

function editComment() {
  var newText = prompt("¿Cual es el nuevo texto del comentario?");
  var commentId = event.target.dataset.commentId;
  commentsData[commentId].content = newText;
  drawComments();
}

function deleteComment() {
  var commentId = event.target.dataset.commentId;
  commentsData.splice(commentId, 1);
  drawComments();
}

sendBtn.addEventListener("click", addComment);

function addComment() {
  var commentPreview = document.getElementById("comment-preview");
  var newComment = { style: {} };
  newComment.content = commentPreview.innerText;
  Object.assign(newComment.style, commentPreview.style);
  commentsData.unshift(newComment);
  drawComments();
}

drawComments();
