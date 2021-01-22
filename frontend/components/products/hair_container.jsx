import Hair from './hair';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => { 
    return {
        products: Object.values(state.entities.products)
    }
}


const mapDispatchToProps = dispatch => { 
    return {
        fetchAllProducts: (category) => { dispatch(fetchAllProducts(category))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hair)