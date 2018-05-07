

export function makeDateFromISOString(isoDate = (new Date()).toISOString()) {
    const date = isoDate.split("T")[0];
    const [ year, month, day ] = date.split("-");
    return new Date(year, month - 1, day).toLocaleDateString();
}