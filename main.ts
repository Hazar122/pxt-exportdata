// Define a custom block
// @param text - the string to convert to JSON
// @param returns - the JSON object
// @category Custom
function stringToJson (text: string) {
    return JSON.parse(text)
}
