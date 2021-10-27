import React, {useState, Component} from 'react'
import { render } from 'react-dom';
import ReactFlow, { useStoreState } from 'react-flow-renderer'
import NodeComponent from './NodeComponent'



const elements = [
  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  // you can also pass a React Node as a label
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
]



const NodesDebugger = () => {
  const nodes = useStoreState((state) => state.nodes);
  
  console.log(nodes);
  //console.log(nodes[0].data);
  return null;
};


class NodePath extends Component{ 
  
  constructor(){
    super()
    this.state={
      value:'false'
    }
  }
  
  render(){
    const onElementClick = (event, element) => {
      console.log('click', element);
      this.setState({
        value:'true'
      })
      console.log(this.state)
    };
    const onPaneClick=(event)=>{
      this.setState({
        value:'false'
      })
    }
    return(
        <div>
        <ReactFlow 
        elements={elements}
        style={{height:500}}
        onElementClick={onElementClick}
        onPaneClick={onPaneClick}
        >
          <NodesDebugger/>
          <NodeComponent check={()=>{
            console.log(this.state.value)
            if(this.state.value==='true'){
              console.log("if")
            return true;
          }else{
            console.log("else")
            return false;
          }}}/>
          </ReactFlow>
          
        <h1>Hello</h1>
       </div>
    );
  }
}

export default NodePath;