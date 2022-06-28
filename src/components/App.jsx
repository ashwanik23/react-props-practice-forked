import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://www.khabarnonstop.com/wp-content/uploads/2022/06/Stranger-Things-4-from-the-Demogorgon-to-Vecna-what-is.jpg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        contact={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        contact={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        contact={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
