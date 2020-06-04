import React, {useState} from 'react'
import { NativeRouter, Route } from 'react-router-native'
import NavButton from './NavButton'
import Menu from './Menu'
import DefaultPage from './DefaultPage'
import ChatBot from './ChatBot'

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <NativeRouter>
            <Route exact path="/">
                <DefaultPage headerText={"Home"} />
                <Menu isOpen={isOpen} handleClick={handleLinkClick} />
                <NavButton handleNavClick={handleNavClick} isOpen={isOpen} />
            </Route>
            <Route path="/about">
                <DefaultPage headerText={"About"} />
                <Menu isOpen={isOpen} handleClick={handleLinkClick} />
                <NavButton handleNavClick={handleNavClick} isOpen={isOpen} />
            </Route>
            <Route path="/chat-bot">
                <ChatBot headerText={'Chat-Bot'}/>
                <Menu isOpen={isOpen} handleClick={handleLinkClick} />
                <NavButton handleNavClick={handleNavClick} isOpen={isOpen} />
            </Route>
        </NativeRouter>
    )
}

export default Main
