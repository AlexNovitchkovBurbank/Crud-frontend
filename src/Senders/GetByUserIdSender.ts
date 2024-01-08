import axios from "axios";

const GetByUserIdSender = {
  async Send(id: string) {
    const axiosResponse = await axios
      .get(
        `http://localhost:5020/ByIdRecordGetter/GetByUserId?userIdGuid=${id.toString()}`
      );

      return axiosResponse.data.value;
  },
};

export default GetByUserIdSender;
