import { Input } from "../../components/common/input/Input";
import { Button, Container, Topbar, Image } from "./../../components";

export default function Register() {
  return (
    <Container>
      <Topbar nonAuth />

      <Container className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Container className="w-full max-w-md space-y-8">
          <Container>
            <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
              Crie sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Já tem uma conta na plataforma?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Fazer login
              </a>
            </p>
          </Container>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <Input
              labelText="Nome"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Digite seu nome"
            />

            <Input
              labelText="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Digite seu email"
            />

            <Input
              labelText="Senha"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Digite sua senha"
            />

            <Input
              labelText="Confirmar senha"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Confirme sua senha"
            />

            <Container>
              <Button
                type="submit"
                fullWidth
                onClick={() => console.log("pág registro")}
              >
                Cadastrar
              </Button>
            </Container>
          </form>
        </Container>
      </Container>
    </Container>
  );
}
