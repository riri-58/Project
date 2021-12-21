function change(element){
    var a= element.innerHTML;
    switch(a){
        case "Войти":
            document.getElementById("hed").innerHTML="Войти"
            document.getElementById("btn").innerHTML="Войти"
            document.getElementById("voiti").innerHTML="Регистрация"
            document.getElementById("que").innerHTML="Нет учетной записи?"
            document.getElementById("text").remove();
            document.getElementById("tel").remove();
            document.getElementById("ret-code").remove();
            document.getElementById("").remove();
            break;
        case "Регистрация":
            window.location.reload(true)
              }
    }
