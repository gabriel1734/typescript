const body = document.querySelector('body');

if (body) body.style.background = 'red';

const body2 = document.querySelector('body')!;

body2.style.background = 'red';

const body3 = document.querySelector('body') as HTMLBodyElement;

body2.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;

input.value = 'Qualquer coisa';

input.focus();

const body4 = document.querySelector('body') as unknown as number;

body2.style.background = 'red';
