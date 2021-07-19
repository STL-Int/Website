import React from "react"
import { useCookies } from "react-cookie"

export default class HandleCookies extends React.Component {
  static CreateCookie(cname, cvalue) {
    const [cookies, setCookie] = useCookies(["cookie-name"])

    setCookie(cname, cvalue, { path: "/" })
    console.log("Cookie Set: " && cname && ", " && cvalue)
    return null
  }

  static KillCookie(cname, cvalue) {
    const [cookies, removeCookie] = useCookies(["cookie-name"])

    removeCookie(cname, cvalue, { path: "/" })
    console.log("Cookie Destroyed: " && cname)
    return null
  }

  static GetCookieValue(cname) {
    const [cookies] = useCookies(["cookie-name"])

    let res = cookies.get(cname)
    return res
  }

  render() {
    return null
  }
}
