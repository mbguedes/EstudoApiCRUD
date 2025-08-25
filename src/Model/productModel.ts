export type Product ={
    id: number;
    name: string;
    price: number;
    description: string;
}

export let products:Product[] = [
    { id: 1, name: 'Smart TV 4K', price: 2500, description: 'TV com resolução 4K e diversas funcionalidades inteligentes.' },
    { id: 2, name: 'Notebook Gamer', price: 7800, description: 'Notebook de alta performance para jogos e edição de vídeo.' },
    { id: 3, name: 'Smartphone Pro', price: 4200, description: 'Smartphone com câmera de alta qualidade e bateria de longa duração.' },
]; // PEDI PRO GPT FAZER O MOCK DOS PRODUTOS KKKK

//a interface Product define que o produto deve ter o id, name, price e description, o array products é um mock de produtos com 3 produtos diferentes