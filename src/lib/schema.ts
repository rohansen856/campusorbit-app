import {
  bigint,
  boolean,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core"

export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey().notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
    email: text("email"),
    username: text("username"),
    fullName: text("full_name"),
    branch: text("branch"),
    sem: smallint("sem"),
    mess: smallint("mess"),
    year: smallint("year"),
    roll: smallint("roll"),
    visibility: boolean("visibility").default(true),
    group: text("group"),
  },
  (table) => {
    return {
      profilesEmailKey: unique("profiles_email_key").on(table.email),
      profilesUsernameKey: unique("profiles_username_key").on(table.username),
    }
  }
)

export const routine = pgTable("routine", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  type: text("type"),
  code: text("code"),
  prof: text("prof"),
  from: smallint("from"),
  to: smallint("to"),
  day: smallint("day"),
  sem: smallint("sem"),
  branch: text("branch"),
  room: text("room"),
  group: text("group").default("B"),
})

export const analytics = pgTable(
  "analytics",
  {
    id: uuid("id")
      .primaryKey()
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    device: text("device"),
    fcmToken: text("fcm_token"),
  },
  (table) => {
    return {
      analyticsIdKey: unique("analytics_id_key").on(table.id),
    }
  }
)

export const mess = pgTable("mess", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  messNo: smallint("mess_no"),
  day: smallint("day"),
  breakfast: text("breakfast").default(""),
  lunch: text("lunch").default(""),
  dinner: text("dinner").default(""),
  timings: jsonb("timings").default({
    lunch: "12:30 - 2:30",
    dinner: "7:30 - 9:30",
    breakfast: "7:30 - 9:30",
  }),
})

export const routineModifications = pgTable(
  "routine_modifications",
  {
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    classId: text("class_id").notNull(),
    status: text("status"),
    id: uuid("id").defaultRandom().primaryKey().notNull(),
  },
  (table) => {
    return {
      routineModificationsIdKey: unique("routine_modifications_id_key").on(
        table.id
      ),
    }
  }
)

export const testers = pgTable("testers", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }).notNull(),
})

export const credits = pgTable(
  "credits",
  {
    sem: integer("sem"),
    branch: varchar("branch", { length: 50 }),
    subjectName: varchar("subject_name", { length: 100 }),
    credits: integer("credits"),
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    prof: text("prof"),
  },
  (table) => {
    return {
      creditsIdKey: unique("credits_id_key").on(table.id),
    }
  }
)
