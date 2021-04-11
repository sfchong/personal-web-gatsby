import React from "react"
import { FaRegCalendarAlt, FaHistory, FaBookReader } from "react-icons/fa"

export const BlogDateIcon = (props) => {
  return (
    <span className="blog-icon-seperator">
      <FaRegCalendarAlt className="blog-icon" />
      <span>{props.date}</span>
    </span>
  )
}

export const BlogHistoryIcon = (props) => {
  return (
    <span className="blog-icon-seperator">
      <FaHistory className="blog-icon" />
      <span>{props.fromNow}</span>
    </span>
  )
}

export const BlogTimeIcon = (props) => {
  return (
    <span>
      <FaBookReader className="blog-icon" />
      <span>{props.timeToRead} min read</span>
    </span>
  )
}
