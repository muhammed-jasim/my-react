import React from 'react';




// class Mycomponent extends React.Component{
//   render() {
//     return(
//       <h1>my component</h1>
//     )
//   }
// }

// export default Mycomponent;
 

// function MyComponent(props){ 
//   const fun = (name) => {
//     alert(name)
//   }

//   return(
//     <>
//     <h1>My Component {props.x} </h1>
//     <button onClick={()=>fun("jasim")}>Click</button>  
    
//     </>  // onclicknet C capital aayirikkum karanam camel case l aan eyuthendath second letter kayinjal capital eyuthuka
//   )
  
// }
import './mycomponent.css'


// function myComponent(){
//   const age = 1
//   return(
//     <>
//       {/* {age>=18 && <Eligible/>} */} 
//       {age>18 ? <Eligible/> : <NotEligible/>}
//     </>
//   )
// }
// function NotEligible(){
//   return (
//     <h1>Not Eligible for Votting</h1>
//   )
// }
// function Eligible(){
//   return (
//     <h1 style={{color:"blue",backgroundColor:"yellowgreen"}}>Eligible for Votting</h1>
//   )
// }

// export default myComponent;


// function Name(props){
//   return(
//     <li>{props.i}</li>
//   )
// }
// function Names(){
//   const names = ['jasim','basil','aswin']
//   return(
//     <>
//       <ul>
//         {names.map((items)=> <Name i={items}/>)}
//       </ul>
//     </>
//   )
// }

// export default Names;



import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/home';
import Signin from './Pages/signin';
import Signup from './Pages/signup';
import Contact from './Pages/contact';
import Pagenotfound from './Pages/pagenotfound';
import Product from './Pages/product';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default  App;