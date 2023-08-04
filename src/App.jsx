import React from 'react'
import './App.css'
import Header from './component/Header'
import Input from './component/Input'
import TodoList from './component/TodoList'

export default function() {

    const [isRefresh, setIsRefresh] = React.useState(true)
    
    return (
        <div>
            <Header />
            <Input setRefresh={setIsRefresh} />
            <TodoList isRefresh={isRefresh} setRefresh={setIsRefresh} />
        </div>
    )
}