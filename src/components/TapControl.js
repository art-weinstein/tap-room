import React from 'react';
import NewTap from './NewTap';
import TapList from './TapList';
import TapDetails from './TapDetails'


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
        step: prevState.step + 1,
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
  };

  handleSellTap = (id) => {
    let newMainTapList = [...this.state.mainTapList];
    const selectedTap = this.state.mainTapList.filter((t) => t.id === id);
    const tapListIndex = newMainTapList.findIndex(
      (t) => t.id === selectedTap[0].id
    );
    if (newMainTapList.filter((t)=>t.id===selectedTap[0].id).length >0){
      newMainTapList[tapListIndex].quantity -= 1;
    }
    this.setState({mainTapList: newMainTapList})
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
        <TapDetails 
          tap = {this.state.selectedTap}
          onSellTap = {this.handleSellTap}
        />
        <button onClick={this.handleNewResetClick}>Back</button>
      </>
    );
  } else if (this.state.step === 1){
    currentDisplay = (
      <>
        <TapList
          tapList={this.state.mainTapList}
          onSelectingTap={this.handleSelectingTap}
        />
        <button onClick={this.handleNewResetClick}>Add Tap</button>
      </>
    );
  } else if (this.state.step === 2){
    currentDisplay = (
      <>
        <NewTap onNewTapCreation = {this.handleAddingNewTapToList}/>
        <button onClick={this.handleNewResetClick}>Back</button>
      </>
    )
  }
  return currentDisplay;
}

}

export default TapControl;

