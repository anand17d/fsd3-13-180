const Hello = () =>{
  return <h2> Welcome to React 19 </h2>;
}

const Book = () =>{
  return (
  <>
  <h1 className="text-red-600">let's learn React</h1>
  <h2>Price:699</h2>
  <h3>Rating: 4.5</h3>
  </>
  )
}




export default function App() {
  return(
  <>
     <h1 className="text-3xl text-center bg-black text-white my-2 p-2">
      Anand Dubey
      </h1>
      <Hello/>
      <Book/>

    </>
);
}