########################################################################

Authorization:
    Sign Up  (Put this in a function):
const url = 'http://localhost:3001/auth/signup';
const options = {
    method: 'POST',
    body:{
        username:`${userName}`,
        email:`${email}`,
        password:`${password}`
    }
}
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}


    Login   (Put this in a function):

const url = 'http://localhost:3001/auth/login';
const options = {
    method: 'POST',
    body:{
        username:`${userName}`,
        email:`${email}`,
        password:`${password}`
    }
}
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}


This function will provide a token use this token 

const url = 'http://localhost:3001/auth/events';
const options = {
    method : 'GET',
    headers:{
        Authorization : `${token}`
    }
}

try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}

Now this function will provide you userName and authenticate the user


#############################################################

Posts:
    Posting an image

    check App.js for more information for img uploadation

const url = 'http://localhost:3001/posts/Posts';
const options = {
    method: 'POST',
    body : {
        userName : `${userName}`,
        postTitle: " Get Title from input",
        mint : " Add some checkbox or something to tell true or false",
        img : 

    }
} 
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}

    Retrieving images:

const url = 'http://localhost:3001/posts/Posts';
const options = {
    method: 'GET'
} 
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}


    Add a Comment to a Post:

const url = 'http://localhost:3001/posts/Posts/:postId/comments';
const options = {
    method: 'POST',
    params:{
        postId:`${postId}`
    }
    body : {
        userName : `${userName}`,
        text : " Get Text from input",
    }
} 
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}


   Get postId:

const url = 'http://localhost:3001/posts/getPostId';
const options = {
    method: 'GET',
    body:{
        userName : `${userName}`,
        postTitle: " Get Title from input",
        mint : " Add some checkbox or something to tell true or false",
        like : Get it from frontend too
    }

} 
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}


   Get all the comments of a Post:


const url = 'http://localhost:3001/posts/Posts/:postId/comments';
const options = {
    method: 'GET',
    params:{
        postId:`${postId}`
    }

} 
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}

    To like a post:

const url = 'http://localhost:3001/posts/Posts/:postId/like';
const options = {
    method: 'PUT',
    params:{
        postId:`${postId}`
    }
} 
try{
    const response = await fetch(url,options);
    console.log(response);
}
catch(error){
    console.log(error)
}








