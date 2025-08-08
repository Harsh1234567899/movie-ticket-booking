const timeFormat = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const minutesRimainder = minutes % 60
    return `${hours}h ${minutesRimainder}m`
}
export default timeFormat