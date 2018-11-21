import React from "react";
import { connect } from "react-redux";
import { fetchMoreBeers, addToCartAction } from "../actions/beersActions.js";

class BeerList extends React.Component {
  render() {
    const { error, loading, beers, currentPage } = this.props;
    if (error) {
      return <div> Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="loader" />;
    }

    return (
      <div className="app">
        <div className="list">
          {beers.map(beer => (
            <ul className="list-item" key={beer.id}>
              <div>
                <img
                  className="list-item-img"
                  src={beer.image_url}
                  height="60px"
                  alt="beer"
                />
                {"   "}
                <span className="list-item-title">
                  <b>{beer.name}</b>
                </span>
                <p className="list-item-description">
                  <li>
                    <b>Tagline:</b> {beer.tagline}
                  </li>
                  <li>
                    <b>ABV:</b> {beer.abv}%
                  </li>
                  <li>
                    <b>First brewed:</b> {beer.first_brewed}
                  </li>
                  <li>
                    <b>Food pairing:</b>
                    {beer.food_pairing.join(", ")}
                  </li>
                </p>
              </div>

              <button
                className="add-btn"
                type="button"
                onClick={() => this.props.addToCart(beer)}
              >
                Add to cart
              </button>
            </ul>
          ))}
        </div>
        <button
          className="load-btn"
          onClick={() => this.props.fetchMoreBeers(currentPage)}
          type="button"
        >
          Load more
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  beers: state.beers,
  currentPage: state.currentPage,
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = dispatch => ({
  fetchMoreBeers: pageNumber => dispatch(fetchMoreBeers(pageNumber)),
  addToCart: beerToAdd => dispatch(addToCartAction(beerToAdd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);
