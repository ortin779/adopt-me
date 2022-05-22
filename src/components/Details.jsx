import { Component } from "react";
import { Carousel } from "./Carousel.jsx";
import { Spinner } from "./common/Spinner.jsx";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { Modal } from "./Modal";
import { ErrorBoundary } from "../ErrorBoundary";

class Details extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isLoading: true,
      showModal: false,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const jsonResponse = await response.json();

    this.setState({ isLoading: false, ...jsonResponse.pets[0] });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }

    const { animal, breed, city, state, name, description, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
          <ThemeContext.Consumer
            /* eslint-disable-next-line react/no-children-prop */
            children={([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          />
          <p>{description}</p>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <div>
                <h1>Do you wanna adapt {name}??</h1>
                <div className={"buttons"}>
                  <a href={"https://bit.ly/pet-adopt"}>
                    <button>Yes</button>
                  </a>
                  <button onClick={this.toggleModal}>NO</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

const DetailsWrapper = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default DetailsWrapper;
