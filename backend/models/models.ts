export enum WordType {
    SUSTANTITVO = 0,
    PRONOMBRE,
    ADJETIVO,
    VERBO,
    ADVERBIO,
}

export enum VerbType {
    NONE,
    REGULAR,
    IRREGULAR
}

export interface WordObject {
    id: string;
    name: string;
    definition: string;
    description: string;
    imageURL: string;
    videoURL: string;
    type: WordType;
    conjugation: VerbType;
}