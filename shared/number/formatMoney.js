"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(amount, currency = `USD`) {
    const moneyFormatter = new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency,
        currencyDisplay: `narrowSymbol`,
    });
    return moneyFormatter.format(amount);
}
exports.default = default_1;
