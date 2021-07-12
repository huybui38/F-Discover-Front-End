export const getIndexEl = (scrollY, pos, sumHeightEl = []) => {
    const numbers = sumHeightEl.length
    let result = -1
    for (let i = 0; i < numbers; i++) {
        if (scrollY <= sumHeightEl[i]) {
            result = i
            break
        }
    }
    if (result === -1) result = numbers
    return result
}
