function required() {
    var empt = document.forms["camera_form"]["password"].value;

    if (empt == ""){
        alert("É preciso preencher todos os campos!");
        window.location.replace("index.html");
        return false;
    }
    else {
        alert('As informações foram salvas com sucesso!');
        window.location.replace("services.html");
        return true; 
    }
}

function deleted() {
    return true; 
}