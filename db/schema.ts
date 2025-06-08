// db/schema.ts
import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  category: text("category").notNull(), // now a simple text field
  date: text("date").notNull(), // ISO string (e.g., '2025-06-08')
  amount: real("amount").notNull(),
  type: text("type", { enum: ["expense", "income"] }).notNull(),
  note: text("note"),
});
