export const isOutdated = timestamp => {
    const oneday = 60 * 60 * 24 * 1000 // milisegundos en 1 día
    const now = Date.now();
    return now - timestamp > oneday;
}