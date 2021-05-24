var description = [
    "/images/shizuka/img_1.png",
    "/images/shizuka/img_2.png",
    "/images/shizuka/img_3.png",
    "/images/shizuka/img_4.png",
    "/images/shizuka/img_5.png",
    "/images/shizuka/img_6.png",
    "/images/shizuka/img_7.png",
    "/images/shizuka/img_8.png",
    "/images/shizuka/img_9.png",
  ];
  
  var size = description.length
  var x = Math.floor(size*Math.random())
  document.getElementById('shizuka').src=description[x];