import  express, { response }  from "express";
import * as dotenv from 'dotenv';
import { Configuration,OpenAIApi } from "openai";

dotenv.config()

const router= express.Router()

const config= new Configuration({
    apiKey: process.env.api_key
})
const openai=new OpenAIApi(config)
router.route("/").get((req,res)=>{
})

router.route('/').post(async(req,res)=>{

    try{
        const {prompt}=req.body
        response= await openai.createImage({
            prompt,
            n:1,
            response_format:"b64_json"
        });
        console.log(prompt);
        const image= response.data.data[0].b64_json
        res.status(200).json({photo: image})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
})

export default router