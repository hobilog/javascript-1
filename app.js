const r = Math.random();
const seq = r > 0.5 ? '-' : '+';
const mes = prompt(`Сколько будет 7 ${seq} 15?`);

if (mes === 'Я не робот') {
    console.log('Успех!');
} else if (seq === '-' && mes === '-8') {
    console.log('Успех!');
} else if (seq === '+' && mes === '22') {
    console.log('Успех!')
} else {
    console.log('Неудача :(');
}