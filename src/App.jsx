import './App.scss';
import employees from './data/employees.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Employee } from './components/Employee';

const userIsExternal = true;

function App() {
	return (
		<div className="App">
			<Header userIsExternal={userIsExternal} />
			<div className="employees">
				{employees.slice(0,3).map((emp, index) => {
					return <Employee key={index} employee={emp} userIsExternal={userIsExternal} />;
				})}
			</div>
			<Footer userIsExternal={userIsExternal} />
		</div>
	);
}

export default App;
