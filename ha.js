const regex = /(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](200[0-9]|201[1-9]|202[1-6])/g;
  
const sr = 'hola soy audel tengo naci 12-11-2009  mi mama nacioel 12-09-2009 ';

console.log()
console.log(regex.test(sr));
conso.log()
console.log(sr.match(regex));
if(regex.test(sr)) {
  console.log('Matched');
}
else
console.log('Not Matched');
console.log(regex.exec(sr));
console.log(regex.exec(sr));

