
import { useState } from 'react';
import { Drawer } from '@mui/material';
import { CheckboxList } from 'components/FormElements/CheckboxList';
import { ButtonGroup } from 'components/FormElements/ButtonGroup';
import { useIsMobile } from 'shared/hooks/useMobile';
import { CloseIcon, FilterIcon } from 'assets/icons';

import { currencyButtons } from 'assets/data/mockdata';
import { transferCheckboxList } from 'assets/data/checkboxList';

import { Button, Container, Title, TopMobileHeader } from './style';

export const SideBar = () => {
    const isMobile = useIsMobile(1020);
    const [open, setOpen] = useState(false);
    return (
        <>
            {isMobile ? (
                <>
                    <Button
                        variant="outlined"
                        onClick={() => setOpen(true)}
                    >
                        <FilterIcon />
                        Change filters
                    </Button>
                    <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        sx={{ marginTop: "0", borderRadius: "0" }}
                    >
                        <SideBarContent setOpen={() => setOpen(false)} isMobile={isMobile} />
                    </Drawer>
                </>
            ) : (
                <SideBarContent />
            )}
        </>
    );
};

const SideBarContent = ({ isMobile, setOpen }: { isMobile?: boolean; setOpen?: () => void }) => {

    return (
        <Container>
            {isMobile && setOpen ?
                <TopMobileHeader variant="h2">
                    <span> Filters</span>
                    <CloseIcon onClick={setOpen} />
                </TopMobileHeader>
                : null}

            <Title variant="h5">Валюта</Title>
            <ButtonGroup buttons={currencyButtons} searchParam="currency" />
            <Title variant="h5">Количество пересадок</Title>
            <CheckboxList list={transferCheckboxList} searchParamName="stops" />
        </Container>
    );
};

export default SideBar;
