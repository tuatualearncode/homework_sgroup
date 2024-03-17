// ME CODE

// const postAPI ='https://jsonplaceholder.typicode.com/todos/';

// fetch(postAPI)
//    .then(function(response){
//       return response.json()
//      })
//        .then(function(posts)
//         {
//             let htmls = posts.map(function(item)
//             {
//                 return 
//                 `
//                 <div id="banner">
//                   <img>${item.img}  
//                 </div>
//                 <div id="content">
//                     <h3 class="title">${item.title}</h3>
//                     <div class="decribe">
//                      <p class="decribe_content">${item.content}</p>
//                     </div>
//                 </div>
//                 <div id="footer">
//                     <div id="tag">
//                         <a class="link_url" href="${item.url}"></a>
//                         <ul>
//                             <li class="slug"> slug : ${item.slug} </li>
//                             <li class="category">category : ${item.category}</li>
//                         </ul>
//                     </div>
//                 `
//             })
//             let html = htmls.join('');
//             document.getElementById('container').innerHTML = html;
//         });
      


//ANH NAM CODE

const data = fetch('https://jsonplaceholder.typicode.com/todos/')
data.then(function(res) {
    console.log(res)
    return res.json()
    })
      .then(function(res) {
        console.log(res)
        let container = document.getElementById("container")
        const childs = res.map(function(item) {
            return
             `
             <div id="banner">
                              <img>${item.img}  
                             </div>
                            <div id="content">
                                 <h3 class="title">${item.title}</h3>
                                 <div class="decribe">
                                  <p class="decribe_content">${item.content}</p>
                                 </div>
                             </div>
                             <div id="footer">
                                 <div id="tag">
                                     <a class="link_url" href="${item.url}"></a>
                                     <ul>
                                         <li class="slug"> slug : ${item.slug} </li>
                                         <li class="category">category : ${item.category}</li>
                                     </ul>
                                 </div>
            `
        });
    console.log(container)
    container.innerHTML = childs.join("")
    }).catch(function(err){
    console.log("loi", err)
    }).finally(function() {
    console.log("finally")
    })
    
