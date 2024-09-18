function mover2() {
    let elevador = document.getElementById('elevadorzinho');
    let andarAnterior = elevador.parentNode;
    let andar2 = document.getElementById('andar2');
    andar2.appendChild(elevador);
    andarAnterior.style.padding = '180px';
    andar2.style.padding = '50px';
}

function mover1() {
    let elevador = document.getElementById('elevadorzinho');
    let andarAnterior = elevador.parentNode;
    let andar1 = document.getElementById('andar1');
    if(andarAnterior.id == 'andar3') {
        let andar2 = document.getElementById('andar2');
        andar2.appendChild(elevador);
        andarAnterior.style.padding = '180px';
        andar2.style.padding = '50px';
        setTimeout (() => {
            let andarAnterior2 = elevador.parentNode;
            andar1.appendChild(elevador);
            andarAnterior2.style.padding = '180px';
            andar1.style.padding = '50px';
        }, 1000)
    } else {
        andar1.appendChild(elevador);
        andarAnterior.style.padding = '180px';
        andar1.style.padding = '50px';
    }
}

function mover3() {
    let elevador = document.getElementById('elevadorzinho');
    let andarAnterior = elevador.parentNode;
    let andar3 = document.getElementById('andar3');
    if(andarAnterior.id == 'andar1') {
        let andar2 = document.getElementById('andar2');
        andar2.appendChild(elevador);
        andarAnterior.style.padding = '180px';
        andar2.style.padding = '50px';
        setTimeout (() => {
            let andarAnterior2 = elevador.parentNode;
            andar3.appendChild(elevador);
            andarAnterior2.style.padding = '180px';
            andar3.style.padding = '50px';
        }, 1000)
    } else {
        andar3.appendChild(elevador);
        andarAnterior.style.padding = '180px';
        andar3.style.padding = '50px';
    }
}