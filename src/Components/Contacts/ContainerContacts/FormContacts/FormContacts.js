import React from 'react';
import a from '../FormContacts/FormContacts.module.css';
import axios from "axios";


class FormContacts extends React.Component {

    state = {
        valueInputName: "",
        valueInputLastName: "",
        valueMessage: "",
        buttonDisabled: false
    };


    onValueInputNameChange = (e) => {
        this.setState({
            valueInputName: e.currentTarget.value,
        });
    };

    onValueInputLastNameChange = (e) => {
        this.setState({
            valueInputLastName: e.currentTarget.value,
        });
    };

    onValueInputMessageChange = (e) => {
        this.setState({
            valueMessage: e.currentTarget.value,
        });
    };

    ButtonDisabled = (bulean) => {
        this.setState({
            buttonDisabled: bulean
        });
    };


   onClickButton = () => {
       let valueInputName = this.state.valueInputName;
       let valueInputLastName = this.state.valueInputLastName;
       let valueMessage = this.state.valueMessage;
       this.ButtonDisabled(true);
        axios.post("http://localhost:3110/sendMessage", {
            name: valueInputName,
            lastName: valueInputLastName,
            message: valueMessage
        })
            .then(()=> {
                alert("Ваше сообщение отправлено");
                this.ButtonDisabled(false);
            });
       this.state.valueInputName = "";
       this.state.valueInputLastName = "";
       this.state.valueMessage = "";
    };

    render() {
        return (<div className={a.formContacts}>
                <div className={a.inputs}>
                    <input value={this.state.valueInputName} onChange={this.onValueInputNameChange} placeholder="Имя" type="text"/>
                    <input value={this.state.valueInputLastName} onChange={this.onValueInputLastNameChange} placeholder="Фамилия" type="text"/>
                    <textarea value={this.state.valueMessage} onChange={this.onValueInputMessageChange} placeholder="Введи сообщение" rows="15"></textarea>
                </div>
                <div className={a.oneButton}>
                    <button disabled={this.state.buttonDisabled} onClick={this.onClickButton}>Отправить</button>
                </div>
            </div>
        );
    }
}

export default FormContacts;
