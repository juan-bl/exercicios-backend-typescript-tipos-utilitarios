type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type NovoUsuario = Required<Omit<Usuario, 'rg'>>

const cadastrarUsuário = (info: NovoUsuario): NovoUsuario => {
    return info;
}

console.log(cadastrarUsuário({
    nome: 'juan',
    email: 'juan@email.com',
    cpf: '0',
    dataNacimento: '00/00/0000'
}));

