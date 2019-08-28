import React from 'react'
import './ChoreCard.css'
import Card from 'react-bootstrap/Card'

class ChoreCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rotation: this.props.shift
        }
        this.names = ["Jason", "Steve", "Andrew", "Steven", "AJ"]
    }

    getThisSunday() {
      var day = new Date();
      while (day.getDay() !== 0) {
        day = new Date(day.valueOf() - 86400000)
      }
      return (day.getMonth() + 1) + "/" + day.getDate();
    }

    render() {
      return <div><Card bg="light" text="black" border="info" className="mx-auto" style={{"max-width": "22rem"}}>
        <Card.Body>
          <Card.Title>{this.names[this.state.rotation]}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Chores for week of {this.getThisSunday()}</Card.Subtitle>
          <Card.Text>
            {this.props.chore}
          </Card.Text>
        </Card.Body>
      </Card>
      <br/></div>
    }
}

export default ChoreCard;