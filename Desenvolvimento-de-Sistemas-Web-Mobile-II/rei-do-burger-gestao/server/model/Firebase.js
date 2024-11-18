// Importando e executando a função de recuperar a database do Firestore
const { getDb, getAuth } = require("../config/firebase")
let db = getDb()
let auth = getAuth()

// Função que retorna todos os documentos de uma coleção da database
const fetchAllDocuments = async (desiredCollection) => {
    let data = [],
        docRef,
        snapshot

    docRef = db.collection(desiredCollection)
    snapshot = await docRef.get()

    snapshot.forEach(doc => {
        let fetchedData = doc.data()
        data.push({
            documentID: doc.id,
            data: fetchedData
        })
    })

    return data
}

// Função que retorna apenas as informações de um documento de uma coleção da database
const fetchDocument = async (documentID, desiredCollection) => {
    let data = [],
        docRef,
        doc,
        snapshot

    docRef = db.collection(desiredCollection)
    doc = docRef.doc(documentID)

    snapshot = await doc.get()
        .then(doc => {
            let fetchedData = doc.data()
            data.push({
                documentID: doc.id,
                data: fetchedData
            })
        })

    return data;
};

// Função que cria um documento e retorna o status vindo do Firestore
const createDocument = async (data, desiredCollection) => {
    let dataToUpload = data,
        docRef,
        doc

    docRef = db.collection(desiredCollection)
    doc = await docRef.doc().set(dataToUpload)
    return doc
}

// Função que remove um documento e retorna o status vindo do Firestore
const deleteDocument = async (documentID, desiredCollection) => {
    let docRef,
        doc
    
    docRef = db.collection(desiredCollection)
    doc = await docRef.doc(documentID).delete()
    return doc
}

// Função que atualiza um documento e retorna o status vindo do Firestore
const updateDocument = async (documentID, desiredCollection, data) => {
    let dataToUpdate = data,
        docRef,
        doc
    
    docRef = db.collection(desiredCollection)
    doc = await docRef.doc(documentID).update(dataToUpdate)
    return doc
}

// Função que valida se um token de login é valido
const verifyIdToken = async (idToken) => {
    try {
        const decodedToken = await auth.verifyIdToken(idToken)
        return decodedToken
    } catch {
        throw new Error("Token verification failed.")
    }
}

module.exports = { fetchDocument, fetchAllDocuments, createDocument, deleteDocument, updateDocument, verifyIdToken}