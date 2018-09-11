// Generated from paren-setup.lisp via ParenScript
function setup() {
    createCanvas(400, 400);
    return undefined;
};
var A = 0;
function draw() {
    fill('#021050');
    rect(0, 0, width, height);
    translate(200 + A * 10, 200 + A * 10);
    rotate(A);
    scale(A / 15);
    A += 0.05;
    kao(0, -50);
    kao(1, 50);
    if (A > 30) {
        A -= 50;
    };
    return undefined;
};
function kao(don, b) {
    stroke(0);
    strokeWeight(2);
    fill('#e7eedd');
    ellipse(b, 0, 50, 50);
    noStroke();
    fill(don ? '#68c0c0' : '#f84828');
    ellipse(b, 0, 38, 38);
    stroke(0);
    strokeWeight(1.4);
    arc(b + 4.26, 5, 8.5, 7.3, 0.3, PI, OPEN);
    arc(b - 4.26, 5, 8.5, 7.3, 0.3, PI - 0.3, OPEN);
    fill(0);
    ellipse(b - 11, -2, 6.56, 7);
    return ellipse(b + 11, -2, 6.56, 7);
};
