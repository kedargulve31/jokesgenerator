var actionBtn = document.querySelector('button')
var emoji = document.querySelector('.container .emoji')
var loader = document.querySelector('.container .loader')
var double = document.querySelector('.container .double')
var single = document.querySelector('.container .single')
var joke = document.querySelector('#joke')
var setup = document.querySelector('#setup')
var delivery =document.querySelector('#delivery')



actionBtn.addEventListener('click',()=>{
      if(emoji.style.display==='none'){
            double.style.display='none'
            single.style.display='none'
      }
      emoji.style.display ="none"
      loader.style.display="flex" 
      setTimeout(async() => {
            let res = await fetch('https://v2.jokeapi.dev/joke/Any');
            let data = await res.json()
            console.log(data)
            if(data){
                  loader.style.display = "none"
                  let jokeType = data.type 
                  if (jokeType === 'single') {
                        single.style.display = 'flex';
                        joke.innerText = data.joke;
                    } else if (jokeType === 'twopart') {
                        double.style.display = 'flex';
                        setup.style.display = 'flex';
                        delivery.style.display = 'flex';
                        
                        setup.innerText = data.setup;
                        delivery.innerText = data.delivery;
                    }
                    
            }

      }, 2000);
     

})