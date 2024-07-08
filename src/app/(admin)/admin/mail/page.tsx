import nodemailer from "nodemailer"

export default async function Mail() {
  try {
    const auth = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const receiver = {
      from: process.env.SMTP_MAIL,
      to: "23bcs212@iiitdmj.ac.in",
      subject: "Node Js Mail Testing!",
      text: "Hello this is a text mail!",
    }

    auth.sendMail(receiver, (error, emailResponse) => {
      if (error) throw error
      console.log("success!")
      return "success"
    })
  } catch (error) {
    return JSON.stringify(error, null, 2)
  }
}
