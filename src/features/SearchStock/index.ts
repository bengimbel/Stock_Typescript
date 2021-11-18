import SearchStock from "./SearchStock";
import { mapDispatchToProps, mapStateToProps } from "./SearchStock.state";
import { connect } from 'react-redux'

export default connect(mapStateToProps, mapDispatchToProps)(SearchStock)
