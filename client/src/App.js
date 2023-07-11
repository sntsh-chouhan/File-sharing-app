import {useRef, useState, useEffect} from 'react';
import { uploadFile } from './services/api';
import './App.css';

function App() {

    const [file, setFile] = useState('');
    const [result, setResult] = useState('');

    const fileInputRef = useRef();

    useEffect(()=>{
        const getImage = async ()=>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                setResult(response.path);
            }
        }
        getImage();
    }, [file])

    const onUploadClick = () =>{
        fileInputRef.current.click();
    };

    console.log(file);
    return (
        <div className = 'container'> 
            {/* <img src={logo} alt="banner" /> */}
            <div className="wrapper">
                <h1>Simple file sharing app ;)</h1>
                <i>Upload and get the Download link</i>
                

                <button onClick={()=>onUploadClick()}>Browse and upload</button>
                <input type= "file"
                    ref={fileInputRef}
                    style={{display: 'none'}}

                    onChange={(e)=>setFile(e.target.files[0])}
                />
                <a href={result}>{result}</a>
            </div>
        </div>
    );
}

export default App;
