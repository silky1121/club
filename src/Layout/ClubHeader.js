import React, { Component } from 'react';
import styled from 'styled-components'
import './ClubHeader.css'

class ClubHeader extends Component {
  render () {
    return(
      <div className="Container">
        <div className="Element">
          <div className="ShortCut">등록</div>
          <div className="Logo">
            <img
              width="100%"
              height="100%"
              src="https://www.linkedin.com/media-proxy/ext?w=2319&h=1087&hash=yKKT8%2BX7rl%2FIHw%2FEsY7DbZzWmyk%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oIQY_PTWn8CnL_5aaEFHXrCKanMMCnoydfMi1yklMtKbr9FHO5Q9HpNsm3P4Uv0PjtJZnmKVdZbEFn0D8ftYljYUl084L7B-7kYWhaj-0MaCSvPur7f0cxPjUAyMuhJ4nIHG5c4V22YffwP9ZHCZxu4Zt4yVJtv_Q"
              alt="logo"/>
          </div>
          <Search><h1>Daegu.Club.Community.</h1></Search>
          </div>
      </div>
    );
  }
}

export default ClubHeader;

const Search = styled.div`
  order: 3;
  width: 80px;
  text-align: center;
`