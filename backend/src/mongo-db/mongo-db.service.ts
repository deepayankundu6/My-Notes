import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoDbService {

    url = "mongodb://localhost:27017";
    //var url = "mongodb://DeepayanKundu:123456@localhost:27017/MyDB";
    DatabaseName = "Notes";
    CollectionName = 'MyNotes';

    insertOneDocument = async (item) => {
        let client;
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).insertOne(item);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }

    insertManyDocuments = async (item) => {
        let client;
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).insertMany(item);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }

    findAllDocuments = async () => {
        let client;
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).find({}).toArray();
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }

    findOneDocument = async (query) => {
        let client;
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).find(query).toArray();
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }

    updateOneDocument = async (query, newValues) => {
        let client;
        let values = { $set: newValues }
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).updateOne(query, values);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }

    deleteOneDocument = async (query) => {
        let client;
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).deleteOne(query);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }

    deleteManyDocuments = async (query) => {
        let client;
        try {
            client = await (await MongoClient.connect(this.url)).db(this.DatabaseName).collection(this.CollectionName).deleteMany(query);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return client;
    }
}
