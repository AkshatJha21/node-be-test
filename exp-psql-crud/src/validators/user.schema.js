import z from "zod";

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Too short!").optional(),
        email: z.email().optional(),
        age: z.number().int().positive().optional()
    }),
    params: z.object({
        id: z.string().regex(/^\d+$/, "Invalid user id")
    })
});