export const Header = ({ userIsExternal }) => {
	return (
		<>
			<h1>Employee Site</h1>
			{userIsExternal ? (
				<div className="description">Please meet our team:</div>
			) : (
				<div className="description">Summer picnic is May 15!</div>
			)}
		</>
	);
};
