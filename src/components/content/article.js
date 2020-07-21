import React from "react";
import { List, Avatar, Badge, Button, Space, Pagination, Tag } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Article({ articles, tag, pagination, handlePageChange }) {
  /* useEffect(() => {
    console.log("1", articles);
  }, [articles]); */
  console.log("data", articles);
  return (
    <div className="article">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articles.articles}
        renderItem={(item) => (
          <List.Item
            key={item.createdAt}
            actions={[
              // Bottom
              <Space>
                <span className="font-sm">Read more ...</span>
              </Space>,
            ]}
            //Favorite and tag list
            extra={
              <div className="icons">
                {/* Favorite */}
                <div className="favorite">
                  <Badge
                    count={item.favoritesCount}
                    style={{ backgroundColor: "#52c41a" }}
                  >
                    <Button
                      icon={<HeartFilled style={{ color: "#52c41a" }} />}
                    />
                  </Badge>
                </div>
                {/* Tag List */}
                <div className="content-tag">
                  {item.tagList.length > 0
                    ? item.tagList.map((tag) => {
                        return (
                          <Tag color="lime" key={tag}>
                            {tag}
                          </Tag>
                        );
                      })
                    : ""}
                </div>
              </div>
            }
          >
            {/* Content */}
            <List.Item.Meta
              avatar={<Avatar src={item.author.image} />}
              title={<a href="/">{item.author.username}</a>}
              description={item.createdAt}
            />
            <div className="content-main">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </List.Item>
        )}
      />
      {/* Pagination */}
      <div className="paginate-wrapper">
        <Pagination
          current={pagination}
          showSizeChanger={false}
          showTotal={(total) => `Total ${total} items`}
          onChange={(pagination) => {
            handlePageChange(pagination, tag);
          }}
          total={500}
        />
      </div>
      {/* </TabPane>
      </Tabs> */}
    </div>
  );
}
export default Article;
