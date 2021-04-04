window.addEventListener('load',function(){

    document.getElementById('date').type= 'text';
    
    document.getElementById('date').addEventListener('blur',function(){
    
    document.getElementById('date').type= 'text';
    
    });
    
    document.getElementById('date').addEventListener('focus',function(){
    
    document.getElementById('date').type= 'date';
    
    });
    
    });