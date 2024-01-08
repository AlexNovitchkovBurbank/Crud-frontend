import Record from "../DataModels/Record";

const GetByUserIdMapper = {
  MapJsonStringToJsonObject(jsonString: string): object {
    const jsonObject = JSON.parse(jsonString);

    return jsonObject;
  },

  MapJsonObjectToRecord(jsonObject: object): Record {
    let id;
    let name;

    if (!("id" in jsonObject)) {
      throw new Error("No id provided");
    } else {
      id = String(jsonObject["id"]);
    }

    if (!("name" in jsonObject)) {
      throw new Error("No name provided");
    } else {
      name = String(jsonObject["name"]);
    }

    const record = new Record(id, name);

    return record;
  },
};

export default GetByUserIdMapper;
