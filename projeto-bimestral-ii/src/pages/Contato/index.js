import './style.css'
export default function Contato() {
    return (
        <div>
            <div className='container'>
            <h2>Deseja nos contatar?</h2>
                <form/>
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name"/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label for="message">Sua Mensagem:</label>
                    <textarea id="message" name="message"></textarea>
                    <br/><br/>
                    <input type="submit" value="Enviar"/>

                <br/><br/>
                <h3>Siga-Nos!</h3>
                <br/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'/>

            </div>
        </div>
    );
}