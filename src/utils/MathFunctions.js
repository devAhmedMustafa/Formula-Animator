// Sine Functions

export function sin(x){
    return Math.sin(x);
}

export function asin(x){
    return Math.asin(x);
}

export function csc(x){
    return (1/(Math.sin(x)));
}

export function acsc(x){
    return Math.asin(1/x);
}

// Cosine Function

export function cos(x){
    return Math.cos(x);
}

export function acos(x){
    return Math.acos(x);
}

export function sec(x){
    return (1/Math.cos(x));
}

export function asec(x){
    return Math.acos(1/x);
}

// Tan Function

export function tan(x) {
    return Math.tan(x);
}

export function atan(x){
    return Math.atan(x);
}

export function cot(x){
    return 1/Math.tan(x);
}

export function acot(x){
    if (x>0) return Math.atan(1/x);
    else return 180 + Math.atan(1/x);
}

// Hyperbolic Functions

export function sinh(x){
    return Math.sinh(x);
}

export function csch(x){
    return 1/Math.sinh(x);
}

export function cosh(x){
    return Math.cosh(x);
}

export function sech(x){
    return 1/Math.cosh(x);
}

export function tanh(x){
    return Math.tanh(x);
}

export function coth(x){
    return 1/Math.tanh(x);
}