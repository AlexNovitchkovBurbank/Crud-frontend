import GetByUserIdMapper from "../../Mappers/GetByUserIdMapper";
import { v4 as uuidv4 } from "uuid";

it("Should map Json string to Json object successfully", () => {
  let jsonObject = {
    id: uuidv4(),
    name: "Caleb",
  };

  let jsonString = JSON.stringify(jsonObject);

  const actualRecord = GetByUserIdMapper.MapJsonStringToJsonObject(jsonString);

  expect(actualRecord).toHaveProperty("id", jsonObject.id);
  expect(actualRecord).toHaveProperty("name", jsonObject.name);
});

it("Should map from Json object to Record successfully with 1 record", () => {
  let jsonObject = {
    id: uuidv4(),
    name: "Caleb",
  };

  const actualRecord = GetByUserIdMapper.MapJsonObjectToRecord(jsonObject);

  expect(actualRecord.id).toBe(jsonObject.id);
  expect(actualRecord.name).toBe(jsonObject.name);
});

it("No id", () => {
  let jsonObject = {
    name: "Caleb",
  };

  expect(() => GetByUserIdMapper.MapJsonObjectToRecord(jsonObject)).toThrow(
    Error
  );
  expect(() => GetByUserIdMapper.MapJsonObjectToRecord(jsonObject)).toThrow(
    "No id provided"
  );
});

it("No name", () => {
  let jsonObject = {
    id: uuidv4(),
  };

  expect(() => GetByUserIdMapper.MapJsonObjectToRecord(jsonObject)).toThrow(
    Error
  );
  expect(() => GetByUserIdMapper.MapJsonObjectToRecord(jsonObject)).toThrow(
    "No name provided"
  );
});
