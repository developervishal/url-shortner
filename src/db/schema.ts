import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const urlsTable = pgTable("urls", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  shortUrl: varchar({ length: 8 }).notNull().unique(),
  originalUrl: text().notNull(),
  createdAt: timestamp()
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  clicks: integer().default(0),
});
