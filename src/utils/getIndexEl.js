export const getIndexEl = (scrollY, pos, sumHeightEl = []) => {
    // const position = pos > 0 ? pos : 1
    // const el = document.querySelector(`.video_${position}`)
    // const height = el.clientHeight + 2
    // localStorage.setItem('heightEl', height)

    // let index = Math.floor(scrollY / height)
    // if (index < 0) {
    //     index = 0
    // }
    //return index + 1
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
