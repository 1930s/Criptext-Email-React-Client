import React, { Component } from 'react';
import signal from './../libs/signal';
import {
  closeCreatingKeys,
  openMailbox,
  remoteData,
  throwError,
  errors
} from './../utils/electronInterface';
import Loading from './Loading';

const animationTypes = {
  RUNNING: 'running-animation',
  STOP: 'stop-animation'
};

class LoadingWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      errors: 1,
      failed: false,
      animationClass: animationTypes.RUNNING,
      timeout: 0,
      accountResponse: undefined
    };
    this.increasePercent = this.increasePercent.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.checkResult = this.checkResult.bind(this);
    this.throwError = this.throwError.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    this.increasePercent();
  }

  render() {
    return (
      <Loading
        animationClass={this.state.animationClass}
        percent={this.state.percent}
        failed={this.state.failed}
        restart={this.restart}
      />
    );
  }

  increasePercent() {
    const percent = this.state.percent + 1;
    if (percent === 2) {
      this.createAccount();
    }
    if (percent > 99) {
      clearTimeout(this.tm);
      this.checkResult();
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increasePercent, 150);
  }

  async createAccount() {
    try {
      const userCredentials = {
        recipientId: remoteData.username,
        password: remoteData.password,
        name: remoteData.name
      };
      if (remoteData.recoveryEmail !== '') {
        userCredentials['recoveryEmail'] = remoteData.recoveryEmail;
      }
      const accountResponse = await signal.createAccount(userCredentials);
      this.setState({ accountResponse });
      if (this.state.accountResponse === false) {
        this.throwError();
      }
      if (this.state.accountResponse === true) {
        this.setState({ failed: false, errors: 0 });
      }
    } catch (e) {
      const errorToShow = {
        name: e.name,
        description: e.message
      };
      throwError(errorToShow);
      this.throwError();
      return;
    }
  }

  checkResult() {
    if (this.state.timeout > 110 && this.state.accountResponse === undefined) {
      clearTimeout(this.state.timeout);
      throwError(errors.UNABLE_TO_CONNECT);
      this.throwError();
      return;
    }
    if (this.state.accountResponse === false) {
      clearTimeout(this.state.timeout);
      this.throwError();
    }
    if (this.state.accountResponse === true) {
      clearTimeout(this.state.timeout);
      openMailbox();
      closeCreatingKeys();
    }
    this.setState({
      timeout: setTimeout(this.checkResult, 1000)
    });
  }

  async throwError() {
    clearTimeout(this.tm);
    this.setState({
      failed: true,
      animationClass: animationTypes.STOP
    });
    await setTimeout(() => {
      this.setState({
        percent: 0
      });
    }, 1000);
  }

  restart() {
    clearTimeout(this.tm);
    const prevErrors = this.state.errors;
    this.setState(
      {
        percent: 0,
        animationClass: animationTypes.RUNNING,
        failed: false,
        errors: prevErrors - 1
      },
      () => {
        this.increasePercent();
      }
    );
  }
}

export default LoadingWrapper;
