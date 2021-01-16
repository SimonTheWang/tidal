import React from 'react'
import ReactFlow, { Background, MiniMap } from 'react-flow-renderer'

const Chance = require('chance').Chance()

export default function Tree(props) {
  var elements = populateTree(props.query.num? props.query.num : 25)
  // [
  //   {
  //     id: '1',
  //     type: 'input', // input node
  //     data: { label: 'Input Node' },
  //     position: { x: 250, y: 25 },
  //   },
  //   // default node
  //   {
  //     id: '2',
  //     // you can also pass a React component as a label
  //     data: { label: <div>Default Node</div> },
  //     position: { x: 100, y: 125 },
  //   },
  //   {
  //     id: '3',
  //     type: 'output', // output node
  //     data: { label: 'Output Node' },
  //     position: { x: 250, y: 250 },
  //   },
  //   // animated edge
  //   { id: 'e1-2', source: '1', target: '2', animated: true },
  //   { id: 'e2-3', source: '2', target: '3' },
  // ];

  return (
    <>
      <p>cliiiiiiive</p>
      <div style={{ height: 1000, width: 1000 }}>
        <ReactFlow elements={elements}>
          <MiniMap
            nodeColor={(node) => {
              switch (node.type) {
                case 'input': return 'red';
                case 'default': return 'rgb(0,255,255)';
                case 'output': return 'rgb(0,255,255)';
                default: return 'rgb(0,255,255)';
              }
            }}
          />
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

  var currentColumn = 0
  var maxColumn = Math.floor(Math.log2(num)).toString()
  var currentElement = '0|0'

  // once for each column
  for (let x=0;x<maxColumn;x++) {
    //once for each element in column 
    for (let y=0;y<2**x;y++) {
      let el = {
        id: elements.length.toString(),
        position: { x: x*200, y: y*100 },
        data: {label: Chance.name()},
        targetPosition: 'left',
        sourcePosition: 'right'
      }
      elements.push(el)
    }
  }

  return elements
}