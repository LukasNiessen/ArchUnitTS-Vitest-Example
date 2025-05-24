"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRevenues = void 0;
// This is fine
const database_helper_1 = require("../database/database-helper");
const saveRevenues = (moneyArray) => {
    (0, database_helper_1.addRevenue)(moneyArray.reduce((partialSum, a) => partialSum + a, 0));
};
exports.saveRevenues = saveRevenues;
