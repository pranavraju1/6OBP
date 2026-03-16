// connecting class elements to the DOM

class Button {
    constructor(text){
        this.text = text;
        this.element=null
    }
    render(parentId){
        this.element = document.createElement('button')
        this.element.textContent = this.text;
        this.element.onclick = () => this.handleClick();
        
        const parent = document.getElementById(parentId);
        parent.appendChild(this.element); 
    }

    handleClick(){
        console.log(`${this.text} clicked`)
    }

    setText(newText){
        this.text = newText;
        this.element.textContent = newText
    }
}

const btn = new Button('Click Me')
btn.render('parentId')