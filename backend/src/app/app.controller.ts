import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { INotes } from 'src/interfaces';
import { MongoDbService } from 'src/mongo-db/mongo-db.service';

@Controller('app')
export class AppController {
    constructor(private mongoDb: MongoDbService) { }

    @Get("/notes")
    async getAllNotes() {
        let Notes: INotes[] | [] | {};
        try {
            Notes = await this.mongoDb.findAllDocuments();
        } catch (err) {
            console.log("Some error occured!!!: ", err);
            Notes = [];
        };
        return Notes;
    }
    @Post("/notes/save")
    async CreateNotes(@Body() body: INotes) {
        let result: INotes[] | [] | {};
        try {
            result = await this.mongoDb.insertOneDocument(body);
        } catch (err) {
            console.log("Some error occured!!!: ", err);
        }
        return result;
    }
    @Get("/note/:id")
    async getNote(@Req() req: any) {
        let Notes: INotes[] | any;
        let title = decodeURIComponent(req.params.id);
        try {
            Notes = await this.mongoDb.findAllDocuments();
        } catch (err) {
            console.log("Some error occured!!!: ", err);
            Notes = [];
        };
        Notes = Notes.filter(el => el.Title.includes(title));
        return Notes;
    }
    @Delete("/note/delete/:id")
    async deleteNote(@Param() id: string) {
        let Notes: INotes | [] | {};
        try {
            Notes = await this.mongoDb.deleteOneDocument({ _id: new ObjectId(id) });
        } catch (err) {
            console.log("Some error occured!!!: ", err);
            Notes = {};
        };
        return Notes;
    }

    @Patch("/note/update/:id")
    async updateNote(@Param() id: string, @Body() body: INotes) {
        let Notes: INotes | [] | {};
        try {
            Notes = await this.mongoDb.updateOneDocument({ _id: new ObjectId(id) }, body);
        } catch (err) {
            console.log("Some error occured!!!: ", err);
            Notes = {};
        };
        return Notes;
    }
}
