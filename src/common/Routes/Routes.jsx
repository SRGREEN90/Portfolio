import React from 'react';
import {Routes, Route} from "react-router-dom";
import Contacts from "../../contacts/Contacts";

export const PATH = {
    CONTACTS: '/contacts'
}

export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.CONTACTS} element={<Contacts />}/>
            </Routes>
        </>
    );
};