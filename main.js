// ===============Juego de preguntas y respuestas sobre Los Simpsons =========================== // 

let usuario = prompt('¡Hola! ¿Cuál es tu nombre?');
let contador = 0;

// Pregunta 1
let pregunta1 = '¿Cómo se llama el dueño de la planta nuclear en Los Simpsons?';
alert(pregunta1);
let respuesta1 = prompt('Ingrese su respuesta').toLowerCase();

if (respuesta1 === 'burns') {
    contador++;
} else {
    alert('Respuesta incorrecta. El quizz termina aquí.');
    alert(`Número de respuestas correctas: ${contador}`);
}

if (respuesta1 !== 'burns') {
    alert(`¡Hola, ${usuario}! Has contestado ${contador} preguntas correctamente.`);
} else {
// Pregunta 2
    let pregunta2 = '¿Cómo se llama el mejor amigo de Homero Simpson?';
    alert(pregunta2);
    let respuesta2 = prompt('Ingrese su respuesta').toLowerCase();
    
    if (respuesta2 === 'moe') {
        contador++;
    } else {
        alert('Respuesta incorrecta. El quizz termina aquí.');
        alert(`Número de respuestas correctas: ${contador}`);
    }

    if (respuesta2 !== 'moe') {
        alert(`¡Hola, ${usuario}! Has contestado ${contador} preguntas correctamente.`);
    } else {
// Pregunta 3
        let pregunta3 = '¿En qué ciudad ficticia viven Los Simpsons?';
        alert(pregunta3);
        let respuesta3 = prompt('Ingrese su respuesta').toLowerCase();

        if (respuesta3 === 'springfield') {
            contador++;
        } else {
            alert('Respuesta incorrecta. El quizz termina aquí.');
        }

 // Pregunta 4
        let pregunta4 = '¿Cómo se llama la hermana de Marge Simpson?';
        alert(pregunta4);
        let respuesta4 = prompt('Ingrese su respuesta').toLowerCase();

        if (respuesta4 === 'patty') {
            contador++;
        } else {
            alert('Respuesta incorrecta. El quizz termina aquí.');
        }

 // Pregunta 5
        let pregunta5 = '¿Cuál es el nombre del director de la escuela primaria en Los Simpsons?';
        alert(pregunta5);
        let respuesta5 = prompt('Ingrese su respuesta').toLowerCase();

        if (respuesta5 === 'skinner') {
            contador++;
        } else {
            alert('Respuesta incorrecta. El quizz termina aquí.');
        }
    
        alert(`¡Hola, ${usuario}! Has contestado ${contador} preguntas correctamente.`);
        
        if (contador >= 3) {
            alert('¡Felicidades! Ganaste el quizz de Los Simpsons');
        }
    }
}
