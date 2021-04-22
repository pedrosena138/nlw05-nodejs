import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SettingsRepository from "@repositories/SettingsRepository";

export default class SettingsController {
  async create(req: Request, res: Response) {
    const settingsRepository = getCustomRepository(SettingsRepository);
    const { chat, username } = req.body;

    try {
      const settings = settingsRepository.create({
        chat,
        username,
      });

      await settingsRepository.save(settings);

      return res.status(201).json(settings);
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error");
    }
  }
}
