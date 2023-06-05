prediction_1 = ""
prediction_2 = ""
webcam.set[{
width:350,
height:300,
image_format : 'png',
png_quality:90
}];

camera = document.getElementById("camera");

Webcam.attach(  '#camera'  );

function take_snapshot{}
{
    webcam.snap[function[data_url]{
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'/>"; 
}];
}

ml5.js in index.html, after the webcam.js link in the head section. The ml5.js link: < script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js">< /script>

console.log['ml5 version:',ml5.version];
classifier = ml5.imageClassifier{'https://teachablemachine.withgoogle.com/models/model.json'}

function mode(Loaded() {
    console.log('model Loaded!');
}

function speak[]{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first pediction is " +prediction_1;
    speak_data_2 = "And the second prediction is "+prediction_2;
    var utterThis = new SpeechSysthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}