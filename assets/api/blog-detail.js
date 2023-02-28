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

    $('#blogTitle').val(blogData.data().blogTitle);
    $("#blogDescription").val(blogData.data().blogDescription);


}).catch((err) => {
    window.alert(err.message)
});




function editBlog() {
    let updatedBlogTitle = $('#blogTitle').val();
    let updatedBlogDescription = $('#blogDescription').val();
    if (updatedBlogTitle == "" || updatedBlogDescription == "") {
        window.alert("fill all fields")
    } else {

        db.collection('blogs').doc(myParam).update({
            blogTitle: updatedBlogTitle,
            blogDescription: updatedBlogDescription
        }).then(() => {
            window.alert('Updated Successfully');
            window.location.reload()
        }).catch((err) => {

        });
    }



}
function deleteBlog(){
    db.collection('blogs').doc(myParam).delete().then(()=>{
        window.alert('Delete Successfully');
        window.location.href= '../../home.html'
    })
}