import axios from "axios";

const presetName = import.meta.env.VITE_PRESET_NAME;
const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL;


export const uploadCloudinary = async (file) =>  {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', presetName)
  const { data } = await axios.post(cloudinaryUrl, formData)
  return { publicId: data?.publicId, url: data?.secure_url}
}