import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import { Typing } from "motion-effect";
import { BsFillHeartFill } from "react-icons/bs";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Typing
          text={siteConfig.tagline}
          speed={5}
          conatinerStyle={{
            margin: "0 auto",
            justifyContent: "center",
            marginBottom: "16px",
            alignItems: "center",
          }}
          textStyle={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          cursor={
            <div style={{ alignSelf: "center", marginLeft: "12px" }}>
              <BsFillHeartFill
                style={{
                  fontSize: "1.5rem",
                  color: "#f183ba",
                  background: "transparent",
                }}
              />
            </div>
          }
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            阅读文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // @ts-ignore
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
