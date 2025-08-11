import { useMutation } from "@tanstack/react-query";
import { TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

const useImageUpload = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      // // 영어 파일명만 가능
      // const filename = file.name.split(".").slice(0, -1).join(".");
      // const engOnlyRegex = /^[a-zA-Z]+$/;
      // if (!engOnlyRegex.test(filename))
      //   throw new Error("파일 이름은 영어로만 이루어져야 합니다.");

      // // 파일 크기 제한
      // const MAX_SIZE = 5 * 1024 * 1024;
      // if (file.size > MAX_SIZE)
      //   throw new Error("파일 크기는 5MB 이하여야 합니다.");

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
