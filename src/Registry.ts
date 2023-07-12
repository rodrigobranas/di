export default class Registry {
	static instance: Registry;
	private dependencies: { [name: string]: any };

	constructor () {
		this.dependencies = {};
	}

	provide (name: string, dependency: any) {
		this.dependencies[name] = dependency;
	}

	inject (name: string) {
		return this.dependencies[name];
	}

	static getInstance () {
		if (!Registry.instance) {
			Registry.instance = new Registry();
		}
		return Registry.instance;
	}

}
