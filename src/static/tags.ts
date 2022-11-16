const abilities = [
    { value: "VIDEO_EDITOR", label: "Edição de Vídeo"},
    { value: "IMAGE_EDITOR", label: "Edição de Imagens"},
    { value: "WRITER", label: "Editor de Texto"}
]

export const findAbility = (value) => abilities.filter( ability => ability.value === value).at(0)

export default abilities