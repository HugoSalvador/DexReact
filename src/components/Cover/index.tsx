import { useState } from 'react';

import { Cover, InnerDiv, AroundDiv, HorizontalLine, TopDiv } from './style';

import Modal from 'react-modal';


export function Container() {

    const [ OpenModal, setOpenModal ] = useState(false);

    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }



    return (
        <Cover>

            <TopDiv />
            <AroundDiv>
                <InnerDiv/>
                <HorizontalLine />
            </AroundDiv>

            <button>

            </button>
        </Cover>
    );
}