import React, { Component } from 'react'
import { Container, ListGroup, Badge } from 'reactstrap'
import './ReviewsPage.css'
import Review from '../../components/Review/Review'
import Error from '../../components/Error/Error'
import PreloaderIcon from 'react-preloader-icon'
import Spinning from 'react-preloader-icon/loaders/Spinning'
import { API } from '../../constants/index'

class ReviewsPage extends Component {
  constructor(props) {
    super(props)
    this.productId = this.props.match.params.id
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`${API}/${this.productId}/reviews`)
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
              reviews: result
            })
          }
        },
        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, reviews } = this.state
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
    } else {
      return (
        <Container>
          <h1><Badge color='primary'>Reviews:</Badge></h1>
          <ListGroup>
            {
              reviews.map(review => (
                <Review
                  review={review.discription}
                  key={review._id}
                />
              ))
            }
          </ListGroup>
        </Container>
      )
    }
  }
}

export default ReviewsPage