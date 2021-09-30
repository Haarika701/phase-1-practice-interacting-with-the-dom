    var count_num =0;   //global variable
    var count_element = document.getElementById('counter'); 
    var like_element = document.querySelector('.likes'); 

    var likes_count =0;
    let newLi;

    function counterTime(){
        // console.log(a);
        count_num = parseInt(count_element.innerText)+1;  //html element as string , to convert it to int used parseInt
        likes_count = 0;
        count_element.innerText = count_num;
    }
    let intervalID = setInterval(function(){ counterTime() }, 1000);  //
    //console.log(myVar)

    minus = document.getElementById('minus');
    plus = document.getElementById('plus');
    heart = document.getElementById('heart')
    pause=document.getElementById("pause");
    let resume = document.createElement("resume");
    submit = document.getElementById('')
    // //      


    //add event listeener
    minus.addEventListener("click", () => minusBtn ());
    plus.addEventListener("click" ,() => plusBtn());
    heart.addEventListener("click", () => heartBtn());
    pause.addEventListener("click",() => playpauseBtn());
    resume.addEventListener("click",() => playpauseBtn());
    //submit.addEventListener("click",() => commentForm());
    function minusBtn(){
        //myVar = parseInt(b.innerText)-1;    //html element as string , to convert it to int used parseInt
        count_element.innerText = count_num-1;
    }
    function plusBtn(){
        count_element.innerText = count_num+1;
    }
    function heartBtn(){
        likes_count++;
        console.log(like_element);
        //numLikes(e);
        newLi = document.createElement('li');
        newLi.innerText=`${count_num} has been liked ${likes_count} times`;
        if(likes_count === 1){
            like_element.append(newLi);
        }
        else{
            console.log(like_element.lastElementChild.innerText);
            like_element.lastElementChild.innerText = `${count_num} has been liked ${likes_count} times`;
        }
    }

    function playpauseBtn(){
        console.log('asdasdsads');
    if(pause.textContent === ' pause '){
        clearInterval(intervalID);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        
        pause.innerText = ' resume ';
    }else
    { console.log('resume');
        setInterval(function(){ counterTime() }, 1000);
    pause.disabled = false
    minus.disabled = false
    plus.disabled = false;
    heart.disabled = false;
    }
    }



    const form = document.getElementById('comment-form')
    console.log(form)
    form.addEventListener("submit",(event) =>{
        event.preventDefault()
        newLi = document.createElement('li');
    newComment = document.getElementById('list') ;
    newLi.textContent = document.getElementById('comment-input').value;
    newComment.append(newLi);
        console.log('submitted form')
        form.reset()
    })    

    

    // 3 has been liked 1 time
    // 5 has been liked 1 time
    // 12 has been liked 1 time
    // 13 has been liked 1 time
    // 14 has been liked 3 times



    

