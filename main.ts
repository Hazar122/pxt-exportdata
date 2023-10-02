//% color=190 weight=100 advanced=true icon="\uf0ae"
//% groups=['JSON', 'others']
namespace ExportDataAsJson {
    
    export interface KeyValue {
        [key: string]: any;
    }

    //% block="create JSON object with key $key and value $value"
    //% group="JSON"
    export function createJsonObject1(key: string, value: any): KeyValue {
        return { key, value };
    }
    //% block="convert JSON object to text $json"
    //% group="JSON"
    export function jsonToText(json: KeyValue[]): string {
        const jsonObject2: { [key: string]: any } = {};

        for (const kvp of json) {
            jsonObject2[kvp.key] = kvp.value;
        }

        return JSON.stringify(jsonObject2);
    }

    //% block
    //% group="JSON"
    export class KeyValuePair {
        key: string;
        value: any;

        constructor(key: string, value: any) {
            this.key = key;
            this.value = value;
        }
    }
}
