/* =========================================================
   CONFIGURAÇÕES DO CONVITE
========================================================= */

const convite = {

    nome:
        "Turma de Matemática Licenciatura",

    curso:
        "Matemática Licenciatura",

    instituicao:
        "Universidade Estadual do Maranhão — UEMA",

    polo:
        "Polo Água Doce do Maranhão",

    data:
        "08/12/2026",

    hora:
        "20:00",

    local:
        "U.E.B. Mariana Pereira Cardoso",

    endereco:
        "Rua das Nações Nº01",

    whatsapp:
        "5598984886934"

};



/* =========================================================
   ELEMENTOS
========================================================= */

const abertura =
    document.getElementById("abertura");


const btnAbrir =
    document.getElementById("btnAbrir");


const audio =
    document.getElementById("audio");


const botaoMusica =
    document.getElementById("botaoMusica");


const whatsapp =
    document.getElementById("whatsapp");



/* =========================================================
   ABRIR CONVITE
========================================================= */

btnAbrir.addEventListener(
    "click",
    () => {

        abertura.classList.add("fechar");

        tocarMusica();

    }
);



/* =========================================================
   MÚSICA
========================================================= */

function tocarMusica() {

    audio.volume = 0.35;

    audio.play()
        .then(() => {

            botaoMusica.classList.add(
                "tocando"
            );

        })
        .catch(() => {

            console.log(
                "O navegador bloqueou a reprodução automática."
            );

        });

}


botaoMusica.addEventListener(
    "click",
    () => {

        if (audio.paused) {

            audio.play();

            botaoMusica.textContent = "♪";

        } else {

            audio.pause();

            botaoMusica.textContent = "×";

        }

    }
);



/* =========================================================
   WHATSAPP
========================================================= */

const mensagem =
    `Olá! Gostaria de confirmar minha presença na Colação de Grau da ${convite.nome}, ${convite.instituicao}, no dia ${convite.data}.`;


const linkWhatsapp =
    `https://wa.me/${convite.whatsapp}?text=${encodeURIComponent(
        mensagem
    )}`;


whatsapp.href =
    linkWhatsapp;



/* =========================================================
   DATA DA FORMATURA
========================================================= */

function obterDataEvento() {

    const partes =
        convite.data.split("/");


    const dia =
        Number(partes[0]);


    const mes =
        Number(partes[1]) - 1;


    const ano =
        Number(partes[2]);


    const hora =
        Number(
            convite.hora.split(":")[0]
        );


    const minuto =
        Number(
            convite.hora.split(":")[1]
        );


    return new Date(
        ano,
        mes,
        dia,
        hora,
        minuto,
        0
    );

}



/* =========================================================
   CONTAGEM REGRESSIVA
========================================================= */

function atualizarContagem() {

    const agora =
        new Date();


    const dataEvento =
        obterDataEvento();


    const diferenca =
        dataEvento.getTime()
        -
        agora.getTime();


    if (diferenca <= 0) {

        document.getElementById("dias")
            .textContent = "00";

        document.getElementById("horas")
            .textContent = "00";

        document.getElementById("minutos")
            .textContent = "00";

        document.getElementById("segundos")
            .textContent = "00";

        return;

    }


    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferenca /
            (1000 * 60 * 60))
            % 24
        );


    const minutos =
        Math.floor(
            (diferenca /
            (1000 * 60))
            % 60
        );


    const segundos =
        Math.floor(
            (diferenca / 1000)
            % 60
        );


    document.getElementById("dias")
        .textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas")
        .textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos")
        .textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos")
        .textContent =
        String(segundos).padStart(2, "0");

}


atualizarContagem();


setInterval(
    atualizarContagem,
    1000
);



/* =========================================================
   ANIMAÇÃO AO ROLAR
========================================================= */

const elementos =
    document.querySelectorAll(
        "section .container"
    );


elementos.forEach(
    elemento => {

        elemento.classList.add(
            "reveal"
        );

    }
);


const observador =
    new IntersectionObserver(
        entradas => {

            entradas.forEach(
                entrada => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


elementos.forEach(
    elemento => {

        observador.observe(
            elemento
        );

    }
);



/* =========================================================
   PARTÍCULAS DOURADAS
========================================================= */

const particulas =
    document.querySelector(".particulas");


function criarParticula() {

    const particula =
        document.createElement("span");


    particula.style.position =
        "absolute";


    particula.style.width =
        Math.random() * 3 + 1 + "px";


    particula.style.height =
        particula.style.width;


    particula.style.borderRadius =
        "50%";


    particula.style.background =
        "#f5dc91";


    particula.style.left =
        Math.random() * 100 + "%";


    particula.style.bottom =
        "-10px";


    particula.style.opacity =
        Math.random() * .7 + .2;


    const duracao =
        Math.random() * 7 + 5;


    particula.style.animation =
        `subirParticula ${duracao}s linear`;


    particula.style.boxShadow =
        "0 0 8px rgba(245,220,145,.7)";


    particulas.appendChild(
        particula
    );


    setTimeout(
        () => {

            particula.remove();

        },
        duracao * 1000
    );

}


setInterval(
    criarParticula,
    500
);



/* =========================================================
   ESTILO DA ANIMAÇÃO DAS PARTÍCULAS
========================================================= */

const estiloParticulas =
    document.createElement("style");


estiloParticulas.innerHTML = `

@keyframes subirParticula {

    0% {

        transform:
            translateY(0)
            scale(.5);

        opacity: 0;

    }

    20% {

        opacity: 1;

    }

    100% {

        transform:
            translateY(-100vh)
            translateX(
                ${Math.random() * 100 - 50}px
            )
            scale(1);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    estiloParticulas
);
