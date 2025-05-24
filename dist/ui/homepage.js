"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homepage = void 0;
// BREAKING A RULE! SHOULD NOT ACCESS DB LAYER DIRECTLY
const database_helper_1 = require("../database/database-helper");
const homepage = () => {
    // for fun
    (0, database_helper_1.openDB)();
    (0, database_helper_1.openDB)();
    (0, database_helper_1.openDB)();
};
exports.homepage = homepage;
