import React from "react";
import { shallow } from "enzyme";
import Home from "./Home"
import "../setupTests"
describe("shallow enzyme checking our Component",()=>{
    it("our first component",()=>{
    let Wrapper=shallow(<Home/>);
    // console.log(Wrapper.debug())
    expect(Wrapper.exists("#h1")).toEqual(true)

})
})