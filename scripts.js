(function() {
  // 'use strict'

  var image;
  var imgs = [
    {
      name: "river",
      path: "img/river.jpg",
      comments: ["cool", "=)"],
      likes: 0
    },
    {
      name: "Chrysanthemum",
      path: "img/Chrysanthemum.jpg",
      comments: ["i love it", "<3"],
      likes: 0
    },
    {
      name: "Desert",
      path: "img/Desert.jpg",
      comments: [":O", "=)"],
      likes: 0
    },
    {
      name: "Koala",
      path: "img/Koala.jpg",
      comments: ["cool", "=)"],
      likes: 0
    }
  ]

  function listImages() {
    imgs.forEach( i => {
    var div = document.getElementById("container-imgs");
    var img = document.createElement("img");
    img.setAttribute("alt", i.name);
    img.src = i.path;
    img.setAttribute("class", "imagenes selected");
    img.addEventListener("click", activateModal);
    div.appendChild(img);
    });
  }
  listImages()

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
    image = this.alt;
    var modal = document.getElementById('modal');
    var modalShadow = document.getElementById('modal-shadow');
    imageSelected(image);
    modal.setAttribute('class', 'active');
    modalShadow.setAttribute('class', 'active');
  }

  function deactivateModal() {
    var modal = document.getElementById('modal');
    var modalShadow = document.getElementById('modal-shadow');
    modal.setAttribute('class', '');
    modalShadow.setAttribute('class', '');
  }


  function addComments(imgName){
    var newComment = document.getElementById("new-comment").value
    imgs.forEach( i => {
      if (i.name == imgName){
        i.comments.push(newComment);
        listComments(imgName);
      }
    });
    document.getElementById("new-comment").value = ""
  }

  function listComments(imgName){
    var ul = document.getElementById("comments-list");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
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

  function imageSelected(imgName){
    imgs.forEach( i => {
      if (i.name == imgName){
        document.getElementById("bigImage").src = i.path;
      }
    });
    listComments(imgName);
  }


  document.getElementById("aceptar").addEventListener("click", addImage);
  function addImage() {
    var newImage = document.getElementById("file").files[0];

    var img = document.createElement("img");
    var path = window.URL.createObjectURL(newImage);
    img.setAttribute("alt", newImage.name);
    img.src = path;
    img.setAttribute("class", "imagenes selected");
    img.addEventListener("click", activateModal);

    var div = document.getElementById("container-imgs");
    div.appendChild(img);

    var imageObj = {
     name: newImage.name,
     path: path,
     comments: [],
     likes: 0
    }
    imgs.push(imageObj)
  }

  //document.getElementById("like").addEventListener("click", like);
  function like(){
    imgs.forEach( i => {
      if (i.name == image){
        i.likes += 1;
      }
    });
  }

})();
