let usuarios = []; 


function cadastrarUsuario(nome, idade) {
    if (idade >= 18) {
        usuarios.push({ nome, idade }); 
        return "Usuário cadastrado com sucesso!";
    } else {
        return "Usuário deve ser maior de idade para se cadastrar.";
    }
}


function consultarUsuario(nome) {
    for (let usuario of usuarios) {
        if (usuario.nome === nome) {
            return `Nome: ${usuario.nome}, Idade: ${usuario.idade}`;
        }
    }
    return "Usuário não encontrado.";
}


function removerUsuario(nome) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nome) {
            usuarios.splice(i, 1);
            return "Usuário removido com sucesso!";
        }
    }
    return "Usuário não encontrado.";
}


console.log(cadastrarUsuario("João", 25)); 
console.log(cadastrarUsuario("Maria", 17)); 
console.log(consultarUsuario("João")); 
console.log(removerUsuario("João")); 

