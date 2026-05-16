import { z } from "zod"

export const userSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório!"),
    email: z.string().min(1, "Email é obrigatório!"),
    age: z.string().min(1, "Idade é obrigatória!"),

})

export type userSchema = z.infer<typeof userSchema>

export interface Users {
    name: string;
    email: string,
    age: number,
    id: string
}
