import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Image, Topbar } from "../../components";
import TagItem from "../../components/common/tag/TagItem";
import HttpClient from "../../services/http/api";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown'
import { useForm } from "react-hook-form";

type OrderResponse = {
    finished?: boolean;
    "id": string;
    "internal_id": 7,
    "title": string;
    "price": number,
    "description": string;
    "main_language": string;
    "tags": string[];
    "languages": string[];
    "files": string[];
    "created_at": Date;
    "answers": OrderResponse[];
}

export default function Order() {
    const { id } = useParams()
    const { register, handleSubmit } = useForm()
    const [order, setOrder] = useState<OrderResponse | null>(null)
    const [value, setValue] = useState("**Hello world!!!**");


    useEffect(() => {
        async function fetchOrder() {
            const response = await HttpClient.fetchOrder(id)
            const data = await response.json()
            setOrder(data)
        }

        fetchOrder()
    }, [])

    const handleSubmitAnswer = async ({ files }) => {
        const form = new FormData()

        for(const file of files){
            form.append("files", file)
        }

        form.append("answer", value)


        await fetch(`http://localhost:3000/api/orders/${id}/answer`, {
            body: form,
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsYWlic3hreDAwMDA5aHE5dW1sczdwY3YiLCJpbnRlcm5hbF9pZCI6MSwiZW1haWwiOiJteS1lbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE2Njg1MjQwNjl9.y21kjqAvMKdm2bdBPT2L9S1dJspUhSRtAhwryYizjuw"
            }
        })
    }

    const state = {
        name: 'José Alberto',
        image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        title: "Pedido X",
        tags: [
            "Inglês",
            "Portuugês",
            "Livro"
        ],
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.`,
        files: [
            '/duhsahudsa/file.jpg'
        ],
        answers: [
            {
                username: '',
                image_url: '',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.`,
                files: [
                    '/duhsahudsa/file.jpg'
                ]
            },
            {
                username: '',
                image_url: '',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                `,
                files: [
                    '/duhsahudsa/file.jpg'
                ]
            },
        ],
        finished: true
    }
    return (
        <Container>
            <Topbar />

            {order && (
                <>
                    <Container className="max-w-7xl mx-auto mt-10 rounded-md shadow-lg">
                        <Container className="bg-secondary-500 text-white p-8">
                            {order?.finished && (
                                <span className="bg-green-500 text-white font-bold p-2 w-auto rounded">
                                    Pedido Finalizado
                                </span>
                            )}

                            <Container className="mt-4 flex items-center">
                                <Container className="w-20 h-20 m-4">
                                    <Image
                                        src={state.image_url}
                                        alt={`Avatar de ${state.name}`}
                                        className="rounded-full"
                                    />
                                </Container>
                                <span className="font-bold text-lg"> {state.name} </span>
                            </Container>

                            <h1 className="mt-4 text-2xl font-bold"> {state.title} </h1>

                            <Container className="mt-4 flex gap-x-4">
                                {state.tags.map(tag => (
                                    <TagItem text={tag} color="bg-primary-500" />
                                ))}
                            </Container>

                            <p className="mt-8 text-lg max-w-4xl">
                                {order.description}
                            </p>

                            <Container className="my-8">
                                <h4 className="text-white font-bold uppercase">Arquivos</h4>
                                <Container className="flex">
                                    {order.files.map(file => (
                                        <a href={`http://localhost:3000/archives/${file}`} download={true} target="_blank" className="p-4 bg-primary-500 shadow-lg text-white">
                                            Arquivo
                                        </a>
                                    ))}
                                </Container>
                            </Container>
                        </Container>

                        <Container className="flex flex-col mt-10 gap-y-8">
                            {state.answers.map(answer => (
                                <Container className="bg-secondary-500 text-white p-8">
                                    <Container className="mt-4 flex items-center">
                                        <Container className="w-20 h-20 m-4">
                                            <Image
                                                src={answer.image_url}
                                                alt={`Avatar de ${answer.username}`}
                                                className="rounded-full"
                                            />
                                        </Container>
                                        <span className="font-bold text-lg"> {answer.username} </span>
                                    </Container>

                                    <p className="mt-8 text-lg max-w-4xl">
                                        <ReactMarkdown children={answer.description} />
                                    </p>

                                    <Container className="my-8">
                                        <h4 className="text-white font-bold uppercase">Arquivos</h4>
                                        <Container className="flex">
                                            {answer.files.map(file => (
                                                <a href={file} download={true} className="p-4 bg-primary-500 shadow-lg text-white">
                                                    Arquivo
                                                </a>
                                            ))}
                                        </Container>
                                    </Container>

                                </Container>
                            ))}
                        </Container>

                    </Container>
                    <Container className="max-w-7xl mx-auto">
                        <form onSubmit={handleSubmit(handleSubmitAnswer)}>

                            <MDEditor
                                value={value}
                                onChange={(value) => setValue(value as string)}
                            />

                            <input
                                type="file"
                                multiple={true}
                                {...register('files')}
                            />
                            <Button
                                type="submit"
                                onClick={() => null}
                            >
                                Enviar Resposta
                            </Button>
                        </form>

                    </Container>

                </>
            )}

        </Container>
    )
}