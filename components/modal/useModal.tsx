import { useState } from "react";

export const useModal = () => {
    const [isModalClosed, setIsModalClosed] = useState(true);

    const closeModal = () => {
        setIsModalClosed(true);
    };

    const openModal = () => {
        setIsModalClosed(false);
    };

    return { isModalClosed, closeModal, openModal };
};
