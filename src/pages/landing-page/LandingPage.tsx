import {
  Topbar,
  Container,
  Image,
  Banner,
  Button,
} from "./../../components/index";

import imgLandingPage0 from "./../../assets/images/land_page_img0.png";

import imgLandingPagePessoa0 from "./../../assets/images/land_page_pessoa0.png";
import imgLandingPagePessoa1 from "./../../assets/images/land_page_pessoa1.png";
import imgLandingPagePessoa2 from "./../../assets/images/land_page_pessoa2.png";

import { MdTranslate, MdTrendingUp, MdOutlineFactCheck } from "react-icons/md";

export default function LandingPage() {
  const itemsList = [
    {
      title: "Solicite traduções",
      icon: MdTranslate,
    },
    {
      title: "Treine seu idioma",
      icon: MdTrendingUp,
    },
    {
      title: "Realize projetos",
      icon: MdOutlineFactCheck,
    },
  ];

  const imgsList = [
    imgLandingPagePessoa0,
    imgLandingPagePessoa1,
    imgLandingPagePessoa2,
  ];

  return (
    <Container>
      <Topbar nonAuth />
      <Container className="flex items-center h-full w-full">
        <Container className="flex  w-full ml-40 pt-16">
          <Container>
            <h1 className="flex items-left text-3xl font-bold text-gray-700 w-80">
              Entre na comunidade de tradutores online
            </h1>
            <p className="text-gray-600 mx-0 w-60 ml-8 pt-4">
              Entre em uma plataforma livre e compartilhe traduções fluentes nas
              mais diversas línguas.
            </p>
          </Container>

          <Image
            src={imgLandingPage0}
            alt="landing-page-img0"
            className="h-76 w-4/12 mr-40"
          />
        </Container>
      </Container>

      <Banner itemsList={itemsList} />

      <Container className="flex items-center h-full w-full ">
        <Container className="flex  w-full ml-40 pt-16 mr-40">
          <Container>
            <h1 className="flex items-left text-3xl font-bold text-gray-700 w-80">
              Escreva textos com
            </h1>
            <span className="flex items-left text-3xl font-bold text-white w-80 bg-indigo-800">
              Coesão e coerência
            </span>
            <h1 className="flex items-left text-3xl font-bold text-gray-700 w-80">
              nativa
            </h1>
          </Container>

          <Container className="flex flex-col h-full">
            <Container className="flex items-center justify-center w-full mr-40">
              {imgsList.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="landing-page-img0"
                  className="h-40 w-80 ml-8 mr-8"
                />
              ))}
            </Container>

            <Button
              append="self-center w-60 mt-8 mb-8"
              onClick={() => console.log("Clicou em ver tradutores")}
            >
              Ver tradutores
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
