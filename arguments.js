function friendName(firstName,lastName){
    let fullName= '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const names = friendName('rifat','hosen','bin','somser')
console.log(names);