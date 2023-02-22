let myUID = localStorage.getItem('userId');

console.log(myUID);


function addBlog() {
    let blogTitle = document.getElementById("blogTitle").value;
    let blogDescription = document.getElementById("blogDescription").value;

    if (blogTitle == "" || blogDescription == "") {
        window.alert("enter all fields")

    }else{
        let blogRef = db.collection('blogs').doc();

        let data ={
            blogTitle: blogTitle,
            blogDescription: blogDescription,
            userId: myUID,
            docId: blogRef.id

        }

        blogRef.set(data).then(() =>{
            window.alert('Blog Added Successfully');
            window.location.reload();
            
        })
    }

}