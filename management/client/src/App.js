import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/64x64?humen",
    name: "홍길동",
    birthday: "961223",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/64x64?humen",
    name: "홍순이",
    birthday: "961223",
    gender: "여자",
    job: "사무직",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/64x64?humen",
    name: "동길홍",
    birthday: "961223",
    gender: "남자",
    job: "대학생",
  },
];
function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
