const DbConnection = require('../db/database');

const sortByName = async () => {
    let query = 'SELECT * FROM User';
    const getDbData = await DbConnection(query);
    const unSortedArray = [];
    for (let i = 0; i < getDbData.length; i++) {
        delete getDbData[i].password;
        unSortedArray.push(getDbData[i]);
    }

    const sortedArray = unSortedArray.sort(compare);
    //console.log(sortedArray);
    return sortedArray;
    // console.log(a);
}

const compare = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = (nameA > nameB) ? 1 : -1;
    return comparison;
}
//sortByName();
module.exports = sortByName;