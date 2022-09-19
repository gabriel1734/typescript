let x: unknown;

x = 100;
x = '100';
x = true;
x = 3;
const y = 800;

if (typeof x === 'number') console.log(x + y);
