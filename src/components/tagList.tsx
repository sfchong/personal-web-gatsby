import React from 'react';
import { Node } from 'types/markdown';

interface TagListProps {
  nodes: Node[];
  selectedTag: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TagList = ({ nodes, selectedTag, onClick }: TagListProps) => {
  const tagSet = new Set<string>();
  nodes.forEach((node) =>
    node.frontmatter.tags.forEach((tag) => tagSet.add(tag))
  );
  const tagList = [...tagSet].sort();

  return (
    <div className="blog-tag-filter-container">
      {tagList &&
        tagList.map((tag, index) => {
          const isSelected = selectedTag === tag ? 'active' : '';
          return (
            <button
              className={`blog-tag blog-tag-filter ${isSelected}`}
              value={tag}
              onClick={onClick}
              key={index}
              type="button"
            >
              {tag}
            </button>
          );
        })}
    </div>
  );
};

export default TagList;
