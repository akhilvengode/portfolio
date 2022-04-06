import { useRef } from "react";
import { Heading, Card } from "../../components";
import styles from "./index.module.css";

const projects = [
  {
    title: "Calculator",
    img: `${process.env.PUBLIC_URL}/projects/calculator.png`,
    url: "https://akhilvengode.github.io/Calculator/",
  },
  {
    title: "Job Listing",
    img: `${process.env.PUBLIC_URL}/projects/jobs.png`,
    url: "https://akhilvengode.github.io/jobs/",
  },
  {
    title: "3d Rotation",
    img: `${process.env.PUBLIC_URL}/projects/3danimation.png`,
    url: "https://akhilvengode.github.io/slider/",
  },
  {
    title: "Calculator",
    img: `${process.env.PUBLIC_URL}/projects/calculator.png`,
    url: "https://akhilvengode.github.io/Calculator/",
  },
  {
    title: "Calculator",
    img: `${process.env.PUBLIC_URL}/projects/calculator.png`,
    url: "https://akhilvengode.github.io/Calculator/",
  },
  {
    title: "Calculator",
    img: `${process.env.PUBLIC_URL}/projects/calculator.png`,
    url: "https://akhilvengode.github.io/Calculator/",
  },
];

export const Home = () => {
  const cursorRef = useRef(null);
  const cursor = <div ref={cursorRef} className={styles.cursor} />;

  const animateCursor = (event) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${event.pageX - 13}px, ${
        event.pageY - 13
      }px)`;
      //   event.currentTarget.style.backgroundImage = `linear-gradient(${Math.floor(
      //     Math.random() * 180
      //   )}deg, rgb(235, 51, 73), rgb(244, 92, 67))`;
      //   event.currentTarget.style.backgroundPosition = `${Math.floor(
      //     Math.random() * 100
      //   )}% ${Math.floor(Math.random() * 100)}%`;
      //   event.currentTarget.style.background = `linear-gradient(rgb(235, 51, 73), rgb(244, 92, 67))`;
      //   event.currentTarget.style.backgroundColor = "green";
    }
  };
  const textArr = ["F", "r", "o", "n", "t"];

  return (
    <div>
      <div className={styles.home__section1} onMouseMove={animateCursor}>
        {cursor}
        {/* <div className={styles.animationfloor}>
          {new Array(100).fill(0).map((_, idx) => (
            <div key={idx} />
          ))}
        </div> */}
        <Heading textAlign="center">Front-end Developer</Heading>
        {/* <Heading textAlign="center">
          {textArr.map((el, idx) => (
            <span className={styles.letter} key={idx}>
              {el}
            </span>
          ))}
        </Heading> */}
        <p>I love to create beautiful user interfaces</p>
        <div className={styles["home__profile-photo-container"]}>
          <div className={styles["home__profile-photo"]}>
            <img
              src={`${process.env.PUBLIC_URL}/akhil.jpg`}
              alt="Profile pic"
            />
          </div>
        </div>
      </div>
      <div className={styles.home__section2}>
        <section className={styles["home__profile-info"]}>
          <article>
            <Heading textAlign="center" varient="h2">
              Hi, I'm Akhil M L. Nice to meet you
            </Heading>
            <p>
              I have been working as a front-end developer for the past 3.5
              years. I have worked in several projects where I collaborated with
              talended people to design and create beautiful user
              interfaces.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </article>
        </section>
      </div>
      <div className={styles.home__section3}>
        <Heading varient="h2" textAlign="center">
          Projects and Experiments
        </Heading>
        <div className={styles.home__projects}>
          {projects.map(({ title, img, url }, index) => (
            <Card key={index} image={img} title={title} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};
