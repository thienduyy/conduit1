import React, { useEffect } from "react";
import { Card, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { tagPending } from "../../actions/tag";
import { articlePending } from "../../actions/article";

function Tags() {
  //Redux Tag List
  const tagList = useSelector((state) => state.tag.tagList);
  const dispatch = useDispatch();

  useEffect(() => {
    // neu muon lam viec fetch du lieu trong nay, thi can phai co 1 middleware chuyen de xu ly async  - thunk hoac saga
    dispatch(tagPending());
  }, [dispatch]);

  //Handle Tag Click
  const handleTagClick = async (tag) => {
    dispatch(articlePending(10, 0, tag));
  };

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
