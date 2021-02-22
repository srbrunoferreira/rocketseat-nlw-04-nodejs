// // UUID => universally unique identifier

// function enviarEmail(para, id, assunto, texto) {
//     // Biblioteca de envio de email

//     console.log(para, id, assunto, texto);
// }

// class EnviarEmailParaUsuario {
//     send() {
//         enviarEmail('dani@gmail.com', 9899, 'Olá!', 'Tudo bem?');
//     }
// }

interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail(dados: DadosDeEnvioEmail) {
    console.log(dados.para, dados.id, dados.assunto, dados.texto);
}

class enviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: 'dani@gmail.com',
            id: '9899',
            assunto: 'Olá!',
            texto: 'Tudo bem?'
        });
    }
}