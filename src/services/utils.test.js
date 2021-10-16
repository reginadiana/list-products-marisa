const rewire = require("rewire")
const utils = rewire("./utils")
const searchedTerm = utils.__get__("searchedTerm")
// @ponicode
describe("utils.removeSpecialCaracters", () => {
    test("0", () => {
        let callFunction = () => {
            utils.removeSpecialCaracters("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.removeSpecialCaracters("This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.removeSpecialCaracters("\"#'{7855663]}ééàà")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.removeSpecialCaracters("p")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.removeSpecialCaracters("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.removeSpecialCaracters(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.padronizeString", () => {
    test("0", () => {
        let callFunction = () => {
            utils.padronizeString(123456789)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.padronizeString("p")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.padronizeString("THIS IS A STRING1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.padronizeString("this is a string1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.padronizeString("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.padronizeString(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.removeBlankSpaces", () => {
    test("0", () => {
        let callFunction = () => {
            utils.removeBlankSpaces("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.removeBlankSpaces("\"#'{7855663]}ééàà")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.removeBlankSpaces(123456789)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.removeBlankSpaces("This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.removeBlankSpaces("foo bar   ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.removeBlankSpaces(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.filterBySearch", () => {
    test("0", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Mouse"]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterBySearch(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = ["Ball", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Bacon"]
        let object3 = ["Mouse", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Shoes"]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterBySearch(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterBySearch(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Shoes", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterBySearch(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Shoes", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterBySearch(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.filterBySearch(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.filterByStocked", () => {
    test("0", () => {
        let object = ["Ball", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = ["Shoes", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, ["Bacon", "Ball", "Mouse"]]
        let callFunction = () => {
            utils.filterByStocked(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Hat"]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterByStocked(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Bacon"]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterByStocked(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = ["Hat", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Mouse", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterByStocked(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Shoes"]
        let object2 = ["Bacon", "Bacon", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            utils.filterByStocked(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.filterByStocked(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("searchedTerm", () => {
    test("0", () => {
        let callFunction = () => {
            searchedTerm("UPDATE Projects SET pname = %s WHERE pid = %s", { some: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            searchedTerm("UNLOCK TABLES;", { some: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            searchedTerm("UNLOCK TABLES;", { some: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            searchedTerm(" ", { some: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            searchedTerm("DELETE FROM Projects WHERE pid = %s", { some: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            searchedTerm(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.namesOfProducts", () => {
    test("0", () => {
        let param1 = [["Awesome Frozen Computer", "Handmade Fresh Chicken", "Awesome Frozen Computer"], ["Small Cotton Chips", "Handmade Fresh Chicken", "Small Cotton Chips"], ["Refined Frozen Pizza", "Handmade Fresh Chicken", "Awesome Frozen Computer"]]
        let param2 = [["Edmond", "Edmond", "Pierre Edouard"], ["Jean-Philippe", "Michael", "Edmond"], ["Michael", "George", "George"]]
        let callFunction = () => {
            utils.namesOfProducts(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Awesome Frozen Computer", "Handmade Fresh Chicken", "Awesome Frozen Computer"], ["Handmade Fresh Chicken", "Refined Frozen Pizza", "Awesome Frozen Computer"], ["Small Cotton Chips", "Awesome Frozen Computer", "Awesome Frozen Computer"]]
        let param2 = [["Jean-Philippe", "Edmond", "Michael"], ["Michael", "Edmond", "Jean-Philippe"], ["Pierre Edouard", "Edmond", "Michael"]]
        let callFunction = () => {
            utils.namesOfProducts(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Awesome Frozen Computer", "Awesome Frozen Computer", "Small Cotton Chips"], ["Awesome Frozen Computer", "Small Cotton Chips", "Refined Frozen Pizza"], ["Refined Frozen Pizza", "Small Cotton Chips", "Handmade Fresh Chicken"]]
        let param2 = [["George", "George", "Jean-Philippe"], ["George", "Jean-Philippe", "George"], ["Michael", "Jean-Philippe", "Jean-Philippe"]]
        let callFunction = () => {
            utils.namesOfProducts(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Awesome Frozen Computer", "Handmade Fresh Chicken", "Refined Frozen Pizza"], ["Awesome Frozen Computer", "Awesome Frozen Computer", "Refined Frozen Pizza"], ["Refined Frozen Pizza", "Awesome Frozen Computer", "Handmade Fresh Chicken"]]
        let param2 = [["Edmond", "Edmond", "Jean-Philippe"], ["Edmond", "Jean-Philippe", "Jean-Philippe"], ["Jean-Philippe", "George", "Michael"]]
        let callFunction = () => {
            utils.namesOfProducts(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Refined Frozen Pizza", "Awesome Frozen Computer", "Small Cotton Chips"], ["Handmade Fresh Chicken", "Awesome Frozen Computer", "Ergonomic Rubber Bike"], ["Refined Frozen Pizza", "Small Cotton Chips", "Handmade Fresh Chicken"]]
        let param2 = [["Michael", "George", "Anas"], ["Anas", "Edmond", "Edmond"], ["George", "Pierre Edouard", "Edmond"]]
        let callFunction = () => {
            utils.namesOfProducts(param1, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.namesOfProducts(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
