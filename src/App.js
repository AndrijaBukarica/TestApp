import './App.css';
import {useState} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [array, setArray] = useState([]);

  const handleSubmit = () => {
    if (name == '' || lastName == '' || street == '' || city == '') {
      alert('Fill all data')
    } else {
      const object = {
        id: Math.floor(Math.random() * 100),
        name: name,
        lastName: lastName,
        street: street,
        city: city
      };
      setArray(arr => [...arr, object]);
    }
  }

  const handleRemove = id => {
    const newArr = [...array];
    let index = newArr.findIndex(item => {
      return item.id === id;
    })
    if (index !== -1) newArr.splice(index, 1);
    setArray(newArr);
  }


  return (
    <>
      <div className={'wrapper'}>
        <div style={{width: '80%', display: 'flex', alignItems: 'center'}}>
          <label>
            Name:
            <input className={'field'} type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Last Name:
            <input className={'field'} type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>
          <label>
            Street:
            <input className={'field'} type="text" value={street} onChange={e => setStreet(e.target.value)} />
          </label>
          <label>
            City:
            <input className={'field'} type="text" value={city} onChange={e => setCity(e.target.value)} />
          </label>
        </div>
        <button style={{width: '20%'}} className={'btn'} onClick={() => handleSubmit()}>insert</button>
      </div>
      {array.map((item, index) => {
          return (
            <div key={index} style={{marginTop: '20px'}} className={'wrapper'}>
              <span style={{marginRight: '30px', width: '20%'}}>{item.name}</span>
              <span style={{marginRight: '30px', width: '20%'}}>{item.lastName}</span>
              <span style={{marginRight: '30px', width: '20%'}}>{item.street}</span>
              <span style={{marginRight: '30px', width: '20%'}}>{item.city}</span>
              <button onClick={() => handleRemove(item.id)} style={{width: '20%'}} className={'btn'}>Remove</button>
            </div>
            )
        })}
    </>
  );
};

export default Form;
