import './App.scss';
import employees from './data/employees.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<ul>
				{employees.map((emp, index) => {
					return (
						<li>
							{emp.firstName} {emp.lastName}
						</li>
					);
				})}
			</ul>
			<Footer />
		</div>
	);
}

export default App;
