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

const data = fetch('https://jsonplaceholder.org/posts?fbclid=IwAR1ZmpZTK7tPv3xfKWhLKtnIKiyHasMH4LWsZDR6jsjpJ1a94jBOKb8OZyY');
data.then(function(res) {
    console.log(res);
    return res.json();
    }).then(function(res)
       {
        console.log(res);
        let container = document.getElementById("container");
        let childs;
        let bacham = "...";
        childs = res.map(function(item) 
        {
            function chuoi(item)
             {
                if (item.content.length >= 180 ) {
                    return item.content.slice(0, 180) + bacham;
                } else {
                    return item.content;
                }
             }
            let newChuoi = chuoi(item);
            return `
        <div id="child">
            <div id="banner">
            <img id="img" src="${item.image}" alt="">
            <button class="public_button">Published</button>
        </div>


        <div id="content">
            <h3 class="title">${item.title}</h3>
           <div class="decribe">
               <p class="decribe_content">${item.content}</p>
           </div>
        </div>


        <div id="footer">
            <div id="tag">
                <a class="link_url" href="">link url</a>
                <ul>
                    <li class="slug">slug : ${item.slug} </li>
                    <li class="category">category : ${item.category}</li>
                </ul>
            </div>

            <div id="time">
             <p>published At : ${item.updatedAt}</p>
             <p>updated At : ${item.publishedAt} </p>
            </div>
            </div>
        </div>`
            });

     container.innerHTML = childs.join("");
    
    // console.log(container)
    }).catch(function(err){
    console.log("loi", err)
    }).finally(function() {
    console.log("finally")
    })