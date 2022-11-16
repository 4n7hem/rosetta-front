const languages = [
    { value: "ENGLISH", label: "Inglẽs" },
    { value: "SPAIN", label: "Espanhol" },
    { value: "PORTUGUESE", label: "Português" },
    { value: "GERMAN", label: "Alemão" },
    { value: "CHINESE", label: "Chinẽs" },
    { value: "KOREAN", label: "Coreano" },
]

export const findLanguage = (value) => languages.filter( language => language.value === value ).at(0) ?? null

export default languages