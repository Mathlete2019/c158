AFRAME.registerComponent("comics-posters", {
    init: function () {
        this.placesContainer = this.el;
        this.createCards();
      },

      createCards: function(){
        const thumbNailsRef = [
            {
                id: "image-1",
                title : "Image 1",
                url : "./assets/image1.jpg",
            },
            {
                id : "image-2",
                title : "Image 2",
                url : "./assets/image2.jpg",
            },
            {
                id : "image-3",
                title : "Image 3",
                url : "./assets/image3.jpg",
            },
            {
                id : "image-4",
                title : "Image 4",
                url : "./assets/image4.jpg",
            },
        ];
        let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const borderEl = this.createBorder(position, item.id);
  
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      
      return entityEl;
    },
  });