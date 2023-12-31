import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Inference Servers",
    Svg: require("@site/static/img/illustration_server.svg").default,
    description: <>Deploy inference servers.</>,
  },
  {
    title: "Feature Store",
    Svg: require("@site/static/img/illustration_feature_store.svg").default,
    description: <>Easily organize and maintain your features.</>,
  },
  {
    title: "AutoML",
    Svg: require("@site/static/img/illustration_automl.svg").default,
    description: <>Automatically generate an inference server from features.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
