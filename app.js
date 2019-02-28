let time = 0;
let wave = [];

let slider;

function setup(){
    createCanvas(800,400);
    slider = createSlider(1,10,1);
}

function draw() {
    background(0);
    translate(width/6 ,height/2);
    
    let x = 0;
    let y = 0;
    
    // polar to cartesian coordinate transfomation
    for(let i = 0; i < slider.value(); i++){
        let px = x;
        let py = y;
        n = i*2 + 1;
        let radius = 50 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        
        stroke(255,100);
        noFill()
        ellipse(px,py, radius * 2);
        fill(10);
        ellipse(x, y, 4);
        fill(255);
        stroke(255);
        line(px, py, x, y);
        
    }
    wave.unshift(y);

    stroke(100,100,200);
    noFill();
    translate(200,0);
    line(x-200,y, 0, wave[0]);
    fill(255);
    ellipse(0, wave[0], 8);
    noFill()
    beginShape();
    for(let i = 0; i < wave.length; i++){
        vertex(i, wave[i]);
        
    }
    endShape();


    time += 0.03; //changing
    if(wave.length > width){
        wave.pop();
    }
}