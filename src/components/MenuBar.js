import React from 'react'

class MenuBar extends React.Component {

  state = {
    active: [
      'item active',
      'item',
      'item',
      'item'
    ]
  }

  handleClick = event => {
  let index = this.whichEvent(event)
  this.setState({
    active: this.state.active.map( (item, i) => {
      if (i === index) {
        return 'item active'
      }
      else {
        return 'item'
      }
    })
  }, () => console.log(this.state.active))
  }

  itemActiveLogic = (className) => {
    if (className === 'item active') {
      return 'item'
    }
    else {
      return 'item active'
    }
  }

  whichEvent = event => {
    switch (event.target.id) {
      case 'profile':
        return 0
      case 'photo':
        return 1
      case 'cocktail':
        return 2
      case 'pokemon':
        return 3
    }
  }

  render() {
    return (
      <div className="ui four item menu">
      <a onClick={this.props.clickEvent} onPointerDown={this.handleClick} className={this.state.active[0]} id="profile">
      <i className="user large icon" id="profile"/>
      </a>

      <a onClick={this.props.clickEvent} onPointerDown={this.handleClick} className={this.state.active[1]} id="photo">
      <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={this.props.clickEvent} onPointerDown={this.handleClick} className={this.state.active[2]}id="cocktail">
      <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={this.props.clickEvent} onPointerDown={this.handleClick} className={this.state.active[3]} id="pokemon">
      <i className=" themeisle large icon" id="pokemon"/>
      </a>
      </div>
    )
  }

}

export default MenuBar
