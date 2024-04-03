const { z } = require("zod");

const registerSchema = z.object({
  email: z
    .string({ required_error: "Debe ser un String!" })
    .email({ message: "Debe ser un email valido!" }),
  password: z
    .string({ required_error: "Debe ser un String!" })
    .min(6, { message: "Debe tener al menos 6 caracteres!" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Debe ser un String!" })
    .email({ message: "Debe ser un email valido!" }),
  password: z
    .string({ required_error: "Debe ser un String!" })
})
module.exports = { registerSchema, loginSchema };