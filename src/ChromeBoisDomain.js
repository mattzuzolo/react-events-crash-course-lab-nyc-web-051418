import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* todo: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
     let mouseCoordsX = event.clientX
     let mouseCoordsY = event.clientY
     drawChromeBoiAtCoords(mouseCoordsX, mouseCoordsY)

     {/* Mouse coords docs: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX*/}
  }

  /* todo: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   /* calling function in render() below*/

  /* todo: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

   onKeyPress = (e) => {
     if (e.key === "a") {
       resize("+");
     }
     else if (e.key === "s"){
       resize("-");
     }
     {/* called from ChromeBoisDomain */}
   }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling()}
        onKeyPress={this.onKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
