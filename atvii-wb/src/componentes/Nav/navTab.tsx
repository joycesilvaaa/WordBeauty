import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

interface NavTabProps {
  ListComponent: React.ComponentType;
  ManageComponent: React.ComponentType;
}

class NavTab extends Component<NavTabProps> {
  static propTypes = {
    ListComponent: PropTypes.elementType.isRequired,
    ManageComponent: PropTypes.elementType.isRequired,
  };

  render() {
    const { ListComponent, ManageComponent } = this.props;

    return (
      <Tabs
        defaultActiveKey="Listagem"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Listagem" title="Listagem">
          <div className="lista-cliente-container">
            <ListComponent />
          </div>
        </Tab>
        <Tab eventKey="Cadastro" title="Gerenciar ">
          <ManageComponent />
        </Tab>
      </Tabs>
    );
  }
}

export default NavTab;
