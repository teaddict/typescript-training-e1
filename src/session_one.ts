/**
 * 1: Return the sum of two numbers
 */

export function sum(a: number, b: number): number {
    return a + b;
}

/**
 *  Calculate the length of a Vec2
 */

export interface Vec2 {
    x: number
    y: number
}

export function lengthVec2(v: Vec2): number {
    const xLen: number = v.x * v.x;
    const yLen: number = v.y * v.y;
    return Math.sqrt(xLen + yLen)
}

/**
 * Calculate the length of a Vec3
 */

export interface Vec3 extends Vec2 {
    z: number
}

export function lengthVec3(v: Vec3): number {
    const xLen: number = Math.pow(v.x, 2);
    const yLen: number = Math.pow(v.y, 2);
    const zLen: number = Math.pow(v.z, 2)
    return Math.sqrt(xLen + yLen + zLen)
}

/**
 * Calculate the nth Fibonacci number
 */

export function fibo(n: number): number {
    if(n <= 1) {
        return n;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}

/**
 * Return the longest string of three
 */

export function longestOfThree(a: string, b: string, c: string): string {
    if(a.length >= b.length && a.length >= c.length) {
        return a;
    } else if( b.length >= a.length && b.length >= c.length) {
        return b;
    } else {
        return c;
    }
}

/**
 * Return the longest string of many
 */

export function longestOfMany(...strings: string[]): string {
    let temp: string = strings[0]
    for(let entry of strings) {
        if(entry.length >= temp.length) {
            temp = entry;
        }
    }
    return temp;
}

/**
 * Check if a value is a number
 */
export function isNumber(value: any): value is number {
    return (typeof value == "number");
}

export interface User {
    name: string
    nick?: string
}

/**
 * Get users nick name, or return a name if one doesn't exist
 */
export function getUserHandle(user: User): string {
    return user.nick ? user.nick : user.name
}

export interface Country {
    name: string
    code: string
    population: number
}

/**
 * Test if a given object is a Country
 */
export function isCountry(obj: unknown): obj is Country {
    const country = obj as Country;
    return ( country &&
        typeof country.name === 'string' &&
        typeof country.code === 'string' &&
        typeof country.population === 'number') 
}

/**
 * Return an array only with elements that are greater than the param n
 */

export function greaterThanNumber(
    input: Array<number>,
    n: number
): Array<number> {
    let greaterNumbers: number[] = [];
    for(let num of input) {
        if(num > n) {
            greaterNumbers.push(num);
        }
    };
    return greaterNumbers;
}

/**
 * Return the power of n for each value in the input array
 */

export function toPowerOf(input: Array<number>, n: number): Array<number> {
    return input.map(num => Math.pow(num, n))
}
