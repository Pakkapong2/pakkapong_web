import http from "../http-common";

const baseUrl = "/posts"

const get = () =>{
    return http.get(baseUrl);
}

const create = (data) =>{
    return http.post(baseUrl, data)
}

const comment = (postId, data) =>{
    return http.post(`${baseUrl}/${postId}/comments`,data);
}

const PostService = {
    get,
    create,
    comment
} 

export default PostService