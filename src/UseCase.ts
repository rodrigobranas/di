import inject from "./Inject";
import Repository from "./Repository";
import RepositoryDatabase from "./RepositoryDatabase";

export default class UseCase {

	@inject("repository")
	repository?: Repository;

	constructor () {
	}

	async execute () {
		await this.repository?.save({ name: "John Doe", email: "john.doe@gmai.com" });
		const obj = await this.repository?.get("10");
		console.log(obj);
	}

}
