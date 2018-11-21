import React from "react";
import { connect } from "react-redux";

class ProductList extends React.Component {
  render() {
    const { error, loading } = this.props;
    if (error) {
      return <div> Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="loader" />;
    }

    return (
      <div className="app">
        <ul className="shopping-cart">
          {this.props.shoppingCart.map(item => (
            <li className="list-item" key={item.id}>
              <div>
                <img src={item.image_url} height="60px" alt="item" />
                {"   "}
                <span>
                  <b>{item.name} is now in your basket!</b>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps)(ProductList);
