import { Button, Image } from "./../../components";

import reactLogo from "../../assets/images/icons/react.svg";

export default function Home() {
  return (
    <Button
      onClick={() => {
        console.log("clicked");
      }}
    >
      Home
      <Image src={reactLogo} alt="React Logo" />
    </Button>
  );
}
