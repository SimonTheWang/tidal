import React, { useState } from 'react'
import ReactFlow, { Background, MiniMap, Controls } from 'react-flow-renderer'
import ReactModal from 'react-modal';
import Image from 'next/image'

var pictureLinks = require('../../utils/pictures')
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
              date: colNum==0? (props.query.date? props.query.date:Chance.date({string: true, year: 2021}) ) : Chance.date({string: true, year: 2021}),
              location: Chance.country({ full: true }),
              url: pictureLinks[Math.min(colNum-1,pictureLinks.length)]
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
          style={{
            content: {
              backgroundImage: 'url(https://cdn.discordapp.com/attachments/681368843951538206/800133606428377158/wave.png)'
            }
          }}
        >
            <button
              onClick={handleCloseModal}>
                <span>X</span> 
            </button>
            <br/>
            <br/>
            <span>
              <img style={{ position: 'relative', top: 5}} src="https://img.icons8.com/ios/32/000000/user-male-circle.png"/>
              &nbsp;
              <b>{currentNode.label}</b>
            </span>
            <hr/>
          
            <span style={{ fontWeight: 'bold', WebkitTextFillColor: 'white'}}>
              {currentNode.location} | {currentNode.date}
              <img style={{ position: 'relative', top: 15}} src="https://img.icons8.com/clouds/64/000000/worldwide-location.png"/>
            </span>
            <hr/>
            <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
              <img
                style={{ margin: '0 auto', height: '100%', width: '100%'}}
                src={currentNode.url? currentNode.url:"https://img.icons8.com/cute-clipart/256/000000/double-tick.png"}
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

