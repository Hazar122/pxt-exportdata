//% color=190 weight=100 advanced=true icon="\uf0ae"
//% groups=['JSON', 'others']
namespace ExportDataAsJson {
    class KeyValuePair {
        key: string;
        value: any;

        constructor(key: string, value: any) {
            this.key = key;
            this.value = value;
        }
    }
    
    //% block="New KVP with | Key: $key and | Value: $value"
    //% group="JSON"
    export function keyValuePair(key: string, value: any): KeyValuePair {
        return new KeyValuePair(key, value);
    }

    // Function to convert a list of KeyValuePair objects into JSON
    //% block="Convert kvp List to JSON using | List: $list"
    //% group="JSON"
    export function kvpListToJson(list: KeyValuePair[]): any {
        let jsonObj: any = {};
        for (let kvp of list) {
            jsonObj[kvp.key] = kvp.value;
        }
        return jsonObj;
    }

    //% block="Convert JSON to Text | JSON: $jsonObj"
    //% group="JSON"
    export function jsonToText(jsonObj: any): string {
        return JSON.stringify(jsonObj);
    }
}
