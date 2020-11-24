import React, {Fragment, useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboards'; //named import
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false)
  console.log(`setFormOpen`, setFormOpen)
  return (
    <>
    <Fragment>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
      </Fragment>
    </>
  );
}

export default App;
