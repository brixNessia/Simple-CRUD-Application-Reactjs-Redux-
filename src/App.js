import Product from './views/product/Product'
import Container from 'react-bootstrap/Container'
import './App.css';
import NavBar from './common/navbar';

function App() {
  return (
    <NavBar 
    children = {
      <Container fluid="md" className="container">
        <Product />
      </Container>
    }
    />
  );
}

export default App;
