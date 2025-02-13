import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  dueDate: timestamp("due_date"),
  priority: varchar("priority", { length: 50 }),
  status: varchar("status", { length: 50 }).default("pending"),
  userId: varchar("user_id", { length: 255 }).notNull(), // ✅ Changed from serial to varchar
});
