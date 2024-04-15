// function rem() {
//     alert('welcome to javascript')
//     // alert(5 + 6)
//     // prompt('how old are you?')
//     // confirm('Do you want to continue with pament)
// } 

// function add(a,b){
//     // return a + b
//     console.log(a + b);
// }
// add(5,6)

// const name='miceal'
// console.log(name);

//  let age= 30/30
// // age=50
// console.log(age);


// const person={
//     name: 'pabro',
//     age: 30,
//     gender: 'male',
//     nationality: null,
//     married: false,
// profession:{
//     job: 'software engineering',
//     experience: '10 years',
//     companies: 'Gomycode',
//     fromDate: 'jan 25',
//     endDate: null
// }
// }

// person.complexion= 'dark'
// person.profession.availability= 'open'

// console.log(person);


// const colours = ['red','blue','yellow','green']
// colours.push('white')


// // console.log(colours.splice(0,3));
// console.log(colours);

// const properties= [
//     'shoes',
//     'laptops',
//     cars =['toyota','porshe', benz = ['AMG','4MATIC','GLE'], 'LAMBORGHINI'],
//     houses = ['mansion','duplex','pethouse'],
//     'shops'
// ]

// console.log(properties[2][2][0]);

// arithmetc operations
// console.log(5 + 7);
// console.log(9 - 7);
// console.log(8 / 4);
// console.log(5 * 3);

// console.log(5 ** 3); //exponential operators
// console.log(7 % 5); // modulus operators


// let num = 5
// num++
// console.log(num);

// let nums = 4
// nums--
// console.log(nums);


// let dev = 5 ** 3 / 25
// console.log(dev);

// let james = 'blessing'
// let gomycode = 'hello' + 'world'
// console.log(gomycode);


// x = 'Water'
// if(x == 'maclean'){
//     console.log('buy maclean');
// }

// else if(x == 'rice'){
//     console.log('buy rice');
// }


// else if(x == 'Goat'){
//     console.log('buy Goat');
// }

// else if(x == 'Water'){
//     console.log('buy Water');
// }

// else if(x == 'meat'){
//     console.log('buy meat');
// }
// else {
//     console.log('buy drink');
// }

//switch statement 
// //so basically this is an option type shii
// function defaultcolor(color){
//     switch(color){
      
//           case 1:console.log('black');
//         break;
//         case 'x':console.log('red');
//         break;
//         case 2:console.log('blue');
//         break;
//         case 'y':console.log('black');
//         break;
//         default:
//             console.log('color not defined');
//     }
// }
// defaultcolor('y')


// let marks = 40
// let results = (marks <= 40) ? 'small number' : 'large number';
// console.log(results);

// let num= 1
// let results = (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'equal number';
// console.log(results);


//loops
//while loops
// let num = [ 3, 5, 8, 7, 12, 4]
// let sum = 0
// let i = 0

// while(i < num.length) {
//     sum += num[i]
//     i++;
// }
// console.log(sum);

//for loops
// let num = [ 3, 5, 8, 7, 12, 4]
// let sum = 0

// for (let i = 0; i < num.length; i++) {
//    sum += num[i]
// }
// console.log(sum);

// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// let sum = 0;
// for ( let i in numbers) {
//     if ( i & 2 == 0) continue;
//     sum += numbers[i]
// }
// console.log(sum);

//array of objects


\// ES6
// const changeProducts = () =>
//   products.map(val => ({ ...val, price: val.price + 2 }));
// console.log(changeProducts());
// console.log(products);
    
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// using es5/ javascript
array1 = array1.concat(array2);
console.log(array1)// [1,2,3,4,5,6]


//using Es6/ javascript
//array1 = [...array1, ...array2];
//console.log(array1)// ..[1,2,3,4,5,6]