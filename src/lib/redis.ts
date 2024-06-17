import Redis from "ioredis"

import { env } from "@/env.mjs"

const client = new Redis(env.REDIS_URL)

export const redis = client
