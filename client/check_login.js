

function check_login(){
    
    const status = JSON.parse(localStorage.getItem("logowanie"))
    console.log(status)

    if(status?.status !="ok"){

        window.location.href="logowanie.html"
    }
}
check_login()