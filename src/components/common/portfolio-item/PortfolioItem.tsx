import { Container } from "../container/Container";

type PortfolioProps = {
    name: string;
    url: string;
    color ?: string;
    className ?: string;
}

export default function PortfolioItem({
    name,
    url,
    color = 'bg-primary-500',
    className = ''
}: PortfolioProps){
    return (
        <a href={url} className={`py-4 px-8 text-white ${color} ${className}`}>
            <Container >
                <h4>{name}</h4>
                <p>acessar projeto</p>
            </Container>
        </a>
    )
}