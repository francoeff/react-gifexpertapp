import React, { useState } from 'react';
import {AddCategoria} from "./components/AddCategoria";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = () => {
    const [categorias, setCategoria] = useState(["Dragon ball"]);

    return(
            <>
                <h2>GifExpertApp</h2>
                <AddCategoria setCategoria={setCategoria} />
                <hr/>

                <ol>
                    {
                        categorias.map(categoria => {
                            return(
                                <GifGrid key={`cat-${categoria}`} categoria={categoria} />
                            )
                        })
                    }
                </ol>
                
            </>
    );

}

export default GifExpertApp;