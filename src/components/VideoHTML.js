import React from "react"
import HighPointVideo from "../assets/hightpointdraft.mp4"

export default () => (
  <video controls autoPlay muted>
    <source src={HighPointVideo} type="video/mp4" />
  </video>
)