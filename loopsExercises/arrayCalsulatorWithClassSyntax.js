
class ArrayCalculator {
    constructor(innerArray = [5, -5, 5, 5, 5, 5]) {
        this.innerArray = innerArray
    }

    getArray() {
        return this.innerArray
    }

    addElement(newElement) {
        this.innerArray.push(newElement)
    }

    addElements(newElements) {
        this.innerArray.push(...newElements)

    }
    substractArray(newArray) {
        let biggestArrayLength = newArray.length
        let element1;
        let element2;
        let substractedResullt;
        const substractArray = []

        if (biggestArrayLength < this.innerArray.length) {
            biggestArrayLength = this.innerArray.length
        }

        for (let i = 0; i < biggestArrayLength; i++) {
            element1 = newArray[i]
            element2 = this.innerArray[i]

            if (element1 === undefined || element2 === undefined) {
                substractArray.push(0);
                continue;
            }

            substractedResullt = element1 - element2
            substractArray.push(substractedResullt)
        }
        return substractArray
    }

}

const newArray = [-10, 10, 10, 10]

let test = new ArrayCalculator
test.addElement(4)
test.addElements(newArray)
console.log(`SubstactedArray:  ${test.substractArray(newArray)}`);
console.log(`innerArray:  ${test.getArray()}`);