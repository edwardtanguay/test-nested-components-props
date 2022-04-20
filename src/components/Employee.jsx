export const Employee = ({ employee, userIsExternal }) => {
	return (
		<div className="employee">
			<div className="name">
				{employee.firstName} {employee.lastName}
			</div>
			<div className="title">{employee.title}</div>
			{!userIsExternal && <div className="notes">{employee.notes}</div>}
		</div>
	);
};
