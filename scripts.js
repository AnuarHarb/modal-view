(function() {
  // 'use strict'

  var image;

  document.getElementById("button").addEventListener("click", activateModal);
  // document.getElementById("modal").addEventListener("click", deactivateModal);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.keyCode === 27) {
        deactivateModal();
        }
    });
  document.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        addComments(image)
        }
    });

  function activateModal() {
    image = this.value;
    var modal = document.getElementById('modal');
    var modalShadow = document.getElementById('modal-shadow');
    imageSelected(image);
    modal.setAttribute('class', 'active');
    modalShadow.setAttribute('class', 'active');

  }

  function deactivateModal() {
    console.log(this);
    var modal = document.getElementById('modal');
    var modalShadow = document.getElementById('modal-shadow');
    modal.setAttribute('class', '');
    modalShadow.setAttribute('class', '');
  }


  var imgs = [
    {
      name: "image1",
      path: "img/river.jpg",
      comments: ["cool", "=)"],
      likes: 0
    },
    {
      name: "image2",
      path: "img/imagen1.png",
      comments: ["cool", "=)"],
      likes: 0
    },
    {
      name: "image3",
      path: "img/imagen1.png",
      comments: ["cool", "=)"],
      likes: 0
    },
    {
      name: "image4",
      path: "img/imagen1.png",
      comments: ["cool", "=)"],
      likes: 0
    }
  ]

  function addComments(imgName){
    var newComment = document.getElementById("new-comment").value
    console.log(newComment);
    console.log(imgs);
    imgs.forEach( i => {
      if (i.name == imgName){
        i.comments.push(newComment);
        listComments(imgName);
        console.log(imgs);
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
          h5.appendChild(document.createTextNode("David"));

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

})();
