import Image from "next/image";
import styles from "./page.module.css";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

/* You can export default function like this, or you can do it with arrow function, followed by export default arrowFunctionName */
export default function Home() {
  return (
    <main>
      <Heading level={1} marginLeft={4}>Spotify</Heading>
      <Heading level={2}>Artists</Heading>
      <Heading level={3}>Songs</Heading>
      {/* You can skip intro={true}, because if intro is present, it is true(ish). */}
      <Paragraph intro marginBottom={10}>Lorem ipsum dolor sit amet</Paragraph>
      <Paragraph marginBottom={1}>Lorem ipsum dolor sit amet</Paragraph>
      <Paragraph marginBottom={5}>Lorem ipsum dolor sit amet</Paragraph>
      <Paragraph caption>Lorem ipsum dolor sit amet</Paragraph>
      Spotify app goes here.
    </main>
  );
}
