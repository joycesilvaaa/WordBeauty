import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IOption } from "./interface/option";

interface SeletorProps {
    options : IOption[];
    onChange: (selectedOption: string) => void;
}

export default class Seletor extends Component<SeletorProps> {
    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        this.props.onChange(selectedValue);
    };

    render() {
        const { options } = this.props;
        return(
            <Form.Select aria-label="seletor" onChange={this.handleChange}>
                <option value="">{"Selecione uma opção"}</option>
                {options.map((option, index)=>(
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </Form.Select>
        );
    }
}
