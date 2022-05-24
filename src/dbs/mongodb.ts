import { MongoClient } from 'mongodb'

const connection = async () => {
    const client = new MongoClient(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    return client.connect()
}

export default {
    connection,
    type: 'mongodb'
}
