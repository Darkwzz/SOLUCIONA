// document notificação//

const noti_bruno = document.querySelector('.pedido_bruno')
const noti_flavia = document.querySelector('.pedido_flavia')
const noti_tiago = document.querySelector('.pedido_tiago')
const noti_lucas = document.querySelector('.pedido_lucas')
const noti_rafael = document.querySelector('.pedido_rafael')

// document serviços //

const servi_bruno = document.querySelector('.servi_bruno')
const servi_flavia = document.querySelector('.servi_flavia')
const servi_lucas = document.querySelector('.servi_lucas')
const servi_tiago = document.querySelector('.servi_tiago')
const servi_rafael = document.querySelector('.servi_rafael')


function enviarPedido(nome){
    alert('Pedido enviado!')
    localStorage.setItem(`.pedido_${nome}`, 'true')
}

function aceitar(nome){
    alert('Pedido Aceito!!')
    localStorage.setItem(`.pedido_${nome}`, 'false')
    localStorage.setItem(`.servi_${nome}`, 'true')
    location.reload();
}

function recusar(nome){
    alert('Pedido Recusado!!')
    localStorage.setItem(`.pedido_${nome}`, 'false')
    location.reload();
}

function finalizar(nome){
    alert('Pedido finalizado!')
    localStorage.setItem(`.servi_${nome}`, 'false')
    location.reload();
}



// NOTIFICAÇÃO //

if(localStorage.getItem('.pedido_bruno') === 'true'){
    noti_bruno.style.display =  'block';
}

if(localStorage.getItem('.pedido_flavia') === 'true'){
    noti_flavia.style.display =  'block';
}

if(localStorage.getItem('.pedido_tiago') === 'true'){
    noti_tiago.style.display =  'block';
}

if(localStorage.getItem('.pedido_lucas') === 'true'){
    noti_lucas.style.display =  'block';
}

if(localStorage.getItem('.pedido_rafael') === 'true'){
    noti_rafael.style.display =  'block';
}

// SERVIÇOS PENDENTES //

if(localStorage.getItem('.servi_bruno') === 'true'){
    servi_bruno.style.display =  'block';
}

if(localStorage.getItem('.servi_flavia') === 'true'){
    servi_flavia.style.display =  'block';
}

if(localStorage.getItem('.servi_lucas') === 'true'){
    servi_lucas.style.display =  'block';
}

if(localStorage.getItem('.servi_tiago') === 'true'){
    servi_tiago.style.display = 'block';
}

if(localStorage.getItem('.servi_rafael') === 'true'){
    servi_rafael.style.display = 'block';
}









