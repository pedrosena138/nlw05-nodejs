import { Router } from "express";
import SettingsController from "@controllers/SettingsController";

const router = Router();
const settingController = new SettingsController();

router.get("/online", (req, res) => {
  const date = new Date();
  return res.status(200).json(date);
});

/*Settings*/
router.post("/settings", settingController.create);

export default router;
