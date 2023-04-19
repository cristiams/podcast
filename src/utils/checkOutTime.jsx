export const isOutdated = timestamp => {
    const oneday = 60 * 60 * 24 * 1000 // milisegundos en 1 día
    const now = Date.now();
    return now - timestamp > oneday;
}

export const durationFormatter = duration => {
    if (duration) {
        if (duration.includes(':')) {
            const arr_duration = duration.split(':')
            return `${arr_duration[0]}:${arr_duration[1]}`
        }
        else {
            const seconds = parseInt(duration)
            const durationFormatted = new Date(seconds*1000).toISOString()
            if (parseInt(durationFormatted.slice(11, 13)) > 0) {
                return durationFormatted.slice(11, 16)
            }
            else {
                return durationFormatted.slice(14, 19)
            }
            // const s = seconds % 60;
            // const h = Math.floor(seconds / 3600)
            // const min = Math.floor((seconds % 3600) / 60)

            
        }
    } else {
        return ''
    }
}
