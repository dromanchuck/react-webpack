import React from 'react';

class Input extends React.Component {

    render() {
        const placeholders = ['Do Something', 'Be owesome', 'Dont waste your time','Shut up, and get it!', 'you are the superman!'];
        const randomNumber = Math.abs(Math.ceil(Math.random()*10 - 5));
        let input;

        return (
            <div className='input'>
                <input placeholder={placeholders[randomNumber]}
                          ref={node => {input = node;}
                          }/>
                <button onClick={()=>{
                    this.props.addTodo(input.value);
                    input.value = '';
                }}>
                    Add Task
                </button>
            </div>
        );
    }
}
export default Input;