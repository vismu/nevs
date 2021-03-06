import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeRoute, deleteLoco} from 'app/actions/App';
import {getLocoList} from 'app/selectors/App';
import LocoList from 'app/components/LocoList';

const mapStateToProps = (state) => ({
	locoList: getLocoList(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
	deleteLoco,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocoList);
