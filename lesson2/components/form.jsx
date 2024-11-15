import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Jeff',
    lastName: 'Jones',
    email: 'jjones@thomasmore.be'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <div>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </div>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}