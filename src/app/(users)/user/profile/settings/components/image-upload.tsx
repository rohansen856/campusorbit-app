"use client"

import { useRouter } from "next/navigation"
import axios from "axios"

import { UploadButton } from "@/lib/uploadthing"
import { toast } from "@/components/ui/use-toast"

export function ImageUploader() {
  const router = useRouter()
  async function saveUpload(key: string) {
    try {
      const res = await axios.post("/api/users/image", { key })
      if (res.status !== 204) {
        return toast({
          title: "Failed to upload",
          description: "There was an error updating your image",
          variant: "destructive",
        })
      }
      toast({
        title: "Success",
        description: "Your image was uploaded successfully",
        variant: "default",
      })
      return router.refresh()
    } catch (error) {
      console.log(error)
      return toast({
        title: "Failed to upload",
        description: "There was an error in the server",
        variant: "destructive",
      })
    }
  }
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res[0])
        saveUpload(res[0].key)

        alert("Upload Completed")
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`)
      }}
    />
  )
}
