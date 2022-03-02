class square {
    constructor(side) {
        this.side = side;
    }

    perimeter() {
        return this.side * 4;
    }

    area() {
        return this.side * this.side;
    }

    diagonal() {
        return Math.sqrt(2 * (this.side * this.side)).toFixed(3);
    }

    describe() {
        return (console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`))
    }
}

const squareOne = new square(2);
const squareTwo = new square(5);
const squareThree = new square(9);


squareOne.describe();
squareTwo.describe();
squareThree.describe();