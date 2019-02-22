function DatatypeCheck(value) {
    if (typeof value === 'string' || value instanceof String) {
        console.log('Type : String')
        console.log('value: ' + value)
    }
    else if (typeof value === 'number' && isFinite(value)) {
        console.log('Type : Number')
        console.log('value: ' + value)


    }
    else if (value && typeof value === 'object' && value.constructor === Array) {
        console.log("array");
        value.map((x, i) => {
            console.log(x);
        });

    }
    else if (typeof value === 'function') {
        console.log('Type : Function')
        console.log('value: ' + value)
    }
    else if (value && typeof value === 'object' && value.constructor === Object) {
        console.log('Type : Object')
        console.log('value: ' + value)
    }
    else if (typeof value === 'boolean') {
        console.log('Type : Boolean')
        console.log('value: ' + value)

    }
    else if (value === null) {
        console.log('Type : NULL')
        console.log('value: ' + value)
    }

    else if (typeof value === 'undefined') {
        console.log('Type : UNDEFINED')
        console.log('value: ' + value)
    }
    else if (typeof (type) === 'object' && typeof (type[0]) === 'object') {
        console.log("Array of object");
        value.map((x, i) => {
            console.log(x);
        });
    }
    else if (isNaN(value)) {
        console.log('Type : Not a Number')
        console.log('value: ' + value)
    }

}
DatatypeCheck(10000)
DatatypeCheck("Sup")
DatatypeCheck(null)
var a = [1, 2, 3]
DatatypeCheck(a)
var b = [{ 'a': 1 }, { 'b': 2 }]
DatatypeCheck(b)
DatatypeCheck({ 'a': 1 })
DatatypeCheck()
DatatypeCheck(false)

