// tsc 1603.ts
// node 1603.js

class ParkingSystem {
	spaces: { [key: number]: number } = [];

	constructor(big: number, medium: number, small: number) {
		this.spaces = { 1: big, 2: medium, 3: small };
	}

	addCar(carType) {
		if (this.spaces[carType] > 0) {
			this.spaces[carType]--;

			return true;
		}

		return false;
	}
}

let obj: ParkingSystem = new ParkingSystem(1, 1, 0);

console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
