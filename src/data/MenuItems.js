import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import PelisJuegosDisney from '../components/PelisJuegosDisney';
import Criptos from '../components/Criptos';
import TablaApi from '../components/TablaApi';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/Criptomonedas',
    title: 'Criptomonedas',
    component: TablaApi,
  },
];

/*
  path
  id
  title
  component

*/
