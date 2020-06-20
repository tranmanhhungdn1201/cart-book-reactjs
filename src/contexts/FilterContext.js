import React, {Component} from 'react';
import book from '../actions/book';

export const FilterContext = React.createContext();
export class FilterProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
        books : [],
        booksFilter : []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    book.getAllBook().then(data => {
      if(data){
        this.setState({
          books: [...data],
          booksFilter: [...data],
        })
      }else{
        alert('errors');
      }
    })
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const {books} = this.state;
    var booksFilter = [...books];
    if(value !== '0'){
      booksFilter = books.filter(book => book.type === value);
    }
    console.log(booksFilter);
    this.setState({
      booksFilter: booksFilter
    })
  }

  render() {
      const books = this.state.booksFilter;
      return (
        <FilterContext.Provider value={{books:books, handleInputChange: this.handleInputChange}}>
            {this.props.children}
        </FilterContext.Provider>
      )
  }
}