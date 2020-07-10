import React from "react";
import { Card, Tag } from "antd";

function Tags({ tagList, handleTagClick }) {
  return (
    <Card title="Popular Tags" bordered={false}>
      {tagList.length > 0
        ? tagList.map((tag) => {
            return (
              <Tag key={tag}>
                <div
                  className="tag"
                  onClick={() => {
                    handleTagClick(tag);
                  }}
                >
                  {tag}
                </div>
              </Tag>
            );
          })
        : "No exists tag"}
    </Card>
  );
}
export default Tags;
