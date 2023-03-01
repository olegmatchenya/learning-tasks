let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
    };
    
 console.log(ask(
    "Вы согласны?",
    () => alert("Вы согласились!"),
    () => alert("Вы отменили выполнение!")
    ));


