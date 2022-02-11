
class Compteur extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return <div>
            <p>Hello world</p>
        </div>
    }
}


ReactDOM.render(
    <Compteur/>,
    document.getElementById('hook-react')
    
)