/**
 * Interface for any data storage implementation
 */
export interface IDataStorage {
	save(data: string): void;
	load(): string;
	delete(): boolean;
}
