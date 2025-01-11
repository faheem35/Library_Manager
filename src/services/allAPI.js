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
      

      //saveHistoryAPI-post http method to http://localhost:3000/history called by videocard when we click on video.
export const saveHistoryAPI=async (historyDetails)=>{
        return await commonAPI(`POST`,`${serverURL}/history`,historyDetails)
 }

 //getAllHistoryAPI- get http method to http://localhost:3000/history called by history componnet when it open in browser
export const getAllHistoryAPI=async ()=>{
        return await commonAPI(`GET`,`${serverURL}/history`,"")
 }


 //deleteHistoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button
export const deleteHistoryAPI=async(id)=>{
        return await commonAPI(`DELETE`,`${serverURL}/history/${id}`,{})
 }