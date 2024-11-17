import { Cancion } from "../modelos/Cancion";

export const ARREGLO_CANCIONES: Array<Cancion> =[
    new Cancion(1, "La voladora", "El Sayayin", "1", "sayayin.jpg", "data:image/jpeg;base64,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"),
    new Cancion(2, "Loba", "Shakira", "2", "shakira.jpg", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsAEYDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAwQABQECBgf/xAAxEAACAQMDAgQDBwUAAAAAAAABAgMABBEFEiExQQYTUZEUMvAHFiJhgaHBI0JTcaL/xAAaAQACAwEBAAAAAAAAAAAAAAAEBQADBgEC/8QAIhEAAgICAgICAwAAAAAAAAAAAQIAEQMEIUESMVFhcbHw/9oADAMBAAIRAxEAPwC8BxW+eM1oKznii4okLVVXN7E0zgt/TjG0nGQCe/6CrMFGcLI21D8x9BQHtl08NLGpGzaykdSc0DuZKHhGWhiDN5nqDkl0XSYrVrS4EUMw3SIcsGXpu56U7GDGDG39pwD6jt+1U+s3jTWqWQuA7XpEYC445JJPpx+tWcBEGm24YklV2HPUEcYoXWyDG9nuHbuHzTjqNAg1CaDFIH6Bh/sYooyabxB6mKlSpUnIHIrBcAZzQ91Bu5NlrKQQDtOD+1Qmhc6os1LWwgimiw4DSEgk+nfHtTEyxTCNZh87sTtPTH0KTsvLh1GV0Y4UgMB0IAx9Gq3xZ4jOjTQzJarKPKOULbSRkbiD2IzWU17diRySZqDSCuhFvFdpHb3FhLH+GTzCSOmR0/mrW1jjuljjWRRMV3NGerH8vauO1DxtFrssix2nkm3gcxmRtxc4BPA4HANdDbxyTT2xw/w93CoWRc5hkUbg2ew29/VRRrrkx0a5E8+SZAR7EsRlGKEFSpwQe1bhuKXmu0ur+4mjffHuCqfXA6+5rPmcU7xMWQEzO5lCZCo6hd1ShbqlWSqA3daDIDK0cYOC8qL/ANCtj3qQc39qD/nWqdgkYXI+DLcAvKo+xLTS4VfUbxy2fNdh+Q5PSktQ07TdT1NINRiVxDEQA7lVwTz3Gad0ziabHGJWI964D7Q5T98GUgELbpgEcc5zWX0Qz5ilzTvXHEs9U0rwVpdyLiC4WO4BK+TbzGQHPHI59fUV0vx1rpWiNIZAEjj289FUDBPsK8lKhlI6AHoKL4g1e/udOigkuG8pwHZAAAT9DNOm1ixALX+ZSzBATU9GjcfC2z4AZ0Zm2jA+Y/wRRVfNIWrltN09z1aDn2WmkJxRGixbAL+/2Yj3RWdv7qMbuTUoQJ5qUZBZ/9k="),
    new Cancion(3, "Vivo en el limbo", "Kaleth Morales", "5", "kaleth.jpg", "data:image/jpeg;base64,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"),
    new Cancion(4, "Cásate conmigo", "Silvestre Dangond", "5", "silvestre.jpg", "data:image/jpeg;base64,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"),
    new Cancion(5, "Vivir mi vida", "Marc Anthony", "4", "marc.jpg", "data:image/jpeg;base64,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"),
    new Cancion(6, "Cali pachanguero", "Niche", "4", "niche.jpg", "data:image/jpeg;base64,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"),
]