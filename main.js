function draw(){
image(video,0,0,300,300)
Classifier.classify(video,gotresult)
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UItMIF0QY/model.json",modelLoaded)
}
function modelLoaded(){
console.log("modelIsLoaded")
}
function gotresult(error,results){
if (error) {
console.error(error) 
}
else{
console.log(results)
document.getElementById("result_object_name").innerHTML=results[0].label
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3) *100
}
}
