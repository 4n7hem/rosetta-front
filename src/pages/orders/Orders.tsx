import { Container, Topbar } from "../../components";
import Select from 'react-tailwindcss-select'
import OrderItem from "../../components/OrderItem/OrderItem";
import { useEffect, useState } from "react";
import HttpClient from "../../services/http/api";


type OrderResponse = {
    id: string;
    internal_id: number,
    title: string;
    price: number;
    description: string;
    main_language: string;
    tags: string[],
    languages: string[];
    files: string[];
    created_at: Date;
}

export default function Orders({}){
    const [ orders, setOrders ] = useState<OrderResponse[]>([])

    useEffect( () => {
        const fetchOrders = async () => {
            const raw = await HttpClient.fetchOrders()
            const orders = await raw.json()
            setOrders(orders)
        }

        fetchOrders()
    }, [])

    const state = {
        selectedTags: [],
        selectedLanguage: [],
        selectedPrice: 0
    }

    const tags = [
        { value: "WORK_PROJECT", label: "Trabalho"},
        { value: "VIDEO", label: "Video"},
        { value: "BOOK", label: "Livro"},
        { value: "WORK_PROJECT", label: "Trabalho"},
    ]

    const languages = [
        { value: "ENGLISH", label: "Inglẽs"},
        { value: "SPAIN", label: "Espanhol"},
        { value: "PORTUGUESE", label: "Português"},
        { value: "GERMAN", label: "Alemão"},
        { value: "CHINESE", label: "Chinẽs"},
        { value: "KOREAN", label: "Coreano"},
    ]

    // const orders = [{
    //     title: 'Traduzir 3 cápitulos de Moby Dick',
    //     name: 'João Gomes',
    //     image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     tags: [
    //         'Português',
    //         'Livro',
    //         'Gratuíto'
    //     ],
    //     main_language: 'English'
    // },
    // {
    //     title: 'Traduzir 3 cápitulos de Moby Dick',
    //     name: 'João Gomes',
    //     image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     tags: [
    //         'Português',
    //         'Livro',
    //         'Gratuíto'
    //     ],
    //     main_language: 'English'
    // },
    // {
    //     title: 'Traduzir 3 cápitulos de Moby Dick',
    //     name: 'João Gomes',
    //     image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     tags: [
    //         'Português',
    //         'Livro',
    //         'Gratuíto'
    //     ],
    //     main_language: 'English'
    // },
    // {
    //     title: 'Traduzir 3 cápitulos de Moby Dick',
    //     name: 'João Gomes',
    //     image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     tags: [
    //         'Português',
    //         'Livro',
    //         'Gratuíto'
    //     ],
    //     main_language: 'English'
    // },
    // {
    //     title: 'Traduzir 3 cápitulos de Moby Dick',
    //     name: 'João Gomes',
    //     image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     tags: [
    //         'Português',
    //         'Livro',
    //         'Gratuíto'
    //     ],
    //     main_language: 'English'
    // }]

    return (
        <Container>
            <Topbar />

            <Container className="bg-secondary-500 text-white mt-10 py-8">
                <Container className="max-w-7xl mx-auto"> 
                    <h1 className="max-w-xl font-bold uppercase text-4xl mb-8"> Filtrar <br/> Pedidos </h1>
                
                    <Container className="flex gap-8">

                        <Container>
                            <h2 className="font-bold text-white">Tema</h2>
                            <Select
                                onChange={ () => null}
                                options={tags}
                                value={state.selectedTags}
                                isMultiple={true}
                            />
                        </Container>


                        <Container>
                            <h2 className="font-bold text-white">Linguagens</h2>
                            <Select
                                onChange={ () => null}
                                options={languages}
                                value={state.selectedLanguage}
                                isMultiple={true}
                            />
                        </Container>

                        <Container>
                            <h2 className="font-bold text-white">Preço</h2>
                            <input
                                value={state.selectedPrice}
                                min={0}
                                type="range"
                                className=""
                            />
                            <p> R$: {state.selectedPrice}</p>
                        </Container>


                    </Container>

                </Container>
            </Container>


            <Container className="max-w-7xl mx-auto mt-10 flex flex-col gap-8">
                {orders.map( (order, index) => (
                    <OrderItem
                        key={index}
                        image_url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        main_language={order.main_language}
                        tags={order.tags}
                        title={order.title}
                        username="user"
                    />
                ))}
            </Container>

        </Container>
    )
}