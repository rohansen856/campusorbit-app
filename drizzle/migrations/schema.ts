import { sql } from "drizzle-orm"
import {
    bigint,
    boolean,
    pgEnum,
    pgTable,
    smallint,
    text,
    timestamp,
    unique,
    uuid,
} from "drizzle-orm/pg-core"

export const keyStatus = pgEnum("key_status", [
    "default",
    "valid",
    "invalid",
    "expired",
])
export const keyType = pgEnum("key_type", [
    "aead-ietf",
    "aead-det",
    "hmacsha512",
    "hmacsha256",
    "auth",
    "shorthash",
    "generichash",
    "kdf",
    "secretbox",
    "secretstream",
    "stream_xchacha20",
])
export const factorType = pgEnum("factor_type", ["totp", "webauthn"])
export const factorStatus = pgEnum("factor_status", ["unverified", "verified"])
export const aalLevel = pgEnum("aal_level", ["aal1", "aal2", "aal3"])
export const codeChallengeMethod = pgEnum("code_challenge_method", [
    "s256",
    "plain",
])

export const profiles = pgTable(
    "profiles",
    {
        id: uuid("id").primaryKey().notNull(),
        createdAt: timestamp("created_at", {
            withTimezone: true,
            mode: "string",
        }),
        email: text("email"),
        username: text("username"),
        fullName: text("full_name"),
        branch: text("branch"),
        sem: smallint("sem").default(2),
        mess: smallint("mess"),
        year: smallint("year"),
        roll: smallint("roll"),
        visibility: boolean("visibility").default(true),
    },
    (table) => {
        return {
            profilesEmailKey: unique("profiles_email_key").on(table.email),
            profilesUsernameKey: unique("profiles_username_key").on(
                table.username
            ),
        }
    }
)

export const routine = pgTable("routine", {
    id: uuid("id").primaryKey().notNull(),
    type: text("type"),
    code: text("code"),
    prof: text("prof"),
    from: smallint("from"),
    to: smallint("to"),
    day: smallint("day"),
    sem: smallint("sem"),
    branch: text("branch"),
    room: text("room"),
})

export const mess = pgTable("mess", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    messNo: smallint("mess_no"),
    day: smallint("day"),
    breakfast: text("breakfast").default(""),
    lunch: text("lunch").default(""),
    dinner: text("dinner").default(""),
})

export const routineModificatins = pgTable("routine_modificatins", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
        .defaultNow()
        .notNull(),
    classId: text("class_id").notNull(),
    status: text("status"),
})
