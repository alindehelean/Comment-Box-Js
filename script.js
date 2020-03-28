// const comments = [];
// const btn = document.querySelector('#commentBtn');
// const input = document.querySelector('#commentInput');

// function displayComments(comments, containerNode) {
//     function addParagraph(text) {
//         const newP = document.createElement("p");
//         newP.innerText = text;
//         return newP;
//     }

//     function addTitle(title) {
//         const h2 = document.createElement("h2");
//         h2.innerText = title;
//         return h2;
//     }

//     function addImage(){
//         const img = document.createElement("img");
//         img.setAttribute("src","https://d2f7anuvnar8n5.cloudfront.net/p/assets/animations/hurricane_1e8e060c71635d9c72b776820991d419.png");
//         img.classList.add("image");
//         return img;
//     }

//     function addDeleteBtn(){
//         const deleteBtn = document.createElement("input");
//         deleteBtn.type = "submit";
//         deleteBtn.value = "Delete";
//         deleteBtn.classList.add("deleteBtn");

//         const id = comments.length;
//         deleteBtn.addEventListener("click", function(e){
//             e.preventDefault();
//             const commentDiv = document.getElementById(id);
//             //console.log(commentDiv);
//             commentDiv.remove(comments);
//             for (let i=0; i<comments.length; i++){
//                 if(comments[i].id === id){
//                     comments.splice(i,i)  
//                 }
//             }
//         })
//         return deleteBtn;    
//     }
    
//     function createCommentNode(comment) {
//         const containerBox = document.createElement('div');

//         const title = addTitle(comment.email);
//         const p = addParagraph(comment.msg);
//         const image = addImage(comment.img);
//         const delBtn = addDeleteBtn(comment.delBtn);
//         containerBox.appendChild(image);
//         containerBox.appendChild(title);
//         containerBox.appendChild(p);
//         containerBox.appendChild(delBtn);
//         containerBox.id = comments.length;
//         containerBox.classList.add("commentArea");
//         return containerBox;
//     }
  
//     for (let idx = comments.length-1; idx < comments.length; idx++) {
//         const comment = comments[idx]; 
//         const commentNode = createCommentNode(comment);
//         containerNode.appendChild(commentNode);
//     }
// }

// btn.addEventListener('click', function() {
//     comments.push({
//         email: "yourEmail@email.com",
//         msg: input.value,
//         img: "",
//         delBtn: "",
//     });
//     displayComments(comments, document.body);
// })


////////////////////////////// DIFERENT APROACH /////////////////////////////////


(function(){

const commentBox = document.querySelector('.commentBox');
const commentInput = document.querySelector('#commentInput');
const btn = document.querySelector('#commentBtn');


btn.addEventListener('click', function(e){
    e.preventDefault();
    const email = "email@email.com";
    const text = commentInput.value;   

    if(text !== ""){
        commentBox.innerHTML += '<div class="commentArea">' + "<h1>"+ email +"</h1>" + "<p>" + text + "</p>" + ' <button class="deleteBtn" onclick="Delete(this);">Delete</button> </div>';   
    }
    
    
},false);

})();

function Delete(currentComment){
    currentComment.parentNode.parentNode.removeChild(currentComment.parentNode);
}