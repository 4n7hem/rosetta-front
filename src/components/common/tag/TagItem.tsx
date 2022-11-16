import { Container } from "../container/Container";


type TagProps = {
    color?: string;
    text: string;
    className?: string;
    style?: string;
}

export default function TagItem({
    className =  "",
    style = "",
    color = "bg-accent-500",
    text 
}: TagProps){
    const css = "p-1 rounded text-center max-w-[100px]"
    return (
        <Container className={ className || `${color} ${css} ${style}`}>
            { text } 
        </Container>
    )
}