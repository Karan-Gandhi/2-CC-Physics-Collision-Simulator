var scale = 10;
var m1 = 100;
var m2 = 10;
var digits = 3;
var vel = 10;
var count = 0;
var timeStamps = 1;

var b1 = new Block(1000, m1, vel, m1 * 0.1, scale, 1);
var b2 = new Block(500, m2, 0, m2 * 0.1, scale, 2);

window.onload = () => {
    b1.init();
    b2.init();

    document.getElementById("vel").value = vel;
    document.getElementById("m1").value = m1;
    document.getElementById("m2").value = m2;
    document.getElementById("Timestamps").value = timeStamps;
};

setInterval(() => {
    for (var i = 0; i < timeStamps; i++) {
        if (b1.colide(b2)) {
            var v1 = b1.hit(b2);
            var v2 = b2.hit(b1);
            b1.vel = v1;
            b2.vel = v2;
            count++;
            console.log(count);
        }

        if (b2.hitWall()) {
            b2.vel = -b2.vel;
            count++;
            console.log(count);
        }

        b1.display();
        b2.display();

        b1.update();
        b2.update();

        document.getElementById("count").innerHTML = "collisions : " + count;
        document.getElementById("velofb1").innerHTML =
            "Velocity of block 1 : " + b1.vel;
        document.getElementById("velofb2").innerHTML =
            "Velocity of block 2 : " + b2.vel;
    }
}, 100);

function simulate() {
    setData();
}

function reset() {
    b1.reset();
    b2.reset();

    b1.init();
    b2.init();

    setData();

    count = 0;
}

function setData() {
    b1.setVel(parseFloat(document.getElementById("vel").value, 10));
    b1.setMass(parseFloat(document.getElementById("m1").value, 10));
    b2.setMass(parseFloat(document.getElementById("m2").value), 10);
    timeStamps = parseFloat(document.getElementById("Timestamps").value);
}
