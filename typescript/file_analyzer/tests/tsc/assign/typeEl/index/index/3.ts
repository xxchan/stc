
interface A {
    [s: string]: number
}
interface B {
    [a: number]: number
}


declare var a: A
declare var b: B


a = b
b = a

export { }