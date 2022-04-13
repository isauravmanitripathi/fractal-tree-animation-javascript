var angle;
var len;
var slider;
function setup() {
    createCanvas(400,400);
    len = 100;
    slider = createSlider(0, PI, PI/4, 0.01);
}

function draw() {
    background(50);
    angle = slider.value();
    stroke(255);
    translate(width/2, height);
    branch(len);
}

function branch(len) {
    line(0,0,0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}

function leaves(){
    ellipse
}