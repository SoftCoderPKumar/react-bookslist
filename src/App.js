import React from 'react';
import './App.css';

const App = () => (
  <PersonList />
)

const PersonList = () => {
  const people = [
    {
      img: "23",
      name: "Pappu",
      job: "Developer",
      discription: "I am a sr Developer."
    },
    {
      img: "36",
      name: "Raju",
      job: "Designer",
      discription: "I am a Best Designer."
    },
    {
      img: "25",
      name: "Sumit",
      job: "Developer",
      discription: "I am a Jr Developer."
    },
    {
      img: "38",
      name: "rahman",
      job: "Developer",
      discription: "I am a Web designer."
    },
    {
      img: "45",
      name: "mukesh",
      job: "Developer",
      discription: "I am a Sr Developer."
    },
    {
      img: "59",
      name: "mubin",
      job: "Developer",
      discription: "I am a Jr Developer."
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum quae molestias tempore minima in reiciendis sequi, cumque perferendis recusandae provident eos veritatis voluptates perspiciatis debitis explicabo ratione aliquam voluptatum.
      </Person>
      <Person person={people[3]} />
      <Person person={people[4]} />
      <Person person={people[5]} />
    </section>
  )
}

const Person = props => {
  const { img, name, job, discription } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return <div className="person">
    <img src={url} alt="" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      <h5>{discription}</h5>
      <p>{children}</p>

    </div>
  </div>
}



export default App;
