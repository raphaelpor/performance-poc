// Create a class for the element
;(function () {
  class CustomRow extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super()

      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' })

      // Create spans
      const wrapper = document.createElement('div')
      wrapper.setAttribute('class', 'custom-row')

      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style')
      console.log(style.isConnected)

      style.textContent = `
       .custom-row {
            background-color: cadetblue;
            width: 98%;
            padding: 24px;
            margin: 24px 1%;
        }
        
        .custom-item {
            background-color: cornsilk;
            display: inline-block;
            width: 150px;
            height: 70px;
            margin: 0 16px;
        }
      `

      // Attach the created elements to the shadow dom
      shadow.appendChild(style)
      console.log(style.isConnected)
      shadow.appendChild(wrapper)

      for (let index = 0; index < 5; index++) {
        const item = document.createElement('div')
        item.setAttribute('class', 'custom-item')
        wrapper.appendChild(item)
      }
    }
  }

  // Define the new element
  customElements.define('custom-row', CustomRow)

  var rootElement = document.getElementById('root')

  function createRow() {
    var row = document.createElement('custom-row')
    rootElement.appendChild(row)

    setTimeout(() => {
      createRow()
    }, 200)
  }

  function removeRow() {
    const rowToRemove = document.getElementById('root').firstElementChild
    rowToRemove.parentElement.removeChild(rowToRemove)

    setTimeout(() => {
      removeRow()
    }, 200)
  }

  createRow()

  setTimeout(() => {
    removeRow()
  }, 1000)
})()
