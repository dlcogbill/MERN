import './App.css';
import PersonCards from './components/PersonCards';
import PersonCard from './components/PersonCard';

function App() {
  const people = [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 45,
      hairColor: 'Black',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hairColor: 'Brown',
    },
    {
      id: 3,
      firstName: 'Millard',
      lastName: 'Fillmore',
      age: 50,
      hairColor: 'Brown',
    },
    {
      id: 4,
      firstName: 'Maria',
      lastName: 'Smith',
      age: 62,
      hairColor: 'Brown',
    },
  ];
  return (
    <div className="App">
      <div className="Col">
        <PersonCard firstName={ people[0].firstName }
          lastName={ people[0].lastName }
          age={ people[0].age }
          hairColor={ people[0].hairColor }/>
        <PersonCard firstName={ people[1].firstName }
          lastName={ people[1].lastName }
          age={ people[1].age }
          hairColor={ people[1].hairColor }/>
        <PersonCard firstName={ people[2].firstName }
          lastName={ people[2].lastName }
          age={ people[2].age }
          hairColor={ people[2].hairColor }/>
        <PersonCard firstName={ people[3].firstName }
          lastName={ people[3].lastName }
          age={ people[3].age }
          hairColor={ people[3].hairColor }/>
      </div>
      <div className="Col">
        {people.map((person) => {
          return <PersonCards key={person.id} person={person} />;
        })}
      </div>
    </div>
  );
}

export default App;