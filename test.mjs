
import { JSDOM } from "jsdom"

import test from "node:test"
import assert from "node:assert"

import { load } from "./helper.mjs"

test("convert lowercase to uppercase", async () => {

    let { document } = await load("public/index.html")

    let input = document.querySelector("input")
    input.value = "hello world" 

    let button = document.querySelector("button")
    button.click()

    let output = document.querySelector("output")
    
    assert.equal(output.textContent, "HELLO WORLD")
})

