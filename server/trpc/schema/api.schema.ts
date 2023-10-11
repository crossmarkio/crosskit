import { object, string, TypeOf, number, boolean, date, array } from "zod";

export const addToNewsletterSchema = object({
  email: string().email(),
});

export const addToNewsletterOutputSchema = object({
  id: number(),
  email: string(),
  sub: boolean(),
  createdAt: date(),
  updatedAt: date(),
});

export const addToBetaSchema = object({
  firstName: string(),
  lastName: string(),
  email: string().email(),
  github: string(),
  project_name: string(),
  project_website: string(),
  project_social: string(),
  Q1: string(),
  Q2: string(),
  Q3: string(),
  Q4: string(),
  Q5: string(),
});

export const getTxnsTypesOutputSchema = object({
  types: array(string().optional()),
});
export const getTxnSampleOutputSchema = object({
  sample: string().optional(),
});
export const getTxnSampleInputSchema = object({
  type: string().optional(),
});

export const addToBetaOutputSchema = object({
  id: number(),
  email: string(),
  createdAt: date(),
  updatedAt: date(),
});

export type AddToNewsletterInput = TypeOf<typeof addToNewsletterSchema>;
export type AddToNewsletterOutput = TypeOf<typeof addToNewsletterOutputSchema>;
export type AddToBetaInput = TypeOf<typeof addToBetaSchema>;
export type addToBetaOutput = TypeOf<typeof addToBetaOutputSchema>;
