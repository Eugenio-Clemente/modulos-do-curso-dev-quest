import { Component } from 'react'
import './panel.css'

class Panel extends Component{
    constructor(){ // Aprimeira função a ser executada quando a classe panel for gerada
        super()    // É um metodo especial das classes, serve para trazer as propriedades é metodos do component do extends sem ele não dar para usar o state
        this.state = { // Estado inicial do componente    
            title: 'Título do painel'
        }
    }

    render(){  
        const thisComponent = this // Assim funcionaria com a função, mais isso é mais trabalhoso 
        // É importante usar arrow funcion no React
        return(
            <section className="panel" onClick={
               function() { thisComponent.setState({title: 'Título novo'})}}> 
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel