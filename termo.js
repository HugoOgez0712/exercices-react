const ScalesNames = {
    c: 'Celsius',
    f: 'Fahrenheidt'
}


// (50°F — 32) x .5556 = 10°C
//converti les degrés Fahrenheidt en Celsius
function ToCelsius(fahrenheidt){
    return (fahrenheidt - 32) * 5 / 9 
}

//converti les degrés Celsius en Fahrenheidt
function ToFahrenheidt(celsius){
    return (celsius * 9 / 5) + 32
}

function BoilingVerdict({celsius}){
    if(celsius >= 100 &&  celsius <500 ){
        return <div className="alert alert-success">L'eau bout</div>
    }
    else if(celsius >= 500) {
        return <div className="alert alert-danger">Tout brule!</div>
    }
    else{
        return <div className="alert alert-info">L'eau ne bout pas</div>
    }
}

function tryConvert(temperature, convert){
    const value = parseFloat(temperature)
    if (Number.isNaN(value)){
        return '';
    }
    return Math.round(convert(value) * 100/100).toString
        
}

function Button({type, children}){
    const className = 'btn btn-' + type
return <button className={className}>{children}</button>
}


function PrimaryButton({children}){
   
return <Button type="primary">{children}</Button>
}


function SecondaryButton({children}){
   
    return <Button type="secondary">{children}</Button>
}

function Column2({left, right}){
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     temperature: '',
        //     scale:''
        // }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e){
        // this.setState({
        //     temperature: e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)
    }


    render(){
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleName = ScalesNames[this.props.scale]
        return <div>
        <div className="form-group mt-4">
                        <label htmlFor={name}>Température (en {scaleName})</label>
                        <input type="text" id={name} value={temperature} onChange={this.handleChange}></input>
                </div>
        
        </div>
     

    }
  
}


class Calculator extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            temperature: 20,
            scale: 'c'
        }
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheidtChange = this.handleFahrenheidtChange.bind(this)
    }

   
    handleTemperatureChange(temperature){
        this.setState({temperature})
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheidtChange(temperature){
        this.setState({scale: 'f',temperature})
    }

    render(){
        const {temperature} = this.state
        const celsius = this.state.scale === 'c' ? temperature : tryConvert(temperature , ToCelsius)
        const fahrenheidt = this.state.scale === 'f'? temperature : tryConvert(temperature , ToFahrenheidt)
        return<div className="container">

           
           
            
            <Column2 
            left={ <TemperatureInput scale="c" temperature={celsius} handleChange={this.handleChange} onTemperatureChange={this.handleCelsiusChange}/>}
            right={<TemperatureInput scale="f" temperature={fahrenheidt} handleChange={this.handleChange} onTemperatureChange={this.handleFahrenheidtChange}/>}
            />
            <br/>
            <BoilingVerdict celsius={celsius}/>

            <Button type="primary">Envoyer</Button>

            <SecondaryButton>TG</SecondaryButton>

        </div>
    }

}


ReactDOM.render(<Calculator/>, document.querySelector('#termo'))
// Mon test
// class Home extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             temperature: '0'
            
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(e){
//         this.setState({
//             temperature: e.target.value
//         })
//     }

//     render(){

//         return <div className="container">

//         <input type="text" value={this.state.temperature} onChange={this.handleChange} id="nom" name="nom"></input>
        

//        {this.state.temperature < 100 ? <div>L'eau ne bout pas</div> : <div>L'eau bout </div>}
        
//        </div>
//     }

// }

// ReactDOM.render(<Home/>, document.querySelector('#termo'))