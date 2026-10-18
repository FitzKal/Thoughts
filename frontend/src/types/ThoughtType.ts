export interface ThoughtType{
    id: number,
    name: string,
    description: string,
    dateOfCreation: Date,
    dateDue: Date,
    stateOfProgress: "IN_PROGRESS" | "EXPIRED" | "DONE",

}

export interface postThoughtData{
    name:string,
    dateOfCreation?: Date,
    dateDue:Date,
    description?:string,
    stateOfProgress?:"DONE" | "IN_PROGRESS" | "EXPIRED"
}
