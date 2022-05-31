import React from 'react';
import '../../App.css';
import PhotoList from "../photoList/PhotoList";

const App = () => {
    return (
        <div className='app'>
            <main>
                <div className='char__content'>
                    <PhotoList/>
                </div>
            </main>
        </div>
    )

}

export default App;
