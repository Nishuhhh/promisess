const posts  = [
    {title: 'post One ',  body : 'this is post one'},
    {title : 'post two' , body : 'this is post two'}
]

function getposts(){
    
    setTimeout(()  => {
        let output = '' ;
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>` ;
        });
        document.body.innerHTML = output ;

    },1000);

}

function createpost(post){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            posts.push(post) ;

            const error = false;
            if(!error)
            {
                resolve() ;
            }
            else{
                reject('Error:  Something went wrong')
            }

        } , 0) ;

    }) ;
}

function del()
{
  return new Promise((resolve , reject) =>{
    setTimeout(()  =>{
           if(posts.length != 0)
           {
            
            resolve((posts.pop()).val) ;
           }
           else{
            reject() ;
           }


    },0) ;
  })


  let empty = ()=>{
    document.body.innerhtml = "the aray is empty" ;
  }
}
  
function creat_delete(post)
{
  return new Promise((resolve , reject) =>{
    setTimeout(()  =>{
        posts.push(post)
           if(posts.length != 0)
           {
            posts.pop();
            resolve() ;
           }
           else{
            reject() ;
           }


    },0) ;
  })


  let empty = ()=>{
    document.body.innerhtml = "the aray is empty" ;
  }
} 

createpost({title : 'post Three' , body :  'this is post three'}).then(() => {
     getposts()
     del(()  => {
      getposts();
     })

}) ;



const fifthpost =  createpost({title : "post five"  , body : "this is post five"}) ;

//createpost({title : 'post four' , body :  'this is post four'}).then(getposts) ;
//createpost({title : 'gg four' , body :  'this is post four'}).then(getposts) ;

const promise1 = Promise.resolve('Hello') ;
const promise2 = 10 ;
const lastuseractivity = new Promise((resolve, reject) => {
  setTimeout(() => {
    const time = new Date() ;
    resolve(time) ;

  },0000)
})

Promise.all([fifthpost, lastuseractivity])
.then(([post , activity]) =>{
             for(let i of posts)
             {
              console.log(i) ;
             }
           console.log(activity) ;
           console.log(promise1);
           console.log(promise2) ;


}).then(getposts)
Promise.all([del , lastuseractivity])
.then(([post,activity])  => {
      for(let i of posts)
      {
        console.log(i) ;
      }
      console.log(activity) ;
})

/*deletepost().then((m) => {
    console.log( `"it is useful", ${m}`)
}) ;
//creat_delete({title:'fifth post',body:'this is fifth post'}).then(getposts);s
*/


 



