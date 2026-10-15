import {z} from "zod";

export const thoughtCreationSchema = z.object({
    id:z.number(),
    name:z.string().min(3,"The name of the thought should be minimum 3 characters"),
    date:z.date(),
    description:z.string()

})

export type thoughtCreationType = z.infer<typeof thoughtCreationSchema>