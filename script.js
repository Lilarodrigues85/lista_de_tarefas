document.getElementById("button_add").onclick = function() {
  var textInput = document.getElementById("inputTarefa").value;
  var newTask = '<div id="tarefas"><span>'+ textInput +'</span>  <button id="deletar">Del</button></div>';

  if (textInput.length == 0) {
    alert("Digite alguma tarefa");
  }else {
    document.getElementById("novas_tarefas").innerHTML += newTask;
  }
  
  var numeroDeTarefas = document.querySelectorAll("#deletar");

  for(let index = 0; index < numeroDeTarefas.length; index++) {
    numeroDeTarefas[index].onclick = function (){
      this.parentNode.remove();
    }
  }
  
}
