export default interface Repository {
	save (obj: any): Promise<void>;
	get (id: string): Promise<any>
}
