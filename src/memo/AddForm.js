import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
  inputStyle = {
    fontSize: "16pt",
    color: "#006",
    padding: "1px",
    margin: "5px 0px"
  };
  btnStyle = {
    fontSize: "14pt",
    color: "#006",
    padding: "2px 10px"
  };

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  // フォームに入力した値をmessageにセット
  doChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  // メモを作成する処理
  doAction(e)  {
    e.preventDefault(); // フォームを消費する処理
    let action = addMemo(this.state.message); // doChangeでフォームに入力した値を元にメモ追加のアクションを作成
    this.props.dispatch(action); //Store.jsのmemoReducerに値を送信
    // メモを作成し終わったら、フォームの中身を空にする
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <p style={this.message}>{this.props.message}</p>
        <form onSubmit={this.doSubmit}>
          <input type="text" size="40" onChange={this.doChange} style={this.inputStyle} value={this.state.message} required />
          <input type="submit" style={this.btnStyle} value="Add"/>
        </form>
      </div>
    );
  }
}

export default connect((state)=>state)(AddForm);