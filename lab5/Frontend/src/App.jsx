const Hello = () => {
  return <h2>Welcome to React 19</h2>;
};

const Book = () => {
  return (
    <>
      <h1>Let's learn React</h1>
      <h2>Price: 699</h2>
      <h3>Rating: 4.5</h3>
    </>
  );
};

function Friend(props) {
  return (
    <div className="bg-gray-100 p-3 m-2 rounded">
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default function App() {

  const students = [
    { name: "Aditya", email: "aditya@gmail.com", age: 20 },
    { name: "Rahul", email: "rahul@gmail.com", age: 21 },
    { name: "Anjali", email: "anjali@gmail.com", age: 19 },
    { name: "Aman", email: "aman@gmail.com", age: 22 },
    { name: "Priya", email: "priya@gmail.com", age: 20 },
    { name: "Rohan", email: "rohan@gmail.com", age: 21 },
    { name: "Sneha", email: "sneha@gmail.com", age: 19 },
    { name: "Karan", email: "karan@gmail.com", age: 23 },
    { name: "Neha", email: "neha@gmail.com", age: 20 },
    { name: "Arjun", email: "arjun@gmail.com", age: 22 }
  ];

  return (
    <>
      <h1 className="text-3xl text-center bg-black text-white my-2 p-2">
        Anand Kumar Dubey
      </h1>

      <h2>anand.dubey.1205@gmail.com</h2>

      <Hello />
      <Book />

      <h1 className="text-2xl font-bold text-center my-4">
        Student Records
      </h1>

      {students.map((student, index) => (
        <Friend
          key={index}
          name={student.name}
          email={student.email}
          age={student.age}
        />
      ))}
    </>
  );
}