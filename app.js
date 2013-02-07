Ext.application({
    name: 'HelloExt',
    launch: function() {
        /*Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Dennis',
                    html : 'Du hast Ext JS unter dem MAC zum Laufen gebracht.'
                }
            ]
        })*/    
        
        //1. Standard-Button
        /*Ext.create('Ext.Button', {
            text: 'Click Dennis',
            renderTo: Ext.getBody(),
            handler: function() {
                alert ('Dennis, you clicked the button!')
            }
        });*/

        //2. Container mit Button
        /*Ext.create('Ext.Container', {
            renderTo: Ext.getBody(),
            items: [
                {
                    xtype: 'button',
                    text: 'Click Dennis'
                    //scale: 'large'
                }
            ]
        });*/

        //3. Button anlegen
        /*Ext.create('Ext.Button', {
            renderTo: document.body,
            text: 'Hier druecken',
            scale: 'large',
            arrowAlgin: 'bottom',
            enableToggle: true
        });*/

        //4. Panel anlegen
        Ext.create('Ext.panel.Panel', {
            title: 'Panel von Dennis',
            width: 300,
            height: 200,
            html: '<h1>Dennis Herdin</h1>',
            bodyPadding: 10,
            items: [{
                xtype: 'datefield',
                fieldLabel: 'Start Date:'
            }, {
                xtype: 'grid',
                columns: [{header: 'Name'}],
                store: Ext.create('Ext.data.ArrayStore', {}),
                flex: 1
            }],
            
            renderTo: Ext.getBody()
        });
    }
});