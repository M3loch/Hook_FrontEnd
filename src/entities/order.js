import { Converter } from "../lib/converter";
import OrderService from "../services/orderService/orderService";
import alarm from "../assets/alarm.mp3";

class OrderEntity {
	constructor(
		{
			shop_id,
			order_id,
			start_time,
			time_overs = [],
			table_id,
			discount_id,
			category_id,
			is_paid,
			strength,
			stage_index,
			comment,
		},
		{ stages, categories, discounts, tables }
	) {
		this._orderID = order_id;
		this._startTime = start_time;
		this._timeOvers = time_overs;
		this._timeOversSum = time_overs.reduce((sum, current) => {
			return sum + current;
		}, 0);
		this._tableID = table_id;
		this._discountID = discount_id;
		this._categoryID = category_id;
		this._isPaid = is_paid;
		this._strength = strength;
		this._stageIndex = stage_index;
		this._comment = comment;
		this._stages = stages.data;
		this.stagesSum = 0;

		for (let i = 0; i <= this._stageIndex; i++) {
			this.stagesSum += this._stages[i].duration * 60000;
		}
		this._timeInterface = Converter.remainingTime(
			this._startTime + this.stagesSum + this._timeOversSum - Date.now()
		);
		this._categories = categories.data;
		this._discounts = discounts.data;
		this._tables = tables.data;

		this._shopID = shop_id;

		this.alarm = new Audio(alarm);
	}

	makeStep() {
		let stagesSum = 0;
		for (let i = 0; i <= this._stageIndex; i++) {
			stagesSum += this._stages[i].duration;
		}
		this._timeInterface = Converter.remainingTime(
			this._startTime + this.stagesSum + this._timeOversSum - Date.now()
		);
		this._timeInterface == "00:00:00" && this.alarm.play();
	}

	isLastStage() {
		const nextStage = this._stageIndex + 1;
		return nextStage >= this._stages.length;
	}

	isNextIsLastStage() {
		const nextStage = this._stageIndex + 2;
		return nextStage >= this._stages.length;
	}

	async nextStage(userID) {
		const nextStage = this._stageIndex + 1;
		this._timeOvers.push(
			-1 * (this._startTime + this.stagesSum + this._timeOversSum - Date.now())
		);
		this.alarm.pause();
		this.alarm.currentTime = 0;
		return nextStage < this._stages.length
			? await OrderService.updateOrder(userID, this._orderID, this._shopID, {
					stage_index: nextStage,
					time_overs: this.timeOvers,
			  })
			: null;
	}

	async updateOrder(userID, updateBody) {
		return await OrderService.updateOrder(
			userID,
			this._orderID,
			this._shopID,
			updateBody
		);
	}

	get orderID() {
		return this._orderID;
	}
	get timeInterface() {
		return this._timeInterface;
	}
	get stage() {
		return this._stages[this._stageIndex].stage_name;
	}
	get category() {
		return this._categories[this._categoryID];
	}
	get discount() {
		return this._discounts[this._discountID];
	}
	get table() {
		return this._tables[this._tableID];
	}
	get isPaid() {
		return this._isPaid;
	}
	get comment() {
		return this._comment;
	}

	get strength() {
		return this._strength;
	}

	get timeOvers() {
		return this._timeOvers;
	}

	get timeOversInterface() {
		const formatedTimeOvers = [];
		this._timeOvers.forEach((value, index) => {
			value >= 0
				? formatedTimeOvers.push({
						isPositive: value >= 0,
						data: Converter.remainingTime(-value),
						stage: this._stages[index].stage_name,
				  })
				: formatedTimeOvers.push({
						isPositive: value >= 0,
						data: Converter.remainingTime(-value),
						stage: this._stages[index].stage_name,
				  });
		});
		return formatedTimeOvers;
	}
}

export default OrderEntity;
