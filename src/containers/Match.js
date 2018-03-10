import React from 'react';
import {connect} from 'react-redux';

import MatchBox from '../components/MatchBox';

const mapStateToProps = state => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(MatchBox);
