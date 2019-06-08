import React from 'react';
import Emp from './Emp';
class Lists extends React.Component{
state = {
    emps : [
        {id: 1, name: 'pankaj', salary: 50000},
        {id: 2, name: 'ashish', salary: 60000},
        {id: 3, name: 'pradip', salary: 70000},
        {id: 4, name: 'rohit', salary: 8000},
        {id: 5, name: 'jay', salary: 900},
        {id: 6, name: 'anurag', salary: 220000},
    ]
}
delEmp = (index) => {
    const copyEmps = Object.assign([], this.state.emps);
    copyEmps.splice(index,1);
    this.setState({
        emps: copyEmps
    })
}
    render(){
        return (
            <table style = {{width:'500px' , color: 'blue'}}>
                    <tbody>
                        {
                            this.state.emps.map(
                                (emp, id) => {
                                    return (<Emp salary = {emp.salary} 
                                        key = {emp.id} 
                                        keyValue = {emp.id}
                                        deleteEvent = {this.delEmp.bind(this,id)} >
                                        {emp.name}</Emp>)
                                }
                            )
                        }
                    </tbody>
            </table>
        );
    }
        
    
}

export default Lists;

