import React from "react";

class AddNote extends React.Component {
    setRef(ref) {
        this.note = ref;
    }

    handleSubmit() {
        console.log("button pressed!");
        let newNote = this.note.value;
        this.note.value = "";
        this.props.addNote(newNote);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef.bind(this)}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}> {/*<- another pattern instead of using .bind(this) */}
                        Submit
                    </button>
                </span>
            </div>
        )
    }
};

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}

module.exports = AddNote;
