import React, { useEffect, useCallback } from "react";
import { Row, Col, Tabs } from "antd";

import Tags from "../content/tag";
import Article from "../content/article";
import { useSelector, useDispatch } from "react-redux";
import { articlePending, removeArticle } from "../../actions/article";

const { TabPane } = Tabs;

function Content() {
  //Redux Article
  const article = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    //Fetch article api
    dispatch(articlePending(10, 0, ""));
  }, [dispatch]);

  //Handle Page Change
  const onPageChange = useCallback(
    (pagination, tag) => {
      window.scroll(0, 0);
      dispatch(
        articlePending(10, pagination, tag.includes("Global Feed") ? "" : tag)
      );
    },
    [dispatch]
  );

  //Handle Tab Change - remove tab
  const onTabChange = useCallback(
    (tag) => {
      console.log(tag);
      return dispatch(removeArticle(tag));
    },
    [dispatch]
  );

  //Check null data
  if (article.tabs.data === null) {
    return <div> Loading...</div>;
  }
  return (
    <div className="content">
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
          <Tabs activeKey={article.tabs.defaultTab} onChange={onTabChange}>
            {article.tabs.data.length > 0 &&
              article.tabs.data.map((data) => (
                <TabPane key={data.tag} tab={data.tag}>
                  <Article
                    //key={index}
                    articles={data.content}
                    tag={data.tag}
                    pagination={article.pagination}
                    handlePageChange={onPageChange}
                  />
                </TabPane>
              ))}
          </Tabs>
        </Col>
        <Col className="gutter-row" span={6}>
          <Tags />
        </Col>
      </Row>
    </div>
  );
}
export default Content;
