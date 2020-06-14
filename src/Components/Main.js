import React, { Component } from 'react'
import fire from '../Config/Fire';
import '../App.css';


export default class Main extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             project:'React',
             runningTime:0,
             isRunning:false,
             taskName:'',
             date:'',
             startTime:'',
             endTime:''
             
        }
    }
    handleStartStopClick = () => {
           if(this.state.isRunning){
              clearInterval(this.timerID);
              this.setState({isRunning:false})
           }else{
               const startTime = Date.now()-this.state.runningTime;
               this.timerID=setInterval(()=>{
                   this.setState({runningTime: Date.now()-startTime,isRunning:true});
           },100);
    }
}
    handleResetClick = () =>{
        clearInterval(this.timerID);
        this.setState({
            isRunning:false,
            runningTime:0
            
        });
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }
    formatTime(t){
        return(t/1000).toFixed();

    }
    logout(){
        fire.auth().signOut();
    }
    taskHandler(event){
        this.setState({
           taskName:event.target.value 
        })
    }
    selectHandler(event){
        this.setState({
            project:event.target.value
        })
    }
    dateHandler(event){
        this.setState({
            date:event.target.value
        })
    }
    startTimeHandler(event){
        this.setState({
            startTime:event.target.value
        })
    }
    endTimeHandler(event){
        this.setState({
            endTime:event.target.value
        })
    }


    render() {
        return (
            <>
            
            <div>
              <h1 className="main"> Welcome</h1>
              <label>Task Name</label> 
              <input type="text" name="taskName"  placeholder="what are you Working on?" value={this.state.taskName} onChange={this.taskHandler.bind(this)}></input>
              <label>Project</label>
              <select value={this.state.project} onChange={this.selectHandler.bind(this)}>
                  <option value="React">React</option>
                  <option value="Angular">Angular</option>
                  <option value="Vue">Vue</option>
              </select>
              <label>Date</label>
              <input type="date" name="date" value={this.state.date} onChange={this.dateHandler.bind(this)}></input>
              <label>Start Time</label>
              <input type="time" name="startTime" value={this.state.startTime} onChange={this.startTimeHandler.bind(this)}></input>
              <label>End Time</label>
              <input type="time" name="endTime" value={this.state.endTimer}onChange={this.endTimeHandler.bind(this)}></input>
              </div>
             
             
              <div>
               <h1 className="main">{this.formatTime(this.state.runningTime)} sec</h1>
              <button className="timer" onClick={this.handleStartStopClick}>{this.state.isRunning?"Stop Timer" : "Start Timer"}</button>
              <button className="timer" onClick={this.handleResetClick}>Reset Timer</button><br></br>
               <br></br>
               </div> 
              <button onClick={this.logout}>Logout</button></>
            
            
            
            
        )
    }
}
