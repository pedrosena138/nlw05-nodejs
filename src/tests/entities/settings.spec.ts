import {
  createConnection,
  getConnection,
  Entity,
  getRepository,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Settings from "@entities/Settings";

@Entity("settings")
export default class SettingsMock extends Settings {}

beforeEach(() => {
  return createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [SettingsMock],
    synchronize: true,
    logging: false,
  });
});

afterEach(() => {
  let conn = getConnection();
  return conn.close();
});

test("store 'admin' and fetch it", async () => {
  const id = uuid();
  await getRepository(SettingsMock).insert({
    id,
    chat: true,
    username: "admin",
  });

  const query = await getRepository(SettingsMock).findOne({
    where: {
      id,
    },
  });
  expect(query.username).toBe("admin");
});

test("store 'another' and fetch it", async () => {
  const id = uuid();
  await getRepository(SettingsMock).insert({
    id,
    chat: true,
    username: "another",
  });

  const query = await getRepository(SettingsMock).findOne({
    where: {
      id,
    },
  });
  expect(query.username).toBe("another");
});
