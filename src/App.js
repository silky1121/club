import React, { Component } from 'react';
import ClubLogin from './components/ClubLogin';
import ClubBoard from './components/ClubBoard';
import styled from 'styled-components'
import ClubHeader from './Layout/ClubHeader';
import ClubNavigation from './Layout/ClubNavigation';

class App extends Component {
  state = {
    CL : 1,
    CP : 1,
  }

  handleCreate = (data) => {
    console.log(data);
    this.handlePageChange();
  }

  handlePageChange = () => {
    console.log('등록됐습니다')
    this.setState({
      CL: 2
    })
  }

  render() {
    return (
        <div>
          <Layout><ClubHeader/><ClubNavigation/></Layout>
          {
            this.state.CL+1 === 2
            ? (<ClubLogin onCreate={this.handleCreate}/>)
            : 
            this.state.CP+1 === 2
            ? (<ClubBoard/>)
            : (console.log(1))
          }
        </div>
      );
    }
  }

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export default App;