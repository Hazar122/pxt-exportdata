//% color=190 weight=100 advanced=true icon="\uf0ae"
//% groups=['JSON', 'others']
namespace ExportDataAsJson {

    //% block
    //% group="JSON"
    export function jsonToText(json: any): string {
        return JSON.stringify(json);
    }



}
