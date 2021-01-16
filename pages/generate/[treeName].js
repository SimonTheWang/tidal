import React from 'react'
import ReactFlow, { Background, MiniMap, Controls } from 'react-flow-renderer'

const Chance = require('chance').Chance()

export default function Tree(props) {
  var elements = populateTree(props.query.num? (props.query.num>200? 200 : props.query.num) : 25)
  
  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  }

  const onNodeClick = (event, element) => {
    console.log(element)
  }

  return (
    <>
      <p>{props.query.treeName}</p>
      <div style={{ height: 1000, width: 1000, paddingLeft: 25 }}>
        <ReactFlow elements={elements} onLoad={onLoad} onElementClick={onNodeClick}>
          {/* <MiniMap
            nodeColor={(node) => {
              switch (node.type) {
                case 'input': return 'red';
                case 'default': return 'rgb(0,255,255)';
                case 'output': return 'rgb(0,255,255)';
                default: return 'rgb(0,255,255)';
              }
            }}
            style={{Left: 0}}
          /> */}
          <Background
            variant="lines"
            gap={12}
            size={1}
          />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}



export async function getServerSideProps(context) {
  const params = context.query
  return {
    props: {
      query: params,
    },
  }
}

function populateTree(num) {
  var elements = []
  let maxColumn = Math.floor(Math.log2(num)).toString()

  // once for each column
  for (let colNum=0;colNum<maxColumn;colNum++) {
    //once for each element in column 
    for (let y=0;y<2**colNum;y++) {
      elements.push({
        id: elements.length.toString(),
        position: { x: colNum*200, y: 2**colNum/2*-100 + y*100},
        data: {label: Chance.name()},
        targetPosition: 'left',
        sourcePosition: 'right',
        draggable: false,
      })
    }
  }

  // for height of last col - 1
  for (let z=0;z<2**(maxColumn-1)-1;z++) {
    // add 2 lines
    for (let a=1;a<3;a++) {
      elements.push(
        { id: 'e'+z.toString()+'-'+a.toString(), source: z, target: a+2*z, animated: true },
      )
    }
  }

  return elements
}

function setSpacing(maxCol, currentCol, currentItem) {
  
  return {}
}