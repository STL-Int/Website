import React from "react"

export default class ScreenDimension extends React.Component {
  static Width() {
    if (typeof window !== "undefined") {
      screen_width = window.innerWidth
    } else {
      screen_width = 300
    }

    return { screen_width }
  }

  static Height() {
    if (typeof window !== "undefined") {
      screen_height = window.innerHeight
    } else {
      screen_height = 400
    }

    return { screen_height }
  }

  static Full() {
    if (typeof window !== "undefined") {
      screen_width = window.innerWidth
      screen_height = window.innerHeight
    } else {
      screen_width = 300
      screen_height = 400
    }

    return { screen_width, screen_height }
  }
}
