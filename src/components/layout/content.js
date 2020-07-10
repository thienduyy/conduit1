import React, { useEffect, useState } from "react";
import { Row, Col, Tabs } from "antd";
import axios from "axios";
import { tagUrl, articleUrl } from "../../constants/api";

import Tags from "../content/tag";
import Article from "../content/article";

const { TabPane } = Tabs;

function Content() {
  const [tagList, setTagList] = useState([]);
  const [tabs, setTabs] = useState({ defaultTab: "Global Feed", data: [] });
  const [pagination, setPagination] = useState();

  useEffect(() => {
    //Tag List
    async function getTagList() {
      try {
        const { data } = await axios.get(tagUrl());
        data && setTagList(data.tags);
      } catch (err) {
        console.log(err);
      }
    }
    //Article List
    async function getArticleList() {
      try {
        const { data } = await axios.get(articleUrl(10, 0, ""));
        const initTabs = {
          defaultTab: "Global Feed",
          data: [
            {
              tag: "Global Feed",
              content: data,
            },
          ],
        };
        setTabs(initTabs);
      } catch (err) {
        console.log(err);
      }
    }
    getArticleList();
    getTagList();
  }, []);

  //Handle Page Change
  const onPageChange = async (pagination, tag) => {
    setPagination(pagination);
    try {
      let pageUrl = articleUrl(
        10,
        pagination,
        tag.includes("Global Feed") ? "" : tag
      );
      const { data } = await axios.get(pageUrl);
      console.log(pageUrl);
      //Clone new tab
      const newTabs = { ...tabs };
      //Go through each value check value == tag
      const articleIndex = newTabs.data.findIndex((index) => {
        return index.tag.includes(tag);
      });
      //add article content in data
      newTabs.data[articleIndex].content = data;
      setTabs(newTabs);
      console.log(pagination);
    } catch (err) {
      console.log(err);
    }
  };

  //Handle Tab Change - remove tab
  const onTabChange = (key) => {
    if (key.includes("Global Feed")) {
      const newTabs = { ...tabs };
      newTabs.data = newTabs.data.filter((value) =>
        value.tag.includes("Global Feed")
      );

      newTabs.defaultTab = "Global Feed";
      setTabs(newTabs);
    }
  };

  return (
    <div className="content">
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
          <Tabs activeKey={tabs.defaultTab} onChange={onTabChange}>
            {tabs.data.length &&
              tabs.data.map((data) => (
                <TabPane tab={data.tag} key={data.tag}>
                  {data.content.articlesCount > 0 ? (
                    <Article
                      articles={data.content}
                      tag={data.tag}
                      pagination={pagination}
                      handlePageChange={onPageChange}
                    />
                  ) : (
                    "No data"
                  )}
                </TabPane>
              ))}
          </Tabs>
        </Col>
        <Col className="gutter-row" span={6}>
          <Tags tagList={tagList} />
        </Col>
      </Row>
    </div>
  );
}
export default Content;
