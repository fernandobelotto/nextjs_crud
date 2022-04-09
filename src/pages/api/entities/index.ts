import dbConnect from "../../../backend/database/dbConnect";
import Entity from "../../../backend/models/Entity";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const entitys = await Entity.find({});
        res.status(200).json({ success: true, data: entitys });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const entity = await Entity.create(
          req.body
        );
        res.status(201).json({ success: true, data: entity });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
