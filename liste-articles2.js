const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];



  const ProductRow = React.memo(function ({product}) {
    const name = product.stocked ? 
    product.name : 
    <span className="text-danger">{product.name}</span>
    console.log('render product')
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
})


function CategoryRow({category}) {


  
    return   <tr>
        <th colSpan="2">{category}</th>
      </tr>
    
}

   function ProductTable({products, inStockOnly, filteredText}) {
        const rows = []
        let lastCategory = null

        products.forEach(product => {
            if(inStockOnly && !product.stocked){
                return
            }
            if(product.name.indexOf(filteredText) === -1){
                return
            }
            if(product.category !== lastCategory){
                lastCategory = product.category
                rows.push(<CategoryRow key={lastCategory} category={lastCategory} />)
            }
            rows.push(<ProductRow onClick={() => this.demo = 1} key={product.name} product={product}/>)
        })

           
    return  <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
              </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
          </table>
        
    }

    class SearchBar extends React.Component{

        constructor(props){
            super(props)
            this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
            this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this)
        }
        handleFilterTextChange(e){
           this.props.onFilteredTextChange(e.target.value)
        }

        handleInStockOnlyChange(e){
            this.props.onStockChange(e.target.checked)
        }

       
        render(){
            const {filteredText, inStockOnly} = this.props
            return <div>
                <div className="form-group">
                    <input type="text" value={filteredText} onChange={this.handleFilterTextChange} className="form-control" placeholder="rechercher"/>
                </div>

                <div className="form-check">
                    <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockOnlyChange} className="form-check-input" id="stock"/>
                    <label htmlFor="stock" className="form-check-label">Show only available products </label>
                </div>
            </div>
        }
    }

  class FilterableProductTable extends React.Component{

        constructor(props){
            super(props)
            this.state = {
                filteredText: '',
                inStockOnly: false
            }
            this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
            this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this)

        }

        shouldComponentUpdate(nextProps, nextState){
            console.log(nextProps, nextState)
            return nextProps.products !== this.props.products ||
            nextState.filteredText !== this.state.filteredText ||
            nextState.inStockOnly !== this.state.inStockOnly
            return false;
        }
        handleFilterTextChange(filteredText){
            this.setState({filteredText})
        }

        handleInStockOnlyChange(inStockOnly){
            this.setState({inStockOnly})
        }

        render(){
            console.log('render')
            const {products} = this.props
            return <>
            {JSON.stringify(this.state)}
            <SearchBar 
            filteredText={this.state.filteredText}
            inStockOnly={this.state.inStockOnly}
            onFilteredTextChange={this.handleFilterTextChange}
            onStockChange={this.handleInStockOnlyChange}
            />
               <ProductTable products={products}
                filteredText={this.state.filteredText}
                inStockOnly={this.state.inStockOnly}
               />

            </>
        }
    

  }

  ReactDOM.render(
      <FilterableProductTable products={PRODUCTS}/>,
      document.getElementById('liste-articles2')
      
  )
