import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import 'bootstrap';
import {Route,Switch,Redirect} from "react-router-dom"
import Error from './Error.js'
import Properties from './Properties.js'
import PropertyDetails from './PropertyDetails.js'
import Scroll from './Scroll.js';
import ScrollToTop from './ScrollToTop.js';

const App=()=>{

	return (
		<>
		
		  <Scroll showBelow={250}/>
		  <ScrollToTop>
			<Switch>
          <Route exact path="/">
            <Redirect to="/properties1" />
          </Route>
					<Route exact path="/properties:page" component={Properties}/>
					<Route  path="/property/:id" component={PropertyDetails}/>
          <Route  component={Error} />
					
					
			</Switch>
			</ScrollToTop>
				
				
		</>
		)
}

export default App