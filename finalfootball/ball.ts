namespace final {

    export class Ball {
    public x: number
    public y: number
    public speed: number
    
    private targetX:number
    private targetY:number
    private moving: boolean
        
    
    update(): void {

        if(this.moving) {
            var xoffset = this.x - this.targetX;
            var yoffset = this.y - this.targetY;
        
            var ratio = xoffset/ yoffset;
            var angle = Math.atan2(xoffset, yoffset);
            var xSpeed = Math.sin(angle) * this.speed;
            var ySpeed =  Math.cos(angle) * this.speed;
            this.x -= xSpeed;
            this.y -= ySpeed;
        
        
            if(Math.abs(xoffset)  < this.speed && Math.abs(yoffset) < this.speed){
            this.moving = false
            }
        }
    }
    
    moveTo(x:number, y:number) {
            this.targetX = x;
            this.targetY = y;
            this.moving = true;
        }
    }
    
}