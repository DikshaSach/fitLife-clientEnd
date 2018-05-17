

export function makeDateFromISOString(isoDate = (new Date()).toISOString()) {
    const date = isoDate.split("T")[0];
    const newDate = (date + 'T14:00:00.000Z')
    const [ year, month, day ] = date
    return new Date(newDate);
}