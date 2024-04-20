
import { transferCheckboxList } from "assets/data/checkboxList";
import { CheckboxList } from "components/FormElements/CheckboxList";
import { ButtonGroup } from "components/ButtonGroup"
import { Container, Title } from "./style";
import { currencyButtons } from "assets/data/mockdata";

export const SideBar = () => {
    return (
        <Container>
            <Title variant="h5">
                Валюта
            </Title>
            <ButtonGroup
                buttons={currencyButtons}
            />
            <Title variant="h5">
                Количество пересадок
            </Title>
            <CheckboxList
                list={transferCheckboxList}
            />
        </Container>
    )
}

export default SideBar