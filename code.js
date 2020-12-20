var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["249f87c1-43db-4f6e-96aa-75f12f6ddace","d3f97e93-b281-43d0-a40b-b5abe5de85e8","6ede4723-b447-426a-8e28-9e05b2383839","1f711b9d-2965-4fe3-a4f8-a561a155d9da"],"propsByKey":{"249f87c1-43db-4f6e-96aa-75f12f6ddace":{"name":"ground2.png_1","sourceUrl":"assets/v3/animations/cTZ3yfERgYuAx8llPvuzFdc7S3qcBirUVBTOZAaOHZU/249f87c1-43db-4f6e-96aa-75f12f6ddace.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"BS.KV092HqVjl_vZzwLJs.jxHIkE.fj5","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/cTZ3yfERgYuAx8llPvuzFdc7S3qcBirUVBTOZAaOHZU/249f87c1-43db-4f6e-96aa-75f12f6ddace.png"},"d3f97e93-b281-43d0-a40b-b5abe5de85e8":{"sourceSize":{"x":237,"y":212},"frameSize":{"x":237,"y":212},"frameCount":1,"frameDelay":12,"name":"images (4).jpg_1","sourceUrl":null,"size":9185,"version":"DWelxuIUyLrceseA3UI4lxNX7kH.ykTB","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/d3f97e93-b281-43d0-a40b-b5abe5de85e8.png"},"6ede4723-b447-426a-8e28-9e05b2383839":{"sourceSize":{"x":946,"y":1384},"frameSize":{"x":473,"y":346},"frameCount":7,"frameDelay":3,"name":"download (22).png_1","sourceUrl":null,"size":3477,"version":"YV9ygGH3U5_2e2A6Oilfrs29iVvpeDGk","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/6ede4723-b447-426a-8e28-9e05b2383839.png"},"1f711b9d-2965-4fe3-a4f8-a561a155d9da":{"sourceSize":{"x":343,"y":343},"frameSize":{"x":343,"y":343},"frameCount":1,"frameDelay":4,"name":"download (19).png_1","sourceUrl":"assets/v3/animations/cTZ3yfERgYuAx8llPvuzFdc7S3qcBirUVBTOZAaOHZU/1f711b9d-2965-4fe3-a4f8-a561a155d9da.png","size":8730,"version":"6B1JisKuczId9KGgSYEjCU2OfBvmC0oK","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/cTZ3yfERgYuAx8llPvuzFdc7S3qcBirUVBTOZAaOHZU/1f711b9d-2965-4fe3-a4f8-a561a155d9da.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var ground = createSprite(200,350,399,10);
ground.setAnimation("ground2.png_1");


var obstacle = createSprite(500,315,10,40);
obstacle.setAnimation("images (4).jpg_1");
obstacle.scale=0.2;
obstacle.velocityX=-10;


var you = createSprite(50,350,10,10);
you.setAnimation("download (22).png_1");
you.scale=0.1;































function draw() {
background("white");
 createEdgeSprites();
       
  drawSprites();
  
you.collide(ground);
    
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  ground.velocityX = -10;  
  
  
  
if (obstacle.isTouching(leftEdge)) {
  
  obstacle.velocityX=-10;
  
  obstacle.x=500;
  obstacle.y=325;
  
}

  
   if(keyDown("space")&& you.y >= 300) {
        you.velocityY = -12;
     
    } 
   you.velocityY = you.velocityY + 0.8;
  
  
  

  
  
 
 
 
 
 
 
 
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
