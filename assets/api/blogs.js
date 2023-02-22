
db.collection('blogs').get().then((data) =>{
    data.forEach((blogData) =>{
        console.log(blogData.data());

        $('#blogs').append(`
        <div class="blog">
            <div class="blogTitle">
                <h5>${blogData.data().blogTitle}</h5>
                <p>${blogData.data().blogDescription}</p>
            </div>
        </div>
        `)
    })
})