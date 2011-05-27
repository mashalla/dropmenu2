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