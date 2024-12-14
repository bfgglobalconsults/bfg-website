import React from "react";

function TextTrimming({ text, maxLength }) {
	if (typeof text !== "string") {
		return <div>{text}</div>;
	}

	return (
		<div>
			{text.slice(0, maxLength)}
			{text.length > maxLength ? "..." : ""}
		</div>
	);
}

export default TextTrimming;