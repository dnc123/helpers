"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(amount, currency) {
    if (currency === void 0) { currency = "USD"; }
    var moneyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        currencyDisplay: "narrowSymbol",
    });
    return moneyFormatter.format(amount);
}
exports.default = default_1;
