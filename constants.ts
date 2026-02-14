
import { MediaContent } from './types';

export const MOCK_CONTENT: MediaContent[] = [
  {
    id: '1',
    title: 'O Caminho das Estrelas',
    type: 'series',
    genre: 'Ficção Científica',
    year: 2024,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    description: 'Uma jornada épica através de galáxias desconhecidas em busca de um novo lar. Original CineStream+.',
    featured: true
  },
  {
    id: '2',
    title: 'Amores de Verão',
    type: 'novela',
    genre: 'Romance',
    year: 2023,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop',
    description: 'Um drama apaixonante ambientado nas belas praias do Nordeste brasileiro.',
    featured: true
  },
  {
    id: '3',
    title: 'Operação Resgate',
    type: 'movie',
    genre: 'Ação',
    year: 2024,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
    description: 'Um ex-agente de elite precisa voltar à ativa para salvar sua família.'
  },
  {
    id: '4',
    title: 'Sinfonia da Cidade',
    type: 'movie',
    genre: 'Drama',
    year: 2022,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop',
    description: 'A vida de cinco estranhos se entrelaça em uma metrópole vibrante.'
  },
  {
    id: '5',
    title: 'Herança Maldita',
    type: 'novela',
    genre: 'Suspense',
    year: 2024,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    description: 'Disputas familiares por uma fortuna que esconde segredos terríveis.'
  },
  {
    id: '6',
    title: 'Riso Solto',
    type: 'series',
    genre: 'Comédia',
    year: 2023,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
    description: 'Um grupo de amigos tenta abrir um stand-up comedy club em São Paulo.'
  },
  {
    id: '10',
    title: 'Planeta Vivo',
    type: 'series',
    genre: 'Documentário',
    year: 2024,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
    description: 'Explore a vida selvagem nos cantos mais remotos do nosso planeta.'
  }
];

export const TRIAL_DAYS = 7;
export const ANNUAL_PRICE = 30.00;
