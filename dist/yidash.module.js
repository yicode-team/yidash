import { keyBy as r } from "lodash-es";
function n(r, n) {
    return r - n;
}
function i(r, n) {
    return r + n;
}
function t(n, i, t, u) {
    void 0 === i && (i = "id"), void 0 === t && (t = "pid"), void 0 === u && (u = "children");
    var o = r(n, i),
        e = [];
    return (
        n.forEach(function (r) {
            var n = o[r[t]];
            n ? (n[u] || (n[u] = []), n[u].push(r)) : e.push(r);
        }),
        e
    );
}
var u = { default: /^[GCDZTSPKXLY1-9]\d{1,4}$/ };
function o(r, n, i) {
    void 0 === i && (i = 2);
    var t = "";
    return function (r) {
        var n = String(r),
            u = Number(n);
        if (!1 === Number.isNaN(u)) {
            if (n.endsWith(".")) return r;
            var o = u.toFixed(i);
            return (t = o), o;
        }
        return t;
    };
}
export { n as math_Minus, i as math_Plus, o as number_ValidNumber, u as regexp_TrainNumber, t as tree_Array2Tree };
//# sourceMappingURL=yidash.module.js.map
