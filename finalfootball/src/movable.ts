namespace final {
    
    export abstract class Movable {
        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.velocity = _velocity;
            this.position = _position;
        }

        abstract draw(): void;

        abstract move(_timeslice: number): void;


    }
}