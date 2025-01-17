import serverUrl from "./serverUrl";
import commonAPI from "./commonAPI";

export const saveVideo = async (videoDetails) => {
    return await commonAPI("POST", `${serverUrl}/uploadVideo`,videoDetails)
}

export const getAllvideoApi = async () => {
    return await commonAPI("GET", `${serverUrl}/uploadVideo`)
}

export const saveHistory = async (historyDetails) => {
    return await commonAPI("POST", `${serverUrl}/history`,historyDetails


    )
}

export const getAllHistoryApi = async () => {
    return await commonAPI("GET", `${serverUrl}/history`)
}

export const removeHistoryApi = async (id) => {
    return await commonAPI("DELETE", `${serverUrl}/history/${id}`)
}

export const removeVideoApi = async (id) => {
    return await commonAPI("DELETE", `${serverUrl}/uploadVideo/${id}`)
}

export const saveCategoryApi = async (categoryDetails) => {
    return await commonAPI("POST", `${serverUrl}/category`,categoryDetails)
}

export const getAllCategoryApi = async () => {
    return await commonAPI("GET", `${serverUrl}/category`)
}

export const removeCategory = async (id) => {
    return await commonAPI("DELETE", `${serverUrl}/category/${id}`)
}

export const updateCategoryApi = async (categoryDetails) => {
    return await commonAPI("PUT", `${serverUrl}/category/${categoryDetails?.id}`,categoryDetails)
}
