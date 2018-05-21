

export function makeDateFromISOString(isoDate = (new Date()).toISOString()) {
    const date = isoDate.split("T")[0];
    const newDate = (date + 'T14:00:00.000Z')
    return new Date(newDate);
}