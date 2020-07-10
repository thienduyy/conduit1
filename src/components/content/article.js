import React from "react";
import { List, Avatar, Badge, Button, Space, Pagination } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Article({ articles, tag, pagination, handlePageChange }) {
  console.log(articles);
  return (
    <div className="article">
      {/* <Tabs activeKey="Global Feed" onChange={handleTabChange}>
        <TabPane tab={tag} key={tag}> */}
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articles.articles}
        renderItem={(item) => (
          <List.Item
            key={item.createdAt}
            actions={[
              <Space>
                <span className="font-sm">Read more ...</span>
              </Space>,
            ]}
            extra={
              <div className="icons">
                <Badge
                  count={item.favoritesCount}
                  style={{ backgroundColor: "#52c41a" }}
                >
                  <Button icon={<HeartFilled style={{ color: "#52c41a" }} />} />
                </Badge>
              </div>
            }
          >
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

      <div className="paginate-wrapper">
        <Pagination
          current={pagination}
          showSizeChanger={false}
          showTotal={(total) => `Total ${total} items`}
          onChange={(pagination) => {
            handlePageChange(pagination, tag);
          }}
          total={articles.articlesCount}
        />
      </div>
      {/* </TabPane>
      </Tabs> */}
    </div>
  );
}
export default Article;
