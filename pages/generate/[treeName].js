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
            { id: 'e'+z.toString()+'-'+(a+2*z).toString(), source: z, target: a+2*z, animated: true, style: {'stroke': 'rgba(255, 255, 255)'} },
          )
        }
      }
    
      elements = arr    
    }

  }

  return (
    <>
      <div>
        <ReactModal
          isOpen={showModal}
          ariaHideApp={false}
          style={{
            content: {
              left: '0',
              right: '0',
              bottom: '0',
              top: '0',
              backgroundImage: 'url(https://cdn.discordapp.com/attachments/681368843951538206/800133606428377158/wave.png)'
            }
          }}
        >
            <button
              onClick={handleCloseModal}
              style={{
                backgroundColor: '#2196f3',
                WebkitTextFillColor: 'white',
                fontSize: 'large',
                padding: '7px',
                borderRadius: '4px',
                border: 'none'
              }}>
                <span>Close</span> 
            </button>
            <br/>
            <br/>
            <span>
              <img style={{ position: 'relative', top: 5}} src="https://img.icons8.com/ios/32/000000/user-male-circle.png"/>
              &nbsp;
              <b>{currentNode.label}</b>
            </span>
            <hr/>
          
            <span style={{ fontSize: 'large', fontWeight: 'bold', WebkitTextFillColor: 'white', WebkitTextStrokeColor: 'black', WebkitTextStroke: '1px'}}>
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

      <div style={{ height: 2900, width: 1440, backgroundColor: 'lightblue'}} hidden={showModal}>
        <ReactFlow elements={elements} onLoad={onLoad} onElementClick={onNodeClick}>
          {/* <Background
            variant="lines"
            color="#ADD8E6"
            gap={12}
            size={1}
          /> */}
          {/* <Controls /> */}
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

