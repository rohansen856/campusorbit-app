import { Mess } from "@prisma/client"
import axios from "axios"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { env } from "@/env.mjs"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { redis } from "@/lib/redis"

export async function GET(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions)
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const userData = await db.profile.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        institute: true,
        mess: true,
      },
    })

    if (!userData) return new Response(null, { status: 403 })

    // const data = await axios.get(`${env.BACKEND_URL}/mess/today`, {
    //   params: {
    //     institute: userData.institute,
    //     mess_no: userData.mess,
    //     day: new Date().getDay() + 1,
    //   },
    // })

    // if (data)
    //   return new Response(JSON.stringify(data.data.menu[0]), { status: 200 })

    /**
     * @deprecated Moved to rust backend.
     */
    const cache = await redis.get(
      `mess-day${new Date().getDay()}-${userData.mess}-${userData.institute}`
    )

    /**
     * @deprecated Moved to rust backend.
     */
    const mess = cache
      ? (JSON.parse(cache) as Mess)
      : await db.mess
          .findFirst({
            where: {
              institute: userData.institute,
              mess_no: userData.mess ?? 1,
              day: new Date().getDay() + 1,
            },
          })
          .then((data) => {
            if (data)
              redis.set(
                `mess-day${new Date().getDay()}-${userData.mess}-${userData.institute}`,
                JSON.stringify(data),
                "EX",
                3600
              )
            return data
          })
    return new Response(JSON.stringify(mess), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
