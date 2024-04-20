import { useState, useEffect } from "react";
import { Checkbox } from "components/FormElements/Checkbox";
import { FormGroup, FormControl } from "./styles";
import { useSearchParams } from "react-router-dom";

export const CheckboxList: CheckboxList = ({
	list,
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [listProps, setListProps] = useState<CheckboxListItem[]>(list);

	useEffect(() => {
		const checkedValues = listProps
			.filter((item) => item.checked)
			.map((item) => item.value)
			.join(",");
		const params = new URLSearchParams(searchParams);
		params.set("stops", checkedValues);
		setSearchParams(params);
	}, [listProps]);

	const valueChange: CheckboxOnChange = (newVal: {
		field: string;
		value: boolean;
	}) => {
		setListProps(listProps.map((item) =>
			newVal.field === `${item.id}` ? { ...item, checked: newVal.value } : item,
		));
	};

	return (
		<FormControl
			// @ts-ignore
			component='fieldset'
			variant='outlined'>
			<FormGroup>
				{listProps.map(
					({ id, checked, label, disabled, value, ...other }) => (
						<Checkbox
							key={id}
							id={id}
							onChange={valueChange}
							checked={checked ? checked : false}
							className={checked ? "checked" : ""}
							disabled={disabled}
							field={`${id}`}
							label={label}
							value={value}
						/>
					),
				)}
			</FormGroup>
		</FormControl>
	);
};
