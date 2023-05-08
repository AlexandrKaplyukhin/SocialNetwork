export const requiredField = value => {
    if(value) return undefined;

    return "field id required"
}

export const maxLegthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined

}
