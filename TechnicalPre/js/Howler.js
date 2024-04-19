
  document.addEventListener('DOMContentLoaded', () => {
    var animalTitles = document.getElementsByClassName('animalTitle');
  
    const animalObject = new Object();
    for(element of animalTitles) {
      animalObject[element.nextElementSibling.id] = element.innerHTML
    }
  
    for (const property in animalObject){
      document.getElementById(property).addEventListener('click', () => {
        playAnimal(animalObject[property]);
      })
    }
  
    for (const property in animalObject){
      document.getElementById(property).addEventListener('mouseover', mouseOverHandler)
      document.getElementById(property).addEventListener('mouseout', mouseOutHandler)
    }
  
    function mouseOverHandler() {
      this.style.border = '3px solid red';
    }
    function mouseOutHandler() {
      this.style.border = '0px';
    }
  });
  
  function playAnimal(animalSound) {
    var sound = new Howl({
      src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
      sprite: {
        Fox: [0, 2000],
        Dog: [0, 2000],
        Cat: [0, 2000],
      }
    });
    sound.play(animalSound);
  }
