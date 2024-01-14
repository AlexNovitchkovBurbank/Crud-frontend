import axios from "axios";

const PostUserRecordSender = {
  async Send(uuid: string, name: string) {
    const urlencoded = new URLSearchParams();

    urlencoded.append("guidIdAsString", uuid);
    urlencoded.append("name", name);

    const axiosResponse = await axios
      .post("http://localhost:5020/Home/PostUserRecord", urlencoded, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      return axiosResponse.data.value;
  },
};

export default PostUserRecordSender;
