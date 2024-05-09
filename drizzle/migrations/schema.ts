import { pgTable, unique, pgEnum, smallint, text, foreignKey, uuid, timestamp, bigint, boolean, time } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const equalityOp = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])


export const access = pgTable("access", {
	level: smallint("level").primaryKey().notNull(),
	details: text("details"),
	domain: text("domain"),
},
(table) => {
	return {
		accessLevelKey: unique("access_level_key").on(table.level),
	}
});

export const analytics = pgTable("analytics", {
	userId: uuid("user_id").primaryKey().notNull().references(() => profile.id),
	device: text("device"),
	fcmToken: text("fcm_token"),
});

export const account = pgTable("account", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	email: text("email").notNull(),
	institute: text("institute").notNull().references(() => institute.name),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	accessLevel: smallint("access_level").notNull().references(() => access.level),
});

export const institute = pgTable("institute", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").notNull(),
	fullName: text("full_name").notNull(),
	domain: text("domain").notNull(),
},
(table) => {
	return {
		instituteNameKey: unique("institute_name_key").on(table.name),
		instituteFullNameKey: unique("institute_full_name_key").on(table.fullName),
		instituteDomainKey: unique("institute_domain_key").on(table.domain),
	}
});

export const profile = pgTable("profile", {
	id: uuid("id").primaryKey().notNull().references(() => account.id),
	username: text("username"),
	fullName: text("full_name"),
	image: text("image"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	semester: bigint("semester", { mode: "number" }).notNull(),
	branch: text("branch").notNull(),
	group: text("group"),
	programme: text("programme").notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	year: bigint("year", { mode: "number" }).notNull(),
	institute: text("institute").notNull().references(() => institute.name),
	visibility: boolean("visibility").default(true).notNull(),
	mess: smallint("mess"),
});

export const clubs = pgTable("clubs", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").notNull(),
	type: text("type").notNull(),
	field: text("field").notNull(),
	image: text("image"),
	coordinator: uuid("coordinator").references(() => profile.id),
	cocoordinator: uuid("cocoordinator").references(() => profile.id),
	institute: text("institute").notNull().references(() => institute.name),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	members: bigint("members", { mode: "number" }).default(0).notNull(),
},
(table) => {
	return {
		clubsIdKey: unique("clubs_id_key").on(table.id),
	}
});

export const mess = pgTable("mess", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	messNo: smallint("mess_no").notNull(),
	day: smallint("day").notNull(),
	breakfast: text("breakfast").notNull(),
	lunch: text("lunch").notNull(),
	dinner: text("dinner").notNull(),
	institute: text("institute").notNull().references(() => institute.name),
});

export const courses = pgTable("courses", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	institute: text("institute").notNull().references(() => institute.name),
	courseCode: text("course_code").notNull(),
	courseTitle: text("course_title").notNull(),
	theory: boolean("theory").notNull(),
	lab: boolean("lab").notNull(),
	type: text("type").notNull(),
	credits: smallint("credits").notNull(),
	semester: smallint("semester").notNull(),
	branch: text("branch").notNull(),
});

export const routine = pgTable("routine", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	courseId: uuid("course_id").notNull().references(() => courses.id),
	courseCode: text("course_code").notNull(),
	courseTitle: text("course_title").notNull(),
	prof: text("prof").notNull(),
	type: text("type").default('theory').notNull(),
	day: smallint("day").notNull(),
	from: time("from").notNull(),
	to: time("to").notNull(),
	group: text("group").default('').notNull(),
	branch: text("branch").notNull(),
	institute: text("institute").notNull().references(() => institute.name),
	room: text("room").notNull(),
	semester: smallint("semester").notNull(),
},
(table) => {
	return {
		routineIdKey: unique("routine_id_key").on(table.id),
	}
});