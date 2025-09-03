/*

        @param obj recibe un objeto en este caso los valores de los inputs de
        los form

*/


type AnyObject = { [key: string]: any };

export function isEmptyInput(obj: AnyObject): Boolean {

    for (const key in obj) {
        if (obj[key] === undefined || obj[key] === null || (typeof obj[key] === "string" && obj[key].trim() === "")) {

            return true; // si alguna propiedad está vacía
        }
    }

    return false; // todas tienen información
}