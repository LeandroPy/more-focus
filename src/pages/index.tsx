import styles from "../styles/pages/Home.module.css";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChanllenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | More Focus</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChanllenges />
          <Countdown />
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}
