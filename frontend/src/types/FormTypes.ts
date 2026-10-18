import {z} from "zod";

export const thoughtCreationSchema = z.object({
    id:z.number(),
    name:z.string().min(3,"The name of the thought should be minimum 3 characters"),
    dateOfCreation:z.date(),
    dateDue:z.date(),
    description:z.string(),
    stateOfProgress:z.enum(["DONE","IN_PROGRESS","EXPIRED"])

})

export type thoughtCreationType = z.infer<typeof thoughtCreationSchema>