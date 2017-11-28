import React, { Component } from 'react'
import { connect } from 'react-redux'


class ProjectList extends Component {
    render() {
        return (
        <h1>HELLO BRO YOU ARE AT PROJECT LIST</h1>
        )
    }
}


const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

ProjectList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)

export default ProjectList
