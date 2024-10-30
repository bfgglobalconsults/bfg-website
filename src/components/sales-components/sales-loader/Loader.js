import React from "react";

import "./loader.css";

const Loader = () => {
	return (
		<div className="fixed inset-0 w-screen h-screen grid place-items-center bg-[rgba(225,225,225,0.3)] backdrop-blur-sm z-70">
			<div className="loader-outer">
				<div className="loader-inner"></div>
			</div>
		</div>
	);
};

export default Loader;
