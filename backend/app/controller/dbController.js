const DbConnection = require('../db/database');

exports.sortByName = async () => {
    const getDbData = await dbData();
    const unSortedArray = [];
    for (let i = 0; i < getDbData.length; i++) {
        delete getDbData[i].password;
        unSortedArray.push(getDbData[i]);
    }

    const sortedArray = unSortedArray.sort(compare);
    //console.log(sortedArray);
    return sortedArray;
    // console.log(a);
};

exports.fetchByUserId = async (id) => {
    const userDetails = await this.sortByName();
    const user = userDetails.find(obj => obj.id === id);
    if(user){
        delete user.id;
        return user;
    }else {
        return false;
    }
    
};

exports.verifyUser = async(email, pass) => {
    const getDbData = await dbData();
    const user = getDbData.find(obj => (obj.email.toUpperCase() === email.toUpperCase() && obj.password === pass));
    if(user){
        delete user.password;
        return user;
    }else {
        return false;
    }
};

const dbData = async () =>{
    let query = 'SELECT * FROM User';
    return await DbConnection(query);
};

const compare = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = (nameA > nameB) ? 1 : -1;
    return comparison;
};
//sortByName();
//module.exports = sortByName;