import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import axios from "axios"

import { db } from "@/lib/db"
import { absoluteUrl } from "@/lib/utils"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")
  const clientId = process.env.GOOGLE_CLIENT_ID // Set in .env.local
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET // Set in .env.local
  const redirectUri = absoluteUrl("/api/auth/callback") // Your redirect URI

  try {
    const response = await axios.post(
      "https://oauth2.googleapis.com/token",
      null,
      {
        params: {
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        },
      }
    )

    const { access_token } = response.data

    // Optionally fetch user profile data
    const userResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    )

    const googleUser = userResponse.data as {
      id: string
      email: string
      verified_email: boolean
      name: string
      given_name: string
      family_name: string
      picture: string
    }

    const institutes = await db.institute.findMany({
      select: {
        name: true,
        domain: true,
      },
    })

    const userData = await db.account.findFirst({
      where: {
        email: googleUser.email,
      },
      include: {
        profile: {
          select: {
            image: true,
          },
        },
      },
    })

    const userCookie = {
      id: userData?.id,
      email: googleUser.email,
      name: googleUser.name,
      image: userData?.profile?.image ?? googleUser.picture,
    }

    if (userData) {
      // Set cookie or session with user info
      cookies().set("user", JSON.stringify(userCookie), { httpOnly: true })

      return NextResponse.redirect(absoluteUrl("/dashboard"))
    }

    const userInstitute = institutes.find((data) =>
      googleUser.email.endsWith(data.domain)
    )

    if (!userInstitute)
      return NextResponse.redirect(absoluteUrl("/no-institute"))

    await db.account.create({
      data: {
        email: googleUser.email,
        institute: userInstitute.name,
      },
    })

    // Set cookie or session with user info
    cookies().set("user", JSON.stringify(userCookie), { httpOnly: true })

    return NextResponse.redirect(absoluteUrl("/create-profile"))
  } catch (error) {
    console.error("Error during Google login:", error)
    return NextResponse.redirect(absoluteUrl("/login"))
  }
}
