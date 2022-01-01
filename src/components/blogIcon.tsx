import React from 'react';
import { FaRegCalendarAlt, FaHistory, FaBookReader } from 'react-icons/fa';

export const BlogDateIcon = ({ date }: { date: string }) => (
  <span className="blog-icon-seperator">
    <FaRegCalendarAlt className="blog-icon" />
    <span>{date}</span>
  </span>
);

export const BlogHistoryIcon = ({ fromNow }: { fromNow: string }) => (
  <span className="blog-icon-seperator">
    <FaHistory className="blog-icon" />
    <span>{fromNow}</span>
  </span>
);

export const BlogTimeIcon = ({ timeToRead }: { timeToRead: number }) => (
  <span>
    <FaBookReader className="blog-icon" />
    <span>{timeToRead} min read</span>
  </span>
);
