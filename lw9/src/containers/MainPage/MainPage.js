import React, { Component } from 'react'
import { Container, ListGroup, Badge } from 'reactstrap'
import './MainPage.css'
import Product from '../../components/Product/Product'
import Error from '../../components/Error/Error'
import PreloaderIcon from 'react-preloader-icon'
import Spinning from 'react-preloader-icon/loaders/Spinning'
import { API } from '../../constants/index'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true
          })
          if (!Array.isArray(result)) {
            this.setState({ error: result })
          } else {
            this.setState({
              products: result
            })
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state
    if (error !== null) {
      return <Error error={JSON.stringify(error)} />
    } else if (!isLoaded) {
      return (
        <Container>
          <PreloaderIcon
            className='preloader'
            loader={Spinning}
            size={100}
            strokeWidth={8}
            strokeColor="#000000"
            duration={800}
          />
        </Container>
      )
    }
    return (
      <Container>
        <h1><Badge color='primary'>Products:</Badge></h1>
        <ListGroup>
          {
            products.map(product => (
              <Product
                productName={product.name}
                key={product._id}
                link={`/reviews/${product._id}`}
              />
            ))
          }
        </ListGroup>
      </Container>
    )
  }
}

export default MainPage