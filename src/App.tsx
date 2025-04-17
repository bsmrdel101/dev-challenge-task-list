import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages';


export default function App() {
  const element = useRoutes(routes);
  return element;
}
