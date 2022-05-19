import { Component } from "react";
import { Carousel } from "./Carousel.jsx";
import { Spinner } from "./common/Spinner.jsx";
import { useParams } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const jsonResponse = await response.json();

    this.setState({ isLoading: false, ...jsonResponse.pets[0] });
  }

  async componentDidUpdate() {
    this.render();
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }

    const { animal, breed, city, state, name, description, images } =
      this.state;
    console.log(this.state);
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailsWrapper = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default DetailsWrapper;
