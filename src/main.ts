import Registry from "./Registry";
import RepositoryDatabase from "./RepositoryDatabase";
import UseCase from "./UseCase";

const registry = Registry.getInstance();
registry.provide("repository", new RepositoryDatabase());

async function main () {
	console.log(1, registry);
	const usecase = new UseCase();
	await usecase.execute();
}

main();