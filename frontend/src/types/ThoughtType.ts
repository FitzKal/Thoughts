import {z} from "zod";

export const thoughtSchema = {
    id:z.number(),
    name:z.string("The name should be minimum 3 characters long").min(3),
    description:z.string()
}

export type thoughtRequest = z.infer<typeof thoughtSchema>

export interface ThoughtType{
    id: number,
    name: string,
    description: string,
    date: Date
}