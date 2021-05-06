difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(50, 125)

    canvas = createCanvas(400, 400);
    canvas.position(770, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function draw() {
    background('#32a8a2');
    textSize(difference);
    text("Font Manipulator", 200, 250);
    fill('F90093');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);
    }
}