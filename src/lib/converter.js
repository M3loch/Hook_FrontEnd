// класс конвертатирует одни значения в другие

export class Converter {
	// мс -> чч:мм:сс
	static remainingTime(value) {
		let sign = "";

		if (value < 0) {
			sign = "-";
			value = value * -1;
		}

		let sec = this.addZero(Math.floor((value / 1000) % 60));
		let min = this.addZero(Math.floor(value / 1000 / 60));
		let hour = this.addZero(Math.floor(value / 1000 / 60 / 60));

		min >= 60 ? (min = this.addZero(min - Math.floor(min / 60) * 60)) : null;

		return sign + hour + ":" + min + ":" + sec;
	}

	// 1 -> 01
	static addZero(num) {
		if (num < 10) {
			return "0" + num;
		} else {
			return num;
		}
	}
}
