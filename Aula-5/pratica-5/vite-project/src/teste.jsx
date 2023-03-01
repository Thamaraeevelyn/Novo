import React, { useState} from 'react';

function Teste() {
    const [nome, setNome] = useState('');
    return (
        <div>
            <h1>Olá mundo</h1>
            <input
            type="text"
            onChange={(e) => setNome (e.target.value)}
            />

            <p>{nome}</p>

            </div>

    );
}

export default Teste;