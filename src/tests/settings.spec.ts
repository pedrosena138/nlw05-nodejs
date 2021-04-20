import SettingsRepository from "@repositories/SettingsRepository";
import { getCustomRepository } from "typeorm";

test("it should be ok", async () => {
  const settingsRepository = getCustomRepository(SettingsRepository);
  const settings = settingsRepository.create({
    chat: true,
    username: "Pedro",
  });

  await settingsRepository.save(settings);

  expect(settings.username).toEqual("Pedro");
});
