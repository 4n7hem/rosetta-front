import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdClose, MdMenu, MdOutlineNotificationsNone } from "react-icons/md";
import { Container, Image, Button } from "../../index";

import logoRosetta from "../../../assets/images/logos/logo_rosetta.svg";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type TopbarProps = {
  nonAuth?: boolean;
};

export function Topbar({ nonAuth }: TopbarProps) {
  return (
    <Disclosure
      as="nav"
      className="border-b-2 border-gray-100 md:justify-start bg-default"
    >
      <>
        {nonAuth ? (
          <Container className="flex w-full justify-between items-center h-14">
            <Image src={logoRosetta} alt="logo-rosetta" className="mx-8 h-8" />

            <Container className="flex min-h-full items-center justify-center">
              <Button
                onClick={() => console.log("Botão de cadastro")}
                className="border-white"
              >
                Novo Pedido
              </Button>

              <Button
                append="mx-8"
                className="bg-secundary bg-secundary-hover"
                onClick={() => console.log("Botão de login")}
              >
                Ver pedidos
              </Button>
            </Container>

            <Container className="flex min-h-full items-center justify-center ">
              <p>Julia Nascimento</p>
              <Button
                append="mx-8"
                className="rounded-full w-10 h-10 p-0 border-slate-700"
                onClick={() => console.log("Botão de login")}
              >
                <Image className="h-full max-w-none rounded-full" src="https://benjamin.dk/wp-content/uploads/2020/07/Topbillede-960x1440-1.png" alt="Rounded avatar"/>
              </Button>
            </Container>
          </Container>
        ) : (
          <Container className="flex w-full justify-between items-center h-14">
            <Image src={logoRosetta} alt="logo-rosetta" className="mx-8 h-8" />

            <Container className="flex min-h-full items-center justify-center">
              <Button
                onClick={() => console.log("Botão de cadastro")}
                className="border-white"
              >
                Cadastrar
              </Button>

              <Button
                append="mx-8"
                className="bg-secundary bg-secundary-hover"
                onClick={() => console.log("Botão de login")}
              >
                Entrar
              </Button>
            </Container>
          </Container>
        )}
      </>
      {/* </div> */}
    </Disclosure>
  );
}
