import Registry from "./Registry"

export default function inject (name: string) {
	return (target: any, propertyKey: string) => {
		target[propertyKey] = new Proxy({}, {
			get(target: any, propertyKey: string, receiver: any) {
				const registry = Registry.getInstance();
				const dependency = registry.inject(name);
				return dependency[propertyKey];
			}
		});
	}
}