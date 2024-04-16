import React, {useState} from 'react'

const Navbar = () => {

    const [first, setfirst] = useState(0)

    return (
        <>
            <div>
                <div>
                    <h1 className="text-xl font-bold">ToDo App</h1>
                </div>
                <div>
                    <h5>Home</h5>
                    <h5>Completed</h5>
                    <input type="text" />
                </div>
            </div>
        </>
    )
}

export default Navbar