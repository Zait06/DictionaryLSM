import { WordObject, WordType, VerbType } from "./models";

export class WordSchema {
    id: string;
    name: string;
    definition: string;
    description: string;
    imageURL: string;
    videoURL: string;
    type: WordType;
    conjugation: VerbType;

    static fromObject(json: WordObject): WordSchema {
        let ws = new WordSchema();
        ws.id = json.id;
        ws.name = json.name;
        ws.definition = json.definition;
        ws.description = json.description;
        ws.imageURL = json.imageURL;
        ws.videoURL = json.videoURL;
        ws.type = json.type;
        ws.conjugation = json.conjugation;
        return ws;
    }

    toJSON(): WordObject {
        return {
            id: this.id,
            name: this.name,
            definition: this.definition,
            description: this.description,
            imageURL: this.imageURL,
            videoURL: this.videoURL,
            type: this.type,
            conjugation: this.conjugation
        };
    }
}