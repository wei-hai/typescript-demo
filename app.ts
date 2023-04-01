var message: string = "hello world"
console.log(message)


class Site {
    name(): void {
        console.log("site")
    }
}

var obj = new Site()
obj.name()


let var1: number = 123
let str1: string = "abc"
let flag: boolean = true
let arr: number[] = [1,2,3]
let arr1: Array<number> = [1,2]
let arr2: Array<string> = ["1", "2", "3"]

enum Color {r, g, b}
let c: Color = Color.b


function hello(): void {
    alert("hello")
}


class Numbers {
    val = 13
    static sval = 1

    storeNum(): void {
        var local_var = 14
    }
}

var a: Number = new Number()
