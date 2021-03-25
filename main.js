function preload(){    
}
function setup(){
   canvas = createCanvas(325, 275);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   brain_find = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/epyhIeZyZ/model.json", check);
}
function draw(){  
    image(video, 0, 0, 325, 275);
    brain_find.classify(video, result);
}
function mode(){
    document.getElementsByTagName("link")[1].setAttribute("href", "theme.css");
}
function mode2(){
    document.getElementsByTagName("link")[1].setAttribute("href", "style.css");
}
function check(){
    console.log("MODEL LOADED SUCCESSFULLY!");

}
function result(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
       document.getElementById("objectN").innerHTML = results[0].label;
       document.getElementById("accuracyN").innerHTML = (results[0].confidence.toFixed(3)) * 100 + "%"; 

       var resultName = results[0].label;
    //    document.getElementById(resultName).style.backgroundColor = "grey";
    //    document.getElementById(resultName).style.backgroundColor = "rgb(29, 190, 239)";
    }


}
