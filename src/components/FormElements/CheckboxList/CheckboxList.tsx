import { useState, useEffect } from "react";
import { Checkbox } from "components/FormElements/Checkbox";
import { FormGroup, FormControl } from "./styles";
import { useSearchParams } from "react-router-dom";

const getQueryString = (arr: CheckboxListItem[]): string => {
	return arr
		.filter((item) => item.checked)
		.map((item) => item.value)
		.join(",");
}

const getCurrentParams = (searchParams: string | null, arr: CheckboxListItem[]): CheckboxListItem[] => {
	if (searchParams) {
		const currentParams = searchParams.split('');
		return arr.map((el) => currentParams.includes(el.value.toString()) ? { ...el, checked: true } : el)
	}
	return arr
}

export const CheckboxList: CheckboxList = ({
	list,
	searchParamName
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [listProps, setListProps] = useState<CheckboxListItem[]>(getCurrentParams(searchParams.get(searchParamName), list));

	useEffect(() => {
		setSearchParams(searchParams => {
			searchParams.set(searchParamName, getQueryString(listProps))
			return searchParams
		})
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
