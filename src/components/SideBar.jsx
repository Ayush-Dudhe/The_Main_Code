import React from "react";
import Sidebar from "react-sidebar";
import DynamicForm from '../dynamicForm'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    const sidebarStyles= {
      sidebar:{
          width:400,
          background: "white"
      }
    }
    return (this.props.check()&&
      <Sidebar styles={sidebarStyles}
        sidebar= {<DynamicForm/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        
      >
        
      </Sidebar>
    );
  }
}
 
export default App;
/*Responsive sidebar
A common use case for a sidebar is to show it automatically when there is enough screen width available. This can be achieved using media queries via window.matchMedia. This again has to be integrated into the parent component so you can use the information to make changes to the sidebar and main content.

/*import React from "react";
import Sidebar from "react-sidebar";
 
const mql = window.matchMedia(`(min-width: 800px)`);
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (this.props.check()&&
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}>
      </Sidebar>
    );
  }
}
 
export default App;*/