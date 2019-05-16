import React, { Component } from 'react';

class ClubBoard extends Component  {
  state = {
    boards: [
      {
        boardNumber: 1,
        boardWriter: 'Jang',
        boardTitle: 'love you',
        boardDate: new Date()
      },
      { 
        boardNumber: 2,
        boardWriter: 'Seon',
        boardTitle: 'love you',
        boardDate: new Date()
      }
    ]
  }

  render(){
    const { boards } = this.state;
    const list = boards.map(
      row => row.boardNumber + row.boardWriter
      );

    return(
      <div>
      {list}
        <table border="1">
          <tbody>
          <tr align="center">
            <td width="50">No.</td>
            <td width="300">Title</td>
            <td width="100">Name</td>
            <td width="100">Date</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default ClubBoard;