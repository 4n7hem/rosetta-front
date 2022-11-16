import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Topbar } from "../../components";
import PortfolioItem from "../../components/common/portfolio-item/PortfolioItem";
import TagItem from "../../components/common/tag/TagItem";
import Testimony from "../../components/common/testimony/Testimony";
import HttpClient from "../../services/http/api";

function RatingItem({
    value = 0,
    count = 0,
    total = 1
}){
    const width = (count / total) * 100
    
    const style = {
        width
    }

    return (
        <Container className="flex">
            <p className="mr-8 text-lg"> {value} estrelas</p>
            <Container className="h-4 w-[100px] bg-[#C0ADAD] rounded relative">
                <span className="block h-4 rounded bg-yellow-400 absolute inset-0" style={style}/>
            </Container>
        </Container>
        
    )
}

type ProfileResponse = {
    id: string;
    internal_id: number;
    name: string;
    email: string;
    country: string;
    city: string;
    mini_bio: string;
    bio: string;
    main_language: string;
    languages: string[];
    abilities: string[];
    created_at: Date;
}

export default function Profile(){
    const [ user, setUser ] = useState<ProfileResponse>();
    const { id } = useParams();

    useEffect( () => {
        async function fetchUserInformation(){
            const data = await HttpClient.findUser(id)
            const user = await data.json();
        }

        fetchUserInformation()
    }, [] )
    const state = {
        name: "José Alberto",
        profile_picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "jose@email.com",
        country: "Brazil",
        city: "São Paulo",
        mini_bio: "Professor de Inglês com 10 anos de profissão", 
        biography: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
        main_language: {
            value: "PORTUGUESE",
            label: "Português"
        },
        languages: [
            "Inglês",
            "Espanhol"
        ],
        abilities: [
            "Edição de Vídeo",
            "Ediçaõ de Imagens"
        ],
        projects: [
            { name: "Projeto 1", url: "" },
            { name: "Projeto 1", url: "" },
            { name: "Projeto 1", url: "" }
        ],
        raiting: {
            count: 50,
            stars: [
                { value: 5, count: 10 },
                { value: 4, count: 10 },
                { value: 3, count: 10 },
                { value: 2, count: 10 },
                { value: 1, count: 10 },
            ],
            testimonials: [{
                name: 'João Gomes',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                description: 'muito rápida e tradução muito boa, me ajudou muito'
            },{
                name: 'João Gomes',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                description: 'muito rápida e tradução muito boa, me ajudou muito'
            },{
                name: 'João Gomes',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                description: 'muito rápida e tradução muito boa, me ajudou muito'
            }]
        }
    }

    const numberOfRaiting = state.raiting.stars.reduce( (accumulator, { count }) => accumulator + count, 0)

    const totalStars = state
                .raiting
                .stars
                .reduce( (accumulator, { value, count }) => accumulator + count * value, 0 )

    const mean = totalStars / numberOfRaiting 

    const stars = Array(Math.floor(mean)).fill("⭐").join("")

    return (
        <Container>
            <Topbar />
            <Container className="max-w-7xl mx-auto">

                <Container className="grid grid-cols-[256px,1fr,300px] py-10">
                    <Container className="w-64 flex-shrink-0 mr-12">
                        <Image
                            src={state.profile_picture}
                            alt={`Avatar de ${state.name}`}
                            className="rounded-lg"
                        />
                    </Container>
                    <Container className="max-w-sm">
                        <h1> {state.name}</h1> 
                        <p> {state.mini_bio} </p>
                    </Container>
                    <Container className="w-full flex gap-9">
                        <Container className="flex flex-col gap-y-4">
                            {state.languages.map( language => (
                                <TagItem text={language}/>
                            ))}
                        </Container>
                        <Container className="flex flex-col gap-y-4">
                            {state.abilities.map( ability => (
                                <TagItem text={ability} style="mb-1" />
                            ))}
                        </Container>
                    </Container>
                </Container>

            </Container>
            
            <Container className="bg-secondary-500">
                <Container className="max-w-7xl mx-auto py-10 text-white">
                    <h1 className="text-3xl font-bold uppercase mb-8"> Biografia </h1>
                    <p className="text-xl font-light max-w-5xl">
                        {state.biography}
                    </p>
                </Container>
            </Container>
            
            <Container className="max-w-7xl mx-auto py-6">
                <h2 className="text-3xl font-bold uppercase mb-8"> Portfolio </h2>
                <Container className="flex gap-4">
                    { state.projects.map( project => (
                        <PortfolioItem name={project.name} url={project.url} /> 
                    ))}
                </Container>
            </Container>

            <Container className="max-w-7xl mx-auto py-6">
                <h2 className="text-3xl font-bold uppercase mb-8"> Avaliações </h2>
                
                <Container className="w-full flex gap-8">
                    
                    <Container className="flex flex-col items-center justify-evenly pr-8 border-r border-r-black">
                        <span className="font-bold text-4xl"> {mean} </span>
                        <span className="text-xl"> {stars} </span>
                        <p className="text-xl whitespace-nowrap"> {`(${numberOfRaiting}) avaliações` } </p>
                    </Container>
                    
                    <Container>
                        {state.raiting.stars.map( raiting => (
                            <RatingItem value={raiting.value} count={raiting.count} total={state.raiting.count} />
                        ))}
                    </Container>

                </Container>

                <Container className="flex flex-col gap-y-8 mt-16">
                        {state.raiting.testimonials.map( testimony => (
                            <Testimony name={testimony.name} description={testimony.description} url={testimony.image} numberOfStars={5} />
                        ))}
                </Container>

            </Container>
        </Container>
    )
}