import fruits from "./foods";

const choice = () => {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

const remove = (item) => {
    let index = fruits.indexOf(item)
    if (index < 0) {
        return undefined
    } else {
        fruits.splice(index, 1);
        return true
    }
}

export { choice, remove };