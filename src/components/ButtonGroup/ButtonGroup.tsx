import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import { MuiButtonGroup } from "./styles";

export const ButtonGroup: ButtonGroup = ({ buttons }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [active, setActive] = useState(buttons[0].param);

	const handleButtonClick = (param: string) => {
		const params = new URLSearchParams(searchParams);
		params.set("currency", param);
		setSearchParams(params);
		setActive(param);
	};

	return (
		<MuiButtonGroup
			variant="outlined"
			aria-label="Basic button group"
			size="large"
		>
			{buttons.map(({ id, title, param }) => (
				<Button
					key={id}
					onClick={() => handleButtonClick(param)}
					variant={active === param ? "contained" : "outlined"}
				>
					{title}
				</Button>
			))}
		</MuiButtonGroup>
	);
};
