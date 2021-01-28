class Ex3_2 extends Component
{
  constructor()
  {
    super()
    this.state = {red : false, blue : false, green : false}
  }

  changeRed = () =>
  {
    this.setState({red : !this.state.red})
  }
  changeGreen = () =>
  {
    this.setState({green : !this.state.green})
  }
  changeBlue = () =>
  {
    this.setState({blue : !this.state.blue})
  }



  render()
  {



    let redItem = this.state.red ? <li>Red</li> : ''
    let greenItem = this.state.green ? <li>Green</li> : ''
    let blueItem = this.state.blue ? <li>Blue</li> : ''




    return(
    <div>
     <input type="checkbox" onChange={this.changeRed} />Red<br/>
     <input type="checkbox" onChange={this.changeGreen} />Green<br/>
     <input type="checkbox" onChange={this.changeBlue} />Blue<br/>
     <ul>
       {redItem}
       {greenItem}
       {blueItem}
       </ul> 
  </div>)
  }
}