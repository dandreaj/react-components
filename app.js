var GroceryList = (props) => (
  <ul>
   {props.items.map(item =>
     <GroceryListItem item={item} />
   )}
 </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
        done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal '
    };
    return <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>;
  }
}

ReactDOM.render(<GroceryList items={['Milk', 'Eggs', 'Orange Juice']}/>, document.getElementById("app"));
