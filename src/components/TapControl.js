import React from 'react';
import NewTap from './NewTap';
import TapList from './TapList';


class TapControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      step: 1,
      mainTapList: [],
      selectedTapId: null,
      selectedTap: null,
    };
  }

  handleNewResetClick = () => {
    if (this.state.step < 2) {
      this.setState((prevState) => ({
        setp: prevState.step + 1,
        selectedTap: null,
      }));
    } else {
      this.setState({
        step: 1,
        selectedTap: null,
      });
    }
  };

  handleSelectingTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(
      (t) => t.id === id
    )[0];
    this.setState({ step: 1, selectedTap: selectedTap});
  }

  //editClick here

  //deleteClick here

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList,
      step: 1,
      selectedTap: null,
    });
  };

  //handleEdit
  //handleDelete

render() {
  let currentDisplay = null;
  if(this.state.selectedTap != null){
    currentDisplay = (
      <>
        
      </>
    );
  }
}

}

export default TapControl;

