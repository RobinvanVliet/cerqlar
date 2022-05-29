/* Util to remove draft entries from an array of contentful entries */

const removeDraftEntries = (entriesArray:Array<any>) => entriesArray.filter(item => item.fields)

export default removeDraftEntries
