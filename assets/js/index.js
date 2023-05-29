const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(c);

class Player{
	constructor()
	{
		this.position ={x: 100, y: 100};
		this.width = 100;
		this.height = 100;
		this.color = 'red';
	}
	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

const player = new Player();

player.draw();

