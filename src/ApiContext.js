import React, { Component } from "react";
import NotefulApiService from "./services/noteful-api-service";

const ApiContext = React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
});
export default ApiContext;

export class NotefulProvider extends Component {
  state = {
    notes: [],
    folders: [],
    error: null,
  };

  componentDidMount() {
    this.clearError();
    NotefulApiService.getFolders()
      .then(this.setFolderList)
      .catch(this.setError);
    NotefulApiService.getNotes()
      .then(this.setNoteList)
      .catch(this.setError);
  }

  setFolderList = (folders) => {
    this.setState({ folders });
  };

  setNoteList = (notes) => {
    this.setState({ notes });
  };

  addFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  };

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note],
    });
  };

  deleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  };

  removeItemFromBasket = (itemId) => {
    this.setState({
      basket: this.state.basket.filter((product) => product.item_id !== itemId),
    });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      addFolder: this.addFolder,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
    };
    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
