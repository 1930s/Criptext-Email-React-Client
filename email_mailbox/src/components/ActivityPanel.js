import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feed from './../containers/Feed';
import anime from 'animejs';
import './activitypanel.css';

let componentAnime = null;

class ActivityPanel extends Component {
  render() {
    return (
      <aside className="navigation-feed-container">
        <header>
          <div className="header-content">
            {this.renderHeaderIcon()}
            <div className="header-title">ACTIVITY FEED</div>
            <div
              className="header-button"
              onClick={() =>
                this.animateOutComponent(this.props.onToggleActivityPanel)
              }
            >
              <i className="icon-next" />
            </div>
            <div className="header-clear" />
          </div>
        </header>
        <div className="navigation-feed-content">
          {this.renderFeedSection(this.props)}
        </div>
      </aside>
    );
  }

  animateInComponent = () => {
    componentAnime = anime.timeline({
      direction: 'alternate',
      loop: false,
      autoplay: true
    });
    componentAnime.add({
      targets: '.navigation-feed-container',
      width: [0, 288],
      duration: 500,
      easing: 'linear'
    });
  };

  animateOutComponent = action => {
    componentAnime.pause();
    componentAnime = anime.timeline().add({
      targets: '.navigation-feed-container',
      width: 0,
      duration: 500,
      elasticity: 0,
      easing: 'linear',
      complete: () => {
        action();
      }
    });
  };

  componentDidMount() {
    this.props.onLoadFeeds();
    return this.animateInComponent();
  }

  renderHeaderIcon = () => {
    return (
      <div className="feed-header-icon">
        <i className={'icon-bell'} />
      </div>
    );
  };

  renderFeedSection = props => {
    if (props.newFeeds.size < 1 && props.oldFeeds.size < 1) {
      return this.renderEmptyFeedSection();
    }
    return (
      <div>
        {this.renderFeedList(
          props.newFeeds,
          props.onClickThreadIdSelected,
          'NEW'
        )}
        {this.renderFeedList(
          props.oldFeeds,
          props.onClickThreadIdSelected,
          'OLDER'
        )}
      </div>
    );
  };

  renderFeedList = (feedList, onClickThreadIdSelected, listName) => {
    if (feedList && feedList.size > 0) {
      return (
        <ul className="new-feeds">
          <li className="feed-section-title">
            <p className="text">{listName}</p>
          </li>
          {feedList.map((feed, index) => {
            return (
              <Feed
                key={index}
                feed={feed}
                onClickThreadIdSelected={onClickThreadIdSelected}
              />
            );
          })}
        </ul>
      );
    }
    return null;
  };

  renderEmptyFeedSection = () => {
    return (
      <div className="feed-content-empty">
        <div className="icon" />
        <div className="text">
          <span className="title">There&#39;s nothing new yet</span>
          <br />
          <span className="subtitle">Enjoy your day</span>
        </div>
      </div>
    );
  };
}

ActivityPanel.propTypes = {
  newFeeds: PropTypes.object,
  oldFeeds: PropTypes.object,
  onLoadFeeds: PropTypes.func,
  onToggleActivityPanel: PropTypes.func
};

export default ActivityPanel;
