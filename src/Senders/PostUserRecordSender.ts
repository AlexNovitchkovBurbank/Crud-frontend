import axios from "axios";

const PostUserRecordSender = {
  Send(name: string): string {
    let responseData = "";

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);

    axios
      .post("http://localhost:5020/Home/PostUserRecord", urlencoded, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        responseData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return responseData;
  },
};

export default PostUserRecordSender;
