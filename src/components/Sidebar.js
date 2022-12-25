import React from 'react'
import s from "../styles/Sidebar.css"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input
} from '@chakra-ui/react'
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
      <img className="icon" src="./menu.png"/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay/>
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />
          <DrawerHeader fontSize="2rem">TeaPartea</DrawerHeader>

          <DrawerBody >
            <div className='sidebar'>Profile</div>
            <div className='sidebar'>About</div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar