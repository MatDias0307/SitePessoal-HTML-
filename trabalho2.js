$(document).ready(function () {
  var user = ''

  $("#form").submit(function (event) {
      event.preventDefault()
      var username = $("#username").val()
      searchUsers (username)
  })
  $("#username").change(function () {
    var username =  $("#username").val()
    searchUsers(username) 
})
  function searchUsers(username) {
  $("#users").empty()
   
  $.get("https://api.github.com/search/users?q="+username+ "+in:user&per_page=10", function(data){
      
      data.items.forEach(item =>{
         user = `<a target="_blank" href="${item.html_url}">
         <img class="img-thumbnail ml-4" width="100" height="100"
         src="${item.avatar_url}"/></a>           `
         $("#result").append(user)


      });
  })   
}
})

function carregaPerfil () {
      
  let xhr = new XMLHttpRequest ();
  xhr.onload = function () {
       let data = JSON.parse(this.responseText);
       let perfilStr = `<div class="card_perfil mb-3" ">
       <div class="row g-0">
         <div class="card_img col-md-4">
           <img src="${data.avatar_url}" class="card-img-top" alt="..." >
         </div>
         <div class="col-md-8">
           <div class="card-body_perfil">
             <h5 class="card-title">${data.name}<br>(${data.login})</h5>
             <p class="card-text">${data.bio}</p>
               <p class="card-text"><b>Seguidores:</b> <a href="https://github.com/MatDias0307?tab=followers" style="color: black;" target="_blank">${data.followers}</a> 
               <b>Seguindo:</b> <a href="https://github.com/MatDias0307?tab=following" style="color: black;" target="_blank">${data.following}</a></p>
               <p class="card-text2"><i class="fab fa-twitter"></i><b> Twitter:</b> <a href="https://twitter.com/matdias0307" " style="color: black;" target="_blank"> ${data.twitter_username} </a></p>
               <p class="card-text3"><i class="fas fa-map-marker-alt"></i><b> Localização:</b> ${data.location}</p>
               <a href="${data.html_url}" style="background-color: black;" target="_blank" class="btn btn-primary">Perfil no Github</a>
           </div>
         </div>
       </div>
     </div>`;
      document.getElementById('perfil').innerHTML = perfilStr;
  }
  
  xhr.onerror = function (){
      alert (`Erro na requisição: \nCódigo: ${this.status} - ${this.statusText}` );

  }
  xhr.open('GET', 'https://api.github.com/users/MatDias0307');
  xhr.send();
}

function carregaRepositorio1 () {
      
let xhr = new XMLHttpRequest ();
xhr.onload = function () {
     let data = JSON.parse(this.responseText);
     let perfilStr = `<div class="card_repositorio">
     <div class="card-header">
     <b><i class="fas fa-folder"></i> Repositório</b>
     </div>
     <div class="card-body">
           <h5 class="card-title">${data.name}</h5>
           <p class="card-text">${data.description}</p>
           <p><b>Criado em:</b> ${data.created_at}</p>
           <p><b>Última atualização:</b> ${data.updated_at}</p>
           <a href="${data.html_url}" style="background-color: black;" target="_blank" class="btn btn-primary">Ir para repositório</a>
           </div>
           </div>`;
    document.getElementById('repositorio1').innerHTML = perfilStr;
}

xhr.onerror = function (){
    alert (`Erro na requisição: \nCódigo: ${this.status} - ${this.statusText}` );
}

xhr.open('GET', 'https://api.github.com/repos/MatDias0307/ControleEstoque-Java-');
xhr.send();
}

function carregaRepositorio2 () {
      
let xhr = new XMLHttpRequest ();
xhr.onload = function () {
     let data = JSON.parse(this.responseText);
     let perfilStr = `<div class="card_repositorio">
     <div class="card-header">
     <b><i class="fas fa-folder"></i> Repositório</b>
     </div>
     <div class="card-body">
           <h5 class="card-title">${data.name}</h5>
           <p class="card-text">${data.description}</p>
           <p><b>Criado em:</b> ${data.created_at}</p>
           <p><b>Última atualização:</b> ${data.updated_at}</p>
           <a href="${data.html_url}" style="background-color: black;" target="_blank" class="btn btn-primary">Ir para repositório</a>
           </div>
           </div>`;
    document.getElementById('repositorio2').innerHTML = perfilStr;
}

xhr.onerror = function (){
    alert (`Erro na requisição: \nCódigo: ${this.status} - ${this.statusText}` );
}

xhr.open('GET', 'https://api.github.com/repos/MatDias0307/Estufa-Arduino-');
xhr.send();
}

function carregaRepositorio3 () {
      
let xhr = new XMLHttpRequest ();
xhr.onload = function () {
     let data = JSON.parse(this.responseText);
     let perfilStr = `<div class="card_repositorio">
     <div class="card-header">
     <b><i class="fas fa-folder"></i> Repositório</b>
     </div>
     <div class="card-body">
           <h5 class="card-title">${data.name}</h5>
           <p class="card-text">${data.description}</p>
           <p><b>Criado em:</b> ${data.created_at}</p>
           <p><b>Última atualização:</b> ${data.updated_at}</p>
           <a href="${data.html_url}" style="background-color: black;" target="_blank" class="btn btn-primary">Ir para repositório</a>
           </div>
           </div>`;
    document.getElementById('repositorio3').innerHTML = perfilStr;
}

xhr.onerror = function (){
    alert (`Erro na requisição: \nCódigo: ${this.status} - ${this.statusText}` );
}

xhr.open('GET', 'https://api.github.com/repos/MatDias0307/SensorDist-ncia-Arduino-');
xhr.send();
}

function carregaRepositorio4 () {
      
let xhr = new XMLHttpRequest ();
xhr.onload = function () {
     let data = JSON.parse(this.responseText);
     let perfilStr = `<div class="card_repositorio">
     <div class="card-header">
     <b><i class="fas fa-folder"></i> Repositório</b>
     </div>
     <div class="card-body">
           <h5 class="card-title">${data.name}</h5>
           <p class="card-text">${data.description}</p>
           <p><b>Criado em:</b> ${data.created_at}</p>
           <p><b>Última atualização:</b> ${data.updated_at}</p>
           <a href="${data.html_url}" style="background-color: black;" target="_blank" class="btn btn-primary">Ir para repositório</a>
           </div>
           </div>`;
    document.getElementById('repositorio4').innerHTML = perfilStr;
}

xhr.onerror = function (){
    alert (`Erro na requisição: \nCódigo: ${this.status} - ${this.statusText}` );
}

xhr.open('GET', 'https://api.github.com/repos/MatDias0307/SitePessoal-HTML-');
xhr.send();
}

