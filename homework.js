function reverseStr(str) {
    return str.split('').reverse().join('')
}
console.log(reverseStr('Gililfj'))

let user = {
    id: 8,
	name: 'Vasya',
    toString() {
        return JSON.stringify(user)
    }
}
console.log(user.toString())

function getStrNums(){
    let str = prompt('Please enter a phrase');
    str = str.split(/\D/gi).join('');
    return str.length;
}
console.log(getStrNums());

let user1 = {
	id: 15,
	name: 'Vasya',
	isAdmin: false,
	showType: function(field) {
        return typeof(this[field])
    }
}

let user2 = {id: 5};
const sum = (num1, num2) => num1 + num2;
let arr = [1, 3, 5];
function getObjectType(obj) {
    return obj.__proto__.constructor.name
}