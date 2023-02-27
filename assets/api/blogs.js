
db.collection('blogs').get().then((data) =>{
    data.forEach((blogData) =>{
        console.log(blogData.data());

        $('#blogs').append(`
        <div class="blog">
            <div class="blogTitle">
                <h5>${blogData.data().blogTitle}</h5>
                <p>${blogData.data().blogDescription.slice(0,60)}....</p>
                <a href="../../blog-detail.html?id=${blogData.data().docId}">View Detail</a>
            </div>
        </div>
        `)
    })
})