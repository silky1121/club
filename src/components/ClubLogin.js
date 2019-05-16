import React, { Component } from 'react';

class ClubLogin extends Component {
  state = {
    gender: '',
    age: '',
    zone:''
  }

  handleGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  handleAgeChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  handleZoneChange = (e) => {
    this.setState({
      zone: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label onChange={this.handleGenderChange}>성별
          <input type="radio" name="gender" value="남성"/>남
          <input type="radio" name="gender" value="여성"/>여
        </label>
      </div>
      <div>제 성별은 {this.state.gender}입니다</div>
      <div>
        <label>
          나이
          <select name="age" onChange={this.handleAgeChange}>
            <option value="20대 초반">20~23</option>
            <option value="20대 중반">24~26</option>
            <option value="20대 후반">27~30</option>
            <option value="30대 초중반">31~35</option>
            <option value="30대 중후반">36~40</option>
            <option value="40대">41~50</option>
            <option value="50대 이상">51~</option>
          </select>
        </label>
        <div>제 나이는 {this.state.age}입니다</div>
      </div>
      <div>
        <label>
          군/구
          <select name="zone" onChange={this.handleZoneChange}>
            <option value="남구">남구</option>
            <option value="달서구">달서구</option>
            <option value="달성군">달성군</option>
            <option value="동구">동구</option>
            <option value="북구">북구</option>
            <option value="서구">서구</option>
            <option value="수성구">수성구</option>
            <option value="중구">중구</option>
          </select>
        </label>
        <div>제 거주지는 {this.state.zone}입니다</div>
      </div>
      <div><button type="submit">등록</button></div>
      </form>
    )
  }
}

export default ClubLogin;