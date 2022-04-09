import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../backend/database/dbConnect";
import Entity from "../../../backend/models/Entity";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const entity = await Entity.findById(id);
        if (!entity) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: entity });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const entity = await Entity.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!entity) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: entity });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedEntity = await Entity.deleteOne({ _id: id });
        if (!deletedEntity) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
