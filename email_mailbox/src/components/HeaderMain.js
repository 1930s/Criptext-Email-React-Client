import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import ProfileShortCutWrapper from './ProfileShortCutWrapper';
import './headermain.scss';

const HeaderMain = props => (
  <div className="header-main">
    <SearchBox
      allLabels={props.allLabels}
      isHiddenMenuSearchHints={props.isHiddenMenuSearchHints}
      isHiddenMenuSearchOptions={props.isHiddenMenuSearchOptions}
      getSearchParams={props.getSearchParams}
      onClickSearch={props.onClickSearch}
      onSearchSelectThread={props.onSearchSelectThread}
      onToggleMenuSearchHints={props.onToggleMenuSearchHints}
      onToggleMenuSearchOptions={props.onToggleMenuSearchOptions}
      onTriggerSearch={props.onTriggerSearch}
      searchParams={props.searchParams}
      threads={props.threads}
      hints={props.hints}
    />
    <ProfileShortCutWrapper onClickSettings={props.onClickSection} />
  </div>
);

HeaderMain.propTypes = {
  allLabels: PropTypes.array,
  getSearchParams: PropTypes.func,
  hints: PropTypes.object,
  isHiddenMenuSearchHints: PropTypes.bool,
  isHiddenMenuSearchOptions: PropTypes.bool,
  onClickSection: PropTypes.func,
  onClickSearch: PropTypes.func,
  onSearchSelectThread: PropTypes.func,
  onToggleMenuSearchHints: PropTypes.func,
  onToggleMenuSearchOptions: PropTypes.func,
  onTriggerSearch: PropTypes.func,
  searchParams: PropTypes.object,
  threads: PropTypes.object
};

export default HeaderMain;
