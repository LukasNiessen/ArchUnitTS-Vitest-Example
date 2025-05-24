// This is fine
import { addRevenue } from '../database/database-helper';

export const saveRevenues = (moneyArray: number[]) => {
	addRevenue(moneyArray.reduce((partialSum, a) => partialSum + a, 0));
};
