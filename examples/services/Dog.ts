import { BaseService } from "@digitak/gravity/services/BaseService";

export class Dog extends BaseService {
	name = "Some dog name";

	woof() {
		return "woof";
	}

	attack() {
		return "WOOF! WOOF!";
	}
}