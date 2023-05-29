const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(c);

class Player{
	constructor()
	{
		this.position ={x: 100, y: 100};
		this.velocity = {x: 0, y:1};
		this.width = 30;
		this.height = 30;
		this.color = 'red';
	}
	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
	update() {
		this.draw();
		this.position.y += this.velocity.y;
	}
}

const player = new Player();

player.update();

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	player.update();
}

animate();