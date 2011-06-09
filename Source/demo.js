/*
---
description: demo application

license: MIT-style

authors:
- Alexander Duschek

requires:
  - Core/Class.Extras
  - Core/Element.Event
  - Core/Selectors

provides: [MooDropMenu, Element.MooDropMenu]

version: 1.0

accessibility enhancements: WAI ARIA specification (http://www.w3.org/TR/wai-aria-practices/#menu) is implemented, DropDown can be controlled completely by the keyboard.

...
 */
window.addEvent('domready',function(){

    var dropMenu = new MooDropMenu($('nav'),{
        onOpen: function(el){
            el.fade('in')
        },
        onClose: function(el){
            el.fade('out');
        },
        onInitialize: function(el){
            el.fade('hide').set('tween',{duration:200});
        }
    });

});