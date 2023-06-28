import {useRef} from 'react';
import './App.css';

function App() {

    const fileInputRef = useRef();

    const onUploadClick = () =>{
        fileInputRef.current.click();
    };

    return (
        <div className = 'container'> 
            {/* <img src={logo} alt="banner" /> */}
            <div className="wrapper">
                <h1>Simple file sharing app ;)</h1>
                <p>upload and get the download link</p>
                

                <button onClick={()=>onUploadClick()}>Browse and upload</button>
                <input type= "file"
                    ref={fileInputRef}
                    style={{display: 'none'}}
                />
            </div>
        </div>
    );
}

export default App;
