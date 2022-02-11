// function WelcomeFunc({name, children}){
//     return <>
//     <h1>Bnjour {name}</h1>
//     <p>{children}</p>
//     </>
// }
// class Clock extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {date: new Date()}
//         this.timer = null;
//     }
//     componentDidMount (){
//     this.timer = window.setInterval(this.tick.bind(this), 1000)
//     }

//     componentWillUnmount(){
//     window.clearInterval(this.timer)
//     }

//     tick(){
//         this.setState({date: new Date()}) 
//     }
//     render() {
//         const date= new Date();
//         return <>
//        Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
//         </>
    
    
    
//     }
// }

// class Incrementer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {number: props.start, timer: null}
     
//     }
//     componentDidMount (){
//         this.timer = window.setInterval(this.incremente.bind(this), 1000)
//         }
    
//     componentWillUnmount(){
//         window.clearInterval(this.state.timer)
//         }

//     incremente(){
//             this.setState((state, props) => ({number: state.number + props.step}))
//         }
//     pause(){
//         window.clearInterval(this.state.timer);
//         this.setState({
//             timer: null
//         })
//         }

//     play(e){
//         window.clearInterval(this.timer)
//             this.setState({
//                 timer: window.setInterval(this.incremente.bind(this), 1000)
//             })
//             }
//     reinitialize(e){
           
//         this.pause()
//                 this.setState((state,props)=> ({number: props.start}))
//                 }

//     render(){
//         return <div> 
//              Nombre qui s'incrémente : {this.state.number} 
//         {this.state.timer ? 
//     <button onClick={this.pause.bind(this)}> Mettre en pause</button> : 
//     <button onClick={this.play.bind(this)}>Reprendre</button>}
//     <br/>
//     <button onClick={this.reinitialize.bind(this)}>Réinitialiser le compte</button>
//     </div>
// }
// }


// Incrementer.defaultProps = {
// start: 0,
// step: 1
// }


// class ManualIncrementer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {n: 0}
//     }

//     incremente(e){
//         console.log(e)
//         this.setState((state, props) => ({n: state.n + 1}))
//     }

//     render(){
//         return <div>
//             Valeur {this.state.n} : <button onClick={this.incremente.bind(this)}>Incrémenter</button>
//         </div>
//     }
// }
class Field extends React.Component{
  
    

    render(){
        const {name, value, onChange, children} = this.props
        return <div className="form-group">
         
            <label htmlFor={name}> {children}</label>
            <input type="text" onChange={onChange} value={value} id={name} name={name} className="form-control"></input>
        </div>
    }
}

class Checkbox extends React.Component{
  

    render(){
        const {name, checked, onChange, children} = this.props
        return <div className="form-group">
            <label htmlFor={name}> {children}</label>
            <input type="checkbox" checked={checked} onChange={onChange} id={name} name={name} ></input>
        </div>
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        // Ici name sera le nom du champ que l'on modifie 
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked :  e.target.value
        this.setState({
            [name]: value
            // On fait un tableau avec tous les noms de champs différents, soit nom, prenom et newsletter
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        console.log(data)
        this.setState({
            nom: '',
            prenom: '',
            newsletter: false
        })

    }

    render(){
        console.log('render')
        return <form className="container" onSubmit={this.handleSubmit}>
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}> Nom </Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}> Prenom </Field>
            <Checkbox name="newsletter" checked={this.state.newsletter} onChange={this.handleChange}> Prenom </Checkbox>

            <button className="btn btn-primary">Envoyer</button>
        {/* <div>
            <label htmlFor="nom">Mon nom </label>
            <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"></input>
        </div>

        <div>
            <label htmlFor="nom">Mon prénom </label>
            <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"></input>
        </div>

        <div>
            <label htmlFor="newsletter">Newsletter </label>
            <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"/>
        </div>
        
        <input type="text" defaultValue="Koli"/>

        {JSON.stringify(this.state)} */}
        </form>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))