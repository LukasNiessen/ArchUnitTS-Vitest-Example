// This is fine
import { addRevenue } from '../database/database-helper';

const startingMoney = 1;
const maxMoney = 10000;
const fakeMoney = 10;
const customerCount = 100;

export const saveRevenues = (moneyArray: number[]) => {
	addRevenue(moneyArray.reduce((partialSum, a) => partialSum + a, 0));
};

export const testMethod1 = (moneyArray: number[]) => {
	addRevenue(moneyArray.reduce((partialSum, a) => partialSum + a, 0) + startingMoney);
};
