---
layout: post
title:      "Hoisting and JavaScript: What the heck is it?"
date:       2021-01-28 04:44:45 +0000
permalink:  hoisting_and_javascript_what_the_heck_is_it
---

Let's start with the basic principle of how JavaScript executes an application. Here's some example code to get us started:

    var x = 2
    let y = x + 2
    const z = 'Hello World'
    
    function myFunction(){
		return 'How are you?'
    }

When an application is executed, it runs in two phases: compilation and execution.

The first is where all of the functions, variables, etc. are declared. It is important to remember that within this phase, variables do not have a definition other than `undefined`; our program only knows that they exist. In essence our program sees this in the first phase of compilation:

    var x = undefined
    let y = undefined
    const z = undefined
    function myFunction(){
	    return 'How are you?'
    }

Our variables and function have been declared, but not yet defined. If we were able to pause our application between phases, and called our variables they would return `undefined`.

It is here where hoisting occurs. Our application now knows that these variables exist, but how does it keep track of them when it goes to execute them? By 'hoisting' these declarations to the very tip top of our scope (figuratively; they don't actually change where they are physically written in the application), and storing them in memory.

    var x
    let y
    const z
    function myFunction() {
		return 'How are you?'
    }

    var x = 2
    let y = x + 2
    const z = 'Hello World'

Now, a special note on the types of variables and function that I have used above `let`, `var`,   `const`, `function(){}`

 - **var**: variables declared with `var` are not only able to be hoisted, but they can also be called before they've been initialized
 - **let**: variables declared with `let`, while they are able to be hoisted, they are unable to be called before they are defined.
 - **const**: since variables that are declared with `const` must also be defined at that time, they are also unable to be referenced prior to initialization; however they are technically hoisted as well.
 - **function(){}**: in order to be hoisted, the ability to be called before it physically appears in the code, a function must be declared with this function declaration. A function declaration that is assigned to a variable (aka a function expression, `let myVar = myFunction()` ) is not able to be hoisted.

The second phase, execution, is where our variables will be defined, and executed; after they have been 'hoisted' to the top of our application.

I know for me this tended to be a bear of a concept to understand, since it doesn't appear physically in the code. I hope this explanation has helped to clear things up a bit, and happy hoisting!

![bicycle powered pulley](https://media.giphy.com/media/HlcFs8tJ1Dfu8/giphy.gif)
