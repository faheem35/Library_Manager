import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

//saveBookAPI- post http request , add component

export const saveBookAPI=async(bookDetails)=>{
        return await  commonAPI(`POST`,`${serverURL}/uploadVideos`,bookDetails)
}

//getAllBooksAPI- get http request, view component, when component displayed in browser inside its useEffect Hook
export const getAllBooksAPI=async ()=>{
          return await commonAPI(`GET`,`${serverURL}/uploadVideos`,"")
   }
   

   //removeBookAPI - delete method to http://localhost:3000/uploadVideos/id called by videoCard when clicked on delete button
export const removeBookAPI=async(id)=>{
        return await commonAPI(`DELETE`,`${serverURL}/uploadVideos/${id}`,{})
 }

    //updateBookAPI - update method to http://localhost:3000/uploadVideos/id called by videoCard when clicked on save changes button in the edit button
 export const updateBookAPI = async (id, updatedData) => {
        return await commonAPI("PUT", `${serverURL}/uploadVideos/${id}`, updatedData);
      };
      