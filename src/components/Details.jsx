import {Component} from "react";
import {Carousel} from "./Carousel.jsx";
import {withRouter} from "react-router-dom";

class Details extends Component{
  constructor() {
    super();
    this.state = {
      isLoading:true,
    }
  }

  async componentDidMount() {
    const response =await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);

    const jsonResponse = await response.json();
    this.state = (Object.assign({isLoading:false }),jsonResponse.pets[0]);
  }

  async componentDidUpdate() {
    this.render()
  }


  render() {
    console.log(this.state)
    return <div className="details">
      <Carousel images={this.state.images}/>
      <div>
        <h1>{this.state.name}</h1>
        <h2>{`${this.state.animal} - ${this.state.breed} - ${this.state.city} - ${this.state.state}`}</h2>
        <button>Adopt {this.state.name}</button>
        <p>{this.state.description}</p>
      </div>
    </div>
  }
}

export default withRouter(Details);

// export const Details = () => {
//   const params = useParams();
//   const [petDetails, setPetDetails] = useState("");
//
//   useEffect(() => {
//     requestPetDetails(params.id);
//   }, []);
//
//   const requestPetDetails = async (id) => {
//     const resp = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
//
//     const jsonResponse = await resp.json();
//     setPetDetails(jsonResponse.pets[0]);
//   };
//
//   console.log(petDetails);
//
//   return (
//     <div className="details">
//       <Carousel images={petDetails.images}/>
//       <div>
//         <h1>{petDetails.name}</h1>
//         <h2>{`${petDetails.animal} - ${petDetails.breed} - ${petDetails.city} - ${petDetails.state}`}</h2>
//         <button>Adopt {petDetails.name}</button>
//         <p>{petDetails.description}</p>
//       </div>
//     </div>
//   );
// };
