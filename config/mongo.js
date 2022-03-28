const mongoose = require('mongoose')
const DB_URL =
    'mongodb+srv://admin:admin@cluster0.vqoih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = () => {
    const connect = () => {
        mongoose.Promise = global.Promise

        mongoose.connect(
            DB_URL,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                let dbStatus = ''
                if (err) {
                    dbStatus = `*    Erro ao se conectar ao DB: ${err}\n****************************\n`
                }
                dbStatus = `*    Conexão com o DB: OK\n****************************\n`
                if (process.env.NODE_ENV !== 'test') {
                    // Prints initialization
                    console.log('****************************')
                    console.log('*    Iniciando Servidor')
                    console.log(`*    Porta: ${process.env.PORT || 3333}`)
                    console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`)
                    console.log(`*    Banco de Dados: MongoDB`)
                    console.log(dbStatus)
                }
            }
        )
    }
    connect()

    mongoose.connection.on('error', console.log)
    mongoose.connection.on('disconnected', connect)
}
