import './App.scss';
import employees from './data/employees.json';

function App() {
	return (
		<div className="App">
			<h1>Employee Site</h1>
			<div className="description">This is a site to show all the employees of the company.</div>
			<ul>
				{employees.map((emp, index) => {
					return <li>{emp.firstName} {emp.lastName}</li>;
				})}
			</ul>
			<div className="footer">
				This is the small print at the bottom of the site.
		</div>
		</div>
	);
}

export default App;
