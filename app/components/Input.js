import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput:'none',
            changeButton:'Start'
        };
        this.show = ()=> {
            if(this.state.showInput === 'none') {
                this.setState({showInput:'flex', changeButton:'Finish'});
            } else {
                this.setState({showInput:'none', changeButton:'Start'});
            }
        }
    }

    render() {
        const placeholders = ['Blogging is a conversation, not a code.', 'Blogging is like work, but without coworkers thwarting you at every turn.', 'A blog is only as interesting as the interest shown in others.', 'Blogging is just writing — writing using a particularly efficient type of publishing technology.'];
        const randomNumber = Math.abs(Math.ceil(Math.random()*10 - 6));
        let input;

        return (
            <div className='input'>
                <button onClick={this.show}>{this.state.changeButton} blogging</button>
                <textarea placeholder={placeholders[randomNumber]}
                          ref={node => {input = node;}
                          } style={{display:this.state.showInput}}> </textarea>
                <button onClick={()=>{
                    this.props.addTodo(input.value);
                    input.value = '';
                }} style={{display:this.state.showInput}}>
                    Add
                </button>
            </div>
        );
    }
}
export default Input;