const ingredienti = ['Guanciale', 'Peperoni', 'Pasta', 'Olive', 'Controfiletto', 'Quaglie', 'Insalata', 'Gamberi', 'Pollo', 'Pomodori', 'Melanzane'];

const lista_spesa = document.getElementById('lista-spesa');

let i = 0
while (i<ingredienti.length) {
    const li = document.createElement('li');

    li.innerText = ingredienti[i];

    lista_spesa.append(li);

    i++
}