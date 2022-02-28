import React from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DatosUsuarios } from '../data/DatosUsuarios';
import { Card } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', email: '' };
    this.login = this.login.bind(this);
  }

  login() {
    var comprobarUser = false;
    DatosUsuarios.map((item) => {
      if (
        item.email === this.valorEmail.value &&
        item.password === this.valorPassword.value
      ) {
        this.setState({
          user: item.nombre,
          password: item.password,
          email: item.email,
        });
        localStorage.setItem('user', item.nombre);
        localStorage.setItem('nombre', item.nombre);
        localStorage.setItem('password', item.password);
        localStorage.setItem('email', item.email);
        localStorage.setItem('imagen', item.imagen);
        comprobarUser = true;
      }
    });
    if (!comprobarUser) {
      alert('Usuario desconocido');
    }
  }

  /*Se ejecuta la primera vez que se ejecuta el componente*/
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    if (
      this.state != null &&
      this.state.user != null &&
      this.state.user != ''
    ) {
      return (
        <div className="main-site">
          <h1 style={{ marginLeft: '380px' }}>
            ¡Bienvenido {this.state.user}!
          </h1>
          <h4 style={{ marginLeft: '300px', marginTop: '10px' }}>
            Pulsa perfil para ver más información sobre ti.
          </h4>
          <Container>
            <Card.Img
              style={{
                width: '20rem',
                marginLeft: '300px',
                border: 'black 10px solid',
                marginTop: '30px',
              }}
              src={localStorage.getItem('imagen')}
            />
          </Container>
        </div>
      );
    } else {
      return (
        <div
          className="main-site"
          style={{
            backgroundColor: 'grey',
            padding: '30px',
          }}
        >
          <h1>¡Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo"
                  ref={(email) => (this.valorEmail = email)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={(password) => (this.valorPassword = password)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="dark" type="button" onClick={this.login}>
                Entrar
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}
export default Home;
