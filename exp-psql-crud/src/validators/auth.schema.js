import z from "zod";

export const registerSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name too short"),
        email: z.email("Invalid email"),
        password: z.string().min(8, "Password needs atleast 8 characters"),
        age: z.number().int().positive().optional()
    })
});

export const loginSchema = z.object({
    body: z.object({
        email: z.email("Invalid email"),
        password: z.string().min(1, "Password required")
    })
});