const app = {
    init: function(){
        console.log('ok');
        task.taskEvent();
    },
}

document.addEventListener('DOMContentLoaded',app.init);