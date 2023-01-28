"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(text) {
    if (text === void 0) { text = ""; }
    var a = "\u00E0\u00E1\u00E2\u00E4\u00E6\u00E3\u00E5\u0101\u0103\u0105\u00E7\u0107\u010D\u0111\u010F\u00E8\u00E9\u00EA\u00EB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\u00EE\u00EF\u00ED\u012B\u012F\u00EC\u0142\u1E3F\u00F1\u0144\u01F9\u0148\u00F4\u00F6\u00F2\u00F3\u0153\u00F8\u014D\u00F5\u0151\u1E55\u0155\u0159\u00DF\u015B\u0161\u015F\u0219\u0165\u021B\u00FB\u00FC\u00F9\u00FA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\u00FF\u00FD\u017E\u017A\u017C\u00B7/_,:;";
    var b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    var p = new RegExp(a.split("").join("|"), "g");
    return String(text)
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, function (c) { return b.charAt(a.indexOf(c)); }) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with `and`
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
}
exports.default = default_1;
