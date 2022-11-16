import { Container } from "../common/container/Container"
import { Image } from "../common/image/Image";
import TagItem from "../common/tag/TagItem";

type OrderItemProps = {
    title: string;
    username: string;
    image_url: string;
    tags: string[];
    main_language: string;
}

export default function OrderItem({
    image_url,
    main_language,
    title,
    tags,
    username
}: OrderItemProps) {
    return (
        <Container className="bg-secondary-500 text-white shadow-md p-8 flex rounded-md">
            <Container className="w-32 h-32 mr-10">
                <a href="/">
                    <Image src={image_url} alt={`Avatar de ${name}`} className="rounded-full" />
                </a>
            </Container>
            <Container className="flex flex-col justify-evenly">
                <h3 className="text-xl font-bold"> {title} </h3>

                <Container className="flex gap-x-4">
                    {tags.map( tag => (
                        <TagItem text={tag} color="bg-primary-500" style="font-bold" />
                    ))}
                </Container>

            </Container>
        </Container>
    )
}