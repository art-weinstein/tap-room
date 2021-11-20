import React from 'react';
import NewTap from './NewTap';
import TapList from './TapList';
import TapDetails from './TapDetails'


class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ step: 1, selectedTap: selectedTap });
  };

  handleSellTap = () => {
    let sellPint = this.state.mainTapList.filter((t) => t.id === this.state.selectedTap.id)[0];
    sellPint = sellPint.pints--;
    this.setState({ sellPint: sellPint })
  }

  handleFillTap = () => {
    let fillPint = this.state.mainTapList.filter((t) => t.id === this.state.selectedTap.id)[0];
    fillPint = fillPint.pints += 124;
    this.setState({ fillPint: fillPint })
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


  render() {
    let currentDisplay = null;
    if(this.state.selectedTap != null){
      currentDisplay = (
        <>
          <TapDetails 
            tap = {this.state.selectedTap}
            onSellTap = {this.handleSellTap}
            onFillTap = {this.handleFillTap}
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
          <button onClick={this.handleNewResetClick}>Add Keg</button>
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

//   render() {
//     let currentDisplay = null;
//     if (this.state.step === 1) {
//       currentDisplay = (
//         <>
//           <TapList
//             tapList={this.state.mainTapList}
//             onSelectingTap={this.handleSelectingTap}
//           />
//           <button onClick={this.handleNewResetClick}>Add Keg</button>
//         </>
//       );
//     } else if (this.state.step === 2) {
//       currentDisplay = (
//         <>
//           <NewTap onNewTapCreation={this.handleAddingNewTapToList} />
//           <button onClick={this.handleNewResetClick}>Back</button>
//         </>
//       )
//     } else if (this.state.selectedTap === 3) {
//       currentDisplay = (
//         <>
//           <TapDetails
//             tap={this.state.selectedTap}
//             onSellTap={this.handleSellTap}
//             onFillTap={this.handleFillTap}
//           />
//           <button onClick={this.handleNewResetClick}>Back</button>
//         </>
//       );
//     }
//     return currentDisplay;
//   }
}



export default TapControl;
