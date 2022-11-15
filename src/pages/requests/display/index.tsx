import {
    Topbar,
    Container,
    Image,
    Banner,
    Button,
} from "./../../../components/index";

import imgLandingPage0 from "./../../../assets/images/land_page_community.svg";

import imgLandingPagePessoa0 from "./../../../assets/images/land_page_pessoa0.png";
import imgLandingPagePessoa1 from "./../../../assets/images/land_page_pessoa1.png";
import imgLandingPagePessoa2 from "./../../../assets/images/land_page_pessoa2.png";

import { MdTranslate, MdTrendingUp, MdOutlineFactCheck } from "react-icons/md";

export default function DisplayRequests() {
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
            <Topbar nonAuth={true} />
            <Container className="py-10 mx-auto w-3/4">
                <div className="mb-10 bg-request-card mx-auto rounded overflow-hidden shadow-lg text-justify">
                    <div className="px-6 py-4">
                        <div className="flex items-center py-6">
                            <img className="w-12 h-12 rounded-full mr-4" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Avatar of Jonathan Reinink" />
                            <div className="text-md">
                                <p className="text-white leading-none">Jonathan Reinink</p>
                            </div>
                        </div>
                        <div className="font-bold text-xl mb-2">Traduzir 3 capítulos de Moby Dick</div>
                        <div className="pt-4 pb-2">
                            <span className="text-white inline-block bg-languages-ballons rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">livro</span>
                            <span className="text-white inline-block bg-languages-ballons rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">inglês</span>
                            <span className="text-white inline-block bg-languages-ballons rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">português</span>
                        </div>
                        <p className="text-white text-base ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="text-white text-xl py-5 uppercase">
                            Arquivos
                        </p>
                    </div>
                </div>            
                <div className="mb-20 bg-request-card mx-auto rounded overflow-hidden shadow-lg text-justify">
                    <div className="px-6 py-4">
                        <div className="flex items-center py-6">
                            <img className="w-12 h-12 rounded-full mr-4" src="https://benjamin.dk/wp-content/uploads/2020/07/Topbillede-960x1440-1.png" alt="Avatar of Jonathan Reinink" />
                            <div className="text-md">
                                <p className="text-white leading-none">Júlia Golçalves</p>
                            </div>
                        </div>
                        <div className="font-bold text-xl mb-2">Traduzir 3 capítulos de Moby Dick</div>
                        <div className="pt-4 pb-2">
                            <span className="text-white inline-block bg-languages-ballons rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">livro</span>
                            <span className="text-white inline-block bg-languages-ballons rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">inglês</span>
                            <span className="text-white inline-block bg-languages-ballons rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">português</span>
                        </div>
                        <p className="text-white text-base ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="text-white text-xl py-5 uppercase">
                            Arquivos
                        </p>
                    </div>
                </div>
            </Container>
        </Container>
    );
}
