import React, { useState } from 'react'
import ReactFlow, { Background, MiniMap, Controls } from 'react-flow-renderer'
import ReactModal from 'react-modal';

const Chance = require('chance').Chance()
var elements = []

export default function Tree(props) {
  populateTree(props.query.num? (props.query.num>200? 200 : props.query.num) : 25)
  
  var [showModal, setShow] = useState(false)
  var [currentNode, setNode] = useState({})

  // react flow fns 
  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  }
  const onNodeClick = (event, element) => {
    console.log(element.data)
    setNode(element.data)
    handleOpenModal()
  }
  const handleOpenModal = () => {
    setShow(true)
  }
  function handleCloseModal() {
    setShow(false)
    setNode({})
  }


  function populateTree(num) {
    if (!elements.length) {
      let arr = []
      let maxColumn = Math.round(Math.sqrt(num))
    
      // once for each column
      for (let colNum=0;colNum<Math.max(maxColumn,1);colNum++) {
        //once for each element in column 
        for (let y=0;y<2**colNum;y++) {
          arr.push({
            id: arr.length.toString(),
            position: { x: colNum*200, y: 2**colNum/2*-100 + y*100},
            data: {
              label: (colNum==0?  props.query.root? props.query.root:Chance.name() : Chance.name()),
              date: Chance.date({string: true, year: 2021}),
              location: Chance.country({ full: true }),
              url: null
            },
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
          <button
            onClick={handleCloseModal}>
              <span>X</span> 
          </button>
          <br/>
          <br/>
          <span>
            <b>{currentNode.label}</b>
          </span>
          <hr/>
          <span>{currentNode.location} | {currentNode.date}</span>
          <div>
            <img
              style={{display: 'block', margin: '0 auto'}}
              src={currentNode.url? currentNode.url:"https://img.icons8.com/cute-clipart/512/000000/double-tick.png"}
            />
          </div>


        </ReactModal>
      </div>

      <div style={{ height: 1000, width: 500}} hidden={showModal}>
        <ReactFlow elements={elements} onLoad={onLoad} onElementClick={onNodeClick}>
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

