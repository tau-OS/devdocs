import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  href: string;
  linkTitle: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Human Interface Guidelines",
    Svg: require("@site/static/img/human_interface_guidelines.svg").default,
    description: (
      <>
        The Human Interface Guidelines are the primary source of design
        documentation for those creating software designed for tauOS.
      </>
    ),
    linkTitle: "Read HIG",
    href: "/docs/hig",
  },
  {
    title: "Dedicated to Open Source",
    Svg: require("@site/static/img/open_source.svg").default,
    description: (
      <>
        Fyra Labs is dedicated to open source, and all our source code is
        publicly available on GitHub.
      </>
    ),
    linkTitle: "View our GitHub",
    href: "https://github.com/tau-OS",
  },
];

function Feature({ title, Svg, description, href, linkTitle }: FeatureItem) {
  return (
    <div className={clsx("col col--4 link")}>
      <a href={href} className={styles.link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className={styles.more}>{linkTitle}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
