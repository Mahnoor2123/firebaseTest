

let myUid = localStorage.getItem('userId');

console.log(myUid);


db.collection('blogs').where('userId', '==' , myUid).get().then((data) =>{
    data.forEach((blogData) =>{
        console.log(blogData.data());

        $("#myBlog").append(`
        <div class="blog">
        <div class="blogTitle">
            <h5>${blogData.data().blogTitle}</h5>
            <p>${blogData.data().blogDescription}</p>
        </div>
    </div> 
        
        `)
    })
})