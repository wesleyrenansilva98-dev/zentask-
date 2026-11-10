import { z } from "zod";

export const inputRegisterTask = z.object({
  taskname: z.string({error: "preencha o nome"}).trim().min(3, "nome muito curto").max(60, "nome muito longo"),
  description: z.string({error: "descrição inválida"}).trim().max(250, "descrição muito longa").optional(),
  progress: z.int({error: "progresso deve ser número inteiro"}).min(0, "mínimo 0%").max(100, "máximo 100%").default(0)
});

export const inputCompletedTask = z.object({
  task_id: z.int({error: "id inválido"}).min(1, "id inválido"),
  completed: z.boolean({error: "completed precisar true ou false"})
});

export const inputProgressTask = z.object({
  task_id: z.int({error: "id inválido"}).min(1, "id inválido"),
  progress: z.int({error: "progresso deve ser número inteiro"}).min(0, "mínimo 0%").max(100, "máximo 100%").default(0)
});

export const inputTaskId = z.object({
  task_id: z.int({error: "id inválido"}).min(1, "id inválido")
})