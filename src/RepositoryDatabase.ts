import Repository from "./Repository";

export default class RepositoryDatabase implements Repository {
	
	async save(id: string): Promise<void> {
		console.log("RepositoryDatabase.save", arguments);
	}
	
	async get(id: string): Promise<any> {
		console.log("RepositoryDatabase.get", arguments);
		return {
			name: "John Doe",
			email: "john.doe@gmail.com"
		};
	}

}
