import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Profile from './profile';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetForms().then(snapshot =>
      this.setState(() => ({ forms: snapshot.val() }))
    );
  }

  render() {
    const { forms } = this.state;
    console.log(this.state)
    return (
      <div>
        { !!forms && <UserList forms={forms} /> }
      </div>
    );
  }
}

const UserList = ({ forms }) =>
  <div>
    <h2>Заявки:</h2>

    {Object.keys(forms).map(key =>
      <Profile
        key={key}
        profile = {forms[key].form}
      />
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);