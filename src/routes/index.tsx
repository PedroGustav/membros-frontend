import  React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMember from '../pages/AddMember';
import AddPhoto from '../pages/AddPhoto';
import Dashboard from '../pages/Dashboard';
import EditMember from '../pages/EditMember';

const Rotas: React.FC = () => {

    return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/member' element={<AddMember/>}/>
            <Route path='/photo' element={<AddPhoto/>}/>
            <Route path='/edit/:id' element={<EditMember/>}/>
        </Routes>
    );
}

export default Rotas

