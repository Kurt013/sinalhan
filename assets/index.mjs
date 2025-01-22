var tt = Object.defineProperty;
var $e = Object.getOwnPropertySymbols;
var st = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable;
var Ce = (s, e, t) => e in s ? tt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, S = (s, e) => {
  for (var t in e || (e = {}))
    st.call(e, t) && Ce(s, t, e[t]);
  if ($e)
    for (var t of $e(e))
      rt.call(e, t) && Ce(s, t, e[t]);
  return s;
};
var it = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function at(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ve = { exports: {} };
(function(s, e) {
  (function(t, r) {
    s.exports = r();
  })(it, function() {
    var t = 1e3, r = 6e4, i = 36e5, l = "millisecond", o = "second", y = "minute", _ = "hour", m = "day", T = "week", v = "month", O = "quarter", F = "year", z = "date", Te = "Invalid Date", Ke = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Qe = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Xe = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f) {
      var u = ["th", "st", "nd", "rd"], a = f % 100;
      return "[" + f + (u[(a - 20) % 10] || u[a] || u[0]) + "]";
    } }, le = function(f, u, a) {
      var h = String(f);
      return !h || h.length >= u ? f : "" + Array(u + 1 - h.length).join(a) + f;
    }, et = { s: le, z: function(f) {
      var u = -f.utcOffset(), a = Math.abs(u), h = Math.floor(a / 60), n = a % 60;
      return (u <= 0 ? "+" : "-") + le(h, 2, "0") + ":" + le(n, 2, "0");
    }, m: function f(u, a) {
      if (u.date() < a.date())
        return -f(a, u);
      var h = 12 * (a.year() - u.year()) + (a.month() - u.month()), n = u.clone().add(h, v), c = a - n < 0, d = u.clone().add(h + (c ? -1 : 1), v);
      return +(-(h + (a - n) / (c ? n - d : d - n)) || 0);
    }, a: function(f) {
      return f < 0 ? Math.ceil(f) || 0 : Math.floor(f);
    }, p: function(f) {
      return { M: v, y: F, w: T, d: m, D: z, h: _, m: y, s: o, ms: l, Q: O }[f] || String(f || "").toLowerCase().replace(/s$/, "");
    }, u: function(f) {
      return f === void 0;
    } }, J = "en", H = {};
    H[J] = Xe;
    var Ee = "$isDayjsObject", ue = function(f) {
      return f instanceof se || !(!f || !f[Ee]);
    }, te = function f(u, a, h) {
      var n;
      if (!u)
        return J;
      if (typeof u == "string") {
        var c = u.toLowerCase();
        H[c] && (n = c), a && (H[c] = a, n = c);
        var d = u.split("-");
        if (!n && d.length > 1)
          return f(d[0]);
      } else {
        var b = u.name;
        H[b] = u, n = b;
      }
      return !h && n && (J = n), n || !h && J;
    }, E = function(f, u) {
      if (ue(f))
        return f.clone();
      var a = typeof u == "object" ? u : {};
      return a.date = f, a.args = arguments, new se(a);
    }, g = et;
    g.l = te, g.i = ue, g.w = function(f, u) {
      return E(f, { locale: u.$L, utc: u.$u, x: u.$x, $offset: u.$offset });
    };
    var se = function() {
      function f(a) {
        this.$L = te(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[Ee] = !0;
      }
      var u = f.prototype;
      return u.parse = function(a) {
        this.$d = function(h) {
          var n = h.date, c = h.utc;
          if (n === null)
            return /* @__PURE__ */ new Date(NaN);
          if (g.u(n))
            return /* @__PURE__ */ new Date();
          if (n instanceof Date)
            return new Date(n);
          if (typeof n == "string" && !/Z$/i.test(n)) {
            var d = n.match(Ke);
            if (d) {
              var b = d[2] - 1 || 0, w = (d[7] || "0").substring(0, 3);
              return c ? new Date(Date.UTC(d[1], b, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, w)) : new Date(d[1], b, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, w);
            }
          }
          return new Date(n);
        }(a), this.init();
      }, u.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, u.$utils = function() {
        return g;
      }, u.isValid = function() {
        return this.$d.toString() !== Te;
      }, u.isSame = function(a, h) {
        var n = E(a);
        return this.startOf(h) <= n && n <= this.endOf(h);
      }, u.isAfter = function(a, h) {
        return E(a) < this.startOf(h);
      }, u.isBefore = function(a, h) {
        return this.endOf(h) < E(a);
      }, u.$g = function(a, h, n) {
        return g.u(a) ? this[h] : this.set(n, a);
      }, u.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, u.valueOf = function() {
        return this.$d.getTime();
      }, u.startOf = function(a, h) {
        var n = this, c = !!g.u(h) || h, d = g.p(a), b = function(P, N) {
          var B = g.w(n.$u ? Date.UTC(n.$y, N, P) : new Date(n.$y, N, P), n);
          return c ? B : B.endOf(m);
        }, w = function(P, N) {
          return g.w(n.toDate()[P].apply(n.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N)), n);
        }, M = this.$W, C = this.$M, L = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (d) {
          case F:
            return c ? b(1, 0) : b(31, 11);
          case v:
            return c ? b(1, C) : b(0, C + 1);
          case T:
            var W = this.$locale().weekStart || 0, K = (M < W ? M + 7 : M) - W;
            return b(c ? L - K : L + (6 - K), C);
          case m:
          case z:
            return w(G + "Hours", 0);
          case _:
            return w(G + "Minutes", 1);
          case y:
            return w(G + "Seconds", 2);
          case o:
            return w(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, u.endOf = function(a) {
        return this.startOf(a, !1);
      }, u.$set = function(a, h) {
        var n, c = g.p(a), d = "set" + (this.$u ? "UTC" : ""), b = (n = {}, n[m] = d + "Date", n[z] = d + "Date", n[v] = d + "Month", n[F] = d + "FullYear", n[_] = d + "Hours", n[y] = d + "Minutes", n[o] = d + "Seconds", n[l] = d + "Milliseconds", n)[c], w = c === m ? this.$D + (h - this.$W) : h;
        if (c === v || c === F) {
          var M = this.clone().set(z, 1);
          M.$d[b](w), M.init(), this.$d = M.set(z, Math.min(this.$D, M.daysInMonth())).$d;
        } else
          b && this.$d[b](w);
        return this.init(), this;
      }, u.set = function(a, h) {
        return this.clone().$set(a, h);
      }, u.get = function(a) {
        return this[g.p(a)]();
      }, u.add = function(a, h) {
        var n, c = this;
        a = Number(a);
        var d = g.p(h), b = function(C) {
          var L = E(c);
          return g.w(L.date(L.date() + Math.round(C * a)), c);
        };
        if (d === v)
          return this.set(v, this.$M + a);
        if (d === F)
          return this.set(F, this.$y + a);
        if (d === m)
          return b(1);
        if (d === T)
          return b(7);
        var w = (n = {}, n[y] = r, n[_] = i, n[o] = t, n)[d] || 1, M = this.$d.getTime() + a * w;
        return g.w(M, this);
      }, u.subtract = function(a, h) {
        return this.add(-1 * a, h);
      }, u.format = function(a) {
        var h = this, n = this.$locale();
        if (!this.isValid())
          return n.invalidDate || Te;
        var c = a || "YYYY-MM-DDTHH:mm:ssZ", d = g.z(this), b = this.$H, w = this.$m, M = this.$M, C = n.weekdays, L = n.months, G = n.meridiem, W = function(N, B, Q, re) {
          return N && (N[B] || N(h, c)) || Q[B].slice(0, re);
        }, K = function(N) {
          return g.s(b % 12 || 12, N, "0");
        }, P = G || function(N, B, Q) {
          var re = N < 12 ? "AM" : "PM";
          return Q ? re.toLowerCase() : re;
        };
        return c.replace(Qe, function(N, B) {
          return B || function(Q) {
            switch (Q) {
              case "YY":
                return String(h.$y).slice(-2);
              case "YYYY":
                return g.s(h.$y, 4, "0");
              case "M":
                return M + 1;
              case "MM":
                return g.s(M + 1, 2, "0");
              case "MMM":
                return W(n.monthsShort, M, L, 3);
              case "MMMM":
                return W(L, M);
              case "D":
                return h.$D;
              case "DD":
                return g.s(h.$D, 2, "0");
              case "d":
                return String(h.$W);
              case "dd":
                return W(n.weekdaysMin, h.$W, C, 2);
              case "ddd":
                return W(n.weekdaysShort, h.$W, C, 3);
              case "dddd":
                return C[h.$W];
              case "H":
                return String(b);
              case "HH":
                return g.s(b, 2, "0");
              case "h":
                return K(1);
              case "hh":
                return K(2);
              case "a":
                return P(b, w, !0);
              case "A":
                return P(b, w, !1);
              case "m":
                return String(w);
              case "mm":
                return g.s(w, 2, "0");
              case "s":
                return String(h.$s);
              case "ss":
                return g.s(h.$s, 2, "0");
              case "SSS":
                return g.s(h.$ms, 3, "0");
              case "Z":
                return d;
            }
            return null;
          }(N) || d.replace(":", "");
        });
      }, u.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, u.diff = function(a, h, n) {
        var c, d = this, b = g.p(h), w = E(a), M = (w.utcOffset() - this.utcOffset()) * r, C = this - w, L = function() {
          return g.m(d, w);
        };
        switch (b) {
          case F:
            c = L() / 12;
            break;
          case v:
            c = L();
            break;
          case O:
            c = L() / 3;
            break;
          case T:
            c = (C - M) / 6048e5;
            break;
          case m:
            c = (C - M) / 864e5;
            break;
          case _:
            c = C / i;
            break;
          case y:
            c = C / r;
            break;
          case o:
            c = C / t;
            break;
          default:
            c = C;
        }
        return n ? c : g.a(c);
      }, u.daysInMonth = function() {
        return this.endOf(v).$D;
      }, u.$locale = function() {
        return H[this.$L];
      }, u.locale = function(a, h) {
        if (!a)
          return this.$L;
        var n = this.clone(), c = te(a, h, !0);
        return c && (n.$L = c), n;
      }, u.clone = function() {
        return g.w(this.$d, this);
      }, u.toDate = function() {
        return new Date(this.valueOf());
      }, u.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, u.toISOString = function() {
        return this.$d.toISOString();
      }, u.toString = function() {
        return this.$d.toUTCString();
      }, f;
    }(), Me = se.prototype;
    return E.prototype = Me, [["$ms", l], ["$s", o], ["$m", y], ["$H", _], ["$W", m], ["$M", v], ["$y", F], ["$D", z]].forEach(function(f) {
      Me[f[1]] = function(u) {
        return this.$g(u, f[0], f[1]);
      };
    }), E.extend = function(f, u) {
      return f.$i || (f(u, se, E), f.$i = !0), E;
    }, E.locale = te, E.isDayjs = ue, E.unix = function(f) {
      return E(1e3 * f);
    }, E.en = H[J], E.Ls = H, E.p = {}, E;
  });
})(Ve);
var nt = Ve.exports;
const fe = /* @__PURE__ */ at(nt);
class ce {
  constructor(e) {
    this.argument = e, this._pipe = "&pip;", this._space = "&esp;";
  }
  /**
   * Replace all occurrences of `_pipe` with `|` in the argument string.
   * @returns The argument string with pipes replaced.
   */
  replacePipes() {
    return this.argument.replace(new RegExp(this._pipe, "g"), "|");
  }
  /**
   * Replace all occurrences of `_space` with a space character in the argument string.
   * @returns The argument string with spaces replaced.
   */
  replaceSpaces() {
    return this.argument.replace(new RegExp(this._space, "g"), " ");
  }
}
const ae = (s) => ({
  passes: !!s && s != "",
  value: s
}), lt = (s) => ({
  passes: !0,
  value: s
}), ut = (s, e) => (typeof e != "string" && A("in"), e === "" && A("in"), {
  passes: k(e).includes(s),
  value: s
}), ot = (s, e) => {
  if (typeof e != "number" && typeof e != "string" && A("size"), j(s).passes) {
    let t, r;
    try {
      [t, r] = _e(e);
    } catch (l) {
      throw l;
    }
    let i = xt(s);
    return isNaN(i) && (i = 0), t = ye(t, r), {
      passes: i <= t,
      value: s
    };
  } else
    return {
      passes: oe(s, e).passes,
      value: s,
      alias: "length"
    };
}, je = (s) => typeof s == "boolean" ? { passes: !0, value: !!s } : typeof s == "string" && (s = s.toLowerCase(), s === "true" || s === "false" || s === "0" || s === "1" || s === "yes" || s === "no") ? {
  passes: !0,
  value: s == "true" || s == "1" || s == "yes"
} : {
  passes: !1,
  value: s
}, ht = (s, e, t) => {
  typeof e != "number" && typeof e != "string" && A("between");
  let [r, i] = k(e);
  return t === "file" ? {
    passes: We(s, e).passes,
    value: s,
    alias: "fileBetween"
  } : t == "date" || t == "date-local" ? {
    passes: Ge(s, e).passes,
    value: s,
    alias: "dateBetween"
  } : t == "number" && (r = Number(r), i = Number(i), s !== void 0 && s !== "" && p(r).passes && p(i).passes) ? p(s).passes ? {
    passes: be(s, i).passes && ve(s, r).passes,
    value: Number(s),
    alias: "numberBetween"
  } : {
    passes: !1,
    value: s
  } : {
    passes: He(s, e).passes,
    value: s,
    alias: "stringBetween"
  };
}, ft = (s, e) => {
  if (!e || typeof e != "string")
    throw new Error("The regex rule argument must not be empty");
  const t = new ce(e);
  return {
    passes: new RegExp(t.replacePipes()).test(s),
    value: s
  };
}, ct = (s, e) => {
  let t = !1;
  return e === "string" ? typeof s != "string" || s.length === 0 ? t = !1 : t = !/\d/.test(s) : e === "digit" && (t = p(s).passes), {
    passes: t,
    value: s
  };
}, dt = (s, e) => {
  if (!p(e).passes)
    throw new Error("Digit rule parameter must be a number");
  let t = !1;
  if (p(s).passes) {
    const r = String(s);
    t = /^\d+$/.test(r) && r.length === Number(e);
  }
  return {
    passes: t,
    value: s
  };
}, mt = (s, e) => {
  if (!p(e).passes)
    throw new Error("Max_digit rule parameter must be a number");
  let t = !1;
  if (p(s).passes) {
    const r = String(s);
    t = /^\d+$/.test(r) && r.length <= Number(e);
  }
  return {
    passes: t,
    value: s
  };
}, gt = (s, e) => {
  if (!p(e).passes)
    throw new Error("Min_digit rule parameter must be a number");
  let t = !1;
  if (p(s).passes) {
    const r = String(s);
    t = /^\d+$/.test(r) && r.length >= Number(e);
  }
  return {
    passes: t,
    value: s
  };
}, pt = (s) => {
  const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return typeof s != "string" ? {
    passes: !1,
    value: s
  } : {
    passes: e.test(s),
    value: s
  };
}, de = (s, e) => ({
  passes: typeof s == "string" ? s.length >= Number(e) : !1,
  value: s
}), me = (s, e) => ({
  passes: typeof s == "string" ? s.length <= Number(e) : !0,
  value: s
}), ne = (s) => ({
  passes: typeof s == "string",
  value: s
}), vt = (s) => {
  const e = /^(ftp|http|https):\/\/[^ "]+$/;
  return typeof s != "string" ? {
    passes: !1,
    value: s
  } : {
    passes: e.test(s),
    value: s
  };
}, bt = (s) => typeof s != "string" || s.length === 0 ? {
  passes: !1,
  value: s
} : {
  passes: /^[A-Z]/.test(s),
  value: s
}, yt = (s) => typeof s != "string" || s.length === 0 || s.charAt(0) === " " ? {
  passes: !1,
  value: s
} : {
  passes: s[0] == s[0].toLocaleLowerCase(),
  value: s
}, _t = (s, e) => {
  e || A("startWith");
  const t = k(e);
  return typeof s != "string" ? {
    passes: !1,
    value: s
  } : {
    passes: t.some((r) => s.startsWith(r)),
    value: s
  };
}, wt = (s, e) => {
  e || A("endWith");
  const t = k(e);
  return typeof s != "string" ? {
    passes: !1,
    value: s
  } : {
    passes: t.some((r) => s.endsWith(r)),
    value: s
  };
}, Tt = (s, e) => {
  e || A("contains");
  const t = k(e);
  return typeof s != "string" ? {
    passes: !1,
    value: s
  } : {
    passes: t.every((i) => s.includes(new ce(i).replaceSpaces())),
    value: s
  };
}, oe = (s, e) => {
  let t = [];
  if (!p(e).passes)
    throw new Error("The length rule argument must be an integer");
  if (e = parseInt(e), typeof s == "string" || typeof s == "number")
    t = s.toString().split("");
  else
    return {
      passes: !1,
      value: s
    };
  return {
    passes: t.length === e,
    value: s
  };
}, Et = (s) => {
  if (typeof s != "string")
    return {
      passes: !1,
      value: s
    };
  const e = 8, t = /[A-Z]/.test(s), r = /[a-z]/.test(s), i = /\d/.test(s), l = /[!@#$%^&*(),.?":{}|<>]/.test(s);
  return s.length < e || !t || !r || !i || !l ? {
    passes: !1,
    value: s
  } : {
    passes: !0,
    value: s
  };
}, Mt = (s) => typeof s != "string" || s.length === 0 || s.charAt(0) === " " ? {
  passes: !1,
  value: s
} : {
  passes: !/^[0-9]/.test(s),
  value: s
}, $t = (s) => typeof s != "string" || s.length === 0 ? {
  passes: !1,
  value: s
} : {
  passes: !/[0-9]$/.test(s),
  value: s
}, Ct = (s) => typeof s != "string" ? {
  passes: !1,
  value: s
} : {
  passes: !/^[0-9]$/.test(s),
  value: s
}, At = (s, e) => {
  typeof e != "string" && typeof e != "number" && A("excludes");
  const t = k(e);
  return t.length || A("excludes"), typeof s != "string" ? {
    passes: !0,
    value: s
  } : {
    passes: !t.some((r) => s.includes(new ce(r).replaceSpaces())),
    value: s
  };
}, Nt = (s) => typeof s != "string" ? {
  passes: !1,
  value: s
} : {
  passes: s === s.toLocaleUpperCase(),
  value: s
}, St = (s) => typeof s != "string" ? {
  passes: !1,
  value: s
} : {
  passes: s === s.toLocaleLowerCase(),
  value: s
}, He = (s, e) => {
  typeof e != "string" && A("between");
  const [t, r] = k(e);
  return {
    passes: de(s, t).passes && me(s, r).passes,
    value: s
  };
}, j = (s) => {
  const e = (r) => r instanceof File || r instanceof Blob || r instanceof FileList;
  let t = !1;
  return Array.isArray(s) && s.length && s.every((r) => e(r)) && (t = !0), t = e(s) || t, {
    passes: t,
    value: s
  };
}, ge = (s, e) => {
  const t = ee(s);
  return t.length ? {
    passes: t.every((i) => {
      if (j(i).passes) {
        let l, o;
        try {
          [l, o] = _e(e);
        } catch (y) {
          throw y;
        }
        return i.size <= ye(l, o);
      } else
        return !0;
    }),
    value: t
  } : {
    value: s,
    passes: !1
  };
}, pe = (s, e) => {
  const t = ee(s);
  return t.length ? (typeof e != "number" && typeof e != "string" && A(
    "minFileSize",
    "The minimum size rule argument is required"
  ), {
    passes: t.every((i) => {
      if (j(i).passes) {
        let l, o;
        try {
          [l, o] = _e(e);
        } catch (y) {
          throw y;
        }
        return i.size >= ye(l, o);
      } else
        return !1;
    }),
    value: t
  }) : {
    value: s,
    passes: !1
  };
}, We = (s, e) => {
  typeof e != "string" && A("between");
  const [t, r] = k(e), i = ee(s);
  return i.length ? {
    passes: i.every((o) => ge(o, r).passes && pe(o, t).passes),
    value: s
  } : {
    value: s,
    passes: !1
  };
}, kt = (s, e) => {
  typeof e != "string" && A("mimes"), e === "" && A("mimes");
  const t = ee(s);
  return t.length ? {
    passes: t.every((i) => {
      var l;
      if (j(i).passes) {
        const o = i;
        return ((l = e.split(",").map((m) => m.trim())) != null ? l : []).some((m) => {
          if (m = m.replace(/\s/g, ""), m === "*" || o.name.endsWith(m) || m == "" || o.type == "")
            return !0;
          if (m.endsWith("/*")) {
            const T = m.slice(0, -2);
            return o.type.startsWith(T);
          } else if (m.startsWith("*.")) {
            const T = m.substring(2);
            return o.name.endsWith(T);
          } else
            return o.type === m;
        });
      } else
        return !1;
    }),
    value: s
  } : {
    value: s,
    passes: !1
  };
}, ve = (s, e, t) => {
  if (!p(e).passes)
    throw new Error("Min rule parameter must be an integer");
  return j(s).passes || t == "file" ? {
    passes: pe(s, e).passes,
    value: s
  } : (s == null && (s = 0), p(s).passes ? {
    passes: Number(s) >= Number(e),
    value: Number(s)
  } : {
    passes: de(s, e).passes,
    value: s,
    alias: "minlength"
  });
}, be = (s, e, t) => {
  if (!p(e).passes)
    throw new Error("Min rule parameter must be an integer");
  return j(s).passes || t == "file" ? {
    passes: ge(s, e).passes,
    value: s,
    alias: "maxFileSize"
  } : (s == null && (s = 0), p(s).passes ? {
    passes: Number(s) <= Number(e),
    value: Number(s)
  } : {
    passes: me(s, e).passes,
    value: s,
    alias: "maxlength"
  });
}, Ae = (s) => {
  const e = p(s);
  if (e.passes) {
    const t = Number.isInteger(e.value);
    return {
      passes: t,
      value: t ? parseInt(e.value) : s,
      type: e.type
    };
  }
  return {
    passes: !1,
    value: s
  };
}, p = (s) => s === "" || s === null || s === void 0 ? {
  passes: !1,
  value: s
} : s === "0" || s === 0 ? {
  passes: !0,
  value: 0,
  type: "number"
} : s === "1" || s === 1 ? {
  passes: !0,
  value: 1,
  type: "number"
} : {
  passes: !isNaN(Number(s)) && typeof s != "boolean" && typeof s != "object",
  value: Number(s),
  type: "number"
}, Ne = (s, e) => {
  if (!p(e).passes)
    throw new Error("Modulo rule parameter must be an integer");
  return p(s).passes ? {
    passes: Number(s) % Number(e) === 0,
    value: Number(s)
  } : {
    passes: !1,
    value: s
  };
}, Se = (s, e) => {
  if (!p(e).passes)
    throw new Error("Lessthan rule parameter must be a number");
  return p(s).passes ? {
    passes: Number(s) < Number(e),
    value: s
  } : {
    passes: !1,
    value: s
  };
}, ke = (s, e) => {
  if (!p(e).passes)
    throw new Error("Greaterthan rule parameter must be a number");
  return p(s).passes ? {
    passes: Number(s) > Number(e),
    value: s
  } : {
    passes: !1,
    value: s
  };
}, Lt = (s, e) => {
  if (!p(s).passes)
    return {
      passes: !1,
      value: s
    };
  const [t, r] = k(e), i = Number(s);
  return {
    passes: ve(s, t).passes && be(s, r).passes,
    value: i
  };
};
class Rt {
  constructor(e) {
    this.form = e, this.formRules = [];
  }
  getInputByName(e) {
    return this.form.querySelector(`[name=${e}]`);
  }
  getInpuTrValueByName(e) {
    const t = this.getInputByName(e);
    return t ? t.value : void 0;
  }
  getFormRules() {
    return this.formRules;
  }
}
class It extends Rt {
  constructor(e) {
    super(e), this.register();
  }
  register() {
    this.formRules = [
      {
        ruleName: "same",
        call: this.same
      },
      {
        ruleName: "requiredIf",
        call: this.requiredIf
      },
      {
        ruleName: "requiredWhen",
        call: this.requiredWhen
      }
    ];
  }
  /**
   * Same rule
   * @param input
   * @param inputName
   * @returns
   */
  same(e, t) {
    return t ? {
      passes: e === this.getInpuTrValueByName(t.toString()),
      value: e
    } : {
      passes: !1,
      value: e
    };
  }
  /**
   * Required if rule
   * @param input
   * @param inputName
   * @param parameter
   * @returns
   */
  requiredIf(e, t) {
    const [r, ...i] = k(t != null ? t : "");
    if (r && i.length > 0) {
      const l = this.getInpuTrValueByName(r.toString());
      return i.includes(l) ? ae(e) : {
        passes: !0,
        value: e
      };
    }
    return {
      passes: !1,
      value: e
    };
  }
  requiredWhen(e, t) {
    const [r, ...i] = k(t != null ? t : "");
    return r && i.length > 0 ? i.some((o) => ae(this.getInpuTrValueByName(o)).passes) ? ae(e) : {
      passes: !0,
      value: e
    } : {
      passes: !1,
      value: e
    };
  }
}
const D = (s) => {
  const e = /^(\w+):(.+)$/, t = s.match(e);
  if (t) {
    const r = t[1], i = t[2];
    return { ruleName: r, params: i };
  } else {
    const [r, i] = s.split(":");
    return { ruleName: r, params: i };
  }
}, k = (s, e = ",") => typeof s != "string" ? [] : s.split(e).map((t) => t.trim()), A = (s, e) => {
  throw new Error(
    e != null ? e : `Please provide a valid <<${s}>> rule arguments`
  );
};
function Pe() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function Ue(s, e, t = null, r = !1) {
  if (!s)
    return t;
  let i = s.getAttribute(`data-${e}`);
  if (i && r)
    try {
      i = JSON.parse(i);
    } catch (l) {
      return t;
    }
  return i || ne(i) && (i != null && i.length) ? i : t;
}
function R(s, e, t = null, r = !1) {
  return Ue(s, `tr-${e}`, t, r);
}
function xt(s) {
  const e = ee(s);
  let t = 0;
  if (!e.length)
    return t;
  for (const r of e)
    j(r).passes ? t += r.size : t += 0;
  return t;
}
function ee(s) {
  return Array.isArray(s) ? s : s instanceof FileList ? Array.from(s) : s instanceof File || s instanceof Blob ? [s] : [];
}
function ye(s, e) {
  return e = e.toUpperCase(), s = Number(s), e == "KB" ? s = s * 1024 : e == "MB" ? s = s * 1024 * 1024 : e == "GB" && (s = s * 1024 * 1024 * 1024), s;
}
function _e(s) {
  const e = s.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
  if (!e)
    throw new Error(
      "Invalid size format. Please use valid format like '1KB', '1MB', etc."
    );
  const t = parseFloat(e[1]), r = e[3].toUpperCase();
  return [t, r];
}
function V(s, e) {
  const t = e != null ? e : document;
  if (typeof s == "string")
    try {
      return t.querySelector(s);
    } catch (r) {
      return s;
    }
  return s instanceof HTMLElement ? s : null;
}
function ie(s, e) {
  const t = [];
  if (Array.isArray(s))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      t.push(e(i, r));
    }
  else
    for (const r in s)
      if (Object.prototype.hasOwnProperty.call(s, r)) {
        const i = s[r];
        t.push(e(i, r));
      }
  return t;
}
const Y = (s) => {
  if (!s)
    return {
      passes: !1,
      value: s
    };
  const e = fe(new Date(s.toString()), void 0, !0);
  return e.isValid() ? {
    passes: !0,
    value: e.toISOString(),
    type: "date"
  } : {
    passes: !1,
    value: s
  };
}, qe = (s, e) => {
  if (e === "now" && (e = Pe()), !Y(s).passes)
    return {
      passes: !1,
      value: s
    };
  if (!Y(e).passes)
    throw new Error("Pease provide a valid argument for dateBefore rule");
  return {
    passes: fe(s).isBefore(e),
    value: s
  };
}, ze = (s, e) => {
  if (e === "now" && (e = Pe()), !Y(s).passes)
    return {
      passes: !1,
      value: s
    };
  if (!Y(e).passes)
    throw new Error("Pease provide a valid argument for dateAfter rule");
  return {
    passes: fe(s).isAfter(e),
    value: Y(s).value
  };
}, Ge = (s, e) => {
  e || A("dateBetween");
  const [t, r] = k(e);
  return {
    passes: ze(s, t).passes && qe(s, r).passes,
    value: s
  };
}, Ot = (s) => {
  if (typeof s != "string")
    return {
      passes: !1,
      value: s
    };
  if (s.toString().split(":").length < 3)
    for (; s.split(":").length < 3; )
      s += ":00";
  return {
    passes: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(s),
    value: s
  };
}, Ft = {
  default: "This field is invalid",
  required: "This field is required",
  email: "Please enter a valid email address",
  maxlength: "The maximum number of allowed characters is: :arg0",
  minlength: "The minimum number of allowed characters is: :arg0",
  min: "The :field field must be greater than or equal to ':arg0'",
  max: "The :field field must be less than or equal to ':arg0'",
  string: "Please enter a string of characters",
  between: "The value of this field must be between ':arg0' and ':arg1'",
  startWith: "The :field field must start with ':arg0'",
  endWith: "The :field field must end with ':arg0'",
  contains: "The :field field must contain the value ':arg0'",
  in: "Please choose a correct value for the :field field",
  integer: "The :field field must be an integer",
  int: "The :field field must be an integer",
  number: "This field must be a number",
  numeric: "This field must be a number",
  file: "This field must be a file",
  url: "This field must be a valid URL",
  length: "The length of this field must be :arg0",
  len: "The length of this field must be :arg0",
  maxFileSize: "The file size must be less than :arg0.",
  minFileSize: "The file size must be greater than :arg0.",
  size: "The size of this field must be less than or equal to :arg0",
  boolean: "This field must be a boolean (yes or no)",
  startWithUpper: "This field must start with an uppercase letter",
  startWithLower: "This field must start with a lowercase letter",
  nullable: "",
  password: "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.",
  date: "This field must be a valid date",
  before: "The date must be before (:arg0)",
  after: "The date must be after (:arg0)",
  same: "This field must be identical to the value of the :arg0 field",
  requiredIf: "The :field field is required when the :arg0 field has the current value",
  requiredWhen: "The :field field is required when the :arg0 fields are present",
  phone: "This phone number seems to be invalid",
  time: "The :field field must be a valid time.",
  startWithString: "The :field field must start with a letter",
  endWithString: "The :field field must end with a letter",
  excludes: "The :field field must not contain :arg0.",
  hasLetter: "This field must contain at least one letter",
  regex: "This field is invalid.",
  lower: "This field must be lowercase",
  upper: "This field must be uppercase",
  fileBetween: "File size must be between :arg0 and :arg1",
  stringBetween: "The number of characters allowed must be between :arg0 and :arg1",
  modulo: "The value of :field field must be a multiple of :arg0",
  mod: "The value of :field field must be a multiple of :arg0",
  only: "The format of this field is not accepted, as it contains non-allowed characters",
  mimes: "This file format is not supported",
  digit: "This field must be a numeric value with exactly :arg0 digits",
  minDigit: "This field must be a numeric value with a minimum of :arg0 digits",
  maxDigit: "This field must be a numeric value with a maximum of :arg0 digits",
  lessThan: "This field must be a numeric value less than :arg0",
  lthan: "This field must be a numeric value less than :arg0",
  greaterThan: "This field must be a numeric value greater than :arg0",
  gthan: "This field must be a numeric value greater than :arg0",
  dateBetween: "The date must be between :arg0 and :arg1",
  numberBetween: "This field must be a numeric value between :arg0 and :arg1"
}, Z = class $ {
  /**
   * Get the messages for a specific language.
   * If the language is not provided, the default language is used.
   *
   * @param local The language code (optional)
   * @returns The messages object for the specified language
   */
  static getMessages(e) {
    e = e != null ? e : $.DEFAULT_LANG;
    let t = $._message[e];
    return t || (t = $._message[$.DEFAULT_LANG]), t;
  }
  /**
   * Get the message for a specific rule and language.
   * If the language is not provided, the default language is used.
   *
   * @param rule The rule name or object
   * @param local The language code (optional)
   * @returns The message for the specified rule and language, or the default message if not found
   */
  static getRuleMessage(e, t) {
    var i;
    const r = $.getMessages(t);
    return (i = r[e]) != null ? i : r.default;
  }
  /**
   * Add or update a message for a specific rule and language.
   * If the language is not provided, the default language is used.
   *
   * @param rule The rule name
   * @param message The new message
   * @param local The language code (optional)
   */
  static addMessage(e, t, r) {
    if (t) {
      const i = $.getMessages(r);
      i[e] = t, $.putMessages(i, r);
    }
  }
  /**
   * Update the messages object for a specific language.
   * If the language is not provided, the default language is used.
   *
   * @param messages The updated messages object
   * @param local The language code (optional)
   */
  static putMessages(e, t) {
    if (!e || Object.keys(e).length === 0)
      throw new Error("The 'messages' argument must be a non-empty object");
    t = t || $.DEFAULT_LANG;
    const r = $._message[t] || {}, i = S(S({}, r), e);
    $._message[t] = i;
  }
  /**
   * Translate the messages into a specific language.
   *
   * @param lang The target language code
   * @param messages The translated messages object
   */
  static translate(e, t) {
    if (typeof e != "string" || !e.length)
      throw new Error(
        "The first argument must be a string with one or more characters"
      );
    if (typeof t != "object" || t === void 0)
      throw new Error(
        "The second argument must be a valid key/value pair object"
      );
    $._message[e] = S(S({}, $.getMessages(e)), t);
  }
  /**
   * Rewrite the message for a specific rule and language.
   * This is a shorthand method that calls `addMessage`.
   *
   * @param lang The language code
   * @param rule The rule name
   * @param message The new message
   */
  static rewrite(e, t, r) {
    $.addMessage(t, r, e);
  }
  /**
   * Rewrite multiple messages for a specific language.
   *
   * @param lang The language code
   * @param rules An array of rule names or objects
   * @param messages An array of new messages
   */
  static rewriteMany(e, t, r) {
    if (typeof e != "string" || !e.length)
      throw new Error(
        "The 'lang' argument must be a string with one or more characters"
      );
    if (!Array.isArray(t) || !Array.isArray(r))
      throw new Error("The 'rules' and 'messages' arguments must be arrays");
    if (t.length !== r.length)
      throw new Error(
        "The 'rules' and 'messages' arrays must have the same length"
      );
    for (let i = 0; i < t.length; i++) {
      const l = t[i], o = r[i];
      $.rewrite(e, l, o);
    }
  }
  /**
   * Set the current translation language to be used for displaying error messages.
   * This method overrides all other methods of assigning the language for displaying error messages.
   *
   * @param lang The language code
   */
  static local(e) {
    if (!ne(e) || !e.length)
      throw new Error("The language must be a valid string");
    $._useLang = e;
  }
  /**
   * Get the currently set translation language.
   * If no language is set, the default language is used.
   *
   * @returns The currently set language code
   */
  static getLocal() {
    var e;
    return (e = $._useLang) != null ? e : $.LANG;
  }
};
Z._useLang = null;
Z.DEFAULT_LANG = "en";
Z.LANG = Z.DEFAULT_LANG;
Z._message = {
  en: Ft
};
let I = Z;
class Bt {
  constructor(e, t, r = null) {
    this._value = this._trim(e), this.code = t, this.attribute = r;
  }
  //Tog
  validateTG() {
    return /^(\+228|00228)\d{8}$/.test(this._value);
  }
  //Niger
  validateNE() {
    return /^(\+227|00227)\d{8}$/.test(this._value);
  }
  //Guine biseau
  validateGW() {
    return /^(\+245|00245)\d{7,8}$/.test(this._value);
  }
  //Tchad
  validateTD() {
    return /^(\+235|00235)\d{8}$/.test(this._value);
  }
  //Cameroun
  validateCM() {
    return /^(\+237|00237)\d{8}$/.test(this._value);
  }
  //Burkina Faso
  validateBF() {
    return /^(\+226|00226)\d{8}$/.test(this._value);
  }
  //Angola
  validateAO() {
    return /^(\+244|00244)[9,2][1-9]\d{7}$/.test(this._value);
  }
  //Benin
  validateBJ() {
    return /^(\+229|00229)\d{8}$/.test(this._value);
  }
  // United States
  validateUS() {
    return /^(\+1|001)[2-9]\d{9}$/.test(this._value);
  }
  // French
  validateFR() {
    return /^(\+33|0033|0)[1-9](\d{2}){4}$/.test(this._value);
  }
  /**
   * Call the phone validator method for each country code and return the results.
   *
   * @returns An array of validation results, where each element corresponds to a country code and is either `true` or `false`.
   * @throws Error if the validator method for a country code does not exist.
   */
  validPhoneNumber() {
    if (!(ne(this._value) || p(this._value)))
      return !1;
    if (typeof this.code == "string") {
      const e = [], t = this.code.split(",").map((r) => r.trim().toUpperCase());
      for (const r of t) {
        const i = `validate${r}`, l = this[i];
        if (typeof l == "function")
          e.push(l.call(this));
        else
          throw new Error(`Validator method '${i}' does not exist.`);
      }
      return e.some((r) => r);
    }
    return this._validGlobally();
  }
  /**
   * Validates a phone number in a general manner with a margin of error.
   * @link https://en.wikipedia.org/wiki/List_of_mobile_telephone_prefixes_by_country
   * Will help you
   */
  _validGlobally() {
    return /^(\+|00|0)[0-9]{1,3}[0-9]{1,4}[0-9]{6,13}$/.test(this._value);
  }
  _trim(e) {
    return e = typeof e != "string" ? e : String(e), e.replace(/\s/g, "").replace(/-/g, "").replace(/\./g, "");
  }
}
const Dt = (s, e) => typeof s != "string" ? {
  passes: !1,
  value: s
} : {
  passes: new Bt(
    s,
    e == null ? void 0 : e.toString()
  ).validPhoneNumber(),
  value: s
}, Ye = class U {
  /**
   * Add a custom validation rule to the rules bag
   * @param rule - The name of the custom rule
   * @param callback - The callback function for the custom rule
   * @param message - The error message for the custom rule
   */
  static rule(e, t, r, i) {
    U.addRule(e, t), U.addMessage(e, r, i);
  }
  /**
   * Add a custom validation rule to the rules bag
   * @param rule - The name of the custom rule
   * @param callback - The callback function for the custom rule
   */
  static addRule(e, t) {
    U.rules[e] = t;
  }
  /**
   * Add a custom error message for a validation rule to the messages bag
   * @param rule - The name of the validation rule
   * @param message - The error message for the validation rule
   */
  static addMessage(e, t, r) {
    I.addMessage(e, t, r);
  }
  /**
   * Check if a validation rule exists in the rules bag
   * @param rule - The name of the validation rule
   * @returns True if the rule exists, false otherwise
   */
  static hasRule(e) {
    return e in U.rules;
  }
  static getRule(e) {
    return U.rules[e];
  }
  static getMessage(e, t) {
    return I.getRuleMessage(e, t);
  }
  static allRules() {
    return U.rules;
  }
  static allMessages(e) {
    return I.getMessages(e);
  }
};
Ye.rules = {
  required: ae,
  email: pt,
  maxlength: me,
  minlength: de,
  min: ve,
  max: be,
  string: ne,
  between: ht,
  startWith: _t,
  endWith: wt,
  contains: Tt,
  in: ut,
  integer: Ae,
  int: Ae,
  modulo: Ne,
  number: p,
  numeric: p,
  url: vt,
  length: oe,
  len: oe,
  file: j,
  maxFileSize: ge,
  minFileSize: pe,
  size: ot,
  boolean: je,
  startWithUpper: bt,
  nullable: lt,
  startWithLower: yt,
  password: Et,
  date: Y,
  before: qe,
  after: ze,
  phone: Dt,
  time: Ot,
  startWithString: Mt,
  endWithString: $t,
  excludes: At,
  hasLetter: Ct,
  regex: ft,
  lower: St,
  upper: Nt,
  stringBetween: He,
  mod: Ne,
  only: ct,
  mimes: kt,
  digit: dt,
  minDigit: gt,
  lessThan: Se,
  lthan: Se,
  maxDigit: mt,
  greaterThan: ke,
  gthan: ke,
  fileBetween: We,
  dateBetween: Ge,
  numberBetween: Lt
};
let x = Ye;
class q extends x {
  /**
   * Adds a custom validation rule to the rule bag.
   * @param rule - The name of the custom rule.
   * @param callback - The callback function for the custom rule.
   * @example
   * ```typescript
   * TrRule.add("customRule", (input) => {
   *   // Custom validation logic here
   *   return {
   *     passes: true,
   *     value: input
   *   };
   * });
   * ```
   */
  static add(e, t) {
    q.addRule(e, t);
  }
  /**
   * Checks if a validation rule exists in the rule bag.
   * @param rule - The name of the validation rule.
   * @returns True if the rule exists, otherwise false.
   * @example
   * ```typescript
   * const exists = TrRule.has("required");
   * ```
   */
  static has(e) {
    return q.hasRule(e);
  }
  /**
   * Retrieves all validation rules from the rule bag.
   * @returns An object containing all validation rules.
   * @example
   * ```typescript
   * const allRules = TrRule.all();
   * ```
   */
  static all() {
    return q.allRules();
  }
  /**
   * Retrieves a specific validation rule from the rule bag.
   * @param name - The name of the validation rule to retrieve.
   * @returns The callback function associated with the validation rule.
   * @example
   * ```typescript
   * const ruleFunction = TrRule.get("required");
   * ```
   */
  static get(e) {
    return q.getRule(e);
  }
}
class Ze extends x {
  /**
   * Retrieves the error message for a validation rule.
   * @param rule - The name of the validation rule.
   * @param local - The locale for the error message (optional).
   * @returns The error message for the validation rule.
   * @example
   * ```typescript
   * const errorMessage = TrMessage.get("required", "en");
   * ```
   */
  static get(e, t) {
    return x.getMessage(e, t);
  }
  /**
   * Retrieves all error messages for validation rules.
   * @param local - The locale for the error messages (optional).
   * @returns An object containing all error messages for validation rules.
   * @example
   * ```typescript
   * const allMessages = TrMessage.all("en");
   * ```
   */
  static all(e) {
    return x.allMessages(e);
  }
  /**
   * Adds a custom error message for a validation rule.
   * @param rule - The name of the validation rule.
   * @param message - The custom error message (optional).
   * @param local - The locale for the error message (optional).
   * @example
   * ```typescript
   * TrMessage.add("customRule", "Custom error message", "en");
   * ```
   */
  static add(e, t, r) {
    x.addMessage(e, t, r);
  }
}
const Le = {
  invalidClass: "is-invalid",
  // Default invalid class for all input
  validClass: "",
  //Default valid class for all input
  local: {
    lang: I.DEFAULT_LANG
  },
  realTime: !0
};
class Vt {
  constructor(e, t, r) {
    this.local = r, this.items = [], this.messages = {}, this.set(e, t, r);
  }
  /**
   * Removes a validation rule from the InputRule instance.
   * @param  rule - The name of the rule to remove.
   * @returns Returns the current InputRule instance for method chaining.
   */
  remove(e) {
    const { ruleName: t } = D(e);
    return this.items = this.items.filter((r) => r.name !== t), delete this.messages[t], this;
  }
  /**
   * Retrieves a validation rule from the InputRule instance.
   * @param {string | Rule} rule - Optional. The name of the rule to retrieve.
   * @returns Returns the validation rule if found, an array of all rules if no specific rule is provided, or null if the rule is not found.
   */
  get(e) {
    var t;
    if (e) {
      const { ruleName: r } = D(e);
      return (t = this.items.find((i) => i.name === r)) != null ? t : null;
    }
    return this.items;
  }
  /**
   * Gets the number of validation rules in the InputRule instance.
   */
  get length() {
    return this.items.length;
  }
  /**
   * Retrieves the validation rule at the specified index in the InputRule instance.
   * @param {number} index - The index of the rule to retrieve.
   * @returns The validation rule at the specified index.
   */
  atIndex(e) {
    return this.items[e];
  }
  /**
   * Clears all validation rules and associated messages from the InputRule instance.
   * @returns - Returns the current InputRule instance after clearing.
   */
  clear() {
    return this.items = [], this.messages = {}, this;
  }
  ruleNameAsArray() {
    return this.items.map((e) => e.name);
  }
  messageAsArray() {
    return this.items.map((e) => e.message);
  }
  /**
   * Adds a new validation rule to the InputRule instance.
   * If the rule already exists, it is first removed and then added again.
   * @param {string | Rule} rule - The name of the rule to add or a valid Trivule rule.
   * @param {string | null} message - Optional. The custom error message for the rule.
   * @param {RuleParam} param - Optional. The parameters for the rule.
   * @param {RuleCallBack} validate - Optional. The validation callback function for the rule.
   * @param {string} local - Optional. The locale to use for retrieving localized error messages.
   * @returns - Returns the current InputRule instance after adding the rule.
   */
  add(e, t, r, i, l) {
    return this.has(e) && this.remove(e), this.items.push(this.createRule(e, t, r, i, l)), this;
  }
  has(e) {
    const { ruleName: t } = D(e);
    return this.items.some((r) => r.name === t);
  }
  /**
   * Checks if a validation rule exists in the InputRule instance.
   * @param {string | Rule} rule - The name of the rule to check or a valid Trivule rule.
   * @returns {boolean} - Returns true if the rule exists, otherwise returns false.
   */
  createRule(e, t, r, i, l) {
    const { ruleName: o, params: y } = D(e);
    t || (t = Ze.get(o, l));
    const _ = q.get(o);
    if (i = i != null ? i : _, !i)
      throw new Error(`The rule ${o} is not defined`);
    return this.messages[o] = t, {
      name: o,
      message: t,
      params: r != null ? r : y,
      validate: i
    };
  }
  toArrayOrObject(e) {
    var t;
    return (t = Array.isArray(e) ? e : typeof e == "string" ? e.split("|").map((r) => r.trim()) : e) != null ? t : [];
  }
  _sanitizeMessage(e) {
    if (!e)
      return e;
    const t = /{(\d+(?:,\s*\d+)*)}/g;
    return e.replace(t, "");
  }
  /**
   *
   * Go catuper {1,2...} and transform them into an array
   * @param str
   * @returns
   */
  convertAcoladeGroupToArray(e) {
    var i;
    const t = /{(\d+(?:,\s*\d+)*)}/g;
    return (i = [...e.matchAll(t)].map(
      (l) => l[1].split(",").map((o) => parseInt(o.trim()))
    )[0]) != null ? i : [];
  }
  /**
   * Sets validation rules and associated messages for the InputRule instance.
   * @param {Rule[] | string[] | Rule | string} rules - The validation rules to set.
   * @param {string | string[] | Record<string, string> | null} messages - Optional. Custom error messages for the validation rules.
   * @param {string} local - Optional. The locale to use for retrieving localized error messages.
   * @returns - Returns the current InputRule instance after setting the rules.
   */
  set(e, t, r) {
    var i, l;
    e = Array.isArray(e) ? e.map((o) => o.trim()) : e.split("|").map((o) => o.trim()), t = this.toArrayOrObject(t);
    for (let o = 0; o < e.length; o++) {
      const y = e[o];
      let _ = null;
      const { ruleName: m, params: T } = D(y);
      if (Array.isArray(t)) {
        const v = this.convertAcoladeGroupToArray((i = t[o]) != null ? i : "");
        for (const O of v)
          t[O] = this._sanitizeMessage(t[o]);
        _ = t[o];
      } else
        typeof t == "object" && (_ = (l = this._sanitizeMessage(t[m])) != null ? l : null);
      this.add(m, _, T, void 0, r);
    }
    return this;
  }
  /**
   * Maps over the validation rules in the InputRule instance and applies a function to each rule.
   * @param {Function} call - The function to apply to each rule. It receives two parameters: the rule itself and its index in the array.
   * @returns An array containing the results of applying the function to each rule.
   */
  map(e) {
    return this.items.map(e);
  }
  /**
   * Replaces a validation rule with another rule in the InputRule instance.
   * @param {string} outgoing - The name of the rule to replace.
   * @param {string} incoming - The name of the rule to replace with.
   * @returns - Returns the current InputRule instance after replacing the rule.
   */
  replace(e, t) {
    const { ruleName: r } = D(e), i = this.items.findIndex((l) => l.name === r);
    return i !== -1 && (this.items[i] = this.createRule(t)), this;
  }
  /**
   * Retrieves all validation rules stored in the InputRule instance.
   * @returns - An array containing all validation rules.
   */
  all() {
    return this.items;
  }
  /**
   * Adds a new validation rule to the InputRule instance and returns the current instance.
   * @param {string} rule - The name of the rule to add.
   * @param {string | null} message - Optional. The custom error message for the rule.
   * @param {RuleParam} param - Optional. The parameters for the rule.
   * @param {RuleCallBack} validate - Optional. The validation callback function for the rule.
   * @param {string} local - Optional. The locale to use for retrieving localized error messages.
   * @returns - Returns the current InputRule instance after adding the rule.
   */
  push(e, t, r, i, l) {
    return this.add(e, t, r, i, l), this;
  }
  /**
   * Retrieves all custom error messages associated with validation rules in the InputRule instance.
   * @returns - An object containing all custom error messages.
   */
  getMessages() {
    return this.messages;
  }
  /**
   * Adds a new validation rule to the InputRule instance and returns the current instance.
   * @param {string} rule - The name of the rule to add.
   * @param {string | null} message - Optional. The custom error message for the rule.
   * @param {RuleParam} param - Optional. The parameters for the rule.
   * @param {RuleCallBack} validate - Optional. The validation callback function for the rule.
   * @param {string} local - Optional. The locale to use for retrieving localized error messages.
   * @returns - Returns the current InputRule instance after adding the rule.
   */
  append(e, t, r, i, l) {
    return this.push(e, t, r, i, l), this;
  }
  /**
   * Adds a new validation rule to the beginning of the InputRule instance and returns the current instance.
   * @param {string} rule - The name of the rule to add.
   * @param {string | null} message - Optional. The custom error message for the rule.
   * @param {RuleParam} param - Optional. The parameters for the rule.
   * @param {RuleCallBack} validate - Optional. The validation callback function for the rule.
   * @param {string} local - Optional. The locale to use for retrieving localized error messages.
   * @returns - Returns the current InputRule instance after adding the rule.
   */
  prepend(e, t, r, i, l) {
    return this.items.unshift(this.createRule(e, t, r, i, l)), this;
  }
  /**
   * Inserts a new validation rule before an existing rule in the InputRule instance and returns the current instance.
   * @param {string} existingRule - The name of the existing rule before which the new rule will be inserted.
   * @param {string | Rule | { rule: string; message?: string | null; param?: RuleParam; validate?: RuleCallBack; local?: string; }} incomming - The new rule to insert.
   * @returns - Returns the current InputRule instance after inserting the new rule.
   */
  insertBefore(e, t) {
    const r = this.items.findIndex(
      (i) => i.name === e
    );
    if (r !== -1) {
      if (typeof t == "string")
        return this.items.splice(r, 0, this.createRule(t)), this;
      this.items.splice(
        r,
        0,
        this.createRule(
          t.rule,
          t.message,
          t.param,
          t.validate,
          t.local
        )
      );
    }
    return this;
  }
  /**
   * Inserts a new validation rule after an existing rule in the InputRule instance and returns the current instance.
   * @param {string} existingRule - The name of the existing rule after which the new rule will be inserted.
   * @param {string | Rule | { rule: string; message?: string | null; param?: RuleParam; validate?: RuleCallBack; local?: string; }} incomming - The new rule to insert.
   * @returns - Returns the current InputRule instance after inserting the new rule.
   */
  insertAfter(e, t) {
    const r = this.items.findIndex(
      (i) => i.name === e
    );
    if (r !== -1) {
      if (typeof t == "string")
        return this.items.splice(r + 1, 0, this.createRule(t)), this;
      this.items.splice(
        r + 1,
        0,
        this.createRule(
          t.rule,
          t.message,
          t.param,
          t.validate,
          t.local
        )
      );
    }
    return this;
  }
  /**
   * Assigns or updates the message for a specific rule.
   * @param rule - The rule name to update the message for.
   * @param message - The new message to assign to the rule.
   */
  assignMessage(e, t) {
    const { ruleName: r } = D(e);
    if (r) {
      const i = this.get(r);
      i && (this.messages[r] = t, i.message = t);
    }
    return this;
  }
  /**
   * Retrieves the message associated with a specific validation rule.
   * @param {string | Rule} rule - The name of the validation rule or the rule itself.
   * @returns {string | null} - The message associated with the specified rule, or null if the message is not found.
   */
  getMessage(e) {
    const { ruleName: t } = D(e);
    return this.messages[t] || null;
  }
}
class Je {
  constructor() {
    this.feedbackSelector = "[data-tr-feedback={name}]", this.inputSelector = "[name={name}]";
  }
  getFeedbackSelector(e) {
    return typeof this.feedbackSelector == "string" ? e.trim().length < 1 ? null : this.feedbackSelector.replace("{name}", e) : this.feedbackSelector;
  }
  setFeedbackSelector(e) {
    return e ? (this.feedbackSelector = e, this) : this;
  }
  getInputSelector(e) {
    return typeof this.inputSelector == "string" && typeof e == "string" ? e.trim().length < 1 ? null : this.inputSelector.replace("{name}", e) : this.inputSelector;
  }
}
class jt {
  constructor(e, t, r) {
    this.__wasInit = !1, this._passed = !1, this.feedbackElement = null, this._errors = [], this.showMessage = "first", this.showMessages = ["first", "full", "last"], this.validClass = "", this.invalidClass = "is-invalid", this.param = {
      emitEvent: !0,
      autoValidate: !0,
      failsOnfirst: !0,
      validClass: "",
      invalidClass: "is-invalid",
      type: "text",
      realTime: !0
    }, this.autoValidate = !0, this._value = void 0, this._emitOnValidate = !0, this._type = "text", this.realTime = !1, this._events = ["change", "blur", "input"], this.validator = new Wt(), this.rules = new Vt([]), this.parameter = r != null ? r : new Je(), this._init(e, t);
  }
  /**
   * Sets the validation rules for this Trivule input instance.
   * @param rules The validation rules to set.
   * @returns This Trivule input instance.
   */
  setRules(e) {
    return this.$rules.set(e), this;
  }
  /**
   * Sets the event listeners for the input element.
   * This method determines which events will trigger the validation based on
   * the parameters provided or the attributes defined on the input element.
   *
   * @param events - An optional array of event names to be used for validation. If not provided, it will use the default or attribute-defined events.
   *
   * @example
   * // Setting custom events for validation
   * trivuleInput._setEvent(['focus', 'blur']);
   *
   * // Using attribute-defined events
   * const inputElement = document.querySelector('input[name="email"]');
   * inputElement.setAttribute('data-tr-events', 'input|change');
   * trivuleInput._setEvent();
   */
  _setEvent(e) {
    const t = R(
      this.inputElement,
      "events",
      void 0
    );
    t && (e = t.split("|").length ? t.split("|") : this.param.events), this.events = this.eventToArray(e != null ? e : this.param.events);
  }
  /**
   * Sets the input element for validation.
   * This method should be called before calling the 'init' method.
   * @param {ValidatableInput} inputElement - The input element or selector string representing the input element.
   * @throws {Error} If the input element is not valid or cannot be found.
   */
  setInputElement(e) {
    if (!(e instanceof Element)) {
      const t = document.querySelector(e);
      t && (e = t);
    }
    if (!(e instanceof Element))
      throw new Error(
        `The 'inputElement' parameter must be a valide 'ValidatableInput' type. "${e} provided"`
      );
    return this.inputElement = e, this.param.type = this.inputElement.type, this.inputElement.tagName.toLowerCase() === "textarea" && (this.param.type = "text"), this;
  }
  get name() {
    var e, t;
    return (t = (e = this.inputElement.name) != null ? e : this.param.name) != null ? t : "";
  }
  get value() {
    return this.getValue();
  }
  set value(e) {
    this._value = e, this.autoValidate && this.validate();
  }
  set errors(e) {
    e && (Array.isArray(e) || (e = Object.keys(e).map(
      (t) => e[t]
    )), this._errors = e != null ? e : []), this.showErrorMessages();
  }
  /**
   * Sets the element used to display feedback messages for this input.
   * @param selector The CSS selector or element representing the feedback element.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setFeedbackElement(".feedback"); // Sets the feedback element using CSS selector ".feedback"
   */
  setFeedbackElement(e) {
    let t = null;
    if (e instanceof HTMLElement)
      t = e;
    else {
      let r = this.inputElement.parentElement;
      e = e != null ? e : this.param.feedbackElement, e = e != null ? e : this.parameter.getFeedbackSelector(this.name);
      do {
        if (t = e ? V(e, r) : t, t)
          break;
        r = (r == null ? void 0 : r.parentElement) || null;
      } while (r && !t);
    }
    return this.feedbackElement = t, this;
  }
  /**
   * Shows error messages based on the value of the "tr-show" attribute
   * The "showMessage" property determines how the error messages are displayed.
   *
   */
  showErrorMessages() {
    if (this.feedbackElement instanceof HTMLElement, this.feedbackElement instanceof HTMLElement) {
      let e = "";
      Array.isArray(this._errors) && (e = this._errors[0], this.showMessage == "full" ? e = this._errors.join("<br>") : this.showMessage == "last" && this._errors.length > 0 && (e = this._errors[this._errors.length - 1])), this.feedbackElement.innerHTML = e != null ? e : "";
    }
  }
  /**
   * Get and set the ways error message will be displayed
   */
  setShowMessage() {
    this.showMessage = R(this.inputElement, "show", "first"), this.showMessage = this.showMessages.includes(this.showMessage) ? this.showMessage : "first";
  }
  _setTrValidationClass() {
    var e, t;
    this.invalidClass = (e = this.param.invalidClass) != null ? e : this.invalidClass, this.validClass = (t = this.param.validClass) != null ? t : this.validClass, this.invalidClass = R(
      this.inputElement,
      "invalid-class",
      this.invalidClass
    ), this.validClass = R(
      this.inputElement,
      "valid-class",
      this.validClass
    );
  }
  setralidationClass() {
    const e = this._passed, t = (i) => {
      i.length > 0 && this.inputElement.classList.remove(i);
    }, r = (i) => {
      i.length > 0 && this.inputElement.classList.add(i);
    };
    e ? (this.invalidClass.split(" ").forEach(t), this.validClass.split(" ").forEach(r), this.inputElement.setAttribute("data-tr-valid", "1")) : (this.validClass.split(" ").forEach(t), this.invalidClass.split(" ").forEach(r), this.inputElement.setAttribute("data-tr-valid", "0"));
  }
  /**
   * Retrieves the current name of the input element.
   * @returns
   */
  getName() {
    return this.name;
  }
  /**
   * Retrieves the current value of the input element.
   * This method handles different input types, such as 'file', and returns the appropriate value.
   *
   * @returns The value of the input element. For file inputs, it returns the selected files; for other inputs, it returns the element's value.
   *
   * @example
   * // Getting the value of a text input
   * const value = trivuleInput.getInputElemenyValue();
   *
   * // Getting the files of a file input
   * const files = fileInput.getInputElemenyValue();
   */
  getInputElemenyValue() {
    var e;
    return this.inputElement.type.toLowerCase() == "file" ? (e = this.inputElement.files) != null ? e : null : this.inputElement.value;
  }
  /**
   * Retrieves the current value of the input element.
   * @returns
   */
  getValue() {
    return this.getInputElemenyValue();
  }
  /**
   * Sets the parameters for this Trivule input instance.
   * @param params The parameters to set.
   * @returns This Trivule input instance.
   */
  setParams(e) {
    typeof e == "object" && typeof e != "undefined" && (this.param = S(S({}, this.param), e));
    const t = Ue(this.inputElement, "tr", null, !0);
    return t && (this.param = Object.assign(this.param, t)), this;
  }
  /**
   * Sets the attribute name used to identify feedback messages for this input.
   * @param attrName The name of the attribute used for feedback messages.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setMessageAttributeName("data-feedback"); // Sets the feedback message attribute to "data-feedback"
   */
  setMessageAttributeName(e) {
    return this.validator.attribute = e != null ? e : this.name, this;
  }
  /**
   * Initializes the Trivule input instance.
   * This method sets up the input element, parameters, feedback element,
   * validation rules, and event listeners for the input validation.
   *
   * @param selectorOrParams - Either a validatable input (e.g., a CSS selector or HTMLInputElement) or Trivule input parameters.
   * @param params - Additional Trivule input parameters.
   *
   * @example
   * // Initializing with a CSS selector and parameters
   * const trivuleInput = new TrivuleInput();
   * trivuleInput._init('#myInput', {
   *   realTime: false,
   *   feedbackSelector: '.invalid-feedback'
   * });
   *
   * // Initializing with an HTMLInputElement
   * const inputElement = document.querySelector('input[name="email"]');
   * trivuleInput._init(inputElement, {
   *   rules: ['required', 'email'],
   *   messages: { required: 'Email is required', email: 'Invalid email address' }
   * });
   *
   * @throws {Error} If the input element is not valid or cannot be found.
   */
  _init(e, t) {
    var l, o, y, _;
    let r = e;
    typeof e == "object" && e !== null && e !== void 0 && (e instanceof HTMLElement || (t = e, t = e, r = t.selector)), r || (r = t == null ? void 0 : t.selector), this.setInputElement(r).setParams(t).setMessageAttributeName().setFeedbackElement(), this.setShowMessage(), this._setTrValidationClass(), this._setEvent((l = t == null ? void 0 : t.events) != null ? l : this._events);
    const i = R(
      this.inputElement,
      "rules",
      t == null ? void 0 : t.rules
    );
    if (i) {
      const m = R(
        this.inputElement,
        "messages",
        this.param.messages
      );
      this.rules.set(i, m);
    }
    this.validator.rules = this.rules, this.validator.failsOnFirst = (o = t == null ? void 0 : t.failsOnfirst) != null ? o : !0, this._type = (y = t == null ? void 0 : t.type) != null ? y : "text", this.realTime = (_ = t == null ? void 0 : t.realTime) != null ? _ : this.realTime;
  }
  /**
   * Get the name of the attribute that
   * will be displayed in the message instead of :field
   * @returns
   */
  getMessageAttributeName() {
    return this.validator.attribute;
  }
  /**
   * Retrieves the current rules messages.
   * @returns
   */
  get messages() {
    return this.rules.getMessages();
  }
  get emitOnValidate() {
    return this._emitOnValidate;
  }
  set emitOnValidate(e) {
    this._emitOnValidate = e;
  }
  set events(e) {
    this._events = e;
  }
  get events() {
    return this._events;
  }
  commit() {
    this._type !== "file" && (this.inputElement.value = this._value);
  }
  eventToArray(e) {
    let t = [];
    if (typeof e != "string") {
      if (!Array.isArray(e))
        return [];
      t = e;
    }
    return typeof e == "string" && (t = e.split("|")), t.map((r) => r.trim());
  }
  get $rules() {
    return this.rules;
  }
}
class we extends jt {
  constructor(e, t, r) {
    super(e, t, r), this.hooks = {
      "before.init": [],
      "after.init": [],
      destroy: []
    }, this._validateCount = 0, this._emitOnPasses = !0, this._emitOnFails = !0, this.init();
  }
  /**
   * Initializes live validation on the input element.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * trivuleInput.init();
   * ```
   */
  init() {
    this.__wasInit || (this.executeHooks("before.init"), this.autoValidate && (this.__wasInit = !0, this.events.forEach((e) => {
      this.inputElement.addEventListener(e, () => {
        this.realTime ? (this.value = this.getInputElemenyValue(), this.emit("tr.input.update", {
          detail: {
            rules: this.rules,
            input: {},
            element: this.inputElement
          }
        })) : e != "input" && e != "keyup" && e != "keydown" && (this.value = this.getInputElemenyValue(), this.emit("tr.input.update", {
          detail: {
            rules: this.rules,
            input: {},
            element: this.inputElement
          }
        }));
      });
    })), this.executeHooks("after.init"));
  }
  /**
   * Add new rule to input element
   * @param ruleName
   * @param call
   * @param message
   */
  rule(e, t, r) {
    x.rule(e, t, r);
  }
  with(e) {
    this.setParams(e);
  }
  whereName(e) {
    return this.name === e;
  }
  onFails(e) {
    this.on("tr.input.fails", () => {
      this.__call(e, this);
    });
  }
  onPasses(e) {
    this.on("tr.input.passes", () => {
      this.__call(e, this);
    });
  }
  onUpdate(e) {
    this.on("tr.input.update", () => {
      this.__call(e, this);
    });
  }
  destroy() {
    var e;
    (e = this.param.events) == null || e.forEach((t) => {
      this.inputElement.removeEventListener(t, () => {
        this.validate();
      });
    }), this.param.events = [], this.rules.clear(), this.param.rules = [], this.executeHooks("destroy");
  }
  is(e) {
    return e === this.inputElement;
  }
  /**
   * Performs validation on the input element. And emits tr.input.validated event if necessary.
   * @returns true if the input element is valid, false otherwise.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * const isValid = trivuleInput.validate();
   * if (isValid) {
   *   // Proceed with form submission or handle valid input
   * } else {
   *   // Display error messages or handle invalid input
   * }
   * ```
   */
  validate() {
    return this.valid(), this.setralidationClass(), this.errors = this.validator.getErrors(), this.emitOnValidate && this.emitChangeEvent(), this._passed;
  }
  /**
   * Returns the validation rules defined for the input element.
   * @returns An array of validation rules.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * const rules = trivuleInput.getRules();
   * console.log(rules); // Output: ['required', 'email']
   * ```
   */
  getRules() {
    return this.rules.all();
  }
  /**
   * Checks if the input element has validation rules.
   * @returns A boolean indicating if rules are defined.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * const hasRules = trivuleInput.hasRules();
   * console.log(hasRules); // Output: true or false
   * ```
   */
  hasRules() {
    return this.rules.length > 0;
  }
  /**
   * Get the validation messages associated with the input element.
   * @returns An object containing the validation messages.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * const messages = trivuleInput.getMessages();
   * console.log(messages);
   * ```
   */
  getMessages() {
    return this.messages;
  }
  /**
   * Performs validation on the input element using the defined validation rules. Don't emit tr.input.passes or tr.input.fails event
   * @returns true if the input element is valid, false otherwise.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * const isValid = trivuleInput.valid();
   * if (isValid) {
   *   // Proceed with form submission or handle valid input
   * } else {
   *   // Display error messages or handle invalid input
   * }
   * ```
   */
  valid() {
    return this.validator.value = this.value, this._validateCount++, this._passed = this.validator.passes();
  }
  /**
   * Emits a custom event to the inputElement element.
   *
   * @param e - The name of the custom event to emit.
   * @param data - The additional data to pass with the event.
   */
  emit(e, t) {
    const r = new CustomEvent(e, { detail: t });
    this.inputElement.dispatchEvent(r);
  }
  /**
   * Attach an event listener to the inputElement element.
   *
   * @param e - The name of the event to listen to.
   * @param fn - The callback function to execute when the event occurs.
   * This function takes an event of type `Event` as a parameter and returns nothing.
   * Example: `(event) => { ... }`
   */
  on(e, t) {
    this.inputElement.addEventListener(e, t);
  }
  /**
   * Emit event if input change
   */
  emitChangeEvent() {
    this._passed ? this._emitOnPasses && (this.emit("tr.input.passes", {
      detail: {
        rules: this.rules,
        input: {},
        element: this.inputElement
      }
    }), this._emitOnPasses = !1, this._emitOnFails = !0) : this._emitOnFails && (this.emit("tr.input.fails", {
      detail: {
        rules: this.rules,
        input: {},
        element: this.inputElement
      }
    }), this._emitOnPasses = !0, this._emitOnFails = !1);
  }
  getErrors() {
    return this.validator.getErrors();
  }
  /**
   * Check if the input element has failed validation.
   * @returns `true` if the input element has failed validation, `false` otherwise.
   * Example:
   * ```
   * const trivuleInput = new TrivuleInput(inputElement);
   * if (trivuleInput.fails()) {
   *   console.log('Validation failed');
   * } else {
   *   console.log('Validation succeeded');
   * }
   * ```
   */
  fails() {
    return !this.passes();
  }
  /**
   *  Check if the validation was successful passed
   * @returns
   */
  passes() {
    return this.valid();
  }
  /**
   * Invokes the provided function with the given parameters if it is a valid function.
   * @param fn - The function to be called.
   * @param params - The parameters to be passed to the function.
   */
  __call(e, ...t) {
    typeof e == "function" && e(...t);
  }
  getRuleExecuted() {
    return this.validator.getRuleExecuted();
  }
  filledErrors(e) {
    this.errors = e != null ? e : this.validator.getErrors();
  }
  /**
   * Removes an attribute from the Trivule input element.
   * @param attrName The name of the attribute to remove.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.removeNativeAttribute("data-custom"); // Removes the custom attribute "data-custom"
   */
  removeNativeAttribute(e) {
    var t;
    return (t = this.inputElement) == null || t.removeAttribute(e), this;
  }
  /**
   * Retrieves the value of a native attribute from the Trivule input element.
   *
   * This method attempts to get the attribute value using the `getAttribute` method
   * of the underlying `inputElement`. If the element doesn't have the attribute,
   * it returns `undefined`.
   *
   * @param attrName The name of the attribute to retrieve.
   * @returns The value of the attribute if it exists, otherwise `undefined`.
   */
  getNativeAttribute(e) {
    var t;
    return (t = this.inputElement) == null ? void 0 : t.getAttribute(e);
  }
  /**
   * Checks if the Trivule input element has a specific native attribute.
   * @param attrName The name of the attribute to check.
   * @returns `true` if the attribute exists, `false` otherwise.
   */
  hasNativeAttribute(e) {
    var t, r;
    return (r = (t = this.inputElement) == null ? void 0 : t.hasAttribute(e)) != null ? r : !1;
  }
  /**
   * Sets the value of a native attribute on the Trivule input element.
   *
   * This method uses the `setAttribute` method of the underlying `inputElement`
   * to set the value of the specified attribute.
   *
   * @param attrName The name of the attribute to set.
   * @param value The value to assign to the attribute.
   * @returns This Trivule input instance for method chaining.
   */
  setNativeAttribute(e, t) {
    var r;
    return (r = this.inputElement) == null || r.setAttribute(e, t), this;
  }
  /**
   * Removes a specific validation rule from the Trivule input.
   * @param rule The name of the rule to be removed.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.removeRule("required"); // Removes the "required" validation rule from the Trivule input
   */
  removeRule(e) {
    return this.rules.remove(e), this;
  }
  /**
   * Removes multiple validation rules from the Trivule input.
   * @param rules An array of rule names.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.removeRules(["required", "minlength"]); // Removes the "required" and "minlength" validation rules from the Trivule input
   */
  removeRules(e) {
    return Array.isArray(e) && e.forEach((t) => this.removeRule(t)), this;
  }
  /**
   * Replaces an existing validation rule with a new one.
   * @param oldRule The rule to be replaced.
   * @param newRule The new rule to replace the old one
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.replaceRule("required", "minlength"); // Replaces the "required" rule with the "minlength" rule
   */
  replaceRule(e, t) {
    return this.$rules.replace(e, t), this;
  }
  /**
   * Sets the CSS class to be applied when the input is considered invalid.
   * @param className The CSS class name to set.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setInvalidClass("error"); // Sets the CSS class "error" to be applied when the input is invalid
   */
  setInvalidClass(e) {
    return this.invalidClass = e, this;
  }
  /**
   * Sets the value of the input element.
   * @param value The value to set for the input element.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setValue("example"); // Sets the value of the input element to "example"
   */
  setValue(e) {
    return this.value = e, this;
  }
  /**
   * Sets the CSS class to be applied when the input is considered valid.
   * @param className The CSS class name to set.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setValidClass("success"); // Sets the CSS class "success" to be applied when the input is valid
   */
  setValidClass(e) {
    return this.validClass = e, this;
  }
  /**
   * Sets whether the input should be automatically validated as the user interacts with it.
   * @param autoValidate A boolean value indicating whether auto-validation should be enabled.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setAutoValidate(true); // Enables auto-validation for the input
   */
  setAutoValidate(e) {
    return this.autoValidate = e, this;
  }
  /**
   * Sets the events that trigger validation of the input.
   * @param eventTriggers The event or events that trigger validation.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setEventTriggers(["input", "change"]); // Sets events "input" and "change" to trigger validation
   */
  setEventTriggers(e) {
    return this.events = this.eventToArray(e), this;
  }
  /**
   * Sets the type of the input element.
   * @param type The type of the input element.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.setType("email"); // Sets the type of the input element to "email"
   */
  setType(e) {
    return this._type = e, this;
  }
  /**
   * Sets a callback function to execute before running a rule on the Trivule input.
   * @param rule The rule name for which the callback is set.
   * @param callback The callback function to execute.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.beforeRunRule("required", (input) => { console.log("Before rule:", input); }); // Sets a callback to execute before running the "required" rule
   */
  beforeRunRule(e, t) {
    return this.addHook(`before.run.${e}`, t), this;
  }
  /**
   * Sets a callback function to execute after running a rule on the Trivule input.
   * @param rule The rule name for which the callback is set.
   * @param callback The callback function to execute.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.afterRunRule("required", (input) => { console.log("After rule:", input); }); // Sets a callback to execute after running the "required" rule
   */
  afterRunRule(e, t) {
    return this.addHook(`after.run.${e}`, t), this;
  }
  /**
   * Sets a callback function to execute before initializing the Trivule input.
   * @param callback The callback function to execute.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.beforeInit((input) => { console.log("Before init:", input); }); // Sets a callback to execute before initializing the Trivule input
   */
  beforeInit(e) {
    return this.addHook("before.init", e), this;
  }
  /**
   * Sets a callback function to execute after initializing the Trivule input.
   * @param callback The callback function to execute.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.afterInit((input) => { console.log("After init:", input); }); // Sets a callback to execute after initializing the Trivule input
   */
  afterInit(e) {
    return this.addHook("after.init", e), this;
  }
  /**
   * Sets a callback function to execute when a rule fails for this input.
   * @param rule The rule name for which the callback is set.
   * @param callback The callback function to execute.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.onRuleFail("required", (input) => { console.log("Rule failed:", input); }); // Sets a callback for when the "required" rule fails
   */
  onRuleFail(e, t) {
    return this.addHook(`after.fails.${e}`, t), this;
  }
  /**
   * Sets a callback function to execute when a rule passes for this input.
   * @param rule The rule name for which the callback is set.
   * @param callback The callback function to execute.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.onRulePass("required", (input) => { console.log("Rule passed:", input); }); // Sets a callback for when the "required" rule passes
   */
  onRulePass(e, t) {
    return this.addHook(`after.passes.${e}`, t), this;
  }
  /**
   * Triggers the validation event manually.
   * @param boolean A boolean value indicating whether to trigger the validation event.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.triggerValidateEvent(true); // Manually triggers the validation event
   */
  triggerValidateEvent(e = !0) {
    return this.emitOnValidate = e, this;
  }
  /**
   * Sets whether validation should stop after the first error is encountered.
   * @param boolean A boolean value indicating whether validation should stop on the first error.
   * @returns This Trivule input instance.
   * @example
   * const trivuleInput = new TrivuleInput();
   * trivuleInput.failsOnfirst(true); // Stops validation on the first error encountered
   */
  failsOnfirst(e = !0) {
    return this.validator.failsOnFirst = e, this;
  }
  /**
   * Gets the feedback element associated with this Trivule input.
   * @returns The feedback element if set, otherwise null.
   */
  getFeedbackElement() {
    return this.feedbackElement;
  }
  getRealTimeState() {
    return this.realTime;
  }
  /**
   * Pushes an additional validation rule to the existing rules for this Trivule input instance.
   * @param rule The rule to add to.
   * @returns This Trivule input instance.
   */
  pushRule(e) {
    return this.appendRule(e), this;
  }
  /**
   * Checks if the Trivule input has a specific validation rule.
   *
   * @param rule The name of the rule to check for.
   * @returns  True if the rule exists, false otherwise.
   *
   * @example
   * ```typescript
   * console.log(trivuleInput.hasRule('required')); // Output: true
   * ```
   */
  hasRule(e) {
    return this.rules.has(e);
  }
  /**
   * Appends a validation rule to the Trivule input.
   *
   * @param rule An object containing the validation rule definition.
   *
   * @property {string} rule.rule - The name of the validation rule.
   * @property {string | null} [rule.message] - An optional custom message to display for the rule violation.
   * @property {RuleParam} [rule.param] - An optional object containing additional parameters for the rule.
   * @property {RuleCallBack} [rule.validate] - An optional custom validation function for the rule.
   * @property {string} [rule.local] - An optional locale key to use for message translation.
   *
   * @returns This Trivule input instance.
   *
   * @example
   * ```typescript
   * trivuleInput.appendRule({
   *   rule: 'required',
   *   message: 'This field is required',
   * });
   * ```
   */
  appendRule(e) {
    return this.rules.append(
      e.rule,
      e.message,
      e.param,
      e.validate,
      e.local
    ), this;
  }
  /**
   * Prepends a validation rule to the Trivule input.
   *
   * @param rule An object containing the validation rule definition.
   *
   * @property {string} rule.rule - The name of the validation rule.
   * @property {string | null} [rule.message] - An optional custom message to display for the rule violation.
   * @property {RuleParam} [rule.param] - An optional object containing additional parameters for the rule.
   * @property {RuleCallBack} [rule.validate] - An optional custom validation function for the rule.
   * @property {string} [rule.local] - An optional locale key to use for message translation.
   *
   * @returns This Trivule input instance.
   *
   * @example
   * ```typescript
   * trivuleInput.prependRule({
   *   rule: 'required',
   *   message: 'This field is required',
   * });
   * ```
   */
  prependRule(e) {
    return this.$rules.prepend(
      e.rule,
      e.message,
      e.param,
      e.validate,
      e.local
    ), this;
  }
  /**
   * Enables real-time validation for the Trivule input. This means that validation will be performed on any event specified in the `events` property (e.g., 'change', 'blur', 'input') as the user interacts with the input.
   *
   * @returns This Trivule input instance.
   */
  enableRealTime() {
    return this.realTime = !0, this;
  }
  /**
   * Disables real-time validation for the Trivule input. Validation will only be triggered manually or on form submission.
   *
   * @returns This Trivule input instance.
   */
  disableRealTime() {
    return this.realTime = !1, this.events = this._events, this;
  }
  /**
   * Checks if real-time validation is enabled for the Trivule input.
   *
   * @returns True if real-time validation is enabled, false otherwise.
   */
  isRealTimeEnabled() {
    return this.realTime;
  }
  /**
   * Adds a callback to be executed for a specific hook.
   * @param hook The name of the hook.
   * @param callback The callback function to be executed when the hook is triggered.
   */
  addHook(e, t) {
    this.hooks[e] || (this.hooks[e] = []), this.hooks[e].push(t);
  }
  /**
   * Execute all callbacks for a specific hook.
   * @param hook The name of the hook.
   */
  executeHooks(e) {
    const t = this.hooks[e];
    t && t.forEach((r) => r(this));
  }
}
class he {
  constructor(e, t) {
    this._eventCallbacks = {}, this._registerInputs = {}, this._lifeCycleCallbacks = {}, this.__calledCount = 0, this._passed = !1, this._emitOnPasses = !0, this._emitOnFails = !0, this._trEnabledClass = "etr-enabled", this._trDisabledClass = "tr-disabled", this.container = null, this._trivuleInputs = {}, this.config = {
      auto: !0,
      realTime: !0
    }, this._onUpdateCallbacks = [], this._wasInit = !1, this._wasBound = !1, this.parameter = new Je(), typeof e == "string" || e instanceof HTMLElement ? (this.bind(e), this.setConfig(t)) : (t = t != null ? t : e, t != null && t.element && this.bind(t.element), this.setConfig(t));
  }
  setSubmitButton(e) {
    var r;
    let t = null;
    e && (t = V(e)), !t && this.container && (t = (r = this.container) == null ? void 0 : r.querySelector("[data-tr-submit]")), t && (this.submitButton = t);
  }
  /**
   * Initializes live validation on the form element.
   * Example:
   * ```
   * const trivuleForm = new TrivuleForm(formElement);
   * trivuleForm.init();
   * ```
   */
  init() {
    this._wasInit || (this._wasInit = !0, this.config.auto && this.disableButton(), this.emit("tr.form.init", this), this._onSubmit(), this.onFails(() => {
      this.disableButton();
    }), this.onPasses(() => {
      this.enableButton();
    }));
  }
  /**
   * Disables the submit button and updates its CSS classes based on the configuration.
   *
   * This method checks if the submit button exists and, if the auto configuration is enabled,
   * it disables the button by setting the 'disabled' attribute to 'true'. It also manages
   * the CSS classes by removing the enabled classes and adding the disabled classes.
   *
   * @remarks
   * - If the `auto` configuration is enabled, the submit button will be disabled.
   * - The enabled and disabled CSS classes are managed by removing the enabled classes
   *   and adding the disabled classes based on the configuration.
   *
   * @example
   * ```typescript
   * this.disableButton();
   * ```
   */
  disableButton() {
    if (this.submitButton && (this.config.auto && this.submitButton.setAttribute("disabled", "true"), this._trDisabledClass)) {
      const e = this._trEnabledClass.split(" ");
      for (const r of e)
        this.submitButton.classList.remove(r);
      this._trDisabledClass = R(
        this.submitButton,
        "disabled-class",
        this._trDisabledClass
      );
      const t = this._trDisabledClass.split(" ");
      for (const r of t)
        this.submitButton.classList.add(r);
    }
  }
  /**
   * Enables the submit button and updates its CSS classes based on the configuration.
   *
   * This method checks if the submit button exists and removes the 'disabled' attribute,
   * making the button clickable. It also manages the CSS classes by removing the disabled
   * classes and adding the enabled classes.
   *
   * @remarks
   * - The method will remove the 'disabled' attribute from the submit button, thus enabling it.
   * - It manages the CSS classes by removing the disabled classes and adding the enabled classes
   *   based on the configuration.
   *
   * @example
   * ```typescript
   * this.enableButton();
   * ```
   */
  enableButton() {
    if (this.submitButton && (this.submitButton.removeAttribute("disabled"), this._trEnabledClass)) {
      const e = this._trDisabledClass.split(" ");
      for (const r of e)
        this.submitButton.classList.remove(r);
      this._trEnabledClass = R(
        this.submitButton,
        "enabled-class",
        this._trEnabledClass
      );
      const t = this._trEnabledClass.split(" ");
      for (const r of t)
        this.submitButton.classList.add(r);
    }
  }
  /**
   * Retrieves all inputs from the form.
   *
   * @param strict If true, returns objects with only the name, value, and validation status of each input; otherwise, returns `TrivuleInput` instances.
   * @returns An array of all inputs based on the strict flag.
   */
  inputs(e = !0) {
    return e ? this.inputsToArray().map(this.getInputsMap) : this.inputsToArray();
  }
  /**
   * Retrieves the list of validated inputs.
   * @param strict - If true, returns objects with only name, value, and validation status of each input; otherwise, returns TrivuleInput instances.
   * @returns An array of validated inputs based on the strict flag.
   */
  validated(e = !0) {
    return e ? this.inputsToArray().filter((t) => t.passes()).map(this.getInputsMap) : this.inputsToArray().filter((t) => t.passes());
  }
  /**
   * Retrieves the list of failed inputs.
   * @param strict - If true, returns objects with only name, value, and validation status of each input; otherwise, returns TrivuleInput instances.
   * @returns An array of failed inputs based on the strict flag.
   */
  failed(e = !0) {
    return e ? this.inputsToArray().filter((t) => t.fails()).map(this.getInputsMap) : this.inputsToArray().filter((t) => t.fails());
  }
  /**
   * Converts a TrivuleInput instance into an ITrivuleInputObject format.
   * @param trivuleInput - The TrivuleInput instance to convert.
   * @returns An object representing the input data: name, value, and validation status.
   */
  getInputsMap(e) {
    return {
      name: e.getName(),
      value: e.getValue()
    };
  }
  /**
   * Validate each input and check if the form is valid.
   * @returns A boolean indicating whether the form is valid after validating each input.
   */
  isValid() {
    const e = [];
    return this.each((t) => {
      e.push(t.passes());
    }), e.every((t) => t);
  }
  /**
   * Validate each input and check if the form is valid.
   * @returns A boolean indicating whether the form is valid after validating each input.
   */
  passes() {
    return this.isValid();
  }
  /**
   * Handle validation before process submtion
   */
  _onSubmit() {
    const e = () => {
      const t = [];
      return this.each((r) => {
        r.emitOnValidate = !1, t.push(r.validate());
      }), t.every((r) => r) ? this._emitTrOnPassesEvent() : this._emitTrOnFailsEvent(), this._passed;
    };
    this.submitButton && this.submitButton.addEventListener("click", () => {
      e();
    }), this.on("submit", (t) => {
      e() || t.preventDefault();
    });
  }
  /**
   * Add new rule
   * @param ruleName
   * @param call
   * @param message
   */
  rule(e, t, r) {
    x.rule(e, t, r);
  }
  setConfig(e) {
    var i;
    let t = R(document.querySelector("html"), "lang") || ((i = document.querySelector("html")) == null ? void 0 : i.getAttribute("lang"));
    t = R(this.container, "lang", t);
    const r = R(this.container, "auto");
    if (r && (this.config.auto = je(r).passes), e && typeof e == "object" && (this.config = S(S({}, this.config), e), e.local)) {
      const l = e.local;
      l.lang && (t = l.lang);
    }
    I.LANG = t != null ? t : I.DEFAULT_LANG, this.parameter.setFeedbackSelector(this.config.feedbackSelector);
  }
  /**
   * Attach an event listener to the container element.
   *
   * @param e - The name of the event to listen to.
   * @param fn - The callback function to execute when the event occurs.
   * This function takes an event of type `Event` as a parameter and returns nothing.
   * Example: `(event) => { ... }`
   */
  on(e, t) {
    this.container ? this.container.addEventListener(e, t) : this._addEvents(e, t);
  }
  /**
   * Emits a custom event to the container element.
   *
   * @param e - The name of the custom event to emit.
   * @param data - The additional data to pass with the event.
   */
  emit(e, t) {
    var i;
    const r = new CustomEvent(e, { detail: t });
    (i = this.container) == null || i.dispatchEvent(r);
  }
  /**
   * Attaches an event listener to the "tr.form.fails" event.
   * This event is triggered when the form fails validation.
   * @param fn - The callback function to execute when the event occurs.
   * Example:
   * ```typescript
   * trivuleForm.onFails((trivuleForm) => {
   *   console.log("Form validation failed", trivuleForm);
   * });
   * ```
   */
  onFails(e) {
    this.on("tr.form.fails", (t) => {
      this.__call(e, t.detail);
    });
  }
  /**
   * Attaches an event listener to the "tr.form.passes" event.
   * This event is triggered when the form passes validation.
   * @param fn - The callback function to execute when the event occurs.
   * Example:
   * ```typescript
   * trivuleForm.onPasses((trivuleForm) => {
   *   console.log("Form validation passed", trivuleForm);
   * });
   * ```
   */
  onPasses(e) {
    this.on("tr.form.passes", (t) => {
      this.__call(e, t.detail);
    });
  }
  /**
   * Attaches an event listener to the "tr.form.validate" event.
   * This event is triggered when the form is validated.
   * @param fn - The callback function to execute when the event occurs.
   * Example:
   * ```typescript
   * trivuleForm.onValidate((trivuleForm) => {
   *   console.log("Form validation executed", trivuleForm);
   * });
   * ```
   */
  onValidate(e) {
    this.on("tr.form.validate", (t) => {
      this.__call(e, t.detail);
    });
  }
  /**
   * Attaches an event listener to the "tr.form.updated" event.
   * When this event is triggered, the method initializes and runs the TrivuleInputs for the form,
   * and then calls the provided function with the form instance as a parameter.
   * @param fn - The function to be called when the event occurs.
   * This function takes the form instance as a parameter and returns nothing.
   * Example:
   * ```typescript
   * trivuleForm.observeChanges((form) => {
   *   console.log("Form updated", form);
   * });
   * ```
   */
  observeChanges(e) {
    this.on("tr.form.updated", () => {
      this.destroyInputs(), this._initTrivuleInputs(), this.__call(e, this);
    });
  }
  /**
   * Triggers the validation process for the form.
   * This method emits the "tr.form.update" event, which initiates the validation of all form inputs.
   * Example:
   * ```typescript
   * trivuleForm.update ();
   * ```
   */
  update() {
    this.emit("tr.form.updated", this);
  }
  /**
   * Initializes TrivuleInputs for the form.
   */
  _initTrivuleInputs(e) {
    this.container && (e = e || Array.from(
      this.container.querySelectorAll("[data-tr-rules]")
    ), e.forEach((t) => this.add({ selector: t })));
  }
  /**
   * Invokes the provided function with the given parameters if it is a valid function.
   * @param fn - The function to be called.
   * @param params - The parameters to be passed to the function.
   */
  __call(e, ...t) {
    typeof e == "function" && e(...t);
  }
  /**
   * Destroys the TrivuleForm instance and performs any necessary cleanup.
   * This method removes event handlers, destroys TrivuleInput instances,
   * and clears the internal array of TrivuleInput instances.
   *
   * Example:
   * ```typescript
   * const formElement = document.getElementById("myForm") as HTMLFormElement;
   * const trivuleForm = new TrivuleForm(formElement);
   * trivuleForm.init();
   *
   * // Use the form...
   *
   * // When the form is no longer needed, destroy the TrivuleForm instance
   * trivuleForm.destroy();
   * ```
   */
  destroy() {
    this.container && (this.container.removeEventListener("submit", this._onSubmit), this.destroyInputs(), this._trivuleInputs = {}, this.emit("tr.form.destroy"));
  }
  /**
   * Emits the "tr.form.fails" event if the form fails validation.
   * This method is called when the form is considered invalid, meaning at least one input fails validation.
   */
  _emitTrOnFailsEvent() {
    this._emitOnFails && (this.emit("tr.form.fails", this), this._emitOnFails = !1, this._emitOnPasses = !0);
  }
  /**
   * Emits the "tr.form.passes" event if the form passes validation.
   * This method is called when the form is considered valid, meaning all inputs pass validation.
   */
  _emitTrOnPassesEvent() {
    this._emitOnPasses && (this.emit("tr.form.passes", this), this._emitOnPasses = !1, this._emitOnFails = !0);
  }
  /**
   * Validate form input using javascript code.
   * Use this method to configure or update the parameters for a particular input in the form.
   *
   * @param inputName - The name of the input for which to specify the parameters.
   * @param params - The additional parameters to set for the input.
   *
   * @example
   * const formElement = document.getElementById("myForm") as HTMLFormElement;
   * const trivuleForm = new TrivuleForm(formElement);
   * // Configure additional parameters for an input
   * trivuleForm.with("inputName", { rules: ['required','email']});
   * trivuleForm.init();
   *
   */
  with(e, t) {
    const r = this.get(e);
    r && (r.with(t), this._trivuleInputs[e] = r);
  }
  /**
   * Sets multiple input parameters for multiple inputs in the form.
   * @param inputs - An object containing input names as keys and their corresponding parameters as values.
   * Example:
   * ```typescript
   * const inputs = {
   *   input1: {  TrivuleInputParms for input1   },
   *   input2: {  TrivuleInputParms for input2   },
   *   // ...
   * };
   * trivuleForm.withMany(inputs);
   * ```
   */
  withMany(e) {
    for (const [t, r] of Object.entries(e))
      this.with(t, r);
  }
  /**
   *  The onInit(fn: TrivuleFormHandler) method registers a callback function to be executed
   *  when the Trivule form is initialized. It listens for the 'tr.form.init'
   * @param fn
   */
  onInit(e) {
    this.on("tr.form.init", (t) => {
      t instanceof CustomEvent && this.__call(e, t.detail);
    });
  }
  /**
   * When any input value is updated
   * @param fn
   */
  onUpdate(e) {
    this._onUpdateCallbacks.push(e);
  }
  destroyInputs() {
    this.each((e) => {
      e.destroy();
    });
  }
  /**
   * Iterate over each TrivuleInput in the form and execute a callback function.
   * @param call The callback function to be executed for each TrivuleInput.
   */
  each(e) {
    for (const t in this._trivuleInputs)
      Object.prototype.hasOwnProperty.call(this._trivuleInputs, t) && e(this._trivuleInputs[t]);
  }
  /**
   * Retrieve a TrivuleInput by name from the form.
   * @param name The name of the TrivuleInput to retrieve.
   * @returns The TrivuleInput corresponding to the name, or null if not found.
   */
  get(e) {
    var t;
    return (t = this._trivuleInputs[e]) != null ? t : null;
  }
  /**
   * Convert the TrivuleInput objects stored in _trivuleInputs to an array.
   * @returns An array containing all TrivuleInput objects.
   */
  inputsToArray() {
    return Object.keys(this._trivuleInputs).map(
      (e) => this._trivuleInputs[e]
    );
  }
  /**
   * Adds a TrivuleInput to the form and performs necessary updates.
   * @param trInput The TrivuleInput instance to add to the form.
   * @remarks This method handles the addition of a TrivuleInput to the form, including setting feedback elements, updating form state based on input validation, and triggering callbacks.
   */
  addTrivuleInput(e) {
    if (!e.getFeedbackElement()) {
      const i = this.parameter.getFeedbackSelector(e.getName());
      i && e.setFeedbackElement(
        V(i, this.container)
      );
    }
    const r = this._trivuleInputs[e.getName()];
    r && r.destroy(), this._trivuleInputs[e.getName()] = e, e.onFails(() => {
      this.valid = this.isValid();
    }), e.onPasses(() => {
      this.valid = this.isValid();
    }), e.onUpdate(() => {
      this._onUpdateCallbacks.forEach((i) => {
        this.__call(i, this);
      });
    }), this.valid = this.isValid();
  }
  /**
   * Validate an input with validation configurations.
   * @example
   * ```javascript
   *      const trInput = new TrivuleInput(formInstance.ageInput);
   *      trivuleForm.addTrivuleInput(trInput);
   *      trivuleForm
   *        .make([
   *          {
   *            rules: 'required|between:18,40',
   *            selector: 'age', // The input name
   *          },
   *          {
   *            rules: 'required|date',
   *            selector: formInstance.birthDayInput,
   *          },
   *        ])
   *        .make({
   *          message: {
   *            rules: 'required|only:string',
   *          },
   *        });
   * ```
   * @param input An object containing TrivuleInputParms or an array of TrivuleInputParms.
   * @throws Error - If the provided input argument is not a valid object.
   * @returns This TrivuleForm instance to allow chaining method calls.
   */
  make(e) {
    if (typeof e != "object" || e === void 0 || e === null)
      throw new Error("Invalid arguments passed to make method");
    return ie(e, this._bootInputs.bind(this)), this;
  }
  /**
   * Set the validity state of the TrivuleForm.
   * @param boolean The boolean value indicating the validity state to set.
   * @remarks This method updates the internal validity state of the TrivuleForm based on the provided boolean value.
   * It increments the internal counter for the number of times this method is called.
   * If the validity state changes to true (passed), it triggers the '_emitTrOnPassesEvent' event.
   * If the validity state changes to false (failed), it triggers the '_emitTrOnFailsEvent' event.
   * Finally, it emits a 'tr.form.validate' event with the updated TrivuleForm instance.
   */
  set valid(e) {
    this._passed !== e && (this._passed = e, this.__calledCount++, this._passed ? this._emitTrOnPassesEvent() : this._emitTrOnFailsEvent()), this.emit("tr.form.validate", this);
  }
  /**
   * Get the current validity state of the TrivuleForm.
   * @returns The boolean value representing the current validity state of the TrivuleForm.
   * @remarks This method retrieves and returns the current validity state of the TrivuleForm.
   */
  get valid() {
    return this._passed;
  }
  /**
   * Retrieve all inputs from the form.
   * @returns An array of all inputs in the form.
   */
  all() {
    return this.inputs();
  }
  /**
   * Retrieve the native element associated with the form.
   * @returns The container element of the form.
   */
  getNativeElement() {
    return this.container;
  }
  /**
   * Set an attribute to the native element of the form.
   * @param name The name of the attribute to set.
   * @param value The value of the attribute to set (string or number).
   * @returns The form instance for method chaining.
   */
  setAttrToNativeElement(e, t) {
    var r;
    return (r = this.container) == null || r.setAttribute(e, t.toString()), this;
  }
  /**
   * Add a CSS class to the native element of the form.
   * @param name The name of the CSS class to add.
   * @returns The form instance for method chaining.
   */
  setClassToNativeElement(e) {
    var t;
    return (t = this.container) == null || t.classList.add(e), this;
  }
  /**
   * Remove a CSS class from the native element of the form.
   * @param name The name of the CSS class to remove.
   * @returns The form instance for method chaining.
   */
  removeClassFromNativeElement(e) {
    var t;
    return (t = this.container) == null || t.classList.remove(e), this;
  }
  /**
   * Add a TrivuleInput based on the provided parameters.
   * @param params The parameters for creating the TrivuleInput.
   * @returns The result of creating the TrivuleInput.
   */
  add(e) {
    return this.make([e]);
  }
  /**
   * Enable real-time functionality for the form.
   * Sets the configuration to enable real-time updates.
   * Enables real-time functionality for each TrivuleInput in the form.
   * @returns The form instance with real-time functionality enabled.
   */
  enableRealTime() {
    return this.config.realTime = !0, this.each((e) => (e.enableRealTime(), this)), this;
  }
  /**
   * Disable real-time functionality for the form.
   * Sets the configuration to disable real-time updates.
   * Disables real-time functionality for each TrivuleInput in the form.
   * @returns The form instance with real-time functionality disabled.
   */
  disableRealTime() {
    return this.config.realTime = !1, this.each((e) => (e.disableRealTime(), this)), this;
  }
  /**
   * Check if real-time functionality is currently enabled for the form.
   * @returns A boolean indicating whether real-time functionality is enabled.
   */
  isRealTimeEnabled() {
    return this.config.realTime;
  }
  /**
   * Set the CSS class for valid inputs in the form.
   * @param cls The CSS class to apply to valid inputs.
   */
  setInputValidClass(e) {
    this.config.validClass = e, this.each((t) => {
      t.setValidClass(e);
    });
  }
  /**
   * Set the CSS class for invalid inputs in the form.
   * @param cls The CSS class to apply to invalid inputs.
   */
  setInputInvalidClass(e) {
    this.config.invalidClass = e, this.each((t) => {
      t.setInvalidClass(e);
    });
  }
  /**
   * Binds the form element or selector to the TrivuleForm instance once it is an HTMLElement.
   * Can be called without argument,if argument is not provided
   * it attempts to resolve the element using the element selector indicate on the config
   *
   * @param form - The HTML form element or a CSS selector string for the form to bind.
   * If an HTML element is provided, it directly binds the element. If a selector string is provided,
   * it attempts to resolve the element using `getHTMLElementBySelector`.
   *
   * @example
   * // Bind using an HTML element
   * const formElement = document.getElementById("myForm") as HTMLFormElement;
   * const trivuleForm = new TrivuleForm();
   * trivuleForm.bind(formElement);
   *
   * // Bind using a CSS selector
   * const trivuleForm = new TrivuleForm();
   * trivuleForm.bind("#myForm");
   */
  bind(e) {
    if (this._executeLifeCycleCallbacks("before.binding"), this._wasBound)
      return this;
    if (e) {
      const t = V(e);
      t instanceof HTMLElement && (this.container = t);
    }
    if (!(this.container instanceof HTMLElement) && this.config.element) {
      const t = V(this.config.element);
      t instanceof HTMLElement && (this.container = t);
    }
    this.container instanceof HTMLElement && (this._formValidator = new It(this.container), this._initTrivuleInputs(), this.init(), this._wasBound = !0, this._resolveInputValidation(), this._resolveEventListeners(), this._executeLifeCycleCallbacks("after.binding"));
  }
  bindElement(e) {
    return this.bind(e);
  }
  _addEvents(e, t) {
    this._eventCallbacks[e] ? this._eventCallbacks[e].push(t) : this._eventCallbacks[e] = [t];
  }
  /**
   * Attaches event listeners to the container element.
   *
   * This method iterates over the `_eventCallbacks` object,
   * where keys represent event names and *values are arrays of callback functions.
   *
   */
  _resolveEventListeners() {
    this.container instanceof HTMLElement && ie(this._eventCallbacks, (e, t) => {
      e.forEach((r) => {
        var i;
        (i = this.container) == null || i.addEventListener(t, r);
      });
    });
  }
  _resolveInputValidation() {
    ie(this._registerInputs, this._bootInputs.bind(this));
  }
  _bootInputs(e, t) {
    var i, l, o, y, _, m;
    if (!this.container)
      return this._registerInputs[t] = e, this;
    let r = e.selector;
    if (e.selector && (r = (i = V(e.selector, this.container)) != null ? i : r), typeof r == "string") {
      const T = this.parameter.getInputSelector(r);
      r = V(T, this.container);
    }
    if (r)
      e.selector = void 0;
    else {
      const T = p(t).passes ? void 0 : t;
      if (T) {
        const v = this.parameter.getInputSelector(T);
        r = (l = V(v, this.container)) != null ? l : void 0;
      }
    }
    return typeof e.realTime != "boolean" && (e.realTime = this.config.realTime), e.validClass = (o = e.validClass) != null ? o : this.config.validClass, e.invalidClass = (y = e.invalidClass) != null ? y : this.config.invalidClass, e.autoValidate = (_ = e.autoValidate) != null ? _ : this.config.auto, e.feedbackElement = (m = e.feedbackElement) != null ? m : this.config.feedbackSelector, e.selector = r, this.addTrivuleInput(
      new we(r, e, this.parameter)
    ), e;
  }
  /**
   * Registers a callback to be executed before the form element is bound.
   * @param fn - The callback function to be executed before binding.
   * @returns The instance of the form to allow method chaining.
   * @example
   * const form = new TrivuleForm();
   * form.beforeBinding((form) => {
   *   console.log('Form binding is about to start.');
   * });
   */
  beforeBinding(e) {
    return this._addLifeCycleCallback("before.binding", e), this;
  }
  /**
   * Adds a lifecycle callback to the specified lifecycle event.
   * @param name - The name of the lifecycle event.
   * @param call - The callback function to be added.
   * @private
   */
  _addLifeCycleCallback(e, t) {
    this._lifeCycleCallbacks[e] ? this._lifeCycleCallbacks[e].push(t) : this._lifeCycleCallbacks[e] = [t];
  }
  /**
   * Executes all the callbacks associated with the specified lifecycle event.
   * @param name - The name of the lifecycle event.
   * @private
   */
  _executeLifeCycleCallbacks(e) {
    const t = this._lifeCycleCallbacks[e];
    t && ie(t, (r) => {
      this.__call(r, this);
    });
  }
  /**
   * Registers a callback to be executed after the form element has been bound.
   * @param fn - The callback function to be executed after binding.
   * @returns The instance of the form to allow method chaining.
   * @example
   * const form = new TrivuleForm();
   * form.afterBinding((form) => {
   *   console.log('Form has been bound.');
   * });
   */
  afterBinding(e) {
    return this._addLifeCycleCallback("after.binding", e), this;
  }
}
class Ht {
  constructor() {
    this._trForms = [], this.config = Le;
  }
  /**
   * Select all the form in the document and apply TrivuleForm for them
   * @param config
   */
  init(e) {
    this.setConfig(e), document.querySelectorAll("form").forEach((t) => {
      const r = new he(t, this.config);
      r.init(), this._trForms.push(r);
    });
  }
  /**
   * Adds a new validation rule to Trivule's rule bag.
   * @param ruleName The name of the rule.
   * @param call The rule callback function.
   * @param message Optional error message for the rule.
   * Example:
   * ```
   * trivule.rule('customRule', (value) => value === 'foo', 'Value must be "foo"');
   * ```
   */
  rule(e, t, r) {
    x.rule(e, t, r);
  }
  forms() {
    return this._trForms;
  }
  /**
   * Set default configuration
   * @param config
   */
  setConfig(e) {
    this.config = Le, e && typeof e == "object" && (this.config = S(S({}, this.config), e));
  }
  static Rule(e, t, r) {
    x.rule(e, t, r);
  }
  form(e, t) {
    const r = new he(e, t);
    return r.init(), r;
  }
  input(e) {
    return new we(e);
  }
}
class X {
  constructor(e) {
    this.messages = I.getMessages(e != null ? e : I.getLocal());
  }
  /**
  
  * Generates an array of messages for the given rules.
  * Uses the predefined messages for each rule if available,
  * otherwise, uses a default message of "The input value is not valid".
  * @param rules - An array of rules for which to generate messages.
  * @returns An array of messages corresponding to the provided rules.
  */
  getRulesMessages(e) {
    const t = [];
    for (const r of e)
      this.messages[r] ? t.push(this.messages[r]) : t.push("The input value is not valid");
    return t;
  }
  static parseMessage(e, t, r, i) {
    var o;
    const l = X._createParamObject(
      k((o = i == null ? void 0 : i.toString()) != null ? o : "")
    );
    return l.field = e, r = X._replace(r, l), r;
  }
  /**
   *
   * @param messages
   * @returns
   */
  setMessages(e) {
    return this.messages = S(S({}, this.messages), e), this;
  }
  static _replace(e, t) {
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        const i = t[r];
        i && (e = e.replace(
          `:${r}`,
          i.toString()
        ));
      }
    return delete t.field, e.replace(/\.\.\.arg/, Object.values(t).join(", "));
  }
  static _createParamObject(e) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r], l = `arg${r}`;
      t[l] = i;
    }
    return t;
  }
}
class Wt {
  constructor() {
    this._inputType = "text", this._value = void 0, this._ruleExecuted = [], this._failOnfirst = !0, this._attr = "", this._trmessages = {};
  }
  /**
   * This method performs the validation process. It iterates over the _rules array and executes each rule on the
   * _value. If _failOnfirst is set to true, the method stops executing rules after the first failure. The method
   * updates the _ruleExecuted array with the result of each rule execution.
   * It returns a boolean value indicating whether the validation passed (true) or not (false)
   * @example
   * const tralidation = new TRalidation(param)
   * tralidation.validate()
   */
  validate() {
    var r, i;
    const e = this._rules.all();
    if (!Array.isArray(e))
      throw new Error("The rule provided must be an array of Rule");
    let t = this._inputType;
    for (const l of e) {
      const o = l.name, y = l.params, _ = l.validate, m = l.message;
      let T = o;
      const v = this._makeRuleExcutedInstance(T, o);
      if (v.params = y, !_ || typeof _ != "function")
        throw new Error(`The rule ${o} is not defined`);
      const O = _(this._value, y, t);
      if (v.passed = O.passes, this._value = O.value, t = (r = O.type) != null ? r : t, T = (i = O.alias) != null ? i : o, v.valueTested = this._value, v.run = !0, this._addRuleExecuted(v), this._failOnfirst) {
        if (!v.passed) {
          this._parseRuleMessage(v, T, m);
          break;
        }
      } else
        v.passed ? v.message = null : this._parseRuleMessage(v, T, m);
    }
    return !this.hasErrors();
  }
  /**
   * Get rule/message error
   * @returns
   */
  getErrors() {
    var t;
    const e = {};
    for (const r of this._ruleExecuted)
      r.passed || (e[r.orignalName] = (t = r.message) != null ? t : "");
    return e;
  }
  /**
   * Check if validation failed
   * @returns
   */
  hasErrors() {
    return this._ruleExecuted.some((e) => !e.passed);
  }
  /**
   * This method is an alias for hasErrors(). It returns true if there are no errors, false otherwise
   */
  passes() {
    return !this.hasErrors();
  }
  /**
   * Set rules to run
   * @param rules
   */
  setRules(e) {
    this._rules = e;
  }
  /**
   * Get rules to run
   * @returns
   */
  getRules() {
    return this._rules;
  }
  /**
   * Create an instance of RuleExcuted
   * @param r
   * @returns
   */
  _makeRuleExcutedInstance(e, t) {
    const r = this._ruleExecuted.find((i) => i.isNamed(e));
    return r != null ? r : new Pt(e, t);
  }
  _addRuleExecuted(e) {
    this._ruleExecuted.includes(e) || this._ruleExecuted.push(e);
  }
  _parseRuleMessage(e, t, r) {
    const i = I.getRuleMessage(e.orignalName);
    r && r !== i ? this._trmessages[e.ruleName] = r : this._trmessages[e.ruleName] = I.getRuleMessage(
      t != null ? t : e.ruleName
    );
    const l = new X().setMessages(
      this._trmessages
    );
    return r = X.parseMessage(
      this._attr,
      e.ruleName,
      l.getRulesMessages([e.ruleName])[0],
      e.params
    ), e.message = r, e;
  }
  /**
   * Set the value and validate it automatically
   */
  set value(e) {
    this._value = e, this.validate();
  }
  set failsOnFirst(e) {
    this._failOnfirst = e;
  }
  get value() {
    return this._value;
  }
  set attribute(e) {
    this._attr = e;
  }
  get attribute() {
    return this._attr;
  }
  /**
   * Set validation parameters
   * @param param
   */
  set(e, t, r) {
    this._failOnfirst = t, this._rules = e, this._inputType = r != null ? r : this._inputType;
  }
  getRuleExecuted() {
    return this._ruleExecuted;
  }
  set rules(e) {
    this.setRules(e);
  }
}
class Pt {
  constructor(e, t) {
    this.passed = !1, this.message = null, this.run = !1, this.ruleName = e, this.orignalName = t;
  }
  /**
   * Returns true if for the given value, the validation was run and passed
   * @param value
   */
  wasRunWith(e) {
    return this.valueTested === e && this.run;
  }
  isNamed(e) {
    return this.ruleName === e;
  }
}
var Re, Ie, xe, Oe, Fe, Be, De;
typeof window != "undefined" && (window.TrivuleInput = (Re = window.TrivuleInput) != null ? Re : we, window.TrivuleForm = (Ie = window.TrivuleForm) != null ? Ie : he, window.Trivule = (xe = window.Trivule) != null ? xe : Ht, window.TrBag = (Oe = window.TrBag) != null ? Oe : x, window.TrLocal = (Fe = window.TrLocal) != null ? Fe : I, window.TrRule = (Be = window.TrRule) != null ? Be : q, window.TrMessage = (De = window.TrMessage) != null ? De : Ze);
export {
  x as TrBag,
  Le as TrConfig,
  I as TrLocal,
  Ze as TrMessage,
  q as TrRule,
  Ht as Trivule,
  he as TrivuleForm,
  we as TrivuleInput
};
