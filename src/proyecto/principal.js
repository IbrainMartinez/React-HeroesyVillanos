import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { BrowserRouter, Routes } from "react-router-dom";

import Menu from './menu';
import Acerca from './acercade';
import Heroes from './heroes/AppUsuarios';
import Villanos from './villanos/AppUsuarios';
import Inicio from '../proyecto/inicio';

const Principal = () =>{
    return(
        <>
        <BrowserRouter>
            <Menu/>
        <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/villanos' element={<Villanos/>}/>
                <Route path='/heroe' element={<Heroes/>}/>
                <Route path='/acercade' element={<Acerca/>}/>
        </Routes>
        </BrowserRouter>
        
        </>

        

    )
}
export default Principal;