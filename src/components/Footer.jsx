export const Footer = ({ userIsExternal }) => {
	return (
		<>
			{userIsExternal ? (
				<div className="footer">&#169; All rights reserved.</div>
			) : (
				<div className="footer">"We are standing on the shoulders of giants."</div>
			)}
		</>
	);
};
