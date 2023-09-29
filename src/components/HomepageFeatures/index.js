import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("@site/static/img/illustration_getting_started.svg").default,
    description: <>Get your Machine Learning project up and running.</>,
    slug: "/docs/category/getting-started",
  },
  {
    title: "Feature Store",
    Svg: require("@site/static/img/illustration_feature_store.svg").default,
    description: <>Easily organize and maintain your features.</>,
    slug: "/docs/category/feature-store",
  },
  {
    title: "AutoML",
    Svg: require("@site/static/img/illustration_automl.svg").default,
    description: <>Automatically generate an inference server from features.</>,
    slug: "/docs/category/automl",
  },
];

function Feature({ Svg, title, description, slug }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
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
