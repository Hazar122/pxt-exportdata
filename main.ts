namespace JSON {
    //% block
    export function stringToJson(text: string) {
        return JSON.parse(text)
    }
    //% block
    export function intToString(num: number): string {
        return num.toString();
    }
    //% block
    export function jsonToText(json: any): string {
        return JSON.stringify(json);
    }

}
