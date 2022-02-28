import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Table, Carousel } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import uuid from 'react-uuid';

class TablaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coins: [] };
  }

  cerrarSesion() {
    localStorage.clear();
    location.href = '#';
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
    );
    this.setState({ coins: res.data });
  }

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>24h %</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coins.map((item, index) => {
              console.log('precio:' + item.current_price);
              return (
                <tr key={uuid()}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="img-fluid me-4"
                      src={item.image}
                      style={{ width: '3%' }}
                    />
                    {item.name}
                    <span className="ms-3 text-muted  text-uppercase small">
                      {item.symbol}
                    </span>
                  </td>
                  <td>
                    {item.current_price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    className={
                      item.price_change_percentage_24h > 0
                        ? 'text-success'
                        : 'text-danger'
                    }
                  >
                    {item.price_change_percentage_24h > 0
                      ? '⇟ ' +
                        Math.abs(item.price_change_percentage_24h.toFixed(2))
                      : '⇟ ' +
                        Math.abs(item.price_change_percentage_24h.toFixed(2))}
                    %
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TablaApi;
