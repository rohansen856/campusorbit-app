import { Courses, Mess, Routine } from "@prisma/client"
import axios from "axios"

export class HelperFunctions {
  static getRoutineToday = {
    initial: "Getting your routines now...",
    async function() {
      try {
        const { data } = await axios.get("/api/routine/today")
        const { routine, changed } = data as {
          routine: Routine[]
          changed: boolean
        }
        const formattedAnswer = (
          <p>
            {" "}
            Today you have <b>{routine.length}</b> classes
            <b>
              {" "}
              {routine.map(
                (r) =>
                  `, ${r.course_title} (${r.class_type}) by prof. ${r.prof} in ${r.room}`
              )}
            </b>
            . There is <b>{changed ? "a change" : "no change"}</b> in today's
            classes
          </p>
        )
        return formattedAnswer
      } catch (error) {
        return <p>Sorry, Could not get today's classes!</p>
      }
    },
  }

  static getAllElectives = {
    initial: "Getting all your electives now...",
    async function() {
      try {
        const { data } = await axios.get("/api/courses/electives")
        const res = data as Courses[]
        const formattedAnswer = (
          <p>
            In this semester, you have <b>{res.length}</b> electives to choose
            from.{" "}
            {res.length > 0 && (
              <>
                these are
                <b>
                  {res.map(
                    (r) =>
                      `, ${r.course_title}(${r.course_code}, ${r.credits} cred.)`
                  )}
                </b>
              </>
            )}
          </p>
        )
        return formattedAnswer
      } catch (error) {
        return <p>Sorry, Could not get today's classes!</p>
      }
    },
  }

  static getMessToday = {
    initial: "Getting your mess menu now...",
    async function() {
      try {
        const { data } = await axios.get("/api/mess/today")
        const res = data as Mess
        const formattedAnswer = (
          <p>
            {" "}
            In todays mess menu (Mess {res.mess_no}) you have: Breakfast:
            {res.breakfast}, Lunch: {res.lunch}, Dinner: {res.dinner}
          </p>
        )
        return formattedAnswer
      } catch (error) {
        return <p>Sorry, Could not get the mess menu!</p>
      }
    },
  }

  static getBreakfastToday = {
    initial: "Getting your breakfast menu now...",
    async function() {
      try {
        const { data } = await axios.get("/api/mess/today")
        const res = data as Mess
        const formattedAnswer = (
          <p>
            In todays breakfast you have: <b>{res.breakfast}</b>
          </p>
        )
        return formattedAnswer
      } catch (error) {
        return <p>Sorry, Could not get the mess menu!</p>
      }
    },
  }

  static getLunchToday = {
    initial: "Getting your lunch menu now...",
    async function() {
      try {
        const { data } = await axios.get("/api/mess/today")
        const res = data as Mess
        const formattedAnswer = (
          <p>
            {" "}
            In todays breakfast you have: <b>{res.lunch}</b>
          </p>
        )
        return formattedAnswer
      } catch (error) {
        return <p>Sorry, Could not get the mess menu!</p>
      }
    },
  }

  static getDinnerToday = {
    initial: "Getting your dinner menu now...",
    async function() {
      try {
        const { data } = await axios.get("/api/mess/today")
        const res = data as Mess
        const formattedAnswer = (
          <p>
            {" "}
            In todays dinner you have: <b>{res.dinner}</b>
          </p>
        )
        return formattedAnswer
      } catch (error) {
        return <p>Sorry, Could not get the mess menu!</p>
      }
    },
  }
}
