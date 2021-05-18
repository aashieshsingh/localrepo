import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Row, Col, Carousel } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

function Content2(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? "bottom" : "left",
    one: isMobile
      ? {
          scaleY: "+=0.3",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        }
      : {
          x: "+=30",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        },
  };
  const img = (
    <TweenOne
      key="img"
      animation={animType.one}
      resetStyle
      {...dataSource.imgWrapper}
      component={Col}
      componentProps={{
        md: dataSource.imgWrapper.md,
        xs: dataSource.imgWrapper.xs,
      }}
    >
      <Carousel autoplay className={dataSource.img.className}>
        {dataSource.img.children.map((child) => (
          <div>
            <img src={child} width="100%" alt="img" />
          </div>
        ))}
      </Carousel>
    </TweenOne>
  );
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        {/* {isMobile && img} */}
        <QueueAnim
          type={animType.queue}
          key="text"
          leaveReverse
          ease={["easeOutCubic", "easeInCubic"]}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          {dataSource.content.children.map((child) => (
            <div key="p" {...dataSource.content}>
              {child}
            </div>
          ))}
        </QueueAnim>
        {/* {!isMobile && img} */}
        {img}
      </OverPack>
    </div>
  );
}

export default Content2;
