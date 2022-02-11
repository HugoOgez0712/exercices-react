class Recette extends React.Component{
    constructor(props){
        super(props)
            this.state = {n: 0, 
            products:""
            }
    }
        
        
        render(){

            return <div>
             
                <div> La recette de la {this.props.products}</div>
            </div>
        }
    
}

ReactDOM.render(
    <Recette products="moussaka"/>,
    document.getElementById('recette')
    
)