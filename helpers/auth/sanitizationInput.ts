type AnyObject = { [key: string]: any };

export function sanitizeObject(obj: AnyObject): AnyObject {
    const sanitizedObj: AnyObject = {};
    console.log(obj);


    for (const key in obj) {
        if (typeof obj[key] === "string") {
            let sanitized = obj[key];

            // Elimina etiquetas HTML
            sanitized = sanitized.replace(/<[^>]*>?/gm, "");

            // Escapa comillas simples y dobles
            sanitized = sanitized.replace(/'/g, "''").replace(/"/g, '""');

            // Elimina caracteres especiales que podrían usarse en SQL
            sanitized = sanitized.replace(/;|--|\|/g, "");

            sanitizedObj[key] = sanitized;
        } else {
            // Si no es string, se copia tal cual
            sanitizedObj[key] = obj[key];
        }
    }

    return sanitizedObj;
}