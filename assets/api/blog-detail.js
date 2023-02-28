let urlParam = new URLSearchParams(window.location.search);

let myParam = urlParam.get('id');

console.log(myParam);

db.collection('blogs').doc(myParam).get().then((blogData) => {
    console.log(blogData.data());
    $("#myBlog").append(`
     <div class="blog">
    <div class="blogTitle">
        <h5>${blogData.data().blogTitle}</h5>
        <p>${blogData.data().blogDescription}</p>
    </div>
</div>
    `)
}).catch((err) => {
    window.alert(err.message)
});

