 const increment = (nr) => {
    return {
        type : 'INCREMENT',
        payload : nr
    }
}

 const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}

export { increment, decrement}