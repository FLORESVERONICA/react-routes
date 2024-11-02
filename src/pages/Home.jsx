import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido al Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/resume">Currículum</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
