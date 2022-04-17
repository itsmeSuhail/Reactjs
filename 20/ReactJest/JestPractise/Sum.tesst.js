import {sum,multiply,subtract,divide} from "./Sum"
describe("checking sum file",()=>{
    it("first add up",()=>{
        expect(sum(5,10)).toBe(15)
    })
    it("second add up",()=>{
        expect(sum(51,10)).toBe(61)
    })
    it("third add up",()=>{
        expect(sum(0,10)).toBe(10)
    })
    it("fourth add up",()=>{
        expect(sum(115,10)).toBe(125)
    })
    // subtraction
    it("first subscription up",()=>{
        expect(subtract(5,10)).toBe(-5)
    })
    it("second subscription up",()=>{
        expect(subtract(51,10)).toBe(41)
    })
    it("third subscription up",()=>{
        expect(subtract(0,10)).not.toBe(-120)
    })
    it("fourth subscription up",()=>{
        expect(subtract(115,10)).toBe(105)
    })
    // multiply
    it("first multiply up",()=>{
        expect(multiply(8,10)).toBe(80)
    })
    it("second multiply up",()=>{
        expect(multiply(5,1)).toBe(5)
    })
    it("third multiply up",()=>{
        expect(multiply(0,10)).toBe(0)
    })
    it("fourth multiply up",()=>{
        expect(multiply(5,10)).toBe(50)
    })
    // divide
    it("first divide up",()=>{
        expect(divide(5,1)).toBe(5)
    })
    it("second divide up",()=>{
        expect(divide(50,10)).toBe(5)
    })
    it("third divide up",()=>{
        expect(divide(0,10)).toBe(0)
    })
    it("fourth divide up",()=>{
        expect(divide(25,5)).toBe(5)
    })
})
// test("all test cases",()=>{
//     const  data=10;
//     expect(data).toBe(10)
// })
// it("my second test",()=>{
//     const data="system mEga";
//     expect(data).toBe("system mEga")
// })