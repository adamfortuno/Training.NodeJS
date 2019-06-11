const kid = {
    name: "Marcus",
    age: 18,
    gender: "M",
}
let kidBirthDay;

kidBirthDay = ({name, age}) => console.log(name, ' is ', ++age);

kidBirthDay(kid);

kidBirthDay = ({name, age}, {bdate = '1/1/2010'} = {}) => {
    console.log(name, ' is ', ++age);
    console.log('on ', bdate);
}

kidBirthDay(kid);

kidBirthDay(kid, {bdate: '1/1/2019'});