var imgs = [
  {
    name: "image1",
    path: "imgs/imagen1.png",
    comments: ["cool", "=)"],
    likes: 0
  },
  {
    name: "image2",
    path: "imgs/imagen1.png",
    comments: ["cool", "=)"],
    likes: 0
  },
  {
    name: "image3",
    path: "imgs/imagen1.png",
    comments: ["cool", "=)"],
    likes: 0
  },
  {
    name: "image4",
    path: "imgs/imagen1.png",
    comments: ["cool", "=)"],
    likes: 0
  }
]

function addComments(imgName){
  //var newComment = document.getElementById("newComment").value
  var newComment = "yeah";
  imgs.forEach( i => {
    if (i.name == imgName){
      i.comments.push(newComment);
    }
  });
}

function listComments(imgName){
  imgs.forEach( i => {
    if (i.name == imgName){
      i.comments.forEach( c => {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(c));

        var h5 = document.createElement("h5");
        p.appendChild(document.createTextNode("David"));

        var div = document.createElement("div");
        div.setAttribute("class", "comment-text");

        div.appendChild(h5);
        div.appendChild(p);

        var img = document.createElement("img");
        img.src = "https://avatars1.githubusercontent.com/u/6578215?v=4&s=400";

        var figure = document.createElement("figure");
        figure.appendChild(img);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "comment-user");

        div2.appendChild(figure);
        div2.appendChild(div);

        var hr = document.createElement("hr");

        var li = document.createElement("li");
        li.appendChild(hr)
        li.appendChild(div2)

        var ul = document.getElementById("comments-list");
        ul.appendChild(li);
      });
    }
  });
}

function like(imgName){
  imgs.forEach( i => {
    if (i.name == imgName){
      i.likes += 1;
    }
  });
}

// function addImage() {
//   var newImage = document.getElementById("myFile").files[0];
//
//   var img = document.createElement("img");
//   var path = window.URL.createObjectURL(newImage);
//   img.src = path;
//
//   var div = document.getElementById("container");
//   div.appendChild(img);
//
//   var imageObj = {
//    name: newImage.name,
//    path: path,
//    comments: [],
//    likes: 0
//   }
//
//   imgs.push(imageObj)
// }

function listImages() {
  imgs.forEach( i => {
  var div = document.getElementById("container");
  var img = document.createElement("img");
  img.src = i.path;
  img.setAttribute("class", "")
  div.appendChild(img);
  });
}

function imageSelected(imgName){
  imgs.forEach( i => {
    if (i.name == imgName){
      document.getElementById("bigImage").src = i.path;
    }
  });
  listComments(imgName);
}


addComments("image1")
listComments("image1")

console.log(imgs)
