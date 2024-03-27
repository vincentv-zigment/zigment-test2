import axios from "axios";
import { BlogI } from "../types/blog";

export const blogData = async (): Promise<BlogI[]> => {
    try {
        const getData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cms/blog-list`);
        const blogData = getData.data;

        return blogData
        
    }
    catch (err) {
        return []
    }
}



export const getMarkdownDataForBlog = async (slug: string): Promise<string> => {
    try {
        const getData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cms/blog/${slug}`);
        const blogData = getData.data;

        return blogData.markdown ?? ""
    }
    catch (err) {
        console.log(err)
        return ""
    }
}
