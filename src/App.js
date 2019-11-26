// import React, { Component } from 'react';
// import PostList from './posts/post_list';

// class App extends Component {
//   render() {
//     return (<div className='App'><PostList /></div>)
//   }
// }

// export default App;

import React, { Component } from 'react';

import Car from './posts/post_list';
import '../node_modules/font-awesome/css/font-awesome.min.css';



class App extends Component {


  render() {
    return (
      <div>
        <Car/>
      
      </div>
      )
    }
  }
  export default App;
  
// class App extends Component {
//   constructor() {
//     super();
//     this.state = { isModalOpen: false }
//   }

//   state = {
//     loading: true,
//     person: null,

//   }

//   handleAdd =()=>{
//     this.setState({isModalOpen:true})
//   }

//   async componentDidMount() {
//     const url = "https://api.randomuser.me/";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data.results[0], loading: false });
//     console.log(data)
//   }
//   render() {
//     return <div>
//       {this.state.loading || !this.state.person ? (
//         <div>Loading...</div>
//       ) : (
//           <div>
//             <div>{this.state.person.name.title} {this.state.person.name.first} </div>
//             <div> <img src={this.state.person.picture.large} alt={this.state.person.login.username} />
//               <div><button onClick={this.handleAdd} >Open Modal</button>
//                <AddModal isOpen={this.state.isModalOpen}/>
//                </div>
//             </div>

//           </div>
//         )}
//     </div>
//   }
// }
// export default App;