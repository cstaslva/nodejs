async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log("Conexão com o Banco de Dados estabelecida!");
    }else {
        console.log("Falha de autenticação...\nNão foi possível se conectar com o Banco de Dados!");
    };
};

export default connectToDatabase;
