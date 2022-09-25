import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { INotes } from 'src/interfaces';

@Injectable()
export class MongoDbService {

    url = "mongodb://0.0.0.0:27017";
    //var url = "mongodb://DeepayanKundu:123456@localhost:27017/MyDB";
    DatabaseName = "Notes";
    CollectionName = 'MyNotes';

    insertOneDocument = async (item) => {
        let client = new MongoClient(this.url);
        let data = {}
        try {
            await client.connect();
            console.log('Connected successfully to mongoDB server');
            data = await client.db(this.DatabaseName).collection(this.CollectionName).insertOne(item);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }

    insertManyDocuments = async (item) => {
        let client = new MongoClient(this.url);
        let data = {}
        try {
            await client.connect();
            console.log('Connected successfully to mongoDB server');
            data = await client.db(this.DatabaseName).collection(this.CollectionName).insertMany(item);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }

    findAllDocuments = async () => {
        let client = new MongoClient(this.url);
        let data = {}
        try {
            data = await client.db(this.DatabaseName).collection(this.CollectionName).find({}).toArray();
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }

    findOneDocument = async (query) => {
        let client = new MongoClient(this.url);
        let data = {}
        try {
            data = await client.db(this.DatabaseName).collection(this.CollectionName).find(query).toArray();
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }

    updateOneDocument = async (query, newValues) => {
        let client = new MongoClient(this.url);
        let data = {}
        let values = { $set: newValues }
        try {
            data = await client.db(this.DatabaseName).collection(this.CollectionName).updateOne(query, values);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }

    deleteOneDocument = async (query) => {
        let client = new MongoClient(this.url);
        let data = {}
        try {
            data = await client.db(this.DatabaseName).collection(this.CollectionName).deleteOne(query);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }

    deleteManyDocuments = async (query) => {
        let client = new MongoClient(this.url);
        let data = {}
        try {
            data = await client.db(this.DatabaseName).collection(this.CollectionName).deleteMany(query);
        } catch (err) { console.error(err); } // catch any mongo error here
        finally { client.close(); } // make sure to close your connection after
        return data;
    }
}
