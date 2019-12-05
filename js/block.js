class Block {
    constructor(x, m, v, h, scl, cnt) {
        this.x = x;
        this.mass = m;
        this.vel = v;
        this.originalX = x;
        this.height = h;
        this.scale = scl;
        this.cnt = cnt;
    }

    init() {
        var root = document.getElementById("root");
        this.block = document.createElement("div");

        this.block.id = "block" + this.cnt;
        this.block.style.height = `${this.height * this.scale}px`;
        this.block.style.width = `${this.height * this.scale}px`;
        this.block.style.position = "absolute";
        this.block.style.bottom = 0;
        this.block.style.left = this.originalX + "px";

        root.append(this.block);
    }

    display() {
        this.block.style.background = "black";
        this.block.style.left = this.x + "px";
    }

    update() {
        this.x -= this.vel;
    }

    colide(other) {
        if (
            this.x + this.height * this.scale < other.x ||
            other.x + other.height * other.scale < this.x
        ) {
            return false;
        } else {
            return true;
        }
    }

    hit(other) {
        var sumM = this.mass + other.mass;
        var newV = ((this.mass - other.mass) / sumM) * this.vel;
        newV += ((2 * other.mass) / sumM) * other.vel;
        return newV;
    }

    hitWall() {
        if (this.x <= 0) {
            return true;
        } else {
            return false;
        }
    }

    setVel(v) {
        this.vel = v;
    }

    setMass(m) {
        this.mass = m;
    }

    remove() {
        this.block.parentNode.removeChild(this.block);
    }
}
