import axios from "axios";

export const uploadCloudinary = async (file) =>  {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'lvwslvwx')
  const { data } = await axios.post('https://api.cloudinary.com/v1_1/dedww1zza/image/upload', formData)
  return { publicId: data?.publicId, url: data?.secure_url}
}