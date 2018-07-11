import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { LabelType } from '../utils/electronInterface';

class ThreadItemWrapper extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false
    };
  }

  render() {
    return (
      <ThreadItem
        {...this.props}
        isVisibleMoveToTrash={this.handleIsVisibleMoveToTrash()}
        onToggleFavorite={this.handleToggleFavorite}
        onClickMoveToTrash={this.handleClickMoveToTrash}
        onRegionEnter={this.onRegionEnter}
        onRegionLeave={this.onRegionLeave}
        hovering={this.state.hovering}
      />
    );
  }

  handleIsVisibleMoveToTrash = () => {
    const currentLabelId = LabelType[this.props.mailbox].id;
    const isDraftMailbox = currentLabelId === LabelType.draft.id;
    const isTrashMailbox = currentLabelId === LabelType.trash.id;
    return !(isDraftMailbox || isTrashMailbox);
  };

  handleToggleFavorite = () => {
    this.props.onAddOrRemoveLabel(LabelType.starred.id);
  };

  handleClickMoveToTrash = () => {
    this.props.onAddMoveLabel(LabelType.trash.id);
  };

  onRegionEnter = () => {
    this.setState({
      hovering: true
    });
  };

  onRegionLeave = () => {
    this.setState({
      hovering: false
    });
  };
}

ThreadItemWrapper.propTypes = {
  mailbox: PropTypes.string,
  onAddMoveLabel: PropTypes.func,
  onAddOrRemoveLabel: PropTypes.func
};

export default ThreadItemWrapper;
