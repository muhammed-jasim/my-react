// import { useState,useEffect } from "react";

// function Home(){
//     const [count,setCount] = useState(0)
//     useEffect(()=>{
//         document.title = `${count}`;
//     },[count])

//     // const [count,setCount] = useState(0)
//     // const [name,setName] = useState('techolas')
//     // const [person,setPerson] = useState({name:'aswanth',place:'calicut',age:21})

//     // const updatePerson = () =>{
//     //     setPerson(
//     //         (prevState) => {
//     //             return{
//     //                 ...prevState,name:'jasim'
//     //             }
//     //         }
//     //     )
//     // }



//     return(
//         <>
//             {/* <h1>This is our Home Page</h1>
//             <button onClick={() => setCount(count+1)}>Change Count</button>
//             <button onClick={() => setCount(count-1)}>Change Count</button>
//             <h4>{count}</h4>

//             <button onClick={() => setName('Techolas Calicut')}>Change Name</button>
//             <h4>{name}</h4>

//             <button onClick={updatePerson}>Change Value</button>
//             <h4>{person.name}</h4>
//             <h4>{person.place}</h4>
//             <h4>{person.age}</h4> */}

//             <>
//                 <p>count : {count}</p>
//                 <button onClick={()=> setCount(count +1)}>Increment</button>
//                 <button onClick={()=>setCount(count-1)}>Decrement</button>

//             </>
//         </>
//     ) 
// }

// export default Home;


import React, {useState , useEffect} from "react";
function Joke(){
    const [joke, setJoke] = useState(null);
    useEffect(()=>{
        fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes",{  //eth apil ninnano athinte url
            method: "GET",  
            headers : {
                "X-rapidAPI-Key": "b06ce04011mshcffe570c08d259bp19d9a8jsn072b3491b824", // edukkunnathinte key kodukkuka
                "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com"           //  edukkunnathinte host kodukkuka
                
            }
        })
        .then((Response) => Response.json())  // converting to json file
        .then((data)=> {
            setJoke (data[0].joke);
            console.log(data)
        })
        .catch((error)=> console.log(error));
    },[]);

    return (
        <div>
            <h2>Joke Of The day</h2>
            {joke && <p>{joke}</p>}
        </div>
    )   
}

export default Joke;