import { useMutation } from "@tanstack/react-query";
import { TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

const useImageUpload = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post(`/${TENANT_ID}/images/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },
  });
};

export default useImageUpload;
