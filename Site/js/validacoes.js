// criação das variaveis que receberão dados do login.html
var login_usu;
var senha_user;
// inicio da função que valida ou não o login
function verificar_usuario(){
    // variaveis recebendo os dados do login.html
    login_usu = (email_usu.value);
    senha_user = (senha_usu.value);
    // validação do login, verifica se o login e a senha são os desejados
    if(senha_user == 'admin' && login_usu == 'admin'){
    //    Redireciona para a tela da dashboard
        window.location.href = '../html/grafico.html'
    }else{
        // caso o login não seja válido, exibe um alerta de erro
        alert('Login ou senha inválidos');
    }
}