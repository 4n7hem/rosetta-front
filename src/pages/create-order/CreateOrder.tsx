import { Button, Container, Topbar } from "../../components";
import { Input } from "../../components/common/input/Input";

import Select from 'react-tailwindcss-select'
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


type SelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
}

type ReactHookFormData = {
    string: string | Blob;
}

export default function CreateOrder() {
    const navigator = useNavigate()
    const [selectedTags, setSelectedTags] = useState<SelectOption[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<SelectOption[]>([])
    const [selectedMainLanguage, setSelectedMainLanguage] = useState<SelectOption | null >(null)

    const { register, handleSubmit, watch } = useForm()

    const tags = [
        { value: "WORK_PROJECT", label: "Trabalho" },
        { value: "VIDEO", label: "Video" },
        { value: "BOOK", label: "Livro" },
        { value: "WORK_PROJECT", label: "Trabalho" },
    ]

    const languages = [
        { value: "ENGLISH", label: "Inglẽs" },
        { value: "SPAIN", label: "Espanhol" },
        { value: "PORTUGUESE", label: "Português" },
        { value: "GERMAN", label: "Alemão" },
        { value: "CHINESE", label: "Chinẽs" },
        { value: "KOREAN", label: "Coreano" },
    ]


    const handleCreateOrder = async (data: FieldValues) => {
        const form = Object
            .entries(data)
            .reduce( (formData, [key, value]) => {
                if( key === "files" ){
                    for( const file of value) {
                        formData.append(key, file)
                    }
                }
                else {
                    formData.append(key, value)
                }
                return formData
        }, new FormData())


        form.append("main_language", selectedMainLanguage!.value)
        form.append("tags", selectedLanguages.map( tag => tag.value).join(","))
        form.append("languages", selectedLanguages.map( language => language.value).join(","))

        await fetch("http://localhost:3000/api/orders/create", {
            body: form,
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsYWlic3hreDAwMDA5aHE5dW1sczdwY3YiLCJpbnRlcm5hbF9pZCI6MSwiZW1haWwiOiJteS1lbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE2Njg1MjQwNjl9.y21kjqAvMKdm2bdBPT2L9S1dJspUhSRtAhwryYizjuw"
            }
        })

        navigator("/pedidos")

    }

    return (
        <Container>
            <Topbar />

            <Container className="max-w-7xl mx-auto py-10">
                <Container className="mb-10">
                    <h1 className="text-3xl mb-8 uppercase font-bold">Criar Pedido</h1>
                    <p className="text-lg max-w-2xl">
                        Descreva cuidadosamente o seu pedido, todas as caracterísitcas que julga necessário
                        para que os tradutores consigam realizar da maneira mais eficiente possível.
                    </p>
                </Container>

                <Container className="bg-secondary-500 py-10 px-6 rounded-xl flex flex-col gap-y-6">

                    <form onSubmit={handleSubmit(handleCreateOrder)}>
                        <Container>
                            <Input
                                id="name"
                                type="text"
                                labelText="Titulo do Pedido"
                                placeholder="qual seu pedido?"
                                containerClassName="w-1/2"
                                labelClassName="text-white font-bold text-xl"
                                {...register('title')}
                            />
                        </Container>

                        <Container className="w-1/2">
                            <h1 className="text-white font-bold text-xl">Tags</h1>
                            <Select
                                isMultiple={true}
                                value={selectedTags}
                                options={tags}
                                onChange={ (tags) => setSelectedTags(tags as SelectOption[]) }
                            />
                        </Container>

                        <Container className="w-full grid grid-cols-2 gap-x-6">
                            <Container>
                                <h1 className="text-white font-bold text-xl">Língua Original</h1>
                                <Select
                                    isMultiple={false}
                                    value={selectedMainLanguage}
                                    options={languages}
                                    onChange={(language) => setSelectedMainLanguage(language as SelectOption)}
                                />
                            </Container>

                            <Container>
                                <h1 className="text-white font-bold text-xl">Língua a Traduzir</h1>
                                <Select
                                    isMultiple={true}
                                    value={selectedLanguages}
                                    options={languages}
                                    onChange={(languages) => setSelectedLanguages(languages as SelectOption[])}
                                />
                            </Container>

                        </Container>

                        <Container>
                            <h1 className="text-white font-bold text-xl">Descrição</h1>
                            <textarea
                                className="text-white first-letter:block w-1/2 h-80 pb-10 border-white focus:border-white resize-none bg-transparent"
                                {...register('description')}
                            />
                        </Container>


                        <Container>
                            <h1 className="text-white font-bold text-xl">Arquivo</h1>
                            <input
                                type="file"
                                multiple={true}
                                {...register('files')}
                            />
                        </Container>

                        <Container>
                            <h1 className="text-white font-bold text-xl">Preço</h1>
                            <input
                                type="range"
                                min={0}
                                {...register('price')}
                            />
                            <p className="text-white font-lg">{watch('price')}</p>
                        </Container>
                        <Button
                            type="submit"
                            onClick={() => null}
                            className="mt-10 ml-auto bg-accent-800"
                        >
                            Submter
                        </Button>
                    </form>

                </Container>


            </Container>

        </Container>
    )
}