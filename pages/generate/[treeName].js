import React, { useState } from 'react'
import ReactFlow, { Background, MiniMap, Controls } from 'react-flow-renderer'
import ReactModal from 'react-modal';

const Chance = require('chance').Chance()
var elements = []

export default function Tree(props) {
  populateTree(props.query.num? (props.query.num>200? 200 : props.query.num) : 25)
  
  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  }

  const onNodeClick = (event, element) => {
    console.log(element)
    handleOpenModal()
  }

  var [showModal, setShow] = useState(false)
  
  const handleOpenModal = () => {
    setShow(true)
  }

  function handleCloseModal() {
    console.log('monkas')
    setShow(false)
  }

  function populateTree(num) {
    if (!elements.length) {
      let arr = []
      let maxColumn = Math.floor(Math.log2(num)).toString()
    
      // once for each column
      for (let colNum=0;colNum<maxColumn;colNum++) {
        //once for each element in column 
        for (let y=0;y<2**colNum;y++) {
          arr.push({
            id: arr.length.toString(),
            position: { x: colNum*200, y: 2**colNum/2*-100 + y*100},
            data: {label: (colNum==0?  props.query.root : Chance.name())},
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
          arr.push(
            { id: 'e'+z.toString()+'-'+(a+2*z).toString(), source: z, target: a+2*z, animated: true },
          )
        }
      }
    
      elements = arr    
    }

  }

  return (
    <>
      <p>{props.query.treeName}</p>
      <div>
        <ReactModal
          isOpen={showModal}
          ariaHideApp={false}
          >
            <p>t cool</p>
            <button
             style={{zIndex:0}}
             onClick={handleCloseModal}>
              close
            </button>
        </ReactModal>`
      </div>

      <div style={{ height: 1000, width: 500, paddingLeft: 25}} hidden={showModal}>
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

