import './App.scss';
import employees from './data/employees.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const userIsExternal = false;

function App() {
	return (
		<div className="App">
			<Header userIsExternal={userIsExternal} />
			<ul>
				{employees.map((emp, index) => {
					return (
						<li>
							{emp.firstName} {emp.lastName}
						</li>
					);
				})}
			</ul>
			<Footer userIsExternal={userIsExternal} />

		</div>
	);
}

export default App;
