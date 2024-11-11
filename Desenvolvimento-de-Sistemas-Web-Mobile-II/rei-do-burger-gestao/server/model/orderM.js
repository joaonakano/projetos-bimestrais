const { connectToMongo, getDb } = require("../config/mongodb")
const { ObjectId } = require("mongodb")

const initializeDb = async () => {
    if(!getDb()) {
        await connectToMongo()
    }
}

// Função que retorna todos os documentos de uma coleção da database
const fetchAllDocuments = async (desiredCollection) => {
    await initializeDb();
    const collection = getDb().collection(desiredCollection)
    const data = await collection.find({}).toArray()
    return data.map(doc => ({documentID: doc._id, data: doc}))
}

// Função que retorna apenas as informações de um documento de uma coleção da database
const fetchDocument = async (documentID, desiredCollection) => {
    await initializeDb();
    const collection = getDb().collection(desiredCollection)
    try {
        const doc = await collection.findOne({ _id: new ObjectId(documentID) });
        
        if (!doc) {
            console.warn(`No document found with ID: ${documentID}`);
            return null; // Return null if no document is found
        }
        
        return [{ documentID: doc._id, data: doc }];
    } catch (error) {
        console.error('Error fetching document:', error);
        return null; // Handle error as needed
    }
}

// Função que cria um documento e retorna o status vindo do Firestore
const createDocument = async (data, desiredCollection) => {
    await initializeDb();
    const collection = getDb().collection(desiredCollection)
    const result = await collection.insertOne(data)
    return { documentID: result.insertedId, data: data };
}

// Função que remove um documento e retorna o status vindo do Firestore
const deleteDocument = async (documentID, desiredCollection) => {
    await initializeDb();
    const collection = getDb().collection(desiredCollection)
    const result = await collection.deleteOne({_id: new ObjectId(documentID)})
    return result.deletedCount > 0
}

// Função que atualiza um documento e retorna o status vindo do Firestore
const updateDocument = async (documentID, desiredCollection, data) => {
    await initializeDb();
    const collection = getDb().collection(desiredCollection)
    const result = await collection.updateOne(
        { _id: new ObjectId(documentID) },
        { $set: data }
    )
    return result.modifiedCount > 0
}

module.exports = { fetchDocument, fetchAllDocuments, createDocument, deleteDocument, updateDocument}