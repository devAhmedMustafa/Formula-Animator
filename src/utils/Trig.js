
export const Trig = {
    sin: function sin(x){
        return Math.sin(x);
    },
    cos: function cos(x){
        return Math.cos(x);
    },
    tan: function tan(x) {
        return Math.tan(x);
    },
    sec: function sec(x){
        return (1/Math.cos(x));
    },
    csc: function csc(x){
        return (1/(Math.sin(x)));
    },
    cot: function cot(x){
        return 1/Math.tan(x);
    },
    asin: function asin(x){
        return Math.asin(x);
    },
    acos: function acos(x){
        return Math.acos(x);
    },
    atan: function atan(x){
        return Math.atan(x);
    },
    acsc: function acsc(x){
        return Math.asin(1/x);
    },
    asec: function asec(x){
        return Math.acos(1/x);
    },
    acot: function acot(x){
        if (x>0) return Math.atan(1/x);
        else return 180 + Math.atan(1/x);
    }
}