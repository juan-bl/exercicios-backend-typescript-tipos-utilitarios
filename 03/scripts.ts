type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

const conexao = (dados: Conn): Readonly<{driver: string, url: string}> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}


console.log(conexao({
    username: 'Juan',
    password: '0000',
    host: '0000',
    port: '0000',
    dbname: 'Juan'
}));
