var numberofDrumButtom=document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofDrumButtom;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //alert("i Got click!");
    //var audio = new Audio("sound/tom-1.mp3");
    //audio.play();
    //this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
      case "M":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
        break;
      case "O":
        var tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;
      case "H":
        var tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play();
        break;
      case "I":
        var tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play();
        break;
      case "M":
        var snare = new Audio("sounds/snare.mp3")
        snare.play();
        break;
      case "A":
        var crash = new Audio("sounds/crash")
        crash.play();
        break;
      case "K":
        var crash = new Audio("sounds/crash.mp3")
        crash.play();
        break;

      default:console.log(buttonInnerHTML);
    }
  });
}


