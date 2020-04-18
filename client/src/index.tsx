import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [apiText, setApiText] = useState('Loading...');

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:8080/loadMe');
                const text = await res.text();
                setApiText(text);
            }
            catch (e) {
                setApiText(`${e}`);
            }
        }
        fetchData();
    }, []);

    return <h1>{apiText}</h1>;
}

ReactDOM.render(<App />, document.getElementById('app-root'));